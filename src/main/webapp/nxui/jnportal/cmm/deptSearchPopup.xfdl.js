(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptSearchPopup");
            this.set_titletext("부서 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"deptCd\" type=\"STRING\" size=\"20\"/><Column id=\"deptNm\" type=\"STRING\" size=\"150\"/><Column id=\"deptLdrId\" type=\"STRING\" size=\"20\"/><Column id=\"deptLdrNm\" type=\"STRING\" size=\"300\"/><Column id=\"deptMngrId\" type=\"STRING\" size=\"20\"/><Column id=\"deptMngrNm\" type=\"STRING\" size=\"300\"/><Column id=\"deptDesc\" type=\"STRING\" size=\"300\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"ordSn\" type=\"INT\" size=\"20\"/><Column id=\"upDeptCd\" type=\"STRING\" size=\"20\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"150\"/><Column id=\"level\" type=\"INT\" size=\"20\"/><Column id=\"matched\" type=\"STRING\" size=\"1\"/><Column id=\"deptNmPath\" type=\"STRING\" size=\"2147483647\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divPopup","0","0",null,"720","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staPopupTitle","0","0",null,"50","0",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("3");
            obj.set_text("부서 조회");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divPopup.addChild(obj.name, obj);

            obj = new Div("divSearch","30","70",null,"116","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_popup");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staSubTitle","20","0","169","45",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_taborder("0");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("staBg","20","45",null,"56","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_cssclass("sta_WF_bg");
            obj.set_taborder("1");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","40","60","100","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition01");
            obj.set_taborder("2");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","150","60","300","26",null,null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_maxlength("100");
            obj.set_taborder("3");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"14","63","26","20",null,null,null,null,null,this.divPopup.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch_W");
            this.divPopup.form.divSearch.addChild(obj.name, obj);

            obj = new Div("divDeptList","30","divSearch:10",null,"448","30",null,null,null,null,null,this.divPopup.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_popup");
            this.divPopup.addChild(obj.name, obj);

            obj = new Static("staTitle","20","0","81","45",null,null,null,null,null,null,this.divPopup.form.divDeptList.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divPopup.form.divDeptList.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","149","45",null,null,null,null,null,null,this.divPopup.form.divDeptList.form);
            obj.set_taborder("1");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subResult");
            this.divPopup.form.divDeptList.addChild(obj.name, obj);

            obj = new Grid("grdDeptList","20","45",null,null,"20","15",null,null,null,null,this.divPopup.form.divDeptList.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDept");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"240\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"부서코드\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:rowCheck\"/><Cell col=\"1\" text=\"bind:deptNm\" textAlign=\"left\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\" treestartlevel=\"1\" cssclass=\"expr:matched == &apos;Y&apos; ? &apos;matched&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:deptCd\" cssclass=\"expr:matched == &apos;Y&apos; ? &apos;matched&apos; : &apos;&apos;\"/></Band></Format><Format id=\"single\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"240\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\"/><Cell col=\"1\" text=\"부서명\"/><Cell col=\"2\" text=\"부서코드\"/></Band><Band id=\"body\"><Cell displaytype=\"imagecontrol\" expr=\"rowCheck === &apos;1&apos;  ? &apos;theme://images/rdo_WF_Radio_S.png&apos; : &apos;theme://images/rdo_WF_Radio.png&apos;\"/><Cell col=\"1\" text=\"bind:deptNm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treestartlevel=\"1\" treelevel=\"bind:level\" textAlign=\"left\" font=\"expr:matched == &apos;Y&apos; ? &apos;700 12px/1 &quot;Malgun Gothic&quot;&apos; : &apos;normal 12px/1 &quot;Malgun Gothic&quot;&apos;\" color=\"expr:matched==&apos;Y&apos;?&apos;#003880&apos;:&apos;#666666&apos;\" cssclass=\"expr:matched == &apos;Y&apos; ? &apos;matched&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:deptCd\" color=\"expr:matched==&apos;Y&apos;?&apos;#003880&apos;:&apos;#666666&apos;\" font=\"expr:matched == &apos;Y&apos; ? &apos;700 12px/1 &quot;Malgun Gothic&quot;&apos; : &apos;normal 12px/1 &quot;Malgun Gothic&quot;&apos;\" cssclass=\"expr:matched == &apos;Y&apos; ? &apos;matched&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.divPopup.form.divDeptList.addChild(obj.name, obj);

            obj = new Button("btnCollapse",null,"14","85","26","20",null,null,null,null,null,this.divPopup.form.divDeptList.form);
            obj.set_taborder("3");
            obj.set_text("전체닫힘");
            obj.set_cssclass("btn_WF_grdCollapse");
            this.divPopup.form.divDeptList.addChild(obj.name, obj);

            obj = new Button("btnExpand",null,"14","85","26","btnCollapse:5",null,null,null,null,null,this.divPopup.form.divDeptList.form);
            obj.set_taborder("4");
            obj.set_text("전체펼침");
            obj.set_cssclass("btn_WF_grdExpand");
            this.divPopup.form.divDeptList.addChild(obj.name, obj);

            obj = new Div("divBtns","30","669",null,"28","30",null,null,null,null,null,this.divPopup.form);
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

            //-- Default Layout : this.divPopup.form.divDeptList.form
            obj = new Layout("default","",0,0,this.divPopup.form.divDeptList.form,function(p){});
            this.divPopup.form.divDeptList.form.addLayout(obj.name, obj);

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
            obj = new Layout("default","",600,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPopup.form.divSearch.form.edtDeptNm","value","dsSearch","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("deptSearchPopup.xfdl","lib::common.xjs");
        this.registerScript("deptSearchPopup.xfdl", function() {
        /**
         *  부서 선택 팝업
         *  MenuPath      -
         *  FileName      cmm::deptSearchPopup.xfdl
         *  Creator       parksw
         *  CreateDate    2023.11.30
         *  Desription    부서 조회 팝업
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.30    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.deptSearchPopup_onload = function(obj,e)
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
                this.divPopup.form.divDeptList.form.grdDeptList.set_formatid("single");
                this.divPopup.form.divDeptList.form.grdDeptList.setCellProperty("head", 0, "text", "선택");
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
            this.gfnTransaction("getDeptList", "cmn/popup/deptSearch/getDeptList.do", "dsSearch", "dsDept", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getDeptList":
                    this.gfnRowCount(this.dsDept, this.divPopup.form.divDeptList.form.staGridRowCnt);
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

        this.divPopup_divDeptList_grdDeptList_onheadclick = function(obj,e)
        {
            if (this.mode !== "single") {
                this.gfnSetGridCheckAll(obj, e, "rowCheck");
            }
        };

        this.divPopup_divDeptList_grdDeptList_oncellclick = function(obj,e)
        {
            if (this.mode === "single") {
                this.fnSetChecked(this.dsDept, e.row);
            }
        };

        this.divPopup_divDeptList_grdDeptList_oncelldblclick = function(obj,e)
        {
            if (this.mode === "single") {
                this.fnSetChecked(this.dsDept, e.row);
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

        this.divPopup_divDeptList_btnCollapse_onclick = function(obj,e)
        {
            this.divPopup.form.divDeptList.form.grdDeptList.set_treeinitstatus("collapse,all");
        };

        this.divPopup_divDeptList_btnExpand_onclick = function(obj,e)
        {
            this.divPopup.form.divDeptList.form.grdDeptList.set_treeinitstatus("expand,all");
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnCloseWithResult = function ()
        {
            var indices = this.gfnGetCheckedRows(this.dsDept , "rowCheck");
            var result = {};

            if (this.mode === "single") {
                const length = indices.length;
                if (length < 1) {
                    this.gfnAlert("부서를 선택하세요.");
                    return;
                }

                result.dept = this.fnConvertToObject(this.dsDept, indices[0]);
                result.dept.deptNmPath = this.fnSplitDeptPath(result.dept.deptNmPath, "\\");
            } else {
                result.depts = indices.map(i => this.fnConvertToObject(this.dsDept, i));

                for (const dept of result.depts) {
                    dept.deptNmPath =this.fnSplitDeptPath(dept.deptNmPath, "\\");
                }
            }

            this.gfnPopupClose(result);
        };

        this.fnConvertToObject = function (dataset, row)
        {
            const cols = Array.from(dataset.colinfos);
            const entries = cols.map(e => e.name)
                .filter(n => n != "rowCheck" && n != "rowStatus" && n != "matched")
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
        };

        this.fnSplitDeptPath = function (path, delim) {
            if (Eco.isEmpty(path)) {
                return [];
            }

            return String(path || "").split(delim);
        };

        this.divPopup_divSearch_edtDeptNm_onkeyup = function(obj,e)
        {
        	if (e.keycode === 13) {
                this.fnSearch();
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptSearchPopup_onload,this);
            this.divPopup.form.divSearch.form.staSubTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divSearch.form.edtDeptNm.addEventHandler("onkeyup",this.divPopup_divSearch_edtDeptNm_onkeyup,this);
            this.divPopup.form.divSearch.form.btnSearch.addEventHandler("onclick",this.divPopup_divSearch_btnSearch_onclick,this);
            this.divPopup.form.divDeptList.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divPopup.form.divDeptList.form.grdDeptList.addEventHandler("oncellclick",this.divPopup_divDeptList_grdDeptList_oncellclick,this);
            this.divPopup.form.divDeptList.form.grdDeptList.addEventHandler("oncelldblclick",this.divPopup_divDeptList_grdDeptList_oncelldblclick,this);
            this.divPopup.form.divDeptList.form.grdDeptList.addEventHandler("onheadclick",this.divPopup_divDeptList_grdDeptList_onheadclick,this);
            this.divPopup.form.divDeptList.form.btnCollapse.addEventHandler("onclick",this.divPopup_divDeptList_btnCollapse_onclick,this);
            this.divPopup.form.divDeptList.form.btnExpand.addEventHandler("onclick",this.divPopup_divDeptList_btnExpand_onclick,this);
            this.divPopup.form.divBtns.form.btnAdd.addEventHandler("onclick",this.divPopup_divBtns_btnAdd_onclick,this);
            this.divPopup.form.divBtns.form.btnSelect.addEventHandler("onclick",this.divPopup_divBtns_btnSelect_onclick,this);
            this.divPopup.form.divBtns.form.btnReset.addEventHandler("onclick",this.divPopup_divBtns_btnReset_onclick,this);
            this.divPopup.form.divBtns.form.btnPopupClose.addEventHandler("onclick",this.divPopup_divBtns_btnPopupClose_onclick,this);
            this.dsDept.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
        };
        this.loadIncludeScript("deptSearchPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
