(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("termsAgreement");
            this.set_titletext("약관 동의");
            this.set_scrollbartype("auto auto");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTerms", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"trmsId\" type=\"STRING\" size=\"256\"/><Column id=\"trmsCn\" type=\"STRING\" size=\"256\"/><Column id=\"esntlYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"trmsTitle\" type=\"STRING\" size=\"256\"/><Column id=\"agrmYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAgreement", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"trmsId\" type=\"STRING\" size=\"256\"/><Column id=\"esntlYn\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"agrmYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divStep","0","245","1560","201",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_flexshrink("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","1560","125",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle");
            obj.set_text("회원가입");
            obj.set_textAlign("center");
            obj.set_flexshrink("0");
            this.divStep.addChild(obj.name, obj);

            obj = new Static("Static01","0","125","520","66",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep1_S");
            obj.set_text("약관동의");
            this.divStep.addChild(obj.name, obj);

            obj = new Static("Static03","520","125","520","66",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep2_S_step3");
            obj.set_text("가입양식작성");
            this.divStep.addChild(obj.name, obj);

            obj = new Static("Static04","1040","125","520","66",null,null,null,null,null,null,this.divStep.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep4");
            obj.set_text("가입완료");
            this.divStep.addChild(obj.name, obj);

            obj = new Div("divAgreeAll","0","191","1560","103",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_flexshrink("0");
            obj.set_cssclass("div_WF_Area");
            obj.set_flexgrow("0");
            this.addChild(obj.name, obj);

            obj = new Static("staNotice","0","54",null,"39","0",null,null,null,null,null,this.divAgreeAll.form);
            obj.set_taborder("0");
            obj.set_text("* 개인정보 제공자가 동의한 내용외 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다. ");
            obj.set_cssclass("portal_sta_joinInfo");
            obj.set_flexshrink("0");
            obj.set_flexgrow("0");
            this.divAgreeAll.addChild(obj.name, obj);

            obj = new CheckBox("chkAgreeAll","0","30",null,"24","0",null,null,null,null,null,this.divAgreeAll.form);
            obj.set_taborder("1");
            obj.set_text("국방기술진흥연구소 과제관리시스템의 이용약관, 개인정보 수집에 모두 동의합니다.");
            obj.set_cssclass("portal_chk_joinAll");
            obj.set_flexshrink("0");
            obj.set_flexgrow("0");
            this.divAgreeAll.addChild(obj.name, obj);

            obj = new Div("divTermsList","644","508","1560","684",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Area");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn","396","1004","1560","150",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","715","83","130","45",null,null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("다음");
            obj.set_cssclass("portal_btn");
            this.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStep.form
            obj = new Layout("default","",0,0,this.divStep.form,function(p){});
            this.divStep.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAgreeAll.form
            obj = new Layout("default","",0,0,this.divAgreeAll.form,function(p){});
            this.divAgreeAll.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTermsList.form
            obj = new Layout("default","",0,0,this.divTermsList.form,function(p){});
            obj.set_verticalgap("14");
            this.divTermsList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1140,this,function(p){});
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MIF_1010M.xfdl","lib::common.xjs");
        this.registerScript("MIF_1010M.xfdl", function() {
        /**
         *  약관 동의
         *  MenuPath      회원가입 - 약관 동의
         *  FileName      MIF_1010M.xfdl
         *  Creator       parksw
         *  CreateDate    2023.10.23
         *  Desction      약관 동의
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.10.23    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.termsDivIds = [];

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        /**
         * @description 화면 로드
         */
        this.termsAgreement_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);
            this.fnSearch();
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        this.fnSearch = function ()
        {
        	this.gfnTransaction("clearAgrm", "mi/register/clearTermsAgreement.do", "", "", "", "fnCallback");
        	this.gfnTransaction("getTerms", "mi/register/getTerms.do", "", "dsTerms", "", "fnCallback");
        };

        this.fnSave = function ()
        {
        	this.gfnTransaction("setAgrm", "mi/register/setTermsAgreement.do", "dsTerms", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getTerms":
                    while (this.termsDivIds.length > 0) {
                        let i = this.termsDivIds.length - 1;
                        const removed = this.removeChild(this.termsDivIds[i]);
                        if (div != null) {
                            div.destroy();
                        }

                        this.termsDivIds.splice(i, 1);
                    }

                    const termsCount = this.dsTerms.getRowCount();
                    const termsHeight = termsCount * 335 + (termsCount - 1) * 14;
                    //this.set_height(456 + termsHeight);
                    this.divTermsList.set_height(termsHeight);

                    for (let i = 0; i < termsCount; i++) {
                        const id = "divTerm" + (i + 1);
                        const div = new nexacro.Div(id, 0, 0, 1560, 335, 0, 0, 1560, 1560, 335, 335);
                        this.divTermsList.insertChild(i, id, div);
                        div.show();
                        this.termsDivIds.push(id);
                        div.set_async(false);
                        div.set_width("100%");
                        div.set_height(335);
                        div.set_left(0);
                        div.set_top(i * 349);
                        div.termIndex = i;
                        div.sysId = this.dsTerms.getColumn(i, "sysId");
                        div.trmsId = this.dsTerms.getColumn(i, "trmsId");
                        div.trmsTitle = this.dsTerms.getColumn(i, "trmsTitle");
                        div.trmsCn = this.dsTerms.getColumn(i, "trmsCn");
                        div.esntlYn = this.dsTerms.getColumn(i, "esntlYn");
                        div.agrmYn = 'N';
                        div.set_url("pts::mif/MIF_0010U.xfdl");
                        div.form.onvaluechanged = this.divTerm_onvaluechanged.bind(this);
                    }
                    this.resetScroll();
                    break;
                case "setAgrm":
                    this.fnGoRegisterForm();
                    break;
                default:
                    break;
            }
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divBtn_btnNext_onclick = function(obj,e)
        {
            if (!this.fnValidate()) {
                return;
            }

            this.fnSave();
        };

        this.divTerm_onvaluechanged = function (obj, e)
        {
            this.dsTerms.setColumn(e.index, "agrmYn", e.agrmYn);

            let checked = true;
            for (let i = 0; (i < this.termsDivIds.length) && checked; i++) {
                const div = this.divTermsList.form[this.termsDivIds[i]];
                if (div.esntlYn === "Y") {
                    checked = checked && (div.form.getAgrmYn() == "Y");
                }
            }

            this.divAgreeAll.form.chkAgreeAll.set_value(checked);
        };

        this.divAgreeAll_chkAgreeAll_onclick = function(obj,e)
        {
            const value = obj.value ? "Y" : "N";
            for (let i = 0; (i < this.termsDivIds.length) && value; i++) {
                const div = this.divTermsList.form[this.termsDivIds[i]];
                if (div.esntlYn === "Y") {
                    div.form.setAgrmYn(value);
                }
            }
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        this.fnValidate = function ()
        {
            let result = true;
            for (let i = 0; (i < this.dsTerms.rowcount) && result; i++) {
                if (this.dsTerms.getColumn(i, "esntlYn") === "Y") {
                    result = result && (this.dsTerms.getColumn(i, "agrmYn") == "Y");
                }
            }

            if (!result) {
                this.gfnAlert("필수 약관에 모두 동의해야 합니다.");
                return false;
            }

            return true;
        };

        this.fnGoRegisterForm = function ()
        {
            nexacro.getApplication().goPage("identification", "pts::mif/MIF_1020M.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.termsAgreement_onload,this);
            this.divAgreeAll.form.chkAgreeAll.addEventHandler("onclick",this.divAgreeAll_chkAgreeAll_onclick,this);
            this.divBtn.form.btnNext.addEventHandler("onclick",this.divBtn_btnNext_onclick,this);
        };
        this.loadIncludeScript("MIF_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
