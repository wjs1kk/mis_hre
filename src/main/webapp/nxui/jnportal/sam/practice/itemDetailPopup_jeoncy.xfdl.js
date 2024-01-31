(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("itemDetailPopup_jeoncy");
            this.set_titletext("제품등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAdTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_KR\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CODE_NM_EN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LINE_CODE\">Y</Col><Col id=\"LINE_CODE_NM_KR\">사용</Col><Col id=\"LINE_CODE_NM_EN\">use</Col></Row><Row><Col id=\"LINE_CODE\">N</Col><Col id=\"LINE_CODE_NM_KR\">미사용</Col><Col id=\"LINE_CODE_NM_EN\">unused</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"itemCode\" type=\"STRING\" size=\"256\"/><Column id=\"itemName\" type=\"STRING\" size=\"256\"/><Column id=\"itemType\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"itemCost\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"itemCount\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"itemDesc\" type=\"STRING\" size=\"3000\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"itemCode\" type=\"STRING\" size=\"256\"/><Column id=\"itemName\" type=\"STRING\" size=\"256\"/><Column id=\"itemType\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"itemCost\" type=\"INT\" size=\"256\"/><Column id=\"itemCount\" type=\"INT\" size=\"256\"/><Column id=\"itemDesc\" type=\"STRING\" size=\"3000\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","600",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("staMainTitle","0","0",null,"50","0",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_popupTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static10","0","50","30","484",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static10_00",null,"50","30","494","0",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("w30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01","30","50","103","20",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00","249",null,"103","23",null,"0",null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_text("h 23");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("divDetail","30","70",null,null,"30","80",null,null,null,null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_popup");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("Static10","0","-1","19","132",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staSubTitle","20","0","100","45",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            obj.set_fittocontents("width");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg002","20","77",null,"34","20",null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta002","20","77","100","34",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            obj.set_text("제품명");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg001","20","44",null,"34","20",null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta001","20","44","100","34",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_condition02_LEssential");
            obj.set_text("제품코드");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg002_00","20","110",null,"34","20",null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta002_01","20","110","100","34",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("제품분류");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtItemCode","sta001:10","48","100","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            obj.set_inputfilter("none");
            obj.set_inputtype("number,english");
            obj.set_maxlength("20");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtItemName","sta002:10","81","200","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            obj.set_maxlength("100");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Combo("Combo00","130","115","200","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsAdTyCombo");
            obj.set_datacolumn("text");
            obj.set_codecolumn("value");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg002_00_00","20","143",null,"34","20",null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta002_01_00","20","143","100","34",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("단가");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00","130","147","200","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("14");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_maxlength("12");
            obj.set_textAlign("right");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg002_00_00_00","20","176",null,"34","20",null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta002_01_00_00","20","176","100","34",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("수량");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","130","180","200","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("17");
            obj.set_inputfilter("none");
            obj.set_inputtype("number");
            obj.set_maxlength("12");
            obj.set_textAlign("right");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg002_00_00_00_00","20","209",null,"175","20",null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta002_01_00_00_00","20","209","100","175",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("제품설명");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","130","216","379","160",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("20");
            obj.set_maxlength("3000");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg002_00_00_00_01","20","383",null,"34","20",null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta002_01_00_00_01","20","383","100","34",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("사용여부");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Combo("Combo01","130","387","200","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsUseYn");
            obj.set_datacolumn("LINE_CODE_NM_KR");
            obj.set_codecolumn("LINE_CODE");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_01_00_00","249",null,"103","25",null,"51",null,null,null,null,this.divForm.form);
            obj.set_taborder("6");
            obj.set_text("h 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnDelete","268",null,"65","28",null,"23",null,null,null,null,this.divForm.form);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_icoDelete");
            obj.set_taborder("9");
            obj.set_visible("true");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnClose","btnDelete:5",null,"65","28",null,"23",null,null,null,null,this.divForm.form);
            obj.set_text("닫기");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("7");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnSave","198",null,"65","28",null,"23",null,null,null,null,this.divForm.form);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("8");
            this.divForm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.divDetail.form
            obj = new Layout("default","",1032,72,this.divForm.form.divDetail.form,function(p){});
            this.divForm.form.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","divForm.form.divDetail.form.edtItemCode","value","dsItem","itemCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divForm.form.divDetail.form.edtItemName","value","dsItem","itemName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divForm.form.divDetail.form.Combo00","value","dsItem","itemType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divForm.form.divDetail.form.Combo00_00","value","dsItem","itemType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divForm.form.divDetail.form.Edit00","value","dsItem","itemCost");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divForm.form.divDetail.form.Edit00_00","value","dsItem","itemCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divForm.form.divDetail.form.TextArea00","acceptstab","dsItem","itemDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divForm.form.divDetail.form.Combo01","value","dsItem","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divForm.form.divDetail.form.Edit01","value","dsItem","itemDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divDetail.form.TextArea00","value","dsItem","itemDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divDetail.form.edtItemCode","accessibilityaction","dsSearch","itemCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divDetail.form.edtItemName","accessibilityaction","dsSearch","itemName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divDetail.form.Edit00","accessibilityaction","dsSearch","itemCost");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divDetail.form.Edit00_00","accessibilityaction","dsSearch","itemCount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divDetail.form.TextArea00","accessibilityaction","dsSearch","itemDesc");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divDetail.form.Combo01","text","dsUseYn","LINE_CODE_NM_KR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divDetail.form.Combo00","text","dsSearch","itemType");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("itemDetailPopup_jeoncy.xfdl","lib::common.xjs");
        this.registerScript("itemDetailPopup_jeoncy.xfdl", function() {
        /**
        *  OOO
        *  MenuPath      OOO
        *  FileName      OOO.xfdl
        *  Creator 	     OOO
        *  CreateDate    0000.00.00
        *  Desction      OOO
        ************** 소스 수정 이력 ***********************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  0000.00.00    OOO 	     최초 생성
        *******************************************************************************/
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        /***********************************************************************************************
        * FORM EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        /**
         * description 화면 onload
        */

        this.form_onload = function(obj,e)
        {
        	this.gfnLoadCombo("loadCombo", "dsAdTyCombo=SMP:ITEM_TYPE:A", "fnCallBack");
        	this.gfnFormOnLoad(this);

         	this.dsItem.setColumn(0, "itemCode", this.parent.itemCode);
        	this.dsItem.setColumn(0, "itemName", this.parent.itemName);
        	this.dsItem.setColumn(0, "itemType", this.parent.itemType);
        	this.dsItem.setColumn(0, "itemCost", this.parent.itemCost);
        	this.dsItem.setColumn(0, "itemCount", this.parent.itemCount);
        	this.dsItem.setColumn(0, "itemDesc", this.parent.itemDesc);
        	this.dsItem.setColumn(0, "useYn", this.parent.useYn);
        	this.fnSearch();

        	if(Eco.isEmpty(this.parent.itemCode)){
        		this.dsItem.setColumn(0, "useYn", "Y");
        	}
        	this.dsItem.setColumn(0, "rowStatus", this.parent.rowStatus);;

        	var title = this.parent.title;
        	this.divForm.form.staMainTitle.set_text(title);

        	if(this.parent.title == "제품등록"){
        		this.divForm.form.btnDelete.set_enable(false);
        	}
        	if(this.parent.title == "제품상세"){
        		this.divForm.form.divDetail.form.edtItemCode.set_enable(false);
        	}
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        this.fnSave = function()
        {
        	var strSvcId    = "setItemDetailJcy";
        	var strSvcUrl   = "sam/practice/setItemDetailJcy.do";
        	var inData      = "dsItem";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl, 	    // transaction을 요청할 주소
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        };
        this.fnSearch = function()
        {
        	var strSvcId    = "getItemDetailJcy";
        	var strSvcUrl   = "sam/practice/setItemDetailJcy.do";
        	var inData      = "dsItem";
        	var outData     = "dsItem";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl, 	    // transaction을 요청할 주소
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }
        this.equalCodeName = function(){
        	var strSvcId    = "equalCodeName";
        	var strSvcUrl   = "sam/practice/equalCodeName.do";
        	var inData      = "dsItem";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl, 	    // transaction을 요청할 주소
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc, 	// transaction의 결과를 받을 Function 이름
        						isAsync); 		// 비동기통신 여부 [생략가능]
        }

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
        		case "getItemList":
        		this.gfnRowCount(this.dsList, this.divList.form.staGridRowCnt);
        		break;
        		case "setItemDetailJcy":
        			if(this.callbackMsg == "success"){
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				this.close();
        			} else{
        				this.gfnAlert("CM_MSG_TEST_3");
        			}
        		break;
        		case "equalCodeName":
        			if(this.callbackMsg == "codeEqual"){
        				this.gfnAlert("제품코드가 중복되었습니다.");
        				return "code";
        			}
        			if(this.callbackMsg == "nameEqual"){
        				this.gfnAlert("제품명이 중복되었습니다.");
        				return "name";
        			}
        		break;
        		default:
        		break;
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.divForm_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.divForm_btnDelete_onclick = function(obj,e)
        {
        	this.dsItem.setColumn(0,"rowStatus","deleted");
        	this.gfnAlert("PTS_DELETE", "", "", {trueFunc: "fnSave", falseFunc: ""});
        };

        this.divForm_btnSave_onclick = function(obj,e)
        {

        	if(this.parent.rowStatus == "updated"){
        		if (!this.gfnDsIsUpdated(this.dsItem)) {
        			this.gfnAlert("CM_MSG_SAVE_NOCHANGE");  // 변경된 내역이 없습니다.
        			return;
        		}
        	}
        	if(this.dsItem.getColumn(0, "itemCode") == null){
        		this.gfnAlert("제품코드는 필수 입력값입니다.");
        		return;
        	}

        	if(this.dsItem.getColumn(0, "itemName") == null){
        		this.gfnAlert("제품명은 필수 입력값입니다.");
        		return;
        	}
        	if(this.dsItem.getColumn(0, "itemCost") < 0){
        		this.gfnAlert("단가는 양의 정수만 입력가능합니다.");
        		return;
        	}
        	if(this.dsItem.getColumn(0, "itemCount") < 0){
        		this.gfnAlert("수량은 양의 정수만 입력가능합니다.");
        		return;
        	}

        	if(this.parent.rowStatus == "updated"){
        		this.dsItem.setColumn(0, "updtId", nexacro.getApplication().gdsUserInfo.getColumn(0, "userNmKr"));
        	}
        	if(this.parent.rowStatus == "inserted"){
        		this.dsItem.setColumn(0, "rgstId", nexacro.getApplication().gdsUserInfo.getColumn(0, "userNmKr"));
        	}
        //	this.fnSave();

        	this.gfnAlert("CM_CFM_SAVE", "", "", {trueFunc: "fnSave", falseFunc: ""});
        };
        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.staMainTitle.addEventHandler("onclick",this.divForm_staMainTitle_onclick,this);
            this.divForm.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divForm.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divForm.form.divDetail.form.staBg002_00_00.addEventHandler("onclick",this.divForm_divDetail_staBg002_00_00_onclick,this);
            this.divForm.form.divDetail.form.Edit00.addEventHandler("onchanged",this.divForm_divDetail_Edit00_onchanged,this);
            this.divForm.form.divDetail.form.Combo01.addEventHandler("onitemchanged",this.divForm_divDetail_Combo01_onitemchanged,this);
            this.divForm.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divForm.form.btnDelete.addEventHandler("onclick",this.divForm_btnDelete_onclick,this);
            this.divForm.form.btnClose.addEventHandler("onclick",this.divForm_btnClose_onclick,this);
            this.divForm.form.btnSave.addEventHandler("onclick",this.divForm_btnSave_onclick,this);
            this.dsSearch.addEventHandler("onrowposchanged",this.dsRole_onrowposchanged,this);
        };
        this.loadIncludeScript("itemDetailPopup_jeoncy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
