(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HLP_1040M");
            this.set_titletext("처리 등록");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"hlpRqstTtl\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrMemberId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstDt\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstRsnCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstRsnCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpSttsCdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstCn\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstAtchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkCpltYmd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkCpltDt\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkCn\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicIdNm\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkAtchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstNo\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicIdMember\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstrIdMember\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"hlpRqstNo\" type=\"STRING\" size=\"256\"/><Column id=\"hlpRqstTypeCd\" type=\"STRING\" size=\"256\"/><Column id=\"hlpWkPicId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAskKindCbo", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02",null,"0","50","3275","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","28","50","792",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_02","45","379","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divResisterForm","50","28",null,"792","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","44",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","77",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","109",null,"268","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staTitle","0","44","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staRqstrNm","75%","44","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("6");
            obj.set_text("요청자");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitle:10","48",null,"26","staRqstrNm:10",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staAskKind","0","77","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("5");
            obj.set_text("요청분류");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staRqstCn","0","109","150","268",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("7");
            obj.set_text("요청내용");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new TextArea("textCn","staRqstCn:10","113",null,"259","10",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staStts","75.00%","77","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("22");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtStts","staStts:10","81",null,"26","170",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("9");
            obj.set_inputtype("english,dot,alpha,number");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","6","374",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staRqstAtchFile","0","374","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("13");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtstaRqstAtchFile","staRqstAtchFile:10","378","447","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDownload","edtstaRqstAtchFile:10","378","85","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("11");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staEnrollTitle","0","-27",null,"58","Static10_00:-500",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("14");
            obj.set_text("처리등록");
            obj.set_cssclass("sta_WF_compTitle01");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"377","65","28","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("16");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"377","65","28","btnDelete:5",null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("15");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Combo("cboAskKind","staAskKind:10","81","215","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsAskKindCbo");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("starqstrDt","25%","77","143","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("18");
            obj.set_text("요청일");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtrqstrDt","starqstrDt:10","81",null,"26","1046",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staReason","50.00%","77","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("20");
            obj.set_text("요청사유");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Combo("cboReason","staReason:10","81","215","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divResisterForm_form_cboReason_innerdataset = new nexacro.NormalDataset("divResisterForm_form_cboReason_innerdataset", obj);
            divResisterForm_form_cboReason_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">HLP-020-010</Col><Col id=\"datacolumn\">단순문의</Col></Row><Row><Col id=\"codecolumn\">HLP-020-020</Col><Col id=\"datacolumn\">업무문의</Col></Row><Row><Col id=\"codecolumn\">HLP-020-030</Col><Col id=\"datacolumn\">에러처리</Col></Row><Row><Col id=\"codecolumn\">HLP-020-040</Col><Col id=\"datacolumn\">데이터분석</Col></Row><Row><Col id=\"codecolumn\">HLP-020-050</Col><Col id=\"datacolumn\">데이터처리</Col></Row><Row><Col id=\"codecolumn\">HLP-020-060</Col><Col id=\"datacolumn\">프로세스개선</Col></Row><Row><Col id=\"codecolumn\">HLP-020-070</Col><Col id=\"datacolumn\">시스템분석</Col></Row><Row><Col id=\"codecolumn\">HLP-020-080</Col><Col id=\"datacolumn\">시스템개선</Col></Row></Rows>");
            obj.set_innerdataset(divResisterForm_form_cboReason_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtRqstrId","staRqstrNm:10","48",null,"26","170",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("23");
            obj.set_inputtype("english,dot,alpha,number");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtRqstrNm","edtRqstrId:5","48",null,"26","37",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("24");
            obj.set_inputtype("english,dot,alpha,number");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_01","6","407",null,"34","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkPicNm","160","411","151","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkPicNm","0","407",null,"34","edtWorkPicNm:10",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("27");
            obj.set_text("처리 담당자");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkType","25.00%","407",null,"34","1213",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("28");
            obj.set_text("처리유형");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Combo("cboWorkType","staWorkType:10","412","183","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("31");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divResisterForm_form_cboWorkType_innerdataset = new nexacro.NormalDataset("divResisterForm_form_cboWorkType_innerdataset", obj);
            divResisterForm_form_cboWorkType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">HLP-010-010</Col><Col id=\"datacolumn\">작성중</Col></Row><Row><Col id=\"codecolumn\">HLP-010-020</Col><Col id=\"datacolumn\">요청</Col></Row><Row><Col id=\"codecolumn\">HLP-010-030</Col><Col id=\"datacolumn\">접수</Col></Row><Row><Col id=\"codecolumn\">HLP-010-040</Col><Col id=\"datacolumn\">담당자지정</Col></Row><Row><Col id=\"codecolumn\">HLP-010-050</Col><Col id=\"datacolumn\">처리중</Col></Row><Row><Col id=\"codecolumn\">HLP-010-060</Col><Col id=\"datacolumn\">처리완료</Col></Row><Row><Col id=\"codecolumn\">HLP-010-070</Col><Col id=\"datacolumn\">최종완료</Col></Row></Rows>");
            obj.set_innerdataset(divResisterForm_form_cboWorkType_innerdataset);
            obj.set_value("");
            obj.set_index("-1");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staCpltDueDt","50.00%","407","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("32");
            obj.set_text("완료예정일");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Calendar("calCpltDueDt","staCpltDueDt:10","411","147","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("29");
            obj.set_displaynulltext("____-__-__");
            obj.set_dateformat("yyyyMMdd");
            obj.set_editformat("yyyyMMdd");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staCpltDt","75.00%","407",null,"34","230",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("33");
            obj.set_text("완료일");
            obj.set_cssclass("sta_WF_condition02");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Calendar("calCpltDt","staCpltDt:10","412","147","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("30");
            obj.set_displaynulltext("____-__-__");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","0","440",null,"268","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkCn","0","439","150","268",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            obj.set_text("처리내용");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new TextArea("textWorkCn","staWorkCn:10","444",null,"259","10",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("35");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_01_00","0","706",null,"34","6",null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Static("staWorkAtchFileNm","0","706","150","34",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("38");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_condition02_L");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Edit("edtWorkAtchFileNm","160","710","445","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnWokrDownload","edtWorkAtchFileNm:10","710","85","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("40");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnWorkUpload","btnWokrDownload:5","710","73","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("41");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnDeptMngr","edtWorkPicNm:5","411","26","26",null,null,null,null,null,null,this.divResisterForm.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_text("");
            this.divResisterForm.addChild(obj.name, obj);

            obj = new Button("btnModify",null,"10","65","28","0",null,null,null,null,null,this.divResisterForm.form);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("43");
            this.divResisterForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divResisterForm.form
            obj = new Layout("default","",0,0,this.divResisterForm.form,function(p){});
            this.divResisterForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divResisterForm.form.cboAskKind","value","dsList","hlpRqstTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divResisterForm.form.edtTitle","value","dsList","hlpRqstTtl");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divResisterForm.form.edtRqstrNm","value","dsList","hlpRqstrIdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divResisterForm.form.edtrqstrDt","value","dsList","hlpRqstDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divResisterForm.form.cboReason","value","dsList","hlpRqstRsnCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divResisterForm.form.edtStts","value","dsList","hlpSttsCdNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divResisterForm.form.textCn","value","dsList","hlpRqstCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divResisterForm.form.cboWorkType","value","dsList","hlpWkTypeCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divResisterForm.form.calCpltDueDt","value","dsList","hlpWkCpltYmd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divResisterForm.form.calCpltDt","value","dsList","hlpWkCpltDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divResisterForm.form.textWorkCn","value","dsList","hlpWkCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divResisterForm.form.edtWorkAtchFileNm","value","dsList","hlpWkAtchFileId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divResisterForm.form.edtWorkPicNm","value","dsList","hlpWkPicIdMember");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divResisterForm.form.edtRqstrId","value","dsList","hlpRqstrIdMember");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("HLP_1040M.xfdl","lib::common.xjs");
        this.registerScript("HLP_1040M.xfdl", function() {
        /**
        *  처리 등록
        *  MenuPath      온라인 요청관리 > 처리등록
        *  FileName      HLP_1040M.xfdl
        *  Creator 	     yuyr
        *  CreateDate    2023.12.07
        *  Desction      배너 조회 및 등록
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.12.7   yuyr 	 최초 생성
        *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        this.hlpRqstNo = "";

        this.hlpWkPicId = "";

        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this);

        	var param = this.getOwnerFrame().tabArgs.param;
        	this.hlpRqstNo = (param == null || Eco.isEmpty(param.hlpRqstNo)) ? null : param.hlpRqstNo;

        	this.dsSearch.setColumn(0, "hlpRqstNo", this.hlpRqstNo);

        	this.gfnLoadCombo("loadCombo", "dsAskKindCbo=PTS:WORK_CATEGORY:A", "fnCallBack");

            const today = Ex.util.getToday();
            this.dsList.setColumn(0, "hlpWkCpltYmd", today);
            this.dsList.setColumn(0, "hlpWkCpltDt", today);

        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /**
         * description 상세 조회
         */
        this.fnSearch = function()
        {
        	this.gfnTransaction("getHelpRequestManage", "hlp/helpRequest/getHelpRequestManage.do", "dsSearch", "dsList", "", "fnCallback");
        };

        /**
         * description 답변 저장
         */
        this.fnSave = function()
        {
        	this.gfnTransaction("setHelpRequestAnswer","hlp/helpRequest/setHelpRequestAnswer.do", "dsList", "", "", "fnCallback");
        };

        /**
         * description 삭제
         */
         this.fnDelete = function()
        {
        	this.dsList.setColumn(0, "rowStatus", "deleted");
        	this.gfnTransaction("delUpdateHelpRequestAnswer", "hlp/helpRequest/delUpdateHelpRequestAnswer.do", "dsList", "", "", "fnCallback");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
         /**
         * description 콤보 loadCombo
        */

        this.fnComboCallback = function (svcId, errorCode, errorMsg)
        {
        	switch(svcId) {
        		case "loadCombo":
        			if(this.hlpRqstNo != null && this.hlpRqstNo != "") {
        				this.fnSearch();
        			}
        			break;
        		default:
        			break;
        	}
        };

        /**
         * description Transaction CallBack 함수
        */
        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            switch (svcId) {
                case "getHelpRequestManage":
        			var hlpRqstrId = this.dsList.getColumn(0, "hlpRqstrId");
        			var userId = nexacro.getApplication().gdsUserInfo.getColumn(0, "userId");

        			if(hlpRqstrId == userId) {
        				this.divResisterForm.form.cboWorkType.set_enable(false);
        				this.divResisterForm.form.calCpltDueDt.set_enable(false);
        				this.divResisterForm.form.calCpltDt.set_enable(false);
        				this.divResisterForm.form.textWorkCn.set_enable(false);
        				this.divResisterForm.form.btnDeptMngr.set_enable(false);
        				this.divResisterForm.form.btnSave.set_enable(false);
        				this.divResisterForm.form.btnDelete.set_enable(false);
        			} else {
        				this.divResisterForm.form.edtTitle.set_enable(false);
        				this.divResisterForm.form.cboAskKind.set_enable(false);
        				this.divResisterForm.form.textCn.set_enable(false);
        				this.divResisterForm.form.btnModify.set_enable(false)
        			}
                    break;
        // 		case "setHelpRequestManage":
        // 			if(this.callbackMsg == "success"){
        // 				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        // 				this.dsSearch.setColumn(0, "hlpRqstrId", this.hlpRqstrId);
        //
        // 				this.fnSearch();
        // 			}else{
        // 				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        // 			}
        //             break;
        		case "setHelpRequestAnswer":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  	// 저장 되었습니다.
        				this.dsSearch.setColumn(0, "hlpWkPicId", this.hlpWkPicId);

        				this.fnSearch();
        			}else{
        				this.gfnAlert("CM_MSG_TEST_3");  		// 저장에 실패하였습니다.
        			}
                    break;

        		case "delUpdateHelpRequestAnswer":
        			if(this.callbackMsg == "success"){
                        this.gfnAlert("CM_MSG_DELETE_SUCCESS");  // 삭제 되었습니다.
                    }
                    break;
        		case "userSearchPopupMngr":
        			var result = this.gfnGetPopupRtn();
        			if (result == null) {
        				return;     // 취소시 항목의 ID를 변경하지 않음
        			}
        			var sUser = result.user;

        			if (!result.canceled) {
        				var row = this.dsList.rowposition;
        				this.dsList.setColumn(row, "hlpWkPicId", sUser.userId);
        				this.dsList.setColumn(row, "hlpWkPicIdMember", sUser.memberId);
        			}
        			break;
        		default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
         * description 수정 버튼 클릭
        */
        this.divResisterForm_btnModify_onclick = function(obj,e)
        {
        	var param = {
        		hlpRqstNo: this.dsList.getColumn(e.row, "hlpRqstNo"),

        	};
        	nexacro.getApplication().openNewTab("HLP_1020M", "요청 수정", "pts::hlp/helpRequest/HLP_1020M.xfdl", param , "관리메뉴 > 온라인 헬프 > 요청 수정", "");
        };

        /**
         * description 저장 버튼 클릭
        */
        this.btn_save_onclick = function(obj,e)
         {
        	this.fnBeforeSave();
         };

        /**
         * description 삭제 버튼 클릭
        */
        this.btn_delete_onclick = function(obj,e)
        {
        	this.gfnAlert("CM_CFM_DELETE", "", "", {trueFunc: "fnDelete", falseFunc: ""}); // 삭제하시겠습니까?
        };

        /**
         * description 담당자 추가 버튼
        */
        this.divResisterForm_btnDeptMngr_onclick = function(obj,e)
        {
        	const args = {
                mode: "single",
                enableReset: false
            };

        	this.gfnOpenPopup("userSearchPopupMngr", "cmm::userSearchPopup.xfdl", args, "fnCallback", "");
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
         /**
         * description 저장 전 확인
        */
        this.fnBeforeSave = function ()
        {
        	if(this.dsList.rowcount == 0){
        		this.gfnAlert("CM_MSG_SAVE_NODATA");  	// 저장할 데이터가 없습니다.
        		return;
        	}

        	if (!this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        		return;
        	}

             if (!this.fnValidate()) {
        		return;
            }

            this.gfnAlert("CM_CFM_BEFORE_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});  // 변경된 내역을 저장 하시겠습니까?
        };

        /**
         * description 유효성 체크
        */
         this.fnValidate = function ()
         {
             if (!this.gfnDsIsUpdated(this.dsList)) {
         		this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
         		return false;
             }

             var args = [
         		["hlpWkCn","NULL","처리내용"],
        		["hlpWkTypeCd", "NULL", "완료예정일"]
            ];

        	if (!this.gfnCheckGrid(this.dsList, args, "")) {
                return false;
            }
        	return true;
         };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static04_00_00_02.addEventHandler("onclick",this.Static31_onclick,this);
            this.divResisterForm.form.Static10_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.divResisterForm.form.staAskKind.addEventHandler("onclick",this.Div01_Static_comboBox_onclick,this);
            this.divResisterForm.form.textCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.divResisterForm.form.textCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.divResisterForm.form.staEnrollTitle.addEventHandler("onclick",this.sta_title_onclick,this);
            this.divResisterForm.form.btnDelete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.divResisterForm.form.btnSave.addEventHandler("onclick",this.btn_save_onclick,this);
            this.divResisterForm.form.Static10_00_00_00_00_00.addEventHandler("onclick",this.Div01_Static10_00_00_00_00_onclick,this);
            this.divResisterForm.form.textWorkCn.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.divResisterForm.form.textWorkCn.addEventHandler("onchanged",this.Div01_TextArea01_00_onchanged,this);
            this.divResisterForm.form.btnDeptMngr.addEventHandler("onclick",this.divResisterForm_btnDeptMngr_onclick,this);
            this.divResisterForm.form.btnModify.addEventHandler("onclick",this.divResisterForm_btnModify_onclick,this);
        };
        this.loadIncludeScript("HLP_1040M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
