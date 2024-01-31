<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import Popup from "@/components/popup/PopupBase.vue";
import { validator } from "@/util/data/validate";
import { validatePassword } from "@/util/password";
import { showAlert, useModalContext } from "@/util/popup";
import { postData } from "@/util/ajax";

const modal = useModalContext();

/** @type {import("vue").Ref<HTMLElement>} */
const formElement = ref();

/** @type {import("dhx-suite-package").Form} */
let form;

onMounted(() => {
    form = new dhx.Form(formElement.value, {
        css: "jn-form",
        padding: 0,
        width: "100%",
        rows: [
            {
                height: 51,
                name: "oldPasswd",
                type: "input",
                inputType: "password",
                width: 260,
                label: "기존 비밀번호",
                labelWidth: 110,
                labelPosition: "left"
            },
            {
                height: 51,
                cols: [
                    { name: "passwd", type: "input", inputType: "password", width: 260, label: "새 비밀번호", labelWidth: 110, labelPosition: "left" },
                    { type: "text", value: "* 9 ~ 15자 이내 숫자, 문자, 특수문자 조합", width: 300, labelWidth: 0 }
                ]
            },
            {
                height: 51,
                name: "passwdCheck",
                type: "input",
                inputType: "password",
                width: 260,
                label: "새 비밀번호 확인",
                labelWidth: 110,
                labelPosition: "left"
            },
        ]
    });

    form.events.on("keydown", (e, name) => {
        switch (name) {
            case "oldPasswd":
            case "passwd":
            case "passwdCheck":
                if (e.key === "Enter") {
                    save();
                }
                break;
            default:
                break;
        }
    });
});

onUnmounted(() => {
    form?.destructor();
});

async function save() {
    const formData = form.getValue();

    if (!validate()) {
        return;
    }

    const result = await postData("mi/myPage/changePassword.do", {
        dsPasswd: formData
    });

    switch (result.callbackMsg) {
        case "success":
            await showAlert("비밀번호 변경이 완료되었습니다.");
            closeModal();
            break;
        case "oldPasswordNotMatched":
            await showAlert("현재 비밀번호가 일치하지 않습니다.");
            break;
        default:
            await showAlert("비밀번호 변경이 실패했습니다.");
            break;
    }
}

function validate() {
    const data = form.getValue();
    const validationResult = validator([data])
        .column("oldPasswd", "현재 비밀번호", [["required"]])
        .column("passwd", "새 비밀번호", [["required"], ["lengthBetween", 9, 16]])
        .column("passwdCheck", "새 비밀번호 확인", [["required"], ["lengthBetween", 9, 16]])
        .validate();

    if (!validationResult) {
        return false;
    }

    const passwordCheckResult = validatePassword(data.password, ["digit", "lower", "upper", "symbol"], []);
    if (!passwordCheckResult.passed) {
        showAlert(passwordCheckResult.message);
    }

    return passwordCheckResult.passed;
}

function closeModal() {
    modal.close();
}
</script>

<template>
    <Popup style="width: 660px;">
        <template #title>
            비밀번호 변경
        </template>
        <div class="jn-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">비밀번호 변경</h2>
            </div>
            <div ref="formElement"></div>
        </div>
        <div class="jn-btn-group" style="padding-top: 25px; justify-content: center;">
            <button class="jn-btn-save icon-save" @click="save">저장</button>
            <button @click="closeModal">닫기</button>
        </div>
    </Popup>
</template>
