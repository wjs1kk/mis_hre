(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HLP_1030M");
            this.set_cssclass("frm_WF_comp");
            this.set_titletext("요청 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"hlpRqstNo\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTtl\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstCn\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkClsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkClsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicIdMember\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrIdMember\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleLog", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"organCd\" type=\"STRING\" size=\"256\"/><Column id=\"organNm\" type=\"STRING\" size=\"256\"/><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/><Column id=\"roleNm\" type=\"STRING\" size=\"256\"/><Column id=\"processTy\" type=\"STRING\" size=\"256\"/><Column id=\"processDt\" type=\"STRING\" size=\"256\"/><Column id=\"processById\" type=\"STRING\" size=\"256\"/><Column id=\"processByMemberId\" type=\"STRING\" size=\"256\"/><Column id=\"processByNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"processReason\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProcessType", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"hlpRqstNo\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTtl\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstCn\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkClsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkClsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpPicIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstDt\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkCpltDt\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicIdMember\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrIdMember\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPowCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSttsCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRqstrCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("요청 현황");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"105","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"90","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15_01_00_00","0","90","50",null,null,"55",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta001","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("업무분류");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","25%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtTitle","sta002:10","15","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta006","50%","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","50%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","20","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("요청번호");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAskCode","sta004:10","49","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta005","25%","49","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("요청내용");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAskContents","sta005:10","49","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003_00","75%","16","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProcess","sta003_00:10","15","234","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboProcess_innerdataset = new nexacro.NormalDataset("divSearch_form_cboProcess_innerdataset", obj);
            divSearch_form_cboProcess_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">작성중</Col><Col id=\"codecolumn\">HLP-010-010</Col></Row><Row><Col id=\"datacolumn\">요청</Col><Col id=\"codecolumn\">HLP-010-020</Col></Row><Row><Col id=\"datacolumn\">접수</Col><Col id=\"codecolumn\">HLP-010-030</Col></Row><Row><Col id=\"datacolumn\">담당자지정</Col><Col id=\"codecolumn\">HLP-010-040</Col></Row><Row><Col id=\"datacolumn\">처리중</Col><Col id=\"codecolumn\">HLP-010-050</Col></Row><Row><Col id=\"datacolumn\">처리완료</Col><Col id=\"codecolumn\">HLP-010-060</Col></Row><Row><Col id=\"datacolumn\">최종완료</Col><Col id=\"codecolumn\">HLP-010-070</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboProcess_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003_00_00","75%","51","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("요청사유");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAskReason","sta003_00_00:10","49","234","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboAskReason_innerdataset = new nexacro.NormalDataset("divSearch_form_cboAskReason_innerdataset", obj);
            divSearch_form_cboAskReason_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"datacolumn\">단순문의</Col><Col id=\"codecolumn\">HLP-020-010</Col></Row><Row><Col id=\"datacolumn\">업무문의</Col><Col id=\"codecolumn\">HLP-020-020</Col></Row><Row><Col id=\"datacolumn\">에러처리</Col><Col id=\"codecolumn\">HLP-020-030</Col></Row><Row><Col id=\"datacolumn\">데이터분석</Col><Col id=\"codecolumn\">HLP-020-040</Col></Row><Row><Col id=\"datacolumn\">데이터처리</Col><Col id=\"codecolumn\">HLP-020-050</Col></Row><Row><Col id=\"datacolumn\">프로세스개선</Col><Col id=\"codecolumn\">HLP-020-060</Col></Row><Row><Col id=\"datacolumn\">시스템분석</Col><Col id=\"codecolumn\">HLP-020-070</Col></Row><Row><Col id=\"datacolumn\">시스템개선</Col><Col id=\"codecolumn\">HLP-020-080</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboAskReason_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDirector","sta006:10","49","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAsker","sta003:10","15","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboWorkTy","sta001:10","15","240","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsPowCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divReqestResult","50","divSearch:0",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRqstList","0","45",null,null,"0","0",null,null,null,null,this.divReqestResult.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"115\"/><Column size=\"129\"/><Column size=\"245\"/><Column size=\"177\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"109\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"요청번호\"/><Cell col=\"2\" text=\"업무분류\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"요청사유\"/><Cell col=\"5\" text=\"요청자\"/><Cell col=\"6\" text=\"요청일\"/><Cell col=\"7\" text=\"완료일\"/><Cell col=\"8\" text=\"결과\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:hlpRqstNo\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:hlpRqstTypeCdNm\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:hlpRqstTtl\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:hlpRqstRsnCdNm\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:hlpRqstrIdMember\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:hlpRqstDt\" edittype=\"none\" combodataset=\"dsProcessType\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:hlpWkCpltDt\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:hlpSttsCdNm\"/></Band></Format></Formats>");
            this.divReqestResult.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","81","45",null,null,null,null,null,null,this.divReqestResult.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divReqestResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","staTitle:10","0","149","45",null,null,null,null,null,null,this.divReqestResult.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divReqestResult.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divReqestResult.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divReqestResult.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"10","75",null,"0","grdRqstList:5",null,null,null,null,this.divReqestResult.form);
            obj.set_text("요청등록");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.divReqestResult.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReqestResult.form
            obj = new Layout("default","",0,0,this.divReqestResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdRqstList.set_taborder("0");
                p.grdRqstList.set_binddataset("dsList");
                p.grdRqstList.set_autofittype("col");
                p.grdRqstList.set_autoenter("select");
                p.grdRqstList.set_autoupdatetype("itemselect");
                p.grdRqstList.move("0","45",null,null,"0","0");

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("검색결과");
                p.staTitle.set_cssclass("sta_WF_subTitle01");
                p.staTitle.move("0","0","81","45",null,null);

                p.staGridRowCnt.set_taborder("2");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("staTitle:10","0","149","45",null,null);

                p.Static04_00_00_00_00.set_taborder("3");
                p.Static04_00_00_00_00.set_text("h 45");
                p.Static04_00_00_00_00.set_visible("false");
                p.Static04_00_00_00_00.set_background("aqua");
                p.Static04_00_00_00_00.set_color("blue");
                p.Static04_00_00_00_00.set_textAlign("center");
                p.Static04_00_00_00_00.set_verticalAlign("middle");
                p.Static04_00_00_00_00.set_opacity("0.7");
                p.Static04_00_00_00_00.set_font("normal 12px/normal \"Arial\"");
                p.Static04_00_00_00_00.move("110","0","60","45",null,null);

                p.btnAdd.set_text("요청등록");
                p.btnAdd.set_cssclass("btn_WF_Save");
                p.btnAdd.set_visible("true");
                p.btnAdd.set_taborder("4");
                p.btnAdd.move(null,"10","75",null,"0","grdRqstList:5");
            	}
            );
            this.divReqestResult.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divReqestResult.form
            obj = new Layout("screen00","",0,0,this.divReqestResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divReqestResult.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_cssclass("frm_WF_comp");
                p.set_titletext("요청 현황");

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","50",null);

                p.staTitle.set_taborder("1");
                p.staTitle.set_text("요청 현황");
                p.staTitle.set_cssclass("sta_WF_compTitle01");
                p.staTitle.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"105","50",null);

                p.divReqestResult.set_taborder("3");
                p.divReqestResult.set_text("");
                p.divReqestResult.set_cssclass("div_WF_Area");
                p.divReqestResult.move("50","divSearch:0",null,null,"50","37");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00","",1280,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboWorkTy","value","dsSearch","hlpRqstTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtTitle","value","dsSearch","hlpRqstTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtAsker","value","dsSearch","hlpRqstrIdMember");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboProcess","value","dsSearch","hlpSttsCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtAskCode","value","dsSearch","hlpRqstNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtAskContents","value","dsSearch","hlpRqstCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtDirector","value","dsSearch","hlpWkPicIdMember");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboAskReason","value","dsSearch","hlpRqstRsnCd");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HLP_1030M.xfdl","lib::common.xjs");
        this.registerScript("HLP_1030M.xfdl", function() {
        /**
        *  요청현황
        *  MenuPath      온라인 요청관리 > 요청현황
        *  FileName      HLP_1030M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.11.30
        *  Desction      권한 변경 이력 조회
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.11.30    yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /*******************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);
        	this.fnLoadCombo();
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 콤보 조회
        */
         this.fnLoadCombo = function ()
         {
        	this.gfnLoadCombo("loadCombo", "dsPowCbo=PTS:WORK_CATEGORY:A", "fnCallback", "fnComboCallback");
         };

        /**
         * description 조회
         */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getHelpRequestList", "hlp/helpRequest/getHelpRequestList.do", "dsSearch", "dsList", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * description Transaction CallBack 함수
        */

         this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	 if (svcId == "loadCombo") {
        		 this.fnSearch();
        	 }
        };

        this.fnCallback = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        	   case "getHelpRequestList":
        			//총 건수 계산
        			this.gfnRowCount(this.dsList, this.divReqestResult.form.staGridRowCnt);
        		break;
        		default:
        		break;
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 조회버튼 클릭
        */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        /**
         * description 그리드 행 더블클릭 상세조회
        */
        this.divReqestResult_grdRqstList_oncelldblclick = function(obj,e)
        {
        	var param = {
        		hlpRqstNo: this.dsList.getColumn(e.row, "hlpRqstNo"),
        	};
        	nexacro.getApplication().openNewTab("HLP_1040M", "처리 상세 ", "pts::hlp/helpRequest/HLP_1040M.xfdl", param, "관리메뉴 > 온라인 헬프 > 요청 상세", "");
        };

        /**
         * description 요청 추가 이동 이벤트
        */
        this.divReqestResult_btnAdd_onclick = function(obj,e)
        {
        	nexacro.getApplication().openNewTab("HLP_1020M", "요청 등록", "pts::hlp/helpRequest/HLP_1020M.xfdl", "" , "관리메뉴 > 온라인 헬프 > 요청 등록", "");
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /**
         * description 엔터키 검색 이벤트
        */
        this.divSearch_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.btnSearch_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.Static15_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divSearch.form.sta001.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtTitle.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.sta006.addEventHandler("onclick",this.divSearch_Div00_sch_DEPT_CD_onclick,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.sta004.addEventHandler("onclick",this.divSearch_Div00_sch_DEPT_CD_onclick,this);
            this.divSearch.form.edtAskCode.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.sta005.addEventHandler("onclick",this.divSearch_Div00_sch_DEPT_CD_onclick,this);
            this.divSearch.form.edtAskContents.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.sta003_00.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboProcess.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.sta003_00_00.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.cboAskReason.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.edtDirector.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.edtDirector.addEventHandler("onchanged",this.divSearch_edtDirector_onchanged,this);
            this.divSearch.form.edtAsker.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.cboWorkTy.addEventHandler("onkeyup",this.divSearch_onkeyup,this);
            this.divSearch.form.cboWorkTy.addEventHandler("onitemchanged",this.divSearch_cboWorkTy_onitemchanged,this);
            this.divReqestResult.form.grdRqstList.addEventHandler("oncelldblclick",this.divReqestResult_grdRqstList_oncelldblclick,this);
            this.divReqestResult.form.staTitle.addEventHandler("onclick",this.Static09_onclick,this);
            this.divReqestResult.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divReqestResult.form.btnAdd.addEventHandler("onclick",this.divReqestResult_btnAdd_onclick,this);
            this.dsSearch.addEventHandler("cancolumnchange",this.dsSearch_cancolumnchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsSearch_cancolumnchange,this);
        };
        this.loadIncludeScript("HLP_1030M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
