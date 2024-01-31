<script setup>
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref, defineProps } from "vue";
import { getCommonCodeCombo } from "@/util/combo";
import { DataCollectionEx } from "@/util/data";
import { postData } from "@/util/ajax";
import { showAlert, showConfirm } from "@/util/popup";
import { useMessageStore } from "@/stores/message";
import { isEmpty } from "@/util/string";

const message = useMessageStore();

const props = defineProps({
    emlTmpltId: {
        type: String,
        default: ""
    }
});

/** @type {dhx.Form} */
let infoForm;
/**
 * 검색 폼과 그리드 HTML 노드
 */
const infoFormElement = ref();

const emlTmpltId = ref(props.emlTmpltId);
/**
 * 게시판 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
const dsList = new DataCollectionEx();

onMounted(async () => {
    const { useYnCombo } = await getCombo();

    infoForm = new dhx.Form(infoFormElement.value, {
        rows: [
            {
                cols: [
                    { name: "emlTmpltId", type: "input", width: 320, label: "템플릿 ID", labelPosition: "left", labelWidth: 110, readOnly: true },
                    { name: "emlTmpltNm", type: "input", width: 500, label: "템플릿 명", labelPosition: "left", labelWidth: 110, },
                ],
            },
            {
                cols: [
                    { name: "emlTmpltCn", type: "textarea", width: 1000, height: 400, label: "메일 발송 내용", labelPosition: "left", labelWidth: 110, },
                ]
            },
            {
                cols: [
                    { name: "useYn", type: "combo", width: 320, label: "사용여부", labelPosition: "left", labelWidth: 110, value: "Y", data: useYnCombo, readOnly: true },
                ]
            }
        ]
    });

    // 화면 파라미터로 사용자 ID를 받은 경우, 사용자 정보를 조회한다.

    if (!isEmpty(emlTmpltId.value)) {
        await search(emlTmpltId.value);
    }
});

onUnmounted(() => {

    infoForm?.destructor();
});
////////////////////////
// 생명주기 이벤트 훅 //
////////////////////////

// 조회
/**
 * 사용자 정보를 조회한다.
 *
 * @param {string} emlTmpltId
 */
async function search(emlTmpltId) {
    const data = await postData("mal/emlSndMaster/setTmpltDtl.do", {
        dsSearch: {
            emlTmpltId
        }
    })

    infoForm.setValue(data.dsList[0]);
}

async function getCombo() {
    const { useYnCombo } = await getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"]
    });

    return {
        useYnCombo
    };
}

async function onDelete() {
    const result = await postData("mal/emlSndMaster/setTmpltDelete.do", {
        dsList: {
            emlTmpltId: emlTmpltId.value
        }
    })

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_DELETE_SUCCESS"));
    } else {
        await showAlert("삭제 중 오류가 발생하였습니다.");
    }
}

/**
 * 저장
 */
async function save() {
    const formData = infoForm.getValue();

    if (isEmpty(formData.emlTmpltNm)) {
        await showAlert("템플릿 제목을 입력해주세요.");
        return;
    } else if (isEmpty(formData.useYn)) {
        await showAlert("사용여부는 필수입니다.");
        return;
    } else if (isEmpty(formData.emlTmpltCn)) {
        await showAlert("메일 발송 내용을 입력해주세요.");
        return;
    }

    let result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {

        let infoFormData = infoForm.getValue();
        const emlTmpltId = infoFormData?.emlTmpltId;
        if (!emlTmpltId) {
            result = await postData("mal/emlSndMaster/setTmpltSave.do", {
                dsList: infoFormData
            });
        } else {
            result = await postData("mal/emlSndMaster/setTmpltUpdate.do", {
                dsList: infoFormData
            });
        }

        if (result.callbackMsg === "success") {
            await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
        } else {
            await showAlert("저장 중 오류가 발생하였습니다.");
        }
    }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">메일 템플릿 등록</h1>
            <div class="jn-btn-group">
                <button class="jn-btn-form-accent icon-save" @click="save">저장</button>
                <button class="jn-btn-form-accent icon-save" @click="onDelete">삭제</button>
            </div>
        </div>

        <div ref="infoFormElement"></div>
    </div>
</template>
