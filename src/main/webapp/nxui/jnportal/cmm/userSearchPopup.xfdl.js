(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("userSearchPopup");
            this.set_titletext("사용자 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"300\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"200\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"320\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"20\"/><Column id=\"ofcFxno\" type=\"STRING\" size=\"20\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"20\"/><Column id=\"joinAplyStts\" type=\"STRING\" size=\"20\"/><Column id=\"corpYn\" type=\"STRING\" size=\"1\"/><Column id=\"jbpsCd\" type=\"STRING\" size=\"20\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"300\"/><Column id=\"ogdpDeptCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpDeptNm\" type=\"STRING\" size=\"300\"/><Column id=\"mbrZip\" type=\"STRING\" size=\"6\"/><Column id=\"mbrAddr\" type=\"STRING\" size=\"300\"/><Column id=\"mbrDaddr\" type=\"STRING\" size=\"300\"/><Column id=\"ofcZip\" type=\"STRING\" size=\"6\"/><Column id=\"ofcAddr\" type=\"STRING\" size=\"300\"/><Column id=\"ofcDaddr\" type=\"STRING\" size=\"300\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0","1000","720",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("사용자 조회");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divSearch","30","70",null,"152","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_popup");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staSubTitle","20","0","169","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_taborder("0");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg","20","45",null,"90","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_cssclass("sta_WF_bg");
            obj.set_taborder("1");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","40","60","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("회원 ID");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_taborder("2");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMemberId","150","60","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_maxlength("100");
            obj.set_taborder("3");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","469","60","120","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_taborder("4");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","599","60","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("5");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","40","94","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_taborder("6");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","150","94","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_maxlength("100");
            obj.set_taborder("7");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","469","94","120","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_taborder("8");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtJbpsNm","sta004:10","94","160","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_maxlength("100");
            obj.set_taborder("9");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"14","63","26","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch_W");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divUserList","30","divSearch:10","940","402",null,null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_popup");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","81","45",null,null,null,null,null,null,this.divPopup.form.divUserList.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divUserList.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","149","45",null,null,null,null,null,null,this.divPopup.form.divUserList.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.form.divUserList.addChild(obj.name, obj);

            obj = new Grid("grdUserList","20","45",null,null,"20","15",null,null,null,null,this.divPopup.form.divUserList.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsUser");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"회원 ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" text=\"이메일\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"직급\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\"/><Cell col=\"1\" text=\"bind:memberId\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:userNmKr\"/><Cell col=\"3\" text=\"bind:mblTelno\"/><Cell col=\"4\" text=\"bind:emlAddr\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ogdpDeptNm\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:jbpsNm\"/></Band></Format><Format id=\"single\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"선택\" displaytype=\"none\"/><Cell col=\"1\" text=\"회원 ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" text=\"이메일\"/><Cell col=\"5\" text=\"부서명\"/><Cell col=\"6\" text=\"직급\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" expr=\"rowCheck === &apos;1&apos;  ? &apos;theme://images/rdo_WF_Radio_S.png&apos; : &apos;theme://images/rdo_WF_Radio.png&apos;\"/><Cell col=\"1\" text=\"bind:memberId\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:userNmKr\"/><Cell col=\"3\" text=\"bind:mblTelno\"/><Cell col=\"4\" text=\"bind:emlAddr\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ogdpDeptNm\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:jbpsNm\"/></Band></Format></Formats>");
            this.divPopup.form.divUserList.addChild(obj.name, obj);

            obj = new Div("divBtns","30","659",null,"28","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            this.divPopup.addChild(obj.name, obj);

            obj = new Button("btnAdd","384","0","65","28",null,null,null,null,null,null,this.divPopup.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            obj.set_visible("false");
            this.divPopup.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnSelect","384","0","65","28",null,null,null,null,null,null,this.divPopup.form.divBtns.form);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_icoSelect");
            obj.set_visible("false");
            this.divPopup.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnReset","461","549","79","28",null,null,null,null,null,null,this.divPopup.form.divBtns.form);
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_icoReturn");
            obj.set_taborder("3");
            obj.set_visible("false");
            this.divPopup.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnPopupClose",null,"0","65","28","423",null,null,null,null,null,this.divPopup.form.divBtns.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.divPopup.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divPopup.form.divSearch.form
            obj = new Layout("default","",0,0,this.divPopup.form.divSearch.form,function(p){});
            this.divPopup.form.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divUserList.form
            obj = new Layout("default","",0,0,this.divPopup.form.divUserList.form,function(p){});
            this.divPopup.form.divUserList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form.divBtns.form
            obj = new Layout("default","",0,0,this.divPopup.form.divBtns.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("3");
            obj.set_flexmainaxisalign("center");
            this.divPopup.form.divBtns.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPopup.form
            obj = new Layout("default","",0,0,this.divPopup.form,function(p){});
            this.divPopup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divSearch.form.edtMemberId","value","dsSearch","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPopup.form.divSearch.form.edtUserNm","value","dsSearch","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPopup.form.divSearch.form.edtDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPopup.form.divSearch.form.edtJbpsNm","value","dsSearch","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("userSearchPopup.xfdl","lib::common.xjs");
        this.registerScript("userSearchPopup.xfdl", function() {
        /**
         *  사용자 선택 팝업
         *  MenuPath      -
         *  FileName      cmm::userSearchPopup.xfdl
         *  Creator       parksw
         *  CreateDate    2023.11.30
         *  Desription    사용자 조회 팝업
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.30    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.userSearchPopup_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);

            this.mode = this.parent.mode || "multiple";
            this.enableReset = (this.parent.enableReset == null) ? true : this.parent.enableReset;
            this.searchParams = this.parent.searchParams || {};

            this.dsSearch.setColumn(0, "memberId", this.searchParams.memberId);
            this.dsSearch.setColumn(0, "userNm", this.searchParams.userNm);
            this.dsSearch.setColumn(0, "deptNm", this.searchParams.deptNm);
            this.dsSearch.setColumn(0, "jbpsNm", this.searchParams.jbpsNm);

            if (this.mode === "single") {
                this.divPopup.form.divUserList.form.grdUserList.set_formatid("single");
                this.divPopup.form.divUserList.form.grdUserList.setCellProperty("head", 0, "text", "선택");
                this.divPopup.form.divBtns.form.btnAdd.set_visible(false);
                this.divPopup.form.divBtns.form.btnSelect.set_visible(true);
                this.divPopup.form.divBtns.form.btnReset.set_visible(this.enableReset);
            } else {
                this.divPopup.form.divBtns.form.btnAdd.set_visible(true);
                this.divPopup.form.divBtns.form.btnSelect.set_visible(false);
                this.divPopup.form.divBtns.form.btnReset.set_visible(false);
            }

            this.fnSearch();
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnSearch = function ()
        {
            this.gfnTransaction("getUserList", "cmn/popup/userSearch/getUserList.do", "dsSearch", "dsUser", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getUserList":
                    this.gfnRowCount(this.dsUser, this.divPopup.form.divUserList.form.staGridRowCnt);
                    break;
                default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divPopup_divSearch_btnSearch_onclick = function(obj,e)
        {
            this.fnSearch();
        };

        this.divPopup_divUserList_grdUserList_onheadclick = function(obj,e)
        {
            if (this.mode !== "single") {
                this.gfnSetGridCheckAll(obj, e, "rowCheck");
            }
        };

        this.divPopup_divUserList_grdUserList_oncellclick = function(obj,e)
        {
            if (this.mode === "single") {
                this.fnSetChecked(this.dsUser, e.row);
            }
        };

        this.divPopup_divUserList_grdUserList_oncelldblclick = function(obj,e)
        {
            if (this.mode === "single") {
                this.fnSetChecked(this.dsUser, e.row);
                this.fnCloseWithResult();
            }
        };

        this.divPopup_divBtns_btnAdd_onclick = function(obj,e)
        {
            this.fnCloseWithResult();
        };

        this.divPopup_divBtns_btnSelect_onclick = function(obj,e)
        {
            this.fnCloseWithResult();
        };

        this.divPopup_divBtns_btnReset_onclick = function(obj,e)
        {
            this.gfnPopupClose({
                reset: true
            });
        };

        this.divPopup_divBtns_btnPopupClose_onclick = function(obj,e)
        {
            this.gfnPopupClose({
                canceled: true
            });
        };

        this.Edit_onkeyup = function(obj,e)
        {
            if (e.keycode == 13) {
                this.fnSearch();
            }
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        this.fnCloseWithResult = function ()
        {
            var indices = this.gfnGetCheckedRows(this.dsUser, "rowCheck");
            var result = {};

            if (this.mode === "single") {
                const length = indices.length;
                if (length < 1) {
                    this.gfnAlert("사용자를 선택하세요.");
                    return;
                }

                result.user = this.fnConvertToObject(this.dsUser, indices[0]);
            } else {
                result.users = indices.map(i => this.fnConvertToObject(this.dsUser, i));
            }

            this.gfnPopupClose(result);
        };

        this.fnConvertToObject = function (dataset, row)
        {
            const cols = Array.from(dataset.colinfos);
            const entries = cols.map(e => e.name)
                .filter(n => n != "rowCheck" && n != "rowStatus")
                .map(n => [n, dataset.getColumn(row, n)]);

            return Object.fromEntries(entries);
        }

        this.fnSetChecked = function (ds, r) {
            ds.set_enableevent(false);

            for (var i = 0; i < ds.rowcount; i++) {
                if (i != r) {
                    ds.setColumn(i, "rowCheck", 0);
                } else {
                    ds.setColumn(i, "rowCheck", 1);
                }
            }

            ds.set_enableevent(true);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.userSearchPopup_onload,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.edtMemberId.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divPopup.form.divSearch.form.edtUserNm.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divPopup.form.divSearch.form.edtDeptNm.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divPopup.form.divSearch.form.edtJbpsNm.addEventHandler("onkeyup",this.Edit_onkeyup,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPopup_divSearch_btnSearch_onclick,this);
            this.divPopup.form.divUserList.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divUserList.form.grdUserList.addEventHandler("onheadclick",this.divPopup_divUserList_grdUserList_onheadclick,this);
            this.divPopup.form.divUserList.form.grdUserList.addEventHandler("oncellclick",this.divPopup_divUserList_grdUserList_oncellclick,this);
            this.divPopup.form.divUserList.form.grdUserList.addEventHandler("oncelldblclick",this.divPopup_divUserList_grdUserList_oncelldblclick,this);
            this.divPopup.form.divBtns.form.btnAdd.addEventHandler("onclick",this.divPopup_divBtns_btnAdd_onclick,this);
            this.divPopup.form.divBtns.form.btnSelect.addEventHandler("onclick",this.divPopup_divBtns_btnSelect_onclick,this);
            this.divPopup.form.divBtns.form.btnReset.addEventHandler("onclick",this.divPopup_divBtns_btnReset_onclick,this);
            this.divPopup.form.divBtns.form.btnPopupClose.addEventHandler("onclick",this.divPopup_divBtns_btnPopupClose_onclick,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
        };
        this.loadIncludeScript("userSearchPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
