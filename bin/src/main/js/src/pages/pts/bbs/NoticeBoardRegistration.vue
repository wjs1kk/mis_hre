<script setup lang="js">
import dhx from "dhx-suite-package";
import { onMounted, onUnmounted, ref } from "vue";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { showAlert, showConfirm } from "@/util/popup";
import { datasetConverter } from "@/util/data/convert";

/*
 * 화면 파라미터 정의
 */
const props = defineProps({
    nttNo: {
        type: Number,
        default: ""
    },
    bbsId: {
        type: String,
        default: ""
    }
});

/*
 * 공통 메시지
 */
const message = useMessageStore();

/**
 * 입력 폼이 연결될 HTML 노드
 * @type {import("vue").Ref<HTMLElement>}
 */
const formElement = ref();
/** @type {dhx.Form} */
let form;

onMounted(async () => {
    form = new dhx.Form(formElement.value, {
        css: "jn-form",
        padding: "30px 0 0 0",
        rows: [
            { name: "nttNo", type: "input", hidden: true },
            { name: "bbsId", type: "input", hidden: true, value: props.bbsId },
            {
                cols: [
                    {
                        name: "nttTtl",
                        type: "input",
                        width: 620,
                        label: "제목",
                        labelPosition: "left",
                        labelWidth: 110
                    },
                    {
                        name: "ntcrId",
                        type: "input",
                        width: 380,
                        padding: "0 0 0 60px",
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
                        name: "scrtYn",
                        type: "checkbox",
                        width: 320,
                        labelPosition: "left",
                        label: "비밀글",
                        labelWidth: 110
                    },
                    {
                        name: "passwd",
                        padding: "0 0 0 360px",
                        type: "input",
                        width: 680,
                        label: "비밀번호",
                        labelPosition: "left",
                        labelWidth: 110,
                        readOnly: true
                    }
                ]
            },
            {
                cols: [
                    {
                        name: "noticeYn",
                        type: "checkbox",
                        width: 320,
                        labelPosition: "left",
                        label: "공지사항",
                        labelWidth: 110
                    }
                ]
            },
            {
                cols: [
                    {
                        name: "nttCn",
                        type: "textarea",
                        width: 1000,
                        height: 300,
                        label: "내용",
                        labelPosition: "left",
                        labelWidth: 110
                    }
                ]
            }
        ]
    });

    await search();
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
async function search() {
    const result = await postData("bbs/noticeBoard/getNoticeBoard.do", {
        dsSearch: {
            nttNo: props.nttNo,
            bbsId: props.bbsId
        }
    });

    const data = datasetConverter(result.dsList)
        .checkbox("scrtYn", ["N", "Y"], [false, true])
        .checkbox("noticeYn", ["N", "Y"], [false, true])
        .convert();

    form.setValue({ ...data });
}

/**
 *  저장
 */
async function save() {
    const result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (!result) {
        return;
    }

    const dsData = datasetConverter(form.getValue())
        .checkbox("scrtYn", [false, true], ["N", "Y"])
        .checkbox("noticeYn", [false, true], ["N", "Y"])
        .convert();

    const data = await postData("bbs/noticeBoard/setNoticeBoard.do", {
        dsList: dsData
    });

    if (data.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_SAVE_SUCCESS"));
    } else {
        await showAlert("저장 중 오류가 발생하였습니다.");
    }
}

/**
 *  삭제
 */
async function deleteNoticeBoard() {
    const result = await showConfirm(message.getMessage("CM_CFM_DELETE"));
    if (!result) {
        return;
    }

    const data = await postData("bbs/noticeBoard/deleteNoticeBoard.do", {
        dsList: form.getValue()
    });

    if (data.callbackMsg === "success") {
        await showAlert("CM_MSG_DELETE_SUCCESS");
        await search();
    } else {
        await showAlert("삭제하는 중 오류가 발생했습니다.");
    }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">게시판 글쓰기</h1>
            <div class="jn-btn-group">
                <button @click="save()">저장</button>
                <button class="jn-btn-delete" @click="deleteNoticeBoard()">삭제</button>
            </div>
        </div>

        <div ref="formElement"></div>
    </div>
</template>
