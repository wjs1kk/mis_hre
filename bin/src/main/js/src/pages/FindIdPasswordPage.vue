<script setup lang="js">
import { reactive } from "vue";
import TextInput from "@/components/TextInput.vue";
import { validator } from "@/util/data/validate";
import { postData } from "@/util/ajax";
import { openModal } from "@/util/popup";
import FindIdResultPopup from "./FindIdResultPopup.vue";
import FindPasswordResultPopup from "./FindPasswordResultPopup.vue";
import { useRouter } from "vue-router";
import { isEmpty } from "@/util/string";

const router = useRouter();

const findIdData = reactive({
    userNmKr: "",
    mblTelno: "",
    emlAddr: ""
});

const findPasswdData = reactive({
    userNmKr: "",
    mblTelno: "",
    emlAddr: "",
    memberId: ""
});

async function findId() {
    const validateResult = validator([findIdData])
        .column("userNmKr", "이름", [["required"]])
        .column("mblTelno", "연락처", [["required"]])
        .column("emlAddr", "이메일", [["required"]])
        .validate();

    if (!validateResult) {
        return;
    }

    const { foundMemberId } = await postData("mi/login/findId.do", {
        dsFindId: findIdData
    });

    await openModal(FindIdResultPopup, {
        props: {
            memberId: foundMemberId
        }
    });

    goLogin();
}

async function findPasswd() {
    const validateResult = validator([findPasswdData])
        .column("memberId", "아이디", [["required"]])
        .column("userNmKr", "이름", [["required"]])
        .column("mblTelno", "연락처", [["required"]])
        .column("emlAddr", "이메일", [["required"]])
        .validate();

    if (!validateResult) {
        return;
    }

    const { emlAddr } = await postData("mi/login/findPassword.do", {
        dsFindPasswd: findPasswdData
    });

    await openModal(FindPasswordResultPopup, {
        props: {
            emlAddr
        }
    });

    goLogin();
}

function goLogin() {
    router.replace("/login");
}

function formatTelno(input) {
    const value = input?.value;

    if (isEmpty(value)) {
        return;
    }

    const regex = /^(?:(1[568]\d{2})|(010)(\d{4})?|(0(?:2|[13-9]\d))(\d{3,4}?)?)(\d{0,4}?)$/;
    const i = value.replace(/(-|[^\d])/g, '');
    const match = regex.exec(i);

    if (match == null) {
        input.value = i;
    } else {
        input.value = Array.from(match).slice(1)
            .filter(s => !isEmpty(s))
            .join('-');
    }
}

</script>

<template>
    <div class="jn-login-page">
        <div class="jn-login" style="padding: 50px 0;">
            <div
                style="flex: 1 0 0; display: flex; flex-direction: column; align-items: center; justify-content: start; padding: 30px; border-right: 1px solid #cccccc;">
                <div class="jn-login__title">아이디 찾기</div>
                <TextInput v-model="findIdData.userNmKr" label="이름" name="userNmKr"
                    style="margin-bottom: 8px; width: 430px;" type="text" @keyup.enter="findId" />
                <TextInput v-model="findIdData.mblTelno" label="연락처" name="mblTelno"
                    style="margin-bottom: 8px; width: 430px;" type="text" @keyup.enter="findId"
                    @input="formatTelno($event.target)" @change="formatTelno($event.target)" />
                <TextInput v-model="findIdData.emlAddr" label="이메일" name="emlAddr" style="margin-bottom: 8px; width: 430px;"
                    type="text" @keyup.enter="findId" />
                <button type="button" class="jn-login__button" style="margin-top: 20px;" @click="findId">확인</button>
            </div>
            <div
                style="flex: 1 0 0; display: flex; flex-direction: column; align-items: center; justify-content: start; padding: 30px;">
                <div class="jn-login__title">비밀번호 찾기</div>
                <TextInput v-model="findPasswdData.memberId" label="아이디" name="memberId"
                    style="margin-bottom: 8px; width: 430px;" type="text" @keyup.enter="findPasswd" />
                <TextInput v-model="findPasswdData.userNmKr" label="이름" name="userNmKr"
                    style="margin-bottom: 8px; width: 430px;" type="text" @keyup.enter="findPasswd" />
                <TextInput v-model="findPasswdData.mblTelno" label="연락처" name="mblTelno"
                    style="margin-bottom: 8px; width: 430px;" type="text" @keyup.enter="findPasswd"
                    @input="formatTelno($event.target)" @change="formatTelno($event.target)" />
                <TextInput v-model="findPasswdData.emlAddr" label="이메일" name="emlAddr"
                    style="margin-bottom: 8px; width: 430px;" type="text" @keyup.enter="findPasswd" />
                <p
                    style="margin-top: 15px; color: red; width: 420px; height: 50px; margin-bottom: 15px; font-size: 0.875rem;">
                    * 입력하신 이메일 주소로 비밀번호 변경 메일이 전송되며,<br>
                    해당 메일의 링크를 통해 비밀번호 변경이 가능합니다.
                </p>
                <button type="button" class="jn-login__button" @click="findPasswd">확인</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.jn-login-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.jn-login {
    display: flex;
    align-items: stretch;
    flex-direction: row;
    justify-content: center;

    flex: 1 0 0;
    margin: 36px;
    width: 100%;
    height: 100%;
    max-width: 1541px;
    max-height: 604px;
    min-height: 400px;

    background-color: #f8f9fe;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-large);
}

.jn-login__title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.875rem;

    width: 100%;
    max-width: 480px;

    text-align: center;
    letter-spacing: 0;

    color: black;

    margin-bottom: 20px;
}

.jn-login__button {
    color: var(--on-primary-color);
    background-color: var(--primary-color);
    height: 56px;
    width: 130px;
    border: none;
    border-radius: var(--border-radius-small);
}
</style>
