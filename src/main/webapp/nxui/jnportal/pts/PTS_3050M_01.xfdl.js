(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_3050M_01");
            this.set_titletext("Q&A");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1190);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo02", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">0</Col><Col id=\"text\">제목</Col></Row><Row><Col id=\"value\">1</Col><Col id=\"text\">내용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/><Column id=\"col7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col2\">국산화부품 도입단가 관련 질문</Col><Col id=\"col3\">Jk***</Col><Col id=\"col4\">2023.02.27</Col><Col id=\"col5\">답변완료</Col><Col id=\"col1\">10</Col><Col id=\"col6\">99</Col><Col id=\"col7\">과제기획</Col></Row><Row><Col id=\"col1\">9</Col><Col id=\"col2\">참여연구원 변경 신청</Col><Col id=\"col3\">ge***</Col><Col id=\"col4\">2023.02.24</Col><Col id=\"col5\">답변완료</Col><Col id=\"col6\">214</Col><Col id=\"col7\">과제공고</Col></Row><Row><Col id=\"col1\">8</Col><Col id=\"col2\">도면번호 신청관련 문의건</Col><Col id=\"col3\">qw***</Col><Col id=\"col4\">2023.02.17</Col><Col id=\"col5\">답변대기</Col><Col id=\"col6\">33</Col><Col id=\"col7\">시스템</Col></Row><Row><Col id=\"col1\">7</Col><Col id=\"col2\">부품국산화 개발 대상제외 기준 문의</Col><Col id=\"col3\">jy***</Col><Col id=\"col4\">2023.02.07</Col><Col id=\"col5\">답변완료</Col><Col id=\"col6\">45</Col><Col id=\"col7\">평가</Col></Row><Row><Col id=\"col1\">6</Col><Col id=\"col2\">국방벤처센터 협약기업 지원사업 문의</Col><Col id=\"col3\">ik***</Col><Col id=\"col4\">2023.02.06</Col><Col id=\"col5\">답변대기</Col><Col id=\"col6\">56</Col><Col id=\"col7\">평가</Col></Row><Row><Col id=\"col1\">5</Col><Col id=\"col2\">방위사업초기 진입시 질문</Col><Col id=\"col3\">ef***</Col><Col id=\"col4\">2023.02.06</Col><Col id=\"col5\">답변완료</Col><Col id=\"col6\">67</Col><Col id=\"col7\">과제공고</Col></Row><Row><Col id=\"col1\">4</Col><Col id=\"col2\">부품국산화 등록절차 문의</Col><Col id=\"col3\">lu***</Col><Col id=\"col4\">2023.01.27</Col><Col id=\"col5\">답변완료</Col><Col id=\"col6\">78</Col><Col id=\"col7\">기타</Col></Row><Row><Col id=\"col1\">3</Col><Col id=\"col2\">과제관리 관련 문의사항</Col><Col id=\"col3\">ur***</Col><Col id=\"col4\">2023.01.22</Col><Col id=\"col5\">답변완료</Col><Col id=\"col6\">89</Col><Col id=\"col7\">과제기획</Col></Row><Row><Col id=\"col1\">2</Col><Col id=\"col2\">수출지원사업 등록 관련 문의</Col><Col id=\"col3\">le***</Col><Col id=\"col4\">2023.01.21</Col><Col id=\"col5\">답변완료</Col><Col id=\"col6\">99</Col><Col id=\"col7\">과제공고</Col></Row><Row><Col id=\"col1\">1</Col><Col id=\"col2\">담당부서 문의</Col><Col id=\"col3\">pa***</Col><Col id=\"col4\">2023.01.20</Col><Col id=\"col5\">답변대기</Col><Col id=\"col6\">2134</Col><Col id=\"col7\">과제공고</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">0</Col><Col id=\"text\">접수중</Col></Row><Row><Col id=\"value\">1</Col><Col id=\"text\">접수대기</Col></Row><Row><Col id=\"value\">2</Col><Col id=\"text\">마감</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","180","0",null,"1053","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"127","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Q&A");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_pTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:90","86","92",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("전체 <fc v=\'#213878\'>350</fc>건");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdTotal");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"Static00:120","60","38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_btn");
            obj.set_text("검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit07",null,"247","150","38","btnSearch:10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("검색어 입력");
            obj.set_cssclass("portal_edi_search");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"Static00:120","100","38","Edit07:10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_displaynulltext("선택");
            obj.set_innerdataset("dsCombo02");
            obj.set_codecolumn("value");
            obj.set_datacolumn("text");
            obj.set_cssclass("portal_cmb_bd");
            obj.set_text("공모명");
            obj.set_value("0");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","Static01:0",null,null,"0","65",null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_tooltiptype("default");
            obj.set_autofittype("col");
            obj.set_cssclass("portal_grd_bdList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"180\"/><Column size=\"960\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"67\" band=\"head\"/><Row size=\"61\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"진행상태\"/><Cell col=\"6\" text=\"조회수\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\"/><Cell col=\"1\" text=\"bind:col7\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" text=\"bind:col2\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:col3\" cssclass=\"\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:col4\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" cssclass=\"expr:dataset.parent.fnGridStates(col5)\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:col5\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:col6\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"Grid01:20","98","45","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("글쓰기");
            obj.set_font("normal 700 16px/normal \"맑은고딕\"");
            obj.set_cssclass("portal_btn");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static10","375","Static00:43","82","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory_on");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static11","467","170","116","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("과제기획");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static12","593","170","116","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("과제공고");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","719","170","82","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("협약");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","811","170","82","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("수행");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","903","170","99","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("사업비");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static16","1012","170","82","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("평가");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static17","1104","170","82","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("기타");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_bdCategory");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("divPagging","180","Div00:0",null,"38","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("divPagging");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","741","divPagging:0","584","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","180","divPagging:0","160","42",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPagging
            obj = new Layout("default","",0,0,this.divPagging.form,function(p){});
            this.divPagging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_3050M_01.xfdl", function() {
        this.fnGridStates = function(nCol) {
        	var setClass = "";
        	if(nCol == "답변완료") {
        		setClass = "grd_state0";
        	}
        	else if(nCol == "답변대기") {
        		setClass = "grd_state1";
        	}
        	return setClass;
        }
        this.Div00_Button01_onclick = function(obj,e)
        {
        	var sMenuId = "joinComplete";
        	var url = "Login::join_complete.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };


        this.Div00_Button06_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popupCompany", "absolute", 0, 0, 800, 640);
        	objChild.set_formurl("Login::popup_company.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        this.fn_callback_pop = function(sPopupId, sReturn)
        {

        }

        this.Div00_Button07_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popupCompanyRegist", "absolute", 0, 0, 810, 360);
        	objChild.set_formurl("Login::popup_companyRegist.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("all");

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callback_pop");
        };

        this.Div00_Grid01_oncellclick = function(obj,e)
        {

        };


        /**************************************************************************
         * FORM 변수 선언 영역
         **************************************************************************/
        this.totRowCount = 0;

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.Pattern01_onload = function(obj,e)
        {
        	/*
        	 페이징 처리 값 세팅 함수 호출
        	 1. 페이지 처리 갯수
        	 2. 한번에 출력될 row 갯수
        	 3. 총계및 페이징 이동 활성화 여부
        	 4. transaction 함수
        	*/

        	var objDivPagging	= this.divPagging;

        	var objConfig = {
        						nPageCount : 10,
        						nPageRowCount : 30,
        						bPageViewActive : true,
        						objPageSearchFunction : this.fnSearchPagging,
        						objSearchButton	: this.Div00.form.btnSearch
        					}

        	this.fnInitPageSet(objDivPagging, objConfig);
        };

        /**************************************************************************
         * CALLBACK 콜백 처리부분(Transaction)
         **************************************************************************/
        /**
         * @description Transaction CallBack 함수
        */
        this.fnCallback = function(sId,errCode,errMsg)
        {	//return val - this.totRowCount
        /*
        	if(errCode<0)
        	{
        		this.btnSearch.set_enable(true);
        	}
        */
        	if(sId == "PAGE")
        	{
        		this.divPagging.nTotalRowCount = this.totRowCount;
        		this.fnCallAfter(this.divPagging);
        	}
        }

        /**************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         **************************************************************************/
        /**
         * @description 조회
        */
        this.fnSearchPagging = function(nPageNo)
        {
        	//pagging transaction
        	//return callback - this.totRowCount
        	this.Dataset00.clearData();

        	var sId 	= "PAGE";
        	var sUrl 	= "http://localhost:8080/service/page_sample.jsp";
        	var sInDs 	= "";
        	var sOutDs 	= "Dataset00=output";
        	var sParam 	= "pageNo=" + nPageNo + " rowCount=" + this.divPagging.config.nSelRowCount;
        	var sCallback 	= "fnCallback";

        	this.transaction(sId, sUrl, sInDs, sOutDs, sParam, sCallback);

        	//local test
        	/*
        	this.divPagging.nTotlaRowCount = 1234;
        	this.fnCallAfter(this.divPagging);
        	*/
        };

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description pagging select

        this.btnSearch_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	--> 조회처리 공통영역으로 변경
        };
        */

        /**
        *  techtip pagging sample
        *  @MenuPath   techtip > pagging
        *  @FileName	pagging.xjs
        *  @Desction	grid pagging sample script library
        *******************************************************************************
        *  2019.03.20		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
        /**
        * @description form onload --> define a user variable
        * @param objDiv	: pagging div
        *		 objConfig : {nPageCount, nPageRowCount, bPageViewActive, objPageSearchFunction, objSearchButton}
        * @return
        */
        this.fnInitPageSet = function (objDiv, objConfig)
        {
        	objConfig.objSearchButton.status = "init";

        	objConfig.objSearchButton.addEventHandler("onclick",this.btnSearch_onclick, this);

        	objDiv.config = objConfig;
        	//pagging processing variable
        	objDiv.config.nEndPageNo	= objConfig.nPageCount;		//end pagging number
        	objDiv.config.nMaxPageNo	= objConfig.nPageCount;		//max pagging number (not change)
        	objDiv.config.nSelRowCount	= objConfig.nPageRowCount;	//grid row count (not change)
        	objDiv.config.nStartPageNo	= 1;						//start pagging number
        	objDiv.config.nNowPageNo	= 1;						//now pagging number
        	objDiv.config.nPageBlock	= 0;						//block count
        	objDiv.config.nTotalCount	= 0;						//total row count

        	/* component name List
        	-----------------------------------------------------
        	divComm  --> pagging number and move button div
        	.btnFirst	--> first		"<<"
        	.btnPrev	--> previous	"<"
        	.btnNext	--> next		">"
        	.btnLast	--> last		">>"
        	divTotal --> total pagging div
        	.edtNow		--> current page or input number to move
        	.staTotal	--> total page number
        	.btnGo		--> page move button */
        	objDiv.config.arrDivNames  = new Array("divComm","divTotal");						//div names
        	objDiv.config.arrBtnNames  = new Array("portal_btn_PagingFirst","portal_btn_PagingPrev","portal_btn_PagingNext","portal_btn_PagingLast");	//move button names
        	objDiv.config.arrCompNames = new Array("edtNow","staTotal","btnGo");				//div total component names

        	//component size in pagging div
        	//objConfig.nMoveBtnTop		= 0;	//button top (common)
        	objDiv.config.nMoveBtnHeight	= 38;	//button height (common)
        	objDiv.config.nMoveBtnWidth		= 38;	//comm move button & edit width
        	objDiv.config.nMoveCountBtnWidth= 38;	//comm number button width
        	objDiv.config.nMoveCountBtnGap	= 5;	//comm button size gap (common)
        	objDiv.config.ntotControlWidth  = 38;	//total button & edit width
        	objDiv.config.ntotStaWidth		= 38;	//total static width

        	//css class id
        	objDiv.config.divCommClass	 = "";
        	objDiv.config.divTotalClass	 = "";
        	objDiv.config.btnMoveClass	 = new Array("portal_btn_PagingFirst","portal_btn_PagingPrev","portal_btn_PagingNext","portal_btn_PagingLast");	//first, prev, next, last class (move button) - 각 클래스 별도로 적용 시 text 삭제 필요
        	objDiv.config.btnNumClass	 = "portal_btn_paging";	//comm.page number class
        	objDiv.config.edtNowClass	 = "";	//total.edtNow class
        	objDiv.config.staTotalClass	 = "";	//total.staTotal class
        	objDiv.config.btnGoClass	 = "";	//total.btnGo class

        	//go button text
        	objDiv.config.btnGoText = "move";

        	this.fnInitDivFormat(objDiv);
        }

        /**
        * @description create div component in pagging Div
        * @param objDiv	: pagging div
        * @return
        */
        this.fnInitDivFormat = function(objDiv)
        {
        	var objConfig = objDiv.config;

        	//add pagging div onsize event
        	objDiv.addEventHandler("onsize",this.divpaggingComm_onsize,this);

        	var sThisWidth 	= objDiv.getOffsetWidth();
        	var sThisHeight	= objDiv.getOffsetHeight();

        	objConfig.nMoveBtnTop = Math.floor((sThisHeight - objConfig.nMoveBtnHeight)/2);

        	objDiv.objDivTotal = null;

        	if(objConfig.bPageViewActive)
        	{
        		objDiv.objDivTotal = this.fnCreateDivTotal(objDiv);
        	}

        	objDiv.objDivComm = this.fnCreateDivComm(objDiv);
        }

        /**
        * @description create divComm component
        * @param objDiv	: pagging div
        * @return objCreateDiv : divComm
        */
        this.fnCreateDivComm = function(objDiv)
        {
        	var objConfig = objDiv.config;
        	var nObjWidth = objDiv.getOffsetWidth();
        	var bCommVisible = objConfig.bPageViewActive;

        	if(bCommVisible)
        	{
        		nObjWidth -= objDiv.objDivTotal.getOffsetWidth();
        	}

        	//create divComm
        	var objCreateDiv = new Div();
        	var objCreateDivId = objConfig.arrDivNames[0];
        	objCreateDiv.init(objCreateDivId,0,0,nObjWidth,null,null,0);
        	objCreateDiv.set_cssclass(objConfig.divCommClass);
        	objDiv.addChild(objCreateDivId,objCreateDiv);
        	objCreateDiv.show();

        	var sDivpaggingWidth = (objConfig.nMoveBtnWidth*4+objConfig.nMoveCountBtnGap*4)+(objConfig.nPageCount*objConfig.nMoveCountBtnWidth)+((objConfig.nPageCount-1)*objConfig.nMoveCountBtnGap);

        	//move to center
        	objCreateDiv.setOffsetWidth(sDivpaggingWidth);
        	objCreateDiv.setOffsetLeft(parseInt((nObjWidth-sDivpaggingWidth)/2));

        	//button size
        	var btnLeft	  = objConfig.nMoveBtnWidth+(objConfig.nMoveCountBtnGap*2)+objConfig.nMoveBtnWidth;
        	var btnTop	  = objConfig.nMoveBtnTop;
        	var btnWidth  = objConfig.nMoveCountBtnWidth;
        	var btnHeight = objConfig.nMoveBtnHeight;

        	var objButton;
        	var objBtnId = "";

        	//create page move button in divComm
        	for(var i=0; i<objConfig.nPageCount; i++)
        	{
        		objButton	= new Button();
        		objBtnId	= "btn"+i;
        		objButton.init(objBtnId,btnLeft,btnTop,btnWidth,btnHeight,null,null);
        		objButton.set_text(i+1);
        		objButton.set_cssclass(objConfig.btnNumClass);
        		objButton.set_enable(false);
        		objButton.addEventHandler("onclick",this.divPaggingNumber_onclick, this);

        		objCreateDiv.addChild(objBtnId,objButton);
        		objButton.show();

        		btnLeft += (btnWidth + objConfig.nMoveCountBtnGap);
        	}

        	btnLeft = 0;
        	btnWidth = objConfig.nMoveBtnWidth;

        	var btnRight = null;
        	var objBtnText = "";

        	//create page number button in divComm
        	for(var i=0; i<4; i++)
        	{
        		objButton	= new Button();
        		objBtnId	= objConfig.arrBtnNames[i];

        		switch(i)
        		{
        			case 0:
        				btnLeft = 0;
        				btnRight = null;
        				//objBtnText = "";	//first
        				break;
        			case 1:
        				btnLeft = btnWidth+objConfig.nMoveCountBtnGap;
        				btnRight = null;
        				//objBtnText = "";	//prev
        				break;
        			case 2:
        				btnLeft = null;
        				btnRight = btnWidth+objConfig.nMoveCountBtnGap;
        				//objBtnText = "";	//next
        				break;
        			case 3:
        				btnLeft = null;
        				btnRight = 0;
        				//objBtnText = "";	//last
        				break;
        			default:
        		}

        		objButton.init(objBtnId,btnLeft,btnTop,btnWidth,btnHeight,btnRight,null);
        		//objButton.set_text(objBtnText);
        		objButton.set_cssclass(objConfig.btnMoveClass[i]);
        		objButton.set_enable(false);
        		objButton.addEventHandler("onclick",this.divpaggingButton_onclick, this);

        		objCreateDiv.addChild(objBtnId,objButton);
        		objButton.show();
        	}

        	return objCreateDiv;
        }

        /**
        * @description create divTotal component
        * @param objDiv	: pagging div
        * @return objCreateDiv : divTotal
        */
        this.fnCreateDivTotal = function(objDiv)
        {
        	var objConfig = objDiv.config;
        	var divWidth = (objConfig.ntotControlWidth*2) + objConfig.ntotStaWidth + objConfig.nMoveCountBtnGap;

        	//create divTotal
        	var objDivCreate = new Div();
        	var objDivCreateId = objConfig.arrDivNames[1];
        	objDivCreate.init(objDivCreateId,null,0,divWidth,null,0,0);
        	objDivCreate.set_cssclass(objConfig.divTotalClass);
        	objDiv.addChild(objDivCreateId,objDivCreate);
        	objDivCreate.show();
        	/*
        	var nRight = 0;

        	//create go button in divTotal
        	var objBtn = new Button();
        	var objBtnId = objConfig.arrCompNames[2];
        	objBtn.init(objBtnId,null,objConfig.nMoveBtnTop,objConfig.ntotControlWidth,objConfig.nMoveBtnHeight,nRight,null);
        	objBtn.set_cssclass(objConfig.btnGoClass);
        	objBtn.set_text(objConfig.btnGoText);
        	objBtn.addEventHandler("onclick",this.btnGo_onclick,this);
        	objDivCreate.addChild(objBtnId,objBtn);
        	objBtn.show();

        	nRight = nRight + objConfig.ntotControlWidth;

        	//create total static in divTotal
        	var objSta = new Static();
        	var objStaId = objConfig.arrCompNames[1];
        	objSta.init(objStaId,null,objConfig.nMoveBtnTop,objConfig.ntotStaWidth,objConfig.nMoveBtnHeight,nRight,null);
        	objSta.set_cssclass(objConfig.staTotalClass);
        	objSta.set_text("/");
        	objDivCreate.addChild(objStaId,objSta);
        	objSta.show();

        	nRight = nRight + objConfig.ntotStaWidth + objConfig.nMoveCountBtnGap;

        	//create now Number edit in divTotal
        	var objEdt = new Edit();
        	var objEdtId = objConfig.arrCompNames[0];
        	objEdt.init(objEdtId,null,objConfig.nMoveBtnTop,objConfig.ntotControlWidth,objConfig.nMoveBtnHeight,nRight,null);
        	objEdt.set_cssclass(objConfig.edtNowClass);
        	objDivCreate.addChild(objEdtId,objEdt);
        	objEdt.show();*/

        	return objDivCreate;
        }

        /**
        * @description pagging total div
        * @param objDiv	: pagging div
        * @return
        */
        this.fnCallAfter = function (objDiv)
        {
        	var objConfig = objDiv.config;

        	//pagging block & totalCount
        	objConfig.nPageBlock	= Math.ceil(objDiv.nTotalRowCount/objConfig.nSelRowCount);	//ceil : last blobk + 1
        	objConfig.nTotalCount	= objDiv.nTotalRowCount;

        	if(objConfig.bPageViewActive)
        	{
        		var objTemp = objDiv.objDivTotal.form.components[objConfig.arrCompNames[0]];
        		objTemp.set_value(objConfig.nNowPageNo);

        		var objTemp = objDiv.objDivTotal.form.components[objConfig.arrCompNames[1]];
        		objTemp.set_text("/ " + objConfig.nPageBlock);
        	}

        	this.fnSetPageNo(objDiv);
        };

        /**
        * @description set start & end pagging number
        * @param objDiv	: pagging div
        * @return
        */
        this.fnSetPageIndex = function (objDiv)
        {
        	var objConfig = objDiv.config;
        	var btnText = objConfig.nCurBtnName;
        	var objNum = objConfig.nNowPageNo;
        	if(btnText==objConfig.arrBtnNames[0])
        	{	// btnFirst "<<"
        		objConfig.nStartPageNo = 1;
        		objConfig.nEndPageNo   = 1 + (objConfig.nMaxPageNo-1);

        		objNum = objConfig.nStartPageNo;
        	}
        	else if(btnText==objConfig.arrBtnNames[1])
        	{	// btnPrev "<"
        		objConfig.nStartPageNo = objConfig.nStartPageNo - objConfig.nMaxPageNo;
        		objConfig.nEndPageNo   = objConfig.nStartPageNo + (objConfig.nMaxPageNo-1);

        		objNum = objConfig.nStartPageNo;
        	}else if(btnText==objConfig.arrBtnNames[3]){
        		// btnLast ">>"
        		objConfig.nEndPageNo   = objConfig.nPageBlock;
        		objConfig.nStartPageNo = parseInt(objConfig.nPageBlock/objConfig.nMaxPageNo)*objConfig.nMaxPageNo+ 1;
        		objNum = objConfig.nEndPageNo;
        	}
        	else if(btnText==objConfig.arrBtnNames[2])
        	{	// btnNext ">"
        		objConfig.nStartPageNo = objConfig.nStartPageNo + objConfig.nMaxPageNo;
        		objConfig.nEndPageNo   = objConfig.nStartPageNo + (objConfig.nMaxPageNo-1);

        		if(objConfig.nEndPageNo > objConfig.nPageBlock)
        		{
        			objConfig.nEndPageNo = objConfig.nPageBlock;
        		}

        		objNum = objConfig.nStartPageNo;
        	}
        	else
        	{	//pagging number button
        		objNum = Number(btnText);

        		if(objNum > objConfig.nPageBlock)
        		{
        			objNum = objConfig.nPageBlock;
        		}

        		if (objNum%objConfig.nMaxPageNo == 0)
        		{
        			objConfig.nEndPageNo   = objNum;
        			objConfig.nStartPageNo = objConfig.nEndPageNo - (objConfig.nMaxPageNo-1);
        		}
        		else
        		{
        			objConfig.nStartPageNo = Math.floor(objNum/objConfig.nMaxPageNo)*objConfig.nMaxPageNo+1;
        			objConfig.nEndPageNo  = objConfig.nStartPageNo + (objConfig.nMaxPageNo-1);
        		}

        		if (objConfig.nEndPageNo > objConfig.nPageBlock)
        		{
        			objConfig.nEndPageNo = objConfig.nPageBlock;
        		}
        	}

        	objConfig.nNowPageNo = objNum;

        	//transaction call
         	objConfig.objPageSearchFunction.call(this, objNum);
        };

        /**
        * @description set pagging number
        * @param objDiv	: pagging div
        * @return
        */
        this.fnSetPageNo = function(objDiv)
        {
        	var objConfig = objDiv.config;

        	var nVStartPageNo = objConfig.nStartPageNo;
        	var sPage   = nVStartPageNo;
        	nVStartPageNo--;

        	// first & previous button enable
        	if (nVStartPageNo < 1)
        	{
        		objDiv.objDivComm.form.btnPrev.set_enable(false);
        		objDiv.objDivComm.form.btnFirst.set_enable(false);
        	} else {
        		objDiv.objDivComm.form.btnPrev.set_enable(true);
        		objDiv.objDivComm.form.btnFirst.set_enable(true);
        	}

        	// last & next button enable
        	if (objConfig.nTotalCount <= ((sPage + objConfig.nMaxPageNo) * objConfig.nSelRowCount))
        	{
        		objDiv.objDivComm.form.btnNext.set_enable(false);
        		objDiv.objDivComm.form.btnLast.set_enable(false);
        	}
        	else
        	{
        		objDiv.objDivComm.form.btnNext.set_enable(true);
        		objDiv.objDivComm.form.btnLast.set_enable(true);
        	}

        	var nPageNo = objConfig.nStartPageNo;
        	var nPageCurNo = objConfig.nNowPageNo;

        	// pagging number button index enable & visible
        	for (var i = 0; i < objConfig.nMaxPageNo; i++)
        	{
        		if(nPageCurNo==nPageNo)
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_enable(false);
        		}else
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_enable(true);
        		}

        		objDiv.objDivComm.form.components["btn" + i].set_text(nPageNo);

        		if (objConfig.nTotalCount > ((nPageNo - 1) * objConfig.nSelRowCount))
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_visible(true);
        			nCnt = i;
        		}
        		else
        		{
        			objDiv.objDivComm.form.components["btn" + i].set_visible(false);
        		}

        		nPageNo++;
        	}
        };

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/

         /**

         * @description pagging select

        */

        this.btnSearch_onclick = function(obj,e)

        {

        	if(obj.status == "init")

        	{

        		obj.status = "list"

        		this.fnSearchPagging(1);

        	}

        	else

        	{

        		var objParent = obj.parent;

        		objParent.divPagging.config.nCurBtnName = 1;

        		objParent.fnSetPageIndex(objParent.divPagging);

        	}

        };


        /**
         * @description pagging Div onsize event --> pagging control size change (pagging control = divComm + divTotal)
        */
        this.divpaggingComm_onsize = function(obj,e)
        {
        	var nWidth  = obj.getOffsetWidth();
        	var nHeight = obj.getOffsetHeight();
        	var nDivControlWidth = obj.objDivComm.getOffsetWidth();
        	var nDivControlLeft  = obj.objDivComm.getOffsetLeft();

        	var bCommVisible = obj.config.bPageViewActive;

        	if(bCommVisible)
        	{
        		nDivControlWidth = obj.objDivComm.getOffsetWidth() + obj.objDivTotal.getOffsetWidth();

        		if(nWidth < nDivControlWidth)
        		{
        			obj.objDivTotal.set_visible(false);
        			nDivControlWidth = obj.objDivComm.getOffsetWidth();
        		}
        		else
        		{
        			obj.objDivTotal.set_visible(true);
        		}
        	}

        	nDivControlLeft  = Math.ceil((nWidth - nDivControlWidth)/2);
        	obj.objDivComm.setOffsetLeft(nDivControlLeft);
        };

        /**
         * @description pagging move button click event
        */
        this.divpaggingButton_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent.parent.parent;

        	objDiv.config.nCurBtnName = obj.name;
        	this.fnSetPageIndex(objDiv);
        };

        /**
         * @description pagging number button click event
        */
        this.divPaggingNumber_onclick = function(obj,e)
        {
        	var objDiv = obj.parent.parent.parent.parent;
        	objDiv.config.nCurBtnName = obj.text;
        	this.fnSetPageIndex(objDiv);
        };

        /**
         * @description move button click event --> move to inputted edit number
        */
        this.btnGo_onclick = function(obj,e)
        {
        	var objDiv  = obj.parent.parent.parent.parent;
        	var objTemp = objDiv.objDivTotal.form.components[objDiv.config.arrCompNames[0]];
        	objDiv.config.nCurBtnName = objTemp.value;
        	this.fnSetPageIndex(objDiv);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pattern01_onload,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.Div00.form.Grid01.addEventHandler("oncellclick",this.Div00_Grid01_oncellclick,this);
            this.Div00.form.Button01.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.Div00.form.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static12.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static13.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static14.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static15.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static16.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static17.addEventHandler("onclick",this.Static_onclick,this);
        };
        this.loadIncludeScript("PTS_3050M_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
