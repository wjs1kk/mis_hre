<script setup>
import { postData } from "@/util/ajax";
import { onMounted, ref, watch } from "vue";
import TermsItem from "./TermsItem.vue";
import PortalPageLayout from "@/layout/PortalPageLayout.vue";
import { useRouter } from "vue-router";
import { showAlert } from "@/util/popup";

const router = useRouter();

const checkedAll = ref(false);
const dsTerms = ref([]);

watch(dsTerms, value => {
    let value1 = value.every(e => e.agrmYn === "Y");
    checkedAll.value = value1;
}, {
    deep: true
});

onMounted(() => {
    search();
});

async function search() {
    await postData("mi/register/clearTermsAgreement.do");
    const result = await postData("mi/register/getTerms.do");
    for (const element of result.dsTerms) {
        element.agrmYn = "N";
    }
    dsTerms.value = result.dsTerms;
}

async function save() {
    if (dsTerms.value.some(e => e.esntlYn === "Y" && e.agrmYn !== "Y")) {
        await showAlert("필수 약관에 모두 동의해야 합니다.");
        return;
    }

    await postData("mi/register/setTermsAgreement.do", {
        dsTerms: dsTerms.value
    });
    await router.replace("/pts/mif/register");
}

function onCheckAll(value) {
    let arr = dsTerms.value
        .map(e => ({ ...e, agrmYn: value ? "Y" : "N" }));
    dsTerms.value = arr;
}

</script>

<template>
    <portal-page-layout>
        <div style="margin: auto; width: 100%;max-width: 1560px;">
            <div class="title" style="height: 125px;">회원가입</div>
            <ul class="breadcrumb">
                <li class="active">약관동의</li>
                <li>가입양식작성</li>
                <li>가입완료</li>
            </ul>
            <div
                style="display: flex; flex-direction: row; height: 103px;padding-top: 30px;box-sizing: border-box;align-items: start;">
                <input type="checkbox" id="register-agree-all" :checked="checkedAll"
                    @change="onCheckAll($event.target.checked)">
                <label for="register-agree-all">
                    <span style="font-weight: 700;font-size: 1.1875rem;">이용약관에 모두 동의합니다.</span><br>
                    <span style="font-size: 0.9375rem;line-height: 1.4;">
                        * 개인정보 동의자가 동의한 내용 외 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할
                        때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다.
                    </span>
                </label>
            </div>
            <terms-item v-for="item in dsTerms" :key="item.trmsId" v-model:agrm-yn="item.agrmYn" :trms-id="item.trmsId"
                :trms-cn="item.trmsCn" :trms-title="item.trmsTitle"></terms-item>
            <div style="height: 150px;padding-top: 83px;text-align: center;">
                <button type="button" class="portal-button" @click="save">다음</button>
            </div>
        </div>
    </portal-page-layout>
</template>

<style scoped lang="scss" src="./register.scss">
</style>
