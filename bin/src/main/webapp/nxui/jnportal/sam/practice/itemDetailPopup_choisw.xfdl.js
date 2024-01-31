(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("itemDetailPopup_choisw");
            this.set_titletext("제품등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsAdvtManage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"advtId\" type=\"STRING\" size=\"256\"/><Column id=\"advtType\" type=\"STRING\" size=\"256\"/><Column id=\"advtTitle\" type=\"STRING\" size=\"256\"/><Column id=\"advtCont\" type=\"STRING\" size=\"256\"/><Column id=\"advtStartDt\" type=\"STRING\" size=\"256\"/><Column id=\"advtEndDt\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"attachFileId\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdTyCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"text\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","600",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staMainTitle","0","0",null,"50","0",null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("OOOOO");
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
            obj.set_text("OOO");
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
            obj.set_text("ㅇㅇㅇ");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtItemCode","sta001:10","48","100","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtItemName","sta002:10","81","200","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtOOO","sta002_01:10","114","359","26",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("11");
            this.divForm.form.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","74","173","163","166",null,null,null,null,null,null,this.divForm.form.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("* 제품 테이블 내용 추가\r\n* 모두 추가 후 높이 조절");
            obj.set_background("aquamarine");
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
            obj = new BindItem("item0","divForm.form.divDetail.form.comboAdTyPopup","value","dsAdvtManage","advtType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.divDetail.form.edtAdvtTitle","value","dsAdvtManage","advtTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.divDetail.form.edtCont","value","dsAdvtManage","sortOrdr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.divDetail.form.RqstNm","value","dsAdvtManage","advtId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.divDetail.form.TextArea00","value","dsAdvtManage","advtCont");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.divDetail.form.edtFromDt","value","dsAdvtManage","advtStartDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.divDetail.form.edtToDt","value","dsAdvtManage","advtEndDt");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divForm.form.divDetail.form.ComboUseYn","value","dsAdvtManage","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divForm.form.divDetail.form.edtRqstDt","value","dsAdvtManage","advtStartDt");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("itemDetailPopup_choisw.xfdl","lib::common.xjs");
        this.registerScript("itemDetailPopup_choisw.xfdl", function() {
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
        	this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.Static04_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.divForm.form.Static04_00_00_01_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.divForm.form.Static04_00_00_01_00_00.addEventHandler("onclick",this.Static31_onclick,this);
        };
        this.loadIncludeScript("itemDetailPopup_choisw.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
