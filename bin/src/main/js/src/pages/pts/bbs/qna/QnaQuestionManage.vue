<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref, defineProps } from "vue";
import { postData } from "@/util/ajax";
import { showAlert, showConfirm } from "@/util/popup";
import { DataCollectionEx } from "@/util/data";
import { getCommonCodeCombo } from "@/util/combo";
import { isEmpty } from "@/util/string";
import { useMessageStore } from "@/stores/message";

const message = useMessageStore();

/*
 * 화면 파라미터 정의
 */
const props = defineProps({
    qnaId: {
        type: String,
        default: ""
    }
});

/**
 * 입력 폼이 연결될 HTML 노드
 * @type {import("vue").Ref<HTMLElement>}
 */
const formElement = ref();

/** @type {dhx.Form} */
let form;

/*
 * 파라미터
 */
const qnaId = ref(props.qnaId);

/**
 * 데이터를 저장
 * @type {DataCollectionEx}
 */
const dsList = new DataCollectionEx();

onMounted(async () => {
    const { clsTyCombo } = await getCombo();

    form = new dhx.Form(formElement.value, {
        css: "jn-form",
        padding: "30px 0 0 0",
        rows: [
            {
                cols: [{ name: "qnaId", type: "input", hidden: true }]
            },
            {
                cols: [
                    {
                        name: "qstnTtl",
                        type: "input",
                        width: 620,
                        label: "제목",
                        labelPosition: "left",
                        labelWidth: 110
                    }
                ]
            },
            {
                cols: [
                    {
                        name: "clsCd",
                        type: "combo",
                        width: 320,
                        label: "분류",
                        labelPosition: "left",
                        labelWidth: 110,
                        data: clsTyCombo
                    },
                    {
                        name: "rgstrMemberId",
                        type: "input",
                        width: 680,
                        padding: "0 0 0 360px",
                        label: "작성자",
                        labelPosition: "left",
                        labelWidth: 110,
                        readOnly: true
                    }
                ]
            },
            {
                cols: [
                    {
                        name: "qstnCn",
                        type: "textarea",
                        width: 1000,
                        height: 300,
                        label: "질문내용",
                        labelPosition: "left",
                        labelWidth: 110
                    }
                ]
            }
        ]
    });

    // 화면 파라미터로 qnaId 받은 경우, qnaId 정보를 조회한다.
    if (!isEmpty(qnaId.value)) {
        await search(qnaId.value);
        form.setProperties({
            rgstrMemberId: {
                readOnly: true
            }
        });
    }
});

/**
 * 화면이 닫힌다.
 */
onUnmounted(() => {
    form?.destructor();
});

/**
 *  조회
 */
/**
 * 파라미터 정보를 조회한다.
 *
 * @param {string} qnaId
 */
async function search(qnaId) {
    const data = await postData("bbs/qna/getQnaManage.do", {
        dsSearch: {
            qnaId
        }
    });

    form.setValue(data.dsList[0]);
}

/**
 *  콤보박스
 */
async function getCombo() {
    const { clsTyCombo } = await getCommonCodeCombo({
        clsTyCombo: ["PTS", "WORK_CATEGORY"]
    });

    return {
        clsTyCombo
    };
}

/**
 * 저장
 */
async function save() {
    const formData = form.getValue();

    if (isEmpty(formData.qstnTtl)) {
        await showAlert("제목을 입력해주세요.");
        return;
    } else if (isEmpty(formData.clsCd)) {
        await showAlert("분류를 선택해주세요.");
        return;
    } else if (isEmpty(formData.qstnCn)) {
        await showAlert("내용을 입력해주세요.");
        return;
    }

    let result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {
        let infoFormData = form.getValue();
        const qnaId = infoFormData?.qnaId;
        if (!qnaId) {
            result = await postData("bbs/qna/setQnaManage.do", {
                dsList: infoFormData
            });
        } else {
            result = await postData("bbs/qna/setQnaManage.do", {
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

/**
 * 삭제
 */
async function onDelete() {
    const result = await postData("bbs/qna/deleteQnaManage.do", {
        dsList: {
            qnaId: qnaId.value
        }
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_DELETE_SUCCESS"));
    } else {
        await showAlert("삭제 중 오류가 발생하였습니다.");
    }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">QNA 질문등록</h1>
            <div class="jn-btn-group">
                <button class="jn-btn-save icon-save" @click="save()">저장</button>
                <button class="jn-btn-delete" @click="onDelete()">삭제</button>
            </div>
        </div>

        <div ref="formElement"></div>
    </div>
</template>
