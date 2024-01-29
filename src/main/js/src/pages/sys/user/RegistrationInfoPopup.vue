<script setup lang="js">
import Popup from "@/components/popup/PopupBase.vue";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { showAlert, showConfirm, useModalContext } from "@/util/popup";
import { defineProps, onMounted, ref } from "vue";

const props = defineProps({
    userId: {
        type: String
    }
});

const modal = useModalContext();
const message = useMessageStore();

/**
 * @typedef {object} MemberRegistrationApprovalVO
 * @property {string} memberId
 * @property {string} memberNmKr
 * @property {string} memberNmEn
 * @property {string} ogdpInstCd
 * @property {string} ogdpInstNm
 * @property {string} emlAddr
 * @property {string} ofcTelno
 * @property {string} ofcFxno
 * @property {string} mblTelno
 * @property {string} joinAprvStts
 * @property {string} corpYn
 * @property {string} jbpsCd
 * @property {string} jbpsNm
 * @property {string} ogdpDeptCd
 * @property {string} ogdpDeptNm
 * @property {string} mbrZip
 * @property {string} mbrAddr
 * @property {string} mbrDaddr
 * @property {string} ofcZip
 * @property {string} ofcAddr
 * @property {string} ofcDaddr
 * @property {string} whdwlYn
 * @property {string} useYn
 * @property {string} mbrAddrMerged
 * @property {string} ofcAddrMerged
 */

/** @type {import("vue").Ref<MemberRegistrationApprovalVO>} */
const memberInfo = ref({});

onMounted(() => {
    search();
});

async function search() {
    const result = await postData("sm/user/getRegisterInfo.do", {
        dsSearch: {
            userId: props.userId
        }
    });

    const item = result.dsMemberInfo[0];
    if (item == null) {
        await showAlert("잘못된 접근입니다.");
        modal.close();
        return;
    }
    memberInfo.value = item;
}

async function approve() {
    if (!(await showConfirm(message.getMessage("CM_CFM_APPROVAL")))) {
        return;
    }

    const data = await postData("sm/user/approveRegistration.do", {
        dsMemberInfo: memberInfo.value
    });

    if (data.callbackMsg === "success") {
        await showAlert("회원가입 요청이 승인되었습니다.");
    }

    modal.close();
}

async function reject() {
    if (!(await showConfirm(message.getMessage("CM_CFM_REJECT")))) {
        return;
    }

    const data = await postData("sm/user/rejectRegistration.do", {
        dsMemberInfo: memberInfo.value
    });

    if (data.callbackMsg === "success") {
        await showAlert("회원가입 요청이 반려되었습니다.");
    }

    modal.close();
}

function closePopup() {
    modal.close();
}

</script>

<template>
    <Popup style="width: 1000px;">
        <template v-slot:title>
            회원가입 승인
        </template>
        <div class="jn-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01" id="registration-basic-info">기본 정보</h2>
            </div>
            <table class="jn-form-table" aria-describedby="registration-basic-info">
                <colgroup>
                    <col style="width: 150px;">
                    <col style="width: calc(50% - 150px);">
                </colgroup>
                <colgroup>
                    <col style="width: 150px;">
                    <col style="width: calc(50% - 150px);">
                </colgroup>
                <tr>
                    <th scope="row">회원 ID</th>
                    <td>{{ memberInfo.memberId }}</td>
                    <th scope="row">회원명</th>
                    <td>{{ memberInfo.memberNmKr }}</td>
                </tr>
                <tr>
                    <th scope="row">이메일</th>
                    <td colspan="3">{{ memberInfo.emlAddr }}</td>
                </tr>
                <tr>
                    <th scope="row">연락처</th>
                    <td colspan="3">{{ memberInfo.mblTelno }}</td>
                </tr>
                <tr>
                    <th scope="row">주소</th>
                    <td colspan="3" style="white-space: pre;">
                        {{ memberInfo.mbrAddrMerged }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="jn-container">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01" id="registration-additional-info">업체/기관 정보</h2>
            </div>
            <table class="jn-form-table" aria-describedby="registration-additional-info">
                <colgroup>
                    <col style="width: 150px;">
                    <col style="width: calc(50% - 150px);">
                </colgroup>
                <colgroup>
                    <col style="width: 150px;">
                    <col style="width: calc(50% - 150px);">
                </colgroup>
                <tr>
                    <th scope="row">업체/기관명</th>
                    <td colspan="3">{{ memberInfo.ogdpInstNm }}</td>
                </tr>
                <tr>
                    <th scope="row">부서</th>
                    <td>{{ memberInfo.ogdpDeptNm }}</td>
                    <th scope="row">직위</th>
                    <td>{{ memberInfo.jbpsNm }}</td>
                </tr>
                <tr>
                    <th scope="row">사무실 연락처</th>
                    <td>{{ memberInfo.ofcTelno }}</td>
                    <th scope="row">사무실 팩스 번호</th>
                    <td>{{ memberInfo.ofcFxno }}</td>
                </tr>
                <tr>
                    <th scope="row">주소</th>
                    <td colspan="3" style="white-space: pre;">
                        {{ memberInfo.ofcAddrMerged }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="jn-btn-group" style="margin-top: 25px; justify-content: center;">
            <button class="icon-approbation" @click="approve">승인</button>
            <button class="icon-reject" @click="reject">반려</button>
            <button class="icon-cancel" @click="closePopup">닫기</button>
        </div>
    </Popup>
</template>
