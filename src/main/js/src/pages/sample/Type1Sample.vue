<script setup lang="js">
/**
 * @file
 * @author parksw
 * @since  2023.12.08
 * @description 타입 2 샘플
 * 메뉴:   -
 * 파일명: src/pages/sam/Type2Sample.vue
 *
 * 소스 수정 이력
 * --------------
 *
 * 일시        | 수정자     | 설명
 * -----------------------------------------------------
 * 2023.12.08  | parksw     | 최초 생성
 */

// 사용할 함수/클래스/상수 등을 다른 모듈에서 import
import dhx from "dhx-suite-package";
import { ref, defineProps, onMounted, onUnmounted } from "vue";
import { getCommonCodeCombo } from "@/util/combo";
import { useMessageStore } from "@/stores/message";
import { validator } from "@/util/data/validate";
import { showAlert, showConfirm } from "@/util/popup";
import { isEmpty } from "@/util/string";
import { postData } from "@/util/ajax";
import { validatePassword } from "@/util/password";

// 화면에 파라미터가 필요한 경우, defineProps를 사용하여 목록을 정의한다.
const props = defineProps(["userId"]);

// 메시지를 사용한다.
const message = useMessageStore();

/**
 * 입력 폼이 삽입될 div를 담고 있는 ref 객체
 *
 * @type {import("vue").Ref<HTMLElement>}
 */
const formElement = ref();

/**
 * 입력 폼
 *
 * @type {import("dhx-suite-package").Form}
 */
let form;

// 라이프사이클 이벤트

// 화면에 로드될 때
onMounted(async () => {
    // 콤보박스 목록을 조회한다.
    const { useYnCombo } = await getCombo();

    // 입력 폼을 초기화한다.
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

    // 폼에 이벤트를 설정한다.

    form.events.on("change", (name, value) => {
        if (name === "telNo") {
            form.getItem("telNo").setValue(formatTelno(value));
        }
    });

    form.getItem("telNo").events.on("input", value => {
        form.getItem("telNo").setValue(formatTelno(value));
    });

    // 화면 파라미터로 사용자 ID를 받은 경우, 사용자 정보를 조회한다.
    if (!isEmpty(props.userId)) {
        await search(props.userId);
        setModify();
    }
});

// 언로드될 떄
onUnmounted(() => {
    form?.destructor();     // 폼을 제거한다.
});

// 콤보박스 조회
/**
 * 콤보박스를 조회한다.
 */
async function getCombo() {
    const { useYnCombo } = await getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"]
    });

    return {
        useYnCombo
    };
}

// 조회
/**
 * 사용자 정보를 조회한다.
 *
 * @param {string} userId 조회할 사용자의 ID
 */
async function search(userId) {
    const data = await postData("sam/type1/getUser.do", {
        dsUserManage: {
            userId: userId
        }
    });

    form.setValue({ ...data.dsUserManage[0], rowStatus: "updated" });
}

// 입력값 검증
/**
 * 입력값이 올바른지 검사한다.
 *
 * @returns {boolean}
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
 *
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

// 저장
/**
 * 사용자 정보를 저장한다.
 */
async function save() {
    // 입력값을 검사한다.
    if (!validate()) {
        return;
    }

    // 저장 여부를 확인한다.
    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!result) {
        return;
    }

    const dsUserManage = form.getValue();
    if (isEmpty(dsUserManage.userId)) {
        dsUserManage.rowStatus = "inserted";
    } else {
        dsUserManage.rowStatus = "updated";
    }

    const data = await postData("sam/type1/setUser.do", {
        dsUserManage
    });

    if (data.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        await search(data.userId);  // 저장된 사용자를 조회한다.
        setModify();
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

// 기타

/**
 * 폼을 수정 상태로 변경한다. 회원 ID와 이메일이 비활성화된다.
 */
function setModify() {
    form.setProperties({
        memberId: {
            readOnly: true
        },
        emailAddr: {
            readOnly: true
        }
    });
}

/**
 * 전화번호를 포맷한다.
 * @param {string} input 입력된 전화번호
 */
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
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">Type 1 샘플</h1>
            <div class="jn-btn-group">
                <button class="jn-btn-save" @click="save()">저장</button>
            </div>
        </div>

        <div class="jn-container" style="height: calc(100% - 177px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">사용자 정보</h2>
            </div>
            <div ref="formElement"></div>
        </div>
    </div>
</template>
