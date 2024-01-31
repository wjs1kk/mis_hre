<script setup>
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
    faqId: {
        type: String,
        default: ""
    }
});

// isRead 조회Cnt flag
const isRead = ref("N");
// FAQ 상태를 저장할 데이터 속성
const faqSttsCd = ref("");

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
const faqId = ref(props.faqId);

/**
 * 데이터를 저장
 * @type {DataCollectionEx}
 */
const dsList = new DataCollectionEx();

onMounted(async () => {
    // isRead 초기화
    isRead.value = "N";

    const { clsTyCombo } = await getCombo();

    form = new dhx.Form(formElement.value, {
        css: "jn-form",
        padding: "30px 0 0 0",
        rows: [
            {
                cols: [{ name: "faqId", type: "input", hidden: true }]
            },
            {
                cols: [
                    {
                        name: "qstnTtl",
                        type: "input",
                        width: 620,
                        label: "질문제목",
                        labelPosition: "left",
                        labelWidth: 110
                    },
                    {
                        name: "faqSttsCd",
                        type: "input",
                        width: 380,
                        padding: "0 0 0 60px",
                        label: "상태",
                        labelPosition: "left",
                        labelWidth: 110,
                        readOnly: true
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

    // 화면 파라미터로 faqId를 받은 경우, faqId 정보를 조회한다.
    if (!isEmpty(faqId.value)) {
        await search(faqId.value);
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
 * @param {string} faqId
 */
async function search(faqId) {
    // 'isRead' 값을 'Y'로 설정
    isRead.value = "Y";

    const data = await postData("bbs/faq/getFaqManage.do", {
        dsSearch: {
            faqId,
            isRead: isRead.value // 조회수 증가를 위한 flag
        }
    });

    form.setValue(data.dsList[0]);

    // FAQ 상태를 데이터 속성에 설정
    faqSttsCd.value = data.dsList[0].faqSttsCd;
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
        await showAlert("질문 제목을 입력해주세요.");
        return;
    } else if (isEmpty(formData.clsCd)) {
        await showAlert("분류를 선택해주세요.");
        return;
    } else if (isEmpty(formData.qstnCn)) {
        await showAlert("질문 내용을 입력해주세요.");
        return;
    } else if (isEmpty(formData.answrCn)) {
        await showAlert("답변 내용을 입력해주세요.");
        return;
    }

    let result = await showConfirm(message.getMessage("CM_CFM_BEFORE_SAVE"));
    if (result) {
        let infoFormData = form.getValue();
        const faqId = infoFormData?.faqId;
        if (!faqId) {
            result = await postData("bbs/faq/setFaqManage.do", {
                dsList: infoFormData
            });
        } else {
            result = await postData("bbs/faq/setFaqManage.do", {
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
    const result = await postData("bbs/faq/deleteFaqManage.do", {
        dsList: {
            faqId: faqId.value
        }
    });

    if (result.callbackMsg === "success") {
        await showAlert(message.getMessage("CM_MSG_DELETE_SUCCESS"));
    } else {
        await showAlert("삭제 중 오류가 발생하였습니다.");
    }
}

/**
 * FAA 상태 변경 수정중 - postData로 값을 못넘겨받음..
 */
async function setStts(faqSttsCd) {
    const formData = form.getValue();
    const result = await postData("bbs/faq/setFaqStts.do", {
        dsList: formData,
        faqSttsCd: faqSttsCd
    });

    if (result.callbackMsg === "success") {
        await showAlert(`FAQ 상태가 변경되었습니다. 새로운 상태: ${faqSttsCd}`);

        faqSttsCd.value = result.faqSttsCd;
    } else {
        await showAlert("상태 변경 중 오류가 발생하였습니다.");
    }
}
</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">FAQ 상세</h1>
            <div class="jn-btn-group">
                <!-- <button @click="setStts('STOPPED')">FAQ 중지</button>
                <button @click="setStts('POSTED')">FAQ 게시</button> -->
                <button>FAQ 중지</button>
                <button>FAQ 게시</button>
                <button class="jn-btn-save icon-save" @click="save()">저장</button>
                <button class="jn-btn-delete" @click="onDelete()">삭제</button>
            </div>
        </div>

        <div ref="formElement"></div>
    </div>
</template>
