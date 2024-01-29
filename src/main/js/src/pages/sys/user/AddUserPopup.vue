<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import Popup from "@/components/popup/PopupBase.vue";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo } from "@/util/combo";
import { showAlert, showConfirm, useModalContext } from "@/util/popup";
import { isEmpty } from "@/util/string";
import { validator } from "@/util/data/validate";
import { validatePassword } from "@/util/password";

// 화면의 파라미터 정의
const props = defineProps({
    userId: String
});

// 이 팝업의 모달 컨텍스트를 가져온다.
const modal = useModalContext();
// 메시지를 사용한다.
const message = useMessageStore();

/**
 * 입력 폼이 연결될 HTML 노드
 * @type {import("vue").Ref<HTMLElement>}
 */
const formElement = ref();
/** @type {dhx.Form} */
let form;

// 컴포넌트가 DOM에 표시될 때 실행된다.
onMounted(async () => {
    const { useYnCombo } = await getCombo();

    form = new dhx.Form(formElement.value, {
        css: "jn-form",
        padding: 0,
        rows: [
            { name: "rowStatus", hidden: true, value: "inserted" },
            { name: "userId", type: "input", width: 320, label: "ID", labelPosition: "left", labelWidth: 110, hidden: true },
            { name: "memberId", type: "input", width: 320, label: "회원ID", labelPosition: "left", labelWidth: 110 },
            { name: "userNmKr", type: "input", width: 320, label: "이름", labelPosition: "left", labelWidth: 110 },
            { name: "origPasswd", hidden: true },
            { name: "passwd", type: "input", width: 320, label: "비밀번호", labelPosition: "left", labelWidth: 110, inputType: "password", autocomplete: false },
            { name: "passwdCheck", type: "input", width: 320, label: "비밀번호 확인", labelPosition: "left", labelWidth: 110, inputType: "password", autocomplete: false },
            { name: "telNo", type: "input", width: 320, label: "연락처", labelPosition: "left", labelWidth: 110 },
            { name: "emailAddr", type: "input", width: 320, label: "E-mail", labelPosition: "left", labelWidth: 110 },
            { name: "jobPosition", type: "input", width: 320, label: "직위", labelPosition: "left", labelWidth: 110 },
            { name: "useYn", type: "combo", width: 320, label: "사용여부", labelPosition: "left", labelWidth: 110, value: "Y", data: useYnCombo, readOnly: true },
        ]
    });

    form.getItem("telNo").events.on("input", value => {
        form.getItem("telNo").setValue(formatTelno(value));
    });

    if (!isEmpty(props.userId)) {
        await search();
        form.setProperties({
            memberId: {
                readOnly: true
            },
            emailAddr: {
                readOnly: true
            }
        });
    }
});

// 컴포넌트가 더 이상 표시되지 않고 DOM에서 사라질 때 실행된다.
onUnmounted(() => {
    form?.destructor();
});

async function getCombo() {
    const { useYnCombo } = await getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"]
    });

    return {
        useYnCombo
    };
}

async function search() {
    const data = await postData("sm/getUserManageItem.do", {
        dsUserManage: {
            userId: props.userId
        }
    });

    form.setValue({ ...data.dsUserManage[0], rowStatus: "updated" });
}

async function save() {
    if (!validate()) {
        return;
    }

    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!result)
        return;

    const dsUserManage = form.getValue();
    if (isEmpty(props.userId)) {
        dsUserManage.rowStatus = "inserted";
    } else {
        dsUserManage.rowStatus = "updated";
    }

    const data = await postData("sm/setUserManageItem.do", {
        dsUserManage
    });

    if (data.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        modal.close();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

function closePopup() {
    modal.close();
}

/*
 * 입력값 검사
 */

/**
 * 입력값이 올바른지 검사한다.
 */
function validate() {
    const formData = form.getValue();
    const memberId = formData.memberId;
    const val = validator([formData])
        .column("memberId", "회원 ID", [["required"], ["lengthBetween", 4, 20]])
        .column("userNmKr", "이름", [["required"], ["maxLength", 20]])
        .column("emailAddr", "이메일", [["maxLength", 254]]);

    if (formData.rowStatus === "inserted") {
        val.column("passwd", "비밀번호", [["required"], ["lengthBetween", 8, 72]])
            .column("passwdCheck", "비밀번호 확인", [["required"], ["lengthBetween", 8, 72]]);
    } else if (formData.rowStatus === "updated" && !isEmpty(formData.passwd)) {
        val.column("passwd", "비밀번호", [["lengthBetween", 72, 8]])
            .column("passwdCheck", "비밀번호 확인", [["required"], ["lengthBetween", 8, 72]]);
    }

    if (!val.validate()) {
        return false;
    }

    if (!/^[\da-z]+$/.test(memberId)) {
        showAlert("사용할 수 없는 ID입니다.");
        return false;
    }

    if (!isEmpty(formData.passwd)) {
        if (!checkPassword(formData.passwd)) {
            return false;
        }

        if (formData.passwd !== formData.passwdCheck) {
            showAlert("비밀번호 확인에 입력한 비밀번호가 일치하지 않습니다.");
            return false;
        }
    }

    if (!isEmpty(formData.emailAddr) && !checkEmail(formData.emailAddr)) {
        showAlert("이메일 주소의 형식이 올바르지 않습니다.");
        return false;
    }

    if (!isEmpty(formData.phoneNo)) {
        const phoneNo = formData.phoneNo.replace(/-/g, "");
        if (!/^(0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})$/.test(phoneNo)) {
            showAlert("휴대전화 번호가 올바르지 않습니다.");
            return false;
        }
    }

    return true;
}

/**
 * 비밀번호의 유효성을 검사한다.
 *
 * @param {string} password
 * @returns {boolean}
 */
function checkPassword(password) {
    const result = validatePassword(password, ["lower", "upper", "digit", "symbol"], []);
    if (!result.passed) {
        showAlert(result.message);
    }

    return result.passed;
}

/**
 * 이메일 주소의 유효성을 검사한다.
 * @param {string} email
 * @returns {boolean}
 */
function checkEmail(email) {
    // from RFC 5322 section 3.4.2:
    // addr-spec      = local-part "@" domain
    // local-part     = dot-atom / quoated-string / obs-local-part
    // domain         = dot-atom / domain-liteeral / obs-domain
    // domain-literal = [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]

    // RFC 2821의 SMTP 메시지 제약으로 인해 주소가 254자를 넘을 수 없다.
    if (isEmpty(email) || email.length > 254) {
        return false;
    }

    // Local part의 quoted-string과 comment, 도메인 자리의 IP 주소, 각 파트의 코멘트는 이번 구현에서 배제
    // Local part에 사용 가능한 문자: 영문자, 숫자, !#$%&'*+-/=?^_`{|}~, .
    // 도메인의 각 파트는 .으로 구분되고, 영문자, 숫자(최상위 레벨 제외), - 사용 가능
    // Local part의 최대 길이: 64바이트, 도메인 각 파트의 최대 길이: 63바이트
    const regex = /^([\da-zA-Z!#$%&'*+\-/=?^_`{|}~]{1,64})@((?:[a-zA-Z\d-]{1,63}\.)*[a-zA-Z-]{1,63})$/;
    const matches = regex.exec(email);

    // 파트별 사용 가능한 문자의 예외 경우를 고려하지 않았을 때도 형식에 맞지 않으면 false
    if (matches == null) {
        return false;
    }

    const localPart = matches[1];
    const domain = matches[2];

    // Local part에 '.'이 맨 앞/뒤에 있거나 연속으로 나올 수 없음
    if (localPart.startsWith(".") || localPart.endsWith(".") == "." || /\.\./.test(localPart)) {
        return false;
    }

    // 도메인 각 파트의 시작과 끝은 '-'일 수 없음
    const domainParts = domain.split(".");
    return !domainParts.some(part => part.startsWith("-") || part.endsWith("-"));
}

function formatTelno(input) {
    if (isEmpty(input)) {
        return "";
    }

    const regex = /^(?:(1[568]\d{2})|(010)(\d{4})?|(0(?:2|[13-9]\d))(\d{3,4}?)?)(\d{0,4}?)$/;
    const i = input.replace(/(-|[^\d])/g, '');
    const match = regex.exec(i);

    console.log({ input, i, match });

    if (match == null) {
        return i;
    } else {
        return Array.from(match).slice(1)
            .filter(s => !isEmpty(s))
            .join('-');
    }
}

</script>
<template>
    <popup>
        <template v-slot:title>
            사용자 등록
        </template>

        <div class="jn-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">사용자 정보</h2>
            </div>
            <div ref="formElement"></div>
            <div class="jn-btn-group" style="margin-top: 25px; justify-content: center;">
                <button class="jn-btn-save icon-save" @click="save()">저장</button>
                <button @click="closePopup()">닫기</button>
            </div>
        </div>
    </popup>
</template>
