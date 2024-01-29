<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref, defineProps } from "vue";
import { postData } from "@/util/ajax";
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
const answerFromElement = ref();

/** @type {dhx.Form} */
let form;
/** @type {dhx.Form} */
let answerForm;

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

    // 질문
    form = new dhx.Form(formElement.value, {
        css: "jn-form",
        disabled: true,
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
                    { name: "rgstrId", type: "input", hidden: true },
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

    // 답변
    answerForm = new dhx.Form(answerFromElement.value, {
        css: "jn-form",
        padding: "30px 0 0 0",
        rows: [
            {
                cols: [{ name: "qnaId", type: "input", hidden: true }]
            },
            {
                cols: [
                    {
                        name: "answrId",
                        type: "input",
                        width: 320,
                        label: "답변작성자",
                        labelPosition: "left",
                        labelWidth: 110,
                        readOnly: true
                    }
                ]
            },
            {
                cols: [
                    {
                        name: "answrCn",
                        type: "textarea",
                        width: 1000,
                        height: 300,
                        label: "답변내용",
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
    answerForm?.destructor();
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
    answerForm.setValue(data.dsList[0]);
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
 * 수정 - ******************************************** 수정해야함
 */
async function modify() {
    // const rgstrId = rgstrId; // 수정해야함
    // const userId = userInfo.user?.userId; // 세션 userId
    // if (rgstrId === userId) {
    //     globalUi.openTab({
    //         tabId: "QnaQuestionDetail",
    //         tabTitle: "QNA 질문상세",
    //         url: "pages/pts/bbs/qna/QnaQuestionManage.vue",
    //         args: {
    //             qnaId: qnaId
    //         }
    //     });
    // } else {
    //     await showAlert("본인이 작성한 글이 아닙니다.");
    // }
}

/**
 * 저장 ******************************************** 수정해야함
 */
async function save() {
    // const formData = answerForm.getValue();
    // if (isEmpty(formData.answrCn)) {
    //     await showAlert("답변내용을 입력해주세요.");
    //     return;
    // }
    // let result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    // if (result) {
    //     let infoFormData = answerForm.getValue();
    //     const qnaId = infoFormData?.qnaId;
    //     if (qnaId) {
    //         result = await postData("bbs/qna/setQnaAnswrManage.do", {
    //             dsList: infoFormData
    //         });
    //     }
    //     if (result.callbackMsg === "success") {
    //         await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
    //     } else {
    //         await showAlert("저장 중 오류가 발생하였습니다.");
    //     }
    // }
}

/**
 * 삭제 ******************************************** 수정해야함
 */
async function onDelete() {
    // const result = await postData("bbs/qna/delUpdateQnaAnswr.do", {
    //     dsList: {
    //         qnaId: qnaId.value
    //     }
    // });
    // if (result.callbackMsg === "success") {
    //     await showAlert(message.getMessage("CM_MSG_DELETE_SUCCESS"));
    // } else {
    //     await showAlert("삭제 중 오류가 발생하였습니다.");
    // }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">QNA 답변등록</h1>
        </div>

        <div class="jn-title-container">
            <h2 class="jn-sub-title-01">질문</h2>
            <div class="jn-btn-group">
                <button class="jn-btn-save icon-modify" @click="modify()">수정</button>
            </div>
        </div>

        <div ref="formElement"></div>

        <div class="jn-title-container">
            <h2 class="jn-sub-title-01">답변</h2>
            <div class="jn-btn-group">
                <button class="jn-btn-save icon-save" @click="save()">저장</button>
                <button class="jn-btn-delete" @click="onDelete()">삭제</button>
            </div>
        </div>

        <div ref="answerFromElement"></div>
    </div>
</template>

<style scoped></style>
