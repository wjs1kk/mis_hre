<script setup lang="js">
import dhx from "dhx-suite-package";
import PortalPageLayout from "@/layout/PortalPageLayout.vue";
import { onMounted, onUnmounted, ref } from "vue";
import { getCommonCodeCombo, toSelectOptions } from "@/util/combo";
import { postData } from "@/util/ajax";
import { openModal, showAddressSearchPopup, showAlert, showConfirm } from "@/util/popup";
import { isEmpty, lpad } from "@/util/string";
import { useMessageStore } from "@/stores/message";
import { validator } from "@/util/data/validate";
import { useRouter } from "vue-router";
import PasswordCheckPopup from "./PasswordCheckPopup.vue";
import ChangePasswordPopup from "./ChangePasswordPopup.vue";
import ConfirmWithdrawPopup from "./ConfirmWithdrawPopup.vue";

const message = useMessageStore();
const router = useRouter();

/** @type {import("vue").Ref<HTMLElement>} */
const basicInfoFormElement = ref();
/** @type {import("vue").Ref<HTMLElement>} */
const additionalInfoFormElement = ref();

/** @type {import("dhx-suite-package").Form} */
let basicInfoForm;
/** @type {import("dhx-suite-package").Form} */
let additionalInfoForm;

/**
 * 인증 타이머 setInterval ID
 * @type {number}
 */
let timer = null;

/** 화면 로드 완료 후 실행되는 코드 */
onMounted(async () => {
    const { emailCombo } = await getCombo();

    basicInfoForm = new dhx.Form(basicInfoFormElement.value, {
        css: "jn-form",
        padding: 0,
        width: "100%",
        rows: [
            {
                height: 51,
                cols: [
                    { name: "memberId", type: "input", width: 360, label: "아이디", labelPosition: "left", labelWidth: 210, readOnly: true },
                    { name: "userId", type: "input", hidden: true }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "memberNmKr", type: "input", width: 360, label: "이름", labelPosition: "left", labelWidth: 210, required: true },
                ]
            },
            {
                height: 51,
                cols: [
                    { type: "text", value: "", width: 220, label: "비밀번호", labelWidth: 210 },
                    { id: "changePasswdBtn", type: "button", inputType: "password", width: 360, value: "비밀번호 변경", label: "비밀번호", labelPosition: "left", labelWidth: 210 },
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "emlAddrLocal", type: "input", width: 360, label: "이메일", labelPosition: "left", labelWidth: 210, required: true },
                    { name: "emlAddrDomain", type: "input", width: 118, label: "@", labelPosition: "left", labelWidth: 8 },
                    { id: "emlAddrDomainCombo", type: "select", width: 110, label: "", labelPosition: "left", labelWidth: 0, options: toSelectOptions(emailCombo) },
                    { id: "verifyEmlBtn", width: 96, type: "button", value: "인증요청" },
                ]
            },
            {
                id: "emailVerifiactionRow",
                height: 51,
                cols: [
                    { name: "verificationCode", type: "input", width: 360, label: "인증번호", labelPosition: "left", labelWidth: 210, required: true, hidden: true },
                    { id: "checkVerificationCodeBtn", width: 120, type: "button", value: "인증번호 확인", hidden: true },
                    { id: "verificationTimer", type: "text", value: "", hidden: true },
                    { name: "verificationRqstId", type: "input", hidden: true },
                    { name: "emailVerified", type: "input", value: "N", hidden: true },
                    { name: "oldEmlAddr", type: "input", hidden: true }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "mblTelno", type: "input", width: 360, label: "휴대전화", labelPosition: "left", labelWidth: 210, required: true }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "mbrZip", type: "input", width: 360, label: "주소", labelPosition: "left", labelWidth: 210, required: true, readOnly: true },
                    { id: "mbrZipBtn", width: 96, type: "button", value: "주소검색" }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "mbrAddr", type: "input", width: 610, label: "", labelPosition: "left", labelWidth: 210, required: true, readOnly: true }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "mbrDaddr", type: "input", width: 610, label: "", labelPosition: "left", labelWidth: 210 }
                ]
            }
        ]
    });

    additionalInfoForm = new dhx.Form(additionalInfoFormElement.value, {
        css: "jn-form",
        padding: 0,
        width: "100%",
        rows: [
            {
                height: 51,
                cols: [
                    { name: "ogdpInstNm", type: "input", width: 360, label: "업체/기관명", labelPosition: "left", labelWidth: 210 }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "ogdpDeptNm", type: "input", width: 360, label: "부서", labelPosition: "left", labelWidth: 210 }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "jbpsNm", type: "input", width: 360, label: "직위", labelPosition: "left", labelWidth: 210 }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "ofcTelno", type: "input", width: 360, label: "사무실연락처", labelPosition: "left", labelWidth: 210, validation: value => isEmpty(value) || validateTelno(value) }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "ofcFxno", type: "input", width: 360, label: "사무실팩스번호", labelPosition: "left", labelWidth: 210, validation: value => isEmpty(value) || validateTelno(value) }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "ofcZip", type: "input", width: 360, label: "사무실 주소", labelPosition: "left", labelWidth: 210, readOnly: true },
                    { id: "ofcZipBtn", width: 96, type: "button", value: "주소검색" }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "ofcAddr", type: "input", width: 610, label: "", labelPosition: "left", labelWidth: 210, readOnly: true }
                ]
            },
            {
                height: 51,
                cols: [
                    { name: "ofcDaddr", type: "input", width: 610, label: "", labelPosition: "left", labelWidth: 210 }
                ]
            }
        ]
    });

    basicInfoForm.events.on("change", (name, value) => {
        if (name === "emlAddrDomainCombo") {
            /** @type {import("dhx-suite-package/codebase/types/ts-form/sources/elements/input").IInput} */
            const input = basicInfoForm.getItem("emlAddrDomain");
            if (isEmpty(value)) {
                input.enable();
            } else {
                input.disable();
                input.setValue(value);
            }
        } else if (name === "mblTelno") {
            basicInfoForm.getItem("mblTelno").setValue(formatTelno(value));
        }
    });

    basicInfoForm.events.on("afterValidate", name => {
        const item = basicInfoForm.getItem(name);
        if (typeof item.clearValidate === "function") {
            item.clearValidate();
        }
    });

    basicInfoForm.getItem("mblTelno").events.on("input", value => {
        basicInfoForm.getItem("mblTelno").setValue(formatTelno(value));
    });

    basicInfoForm.getItem("changePasswdBtn").events.on("click", () => {
        openModal(ChangePasswordPopup);
    });

    basicInfoForm.getItem("verifyEmlBtn").events.on("click", () => {
        requestEmaliVerification();
    });

    basicInfoForm.getItem("checkVerificationCodeBtn").events.on("click", () => {
        checkVerificationCode();
    });

    basicInfoForm.getItem("mbrZipBtn").events.on("click", async () => {
        await searchMbrAddr();
    });

    additionalInfoForm.events.on("change", (name, value) => {
        if (name === "ofcTelno" || name === "ofcFxno") {
            additionalInfoForm.getItem(name).setValue(formatTelno(value));
        }
    });

    additionalInfoForm.events.on("afterValidate", name => {
        const item = additionalInfoForm.getItem(name);
        if (typeof item.clearValidate === "function") {
            item.clearValidate();
        }
    });


    additionalInfoForm.getItem("ofcTelno").events.on("input", value => {
        additionalInfoForm.getItem("ofcTelno").setValue(formatTelno(value));
    });

    additionalInfoForm.getItem("ofcFxno").events.on("input", value => {
        additionalInfoForm.getItem("ofcFxno").setValue(formatTelno(value));
    });

    additionalInfoForm.getItem("ofcZipBtn").events.on("click", async () => {
        await searchOfcAddr();
    });

    await search();
});

/** 화면이 닫힐 때 실행되는 코드 */
onUnmounted(() => {
    basicInfoForm?.destructor();
    additionalInfoForm?.destructor();
});


/////////////////
// 사용자 함수 //
/////////////////

/**
 * 콤보 데이터를 로드한다.
 */
async function getCombo() {
    const { emailCombo } = await getCommonCodeCombo({
        emailCombo: ["MI", "EML_DOMAIN"]
    });
    emailCombo.splice(0, 0, { id: "", value: "직접 입력" });
    return {
        emailCombo
    };
}

/**
 * 회원 정보를 조회한다.
 */
async function search() {
    const data = await postData("mi/myPage/getMemberInfo.do");

    if (data.dsMemberInfo == null || data.dsMemberInfo.length == 0) {
        await showAlert("존재하지 않는 사용자입니다.");
        router.replace("/");
    }

    const dsMemberInfo = data.dsMemberInfo[0];

    basicInfoForm.setValue({
        userId: dsMemberInfo.userId,
        memberId: dsMemberInfo.memberId,
        memberNmKr: dsMemberInfo.memberNmKr,
        emlAddrLocal: dsMemberInfo.emlAddrLocal,
        emlAddrDomain: dsMemberInfo.emlAddrDomain,
        mblTelno: dsMemberInfo.mblTelno,
        mbrZip: dsMemberInfo.mbrZip,
        mbrAddr: dsMemberInfo.mbrAddr,
        mbrDaddr: dsMemberInfo.mbrDaddr,
        oldEmlAddr: dsMemberInfo.oldEmlAddr
    });

    additionalInfoForm.setValue({
        ogdpInstNm: dsMemberInfo.ogdpInstNm,
        ogdpDeptNm: dsMemberInfo.ogdpDeptNm,
        jbpsNm: dsMemberInfo.jbpsNm,
        ofcTelno: dsMemberInfo.ofcTelno,
        ofcFxno: dsMemberInfo.ofcFxno,
        ofcZip: dsMemberInfo.ofcZip,
        ofcAddr: dsMemberInfo.ofcAddr,
        ofcDaddr: dsMemberInfo.ofcDaddr
    });
}

// 이메일 인증

/**
 * 이메일 인증번호를 요청한다.
 */
async function requestEmaliVerification() {
    if (!validateEmailAddr()) {
        return;
    }

    stopTimer();

    let formData = basicInfoForm.getValue();
    const emailAddr = [formData.emlAddrLocal, formData.emlAddrDomain].join("@");

    const result = await postData("mi/common/mailVerification/sendMail.do", {
        dsEmailVerification: {
            emailAddr
        }
    });

    if (result.callbackMsg === "success") {
        basicInfoForm.getItem("verificationCode").show();
        basicInfoForm.getItem("checkVerificationCodeBtn").show();
        basicInfoForm.getItem("verificationTimer").show();

        formData = { ...basicInfoForm.getValue() };
        formData.verificationRqstId = result.dsEmailVerification[0].rqstId;
        basicInfoForm.setValue(formData);
        startTimer();
        await showAlert("인증번호가 메일로 전송되었습니다.");
    }
}

/**
 * 이메일 인증 타이머를 시작한다.
 */
function startTimer() {
    let time = 300;

    timer = setInterval(() => {
        time--;
        if (time > 0) {
            basicInfoForm.getItem("verificationTimer").setValue("(" + Math.floor(time / 60) + ":" + lpad(time % 60, 2, "0") + " 남음)");
        } else {
            stopTimer();
        }
    }, 1000);
}

/**
 * 이메일 인증 타이머를 종료한다.
 */
function stopTimer() {
    if (timer != null) {
        basicInfoForm.getItem("verificationTimer").setValue("(0:00 남음)");
        clearInterval(timer);
        timer = null;
    }
}

/**
 * 입력받은 인증 번호를 확인한다.
 */
async function checkVerificationCode() {
    const formData = basicInfoForm.getValue();
    const data = {
        emailAddr: [formData.emlAddrLocal, formData.emlAddrDomain].join("@"),
        verificationCode: formData.verificationCode,
        rqstId: formData.verificationRqstId
    };

    const result = await postData("mi/common/mailVerification/checkVerificationCode.do", {
        dsEmailVerification: data
    });

    if (result.callbackMsg === "success") {
        stopTimer();
        basicInfoForm.getItem("emlAddrLocal").disable();
        basicInfoForm.getItem("emlAddrDomain").disable();
        basicInfoForm.getItem("emlAddrDomainCombo").disable();
        basicInfoForm.getItem("verificationCode").disable();
        basicInfoForm.getItem("verifyEmlBtn").disable();
        basicInfoForm.getItem("checkVerificationCodeBtn").disable();
        basicInfoForm.setValue({ emailVerified: "Y" });
        await showAlert("이메일 인증이 완료되었습니다.");
    }
}

// 주소 검색

async function searchMbrAddr() {
    const result = await showAddressSearchPopup();
    if (!result.canceled) {
        basicInfoForm.setValue({ mbrZip: result.address.zonecode, mbrAddr: result.address.address });
    }
}

async function searchOfcAddr() {
    const result = await showAddressSearchPopup();
    if (!result.canceled) {
        additionalInfoForm.setValue({ ofcZip: result.address.zonecode, ofcAddr: result.address.address });
    }
}

// 입력값 검사

function validate() {
    const formData = {
        ...basicInfoForm.getValue(),
        ...additionalInfoForm.getValue()
    };

    const validate = validator([formData])
        .column("memberNmKr", "이름", [["required"], ["maxLength", 300]])
        .column("mblTelno", "휴대전화", [["required"]])
        .column("mbrZip", "주소", [["required"]])
        .column("mbrAddr", "주소", [["required"], ["maxLength", 300]])
        .column("mbrDaddr", "상세 주소", [["maxLength", 300]]);

    if (!isEmpty(formData.passwd)) {
        validate.column("passwd", "비밀번호", [["lengthBetween", 9, 20]])
            .column("passwdCheck", "비밀번호 확인", [["required"], ["lengthBetween", 9, 20]]);
    }

    if (!validate.validate()) {
        return false;
    }

    const {
        mblTelno,
        ofcTelno,
        ofcFxno,
        emailVerified,
        emlAddrLocal,
        emlAddrDomain,
        oldEmlAddr
    } = formData;

    const newEmlAddr = [emlAddrLocal, emlAddrDomain].join("@");
    if (oldEmlAddr != newEmlAddr) {
        if (!validateEmailAddr()) {
            return false;
        }

        if (emailVerified !== "Y") {
            showAlert("이메일 인증이 필요합니다.");
            return false;
        }
    }

    if (!validateMblTelno(mblTelno)) {
        showAlert("휴대전화 번호가 올바르지 않습니다.");
        return false;
    }

    if (!isEmpty(ofcTelno) && !validateTelno(ofcTelno)) {
        showAlert("사무실 연락처 전화번호가 올바르지 않습니다.");
        return false;
    }

    if (!isEmpty(ofcFxno) && !validateTelno(ofcFxno)) {
        showAlert("사무실 팩스번호가 올바르지 않습니다.");
        return false;
    }

    return true;
}

/**
 * 이메일 주소를 검증한다.
 * @param {boolean} [silent] 오류 메시지를 표시할 지 여부
 */
function validateEmailAddr(silent) {
    const { emlAddrLocal, emlAddrDomain } = basicInfoForm.getValue();
    let message = "";
    let result = true;

    if (isEmpty(emlAddrLocal) || isEmpty(emlAddrDomain)) {
        message = "이메일 주소를 입력하세요.";
        result = false;
    }

    // RFC 2821의 SMTP 메시지 제약으로 인해 주소가 254자를 넘을 수 없다. ('@' 포함)
    if (result && (emlAddrLocal.length + emlAddrDomain.length) > 253) {
        message = "이메일 주소가 너무 깁니다.";
        result = false;
    }

    const localRegEx = /^([\da-zA-Z!#$%&'*+\-/=?^_`{|}~]{1,64})$/;
    const domainRegEx = /^((?:[a-zA-Z\d-]{1,63}\.)*[a-zA-Z-]{1,63})$/;

    if (result && (!localRegEx.test(emlAddrLocal) || !domainRegEx.test(emlAddrDomain))) {
        message = "이메일 주소의 형식이 올바르지 않습니다.";
        result = false;
    }

    if (!result && !silent) {
        showAlert(message);
    }

    return result;
}


/**
 * 전화번호의 형식을 확인한다.
 * @param {string} tel
 */
function validateTelno(tel) {
    const t = tel.replace(/-/g, "");
    return /^((0(?:2|1\d|[3-9]\d))(\d{3,4})(\d{4})|1[568]\d{6})$/.test(t);
}

/**
 * 휴대전화번호의 형식을 확인한다.
 * @param {string} tel
 */
function validateMblTelno(tel) {
    const t = tel.replace(/-/g, "");
    return /^(01\d)(\d{3,4})(\d{4})$/.test(t);
}

// 저장
async function save() {
    const validationResult = validate();
    if (!validationResult) {
        return;
    }

    let passwordChecked = await checkPassword();

    if (!passwordChecked) {
        return;
    }

    const confirmResult = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!confirmResult) {
        return;
    }

    const data = {
        ...basicInfoForm.getValue(),
        ...additionalInfoForm.getValue()
    };

    const result = await postData("mi/myPage/setMemberInfo.do", {
        dsMemberInfo: data
    });

    if (result.callbackMsg === "success") {
        await showAlert("회원정보 수정이 완료되었습니다.");
        router.replace("/pts/mif/myPage");
    }
}

async function checkPassword() {
    return await openModal(PasswordCheckPopup, {
        props: {
            message: "개인 정보를 변경하려면 비밀번호를 입력하세요."
        }
    });
}

// 기타

/**
 * 전화번호를 포맷한다.
 */
function formatTelno(input) {
    if (isEmpty(input)) {
        return "";
    }

    const regex = /^(?:(1[568]\d{2})|(010)(\d{4})?|(0(?:2|[13-9]\d))(\d{3,4}?)?)(\d{0,4}?)$/;
    const i = input.replace(/(-|[^\d])/g, '');
    const match = regex.exec(i);

    if (match == null) {
        return i;
    } else {
        return Array.from(match).slice(1)
            .filter(s => !isEmpty(s))
            .join('-');
    }
}

function withdraw() {
    openModal(ConfirmWithdrawPopup);
}

</script>

<template>
    <PortalPageLayout>
        <div style="margin: auto; width: 100%;max-width: 1560px;">
            <div class="title" style="height: 125px;">회원정보 수정</div>
            <div class="jn-container">
                <div class="header">기본 정보</div>
                <div ref="basicInfoFormElement"></div>
            </div>
            <div class="jn-container">
                <div class="header">업체/기관정보</div>
                <div ref="additionalInfoFormElement"></div>
            </div>
            <div class="jn-container" style="padding-top: 46px;">
                회원 탈퇴를 원하신다면 <button type="button" @click="withdraw">회원탈퇴 바로가기</button>
            </div>
            <div style="height: 150px;padding-top: 83px;text-align: center;">
                <button type="button" class="portal-button" @click="save">다음</button>
            </div>
        </div>
    </PortalPageLayout>
</template>


<style scoped lang="scss" src="./register.scss">
</style>
