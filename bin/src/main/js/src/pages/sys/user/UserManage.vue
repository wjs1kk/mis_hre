<script setup>
import dhx from "dhx-suite-package";
import { onMounted, ref } from "vue";
import AddUserPopup from "./AddUserPopup.vue";
import { useMessageStore } from "@/stores/message";
import { postData } from "@/util/ajax";
import { getCommonCodeCombo } from "@/util/combo";
import { DataCollectionEx } from "@/util/data";
import { showAlert, showConfirm, openModal } from "@/util/popup";
import { escapeXml } from "@/util/string/escape";
import RegistrationInfoPopup from "./RegistrationInfoPopup.vue";

/*
 * 검색 폼과 그리드를 연결할 HTML 요소
 */
let searchFormElement = ref();
let gridElement = ref();

/**
 * 검색 폼
 */
let searchForm;
let grdUser;
let grdUserLayout;

// 공통 메시지 기능을 사용한다.
let message = useMessageStore();

////////////
// 데이터 //
////////////

/**
 * 사용자 목록 데이터를 저장한다.
 * @type {DataCollectionEx}
 */
let dsUserManage = new DataCollectionEx();

/////////////////
// 생명주기 훅 //
/////////////////

onMounted(async () => {
    const { useYnCombo } = await getCombo();
    searchForm = new dhx.Form(searchFormElement.value, {
        padding: "15px 20px",
        height: 60,
        css: "jn-search-form",
        cols: [
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "memberId", type: "input", width: 310, label: "회원 ID", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "userNmKr", type: "input", width: 310, label: "사용자 이름", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            },
            {
                padding: "0 60px 0 0",
                rows: [
                    { name: "jobPosition", type: "input", width: 310, label: "직위", labelPosition: "left", labelWidth: 100, autocomplete: false }
                ]
            }
        ]
    });

    grdUser = new dhx.Grid(null, {
        css: "jn-grid",
        leftSplit: 3,
        autoWidth: true,
        rowHeight: 34,
        headerRowHeight: 30,
        selection: "row",
        sortable: false,
        data: dsUserManage,
        columns: [
            { id: "rownum", width: 48, header: [{ text: "순번", align: "center" }], editable: false },
            { id: "rowCheck", width: 48, header: [{ htmlEnable: true, text: "<input type='checkbox'>", align: "center" }], type: "boolean", editable: true },
            { id: "memberId", width: 96, header: [{ text: "회원 ID", align: "center" }] },
            { id: "userNmKr", width: 96, header: [{ text: "사용자 이름", align: "center" }] },
            { id: "ogdpDeptNm", width: 120, header: [{ text: "부서", align: "center" }], editable: false },
            { id: "jobPosition", width: 120, header: [{ text: "직위", align: "center" }], editable: false },
            { id: "emailAddr", width: 160, header: [{ text: "E-MAIL", align: "center" }], editable: false },
            { id: "telNo", width: 120, header: [{ text: "TEL", align: "center" }], editable: false },
            { id: "phoneNo", width: 120, header: [{ text: "PHONE", align: "center" }] },
            { id: "useYn", width: 80, header: [{ text: "사용 여부", align: "center" }], editorType: "select", options: useYnCombo },
            { id: "pwExpireDt", width: 120, header: [{ text: "비밀번호 만기일", align: "center" }] },
            { id: "joinAprvSttsNm", width: 80, header: [{ text: "승인 상태", align: "center" }], template: (text, row) => row.joinAprvStts === "APPLY" ? `<button type="button" class="approveBtn">${escapeXml(text)}</button>` : escapeXml(text), htmlEnable: true },
        ],
        eventHandlers: {
            onclick: {
                async approveBtn(_, { row }) {
                    await openModal(RegistrationInfoPopup, {
                        props: {
                            userId: row.userId
                        }
                    });

                    await search();
                }
            }
        }
    });

    grdUserLayout = new dhx.Layout(gridElement.value, {
        rows: [
            { id: "grid" }
        ]
    });

    grdUserLayout.getCell("grid").attach(grdUser);

    grdUser.events.on("cellDblClick", async (row) => {
        await modifyUser(row.userId);
    });

    await search();
});

/////////////////
// 사용자 함수 //
/////////////////

async function getCombo() {
    const commonCombo = await getCommonCodeCombo({
        useYnCombo: ["SM", "USE_YN"]
    });

    return commonCombo;
}

async function search() {
    const result = await postData("sm/getUserManage.do", { dsSearch: searchForm.getValue() });
    grdUser.data.parse(result.dsUserManage);
}

async function addUser() {
    await openModal(AddUserPopup, {
    });

    await search();
}

async function modifyUserButton() {
    const checkedRows = grdUser.data.getCheckedRows("rowCheck");

    if (checkedRows.length === 0) {
        await showAlert("수정할 사용자를 선택하세요.");
        return;
    } else if (checkedRows.length !== 1) {
        await showAlert("수정할 사용자를 하나만 선택하세요.");
        return;
    }

    await modifyUser(checkedRows[0].userId);
}

async function modifyUser(userId) {
    await openModal(AddUserPopup, {
        props: {
            userId
        }
    });

    await search();
}

async function deleteUser() {
    const checkedRows = grdUser.data.getCheckedRows("rowCheck");
    if (checkedRows.length === 0) {
        await showAlert("삭제할 데이터를 선택해주세요.");
        return;
    }

    const result = await showConfirm(message.getMessage("CM_CFM_DELETE"));
    if (!result) {
        return;
    }

    const data = await postData("sm/deleteUserManageList.do", {
        dsUserManage: checkedRows
    });

    if (data.callbackMsg === "success") {
        await showAlert("CM_MSG_DELETE_SUCCESS");
        await search();
    } else {
        await showAlert("선택한 항목을 삭제하는 중 오류가 발생했습니다.");
    }
}

</script>

<template>
    <div class="jn-page">
        <div class="jn-title-container">
            <h1 class="jn-title">사용자 관리</h1>
            <div class="jn-btn-group">
                <button @click="addUser()">신규</button>
                <button @click="modifyUserButton()">수정</button>
                <button @click="search()">조회</button>
                <button class="jn-btn-delete" @click="deleteUser()">삭제</button>
            </div>
        </div>

        <div ref="searchFormElement">
        </div>

        <div class="jn-container" style="height: calc(100% - 143px);">
            <div class="jn-title-container">
                <h2 class="jn-sub-title-01">검색 결과</h2>
                <div class="jn-btn-group">
                </div>
            </div>
            <div ref="gridElement" style="height: calc(100% - 45px);"></div>
        </div>
    </div>
</template>
