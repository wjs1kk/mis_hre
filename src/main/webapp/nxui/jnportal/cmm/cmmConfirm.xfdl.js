(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmConfirm");
            this.set_titletext("확인창");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,256);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","0","0","100.00%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("sta_WF_popupTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divCont","0","50","100.00%",null,null,"76",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgContent","30","20",null,null,"30","0",null,null,null,null,this.divCont.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_background("url(\'theme://images/img_WF_alert.png\') no-repeat center top");
            obj.set_padding("70px 0px 0px");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 16px/20px \"Malgun Gothic\"");
            obj.set_wordWrap("english");
            this.divCont.addChild(obj.name, obj);

            obj = new Div("divBtnArea","0",null,"100.00%","76",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","134",null,"65","28",null,"23",null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtnArea.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnOk:3",null,"65","28",null,"23",null,null,null,null,this.divBtnArea.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtnArea.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCont.form
            obj = new Layout("default","",0,0,this.divCont.form,function(p){});
            this.divCont.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtnArea.form
            obj = new Layout("default","",0,0,this.divBtnArea.form,function(p){});
            this.divBtnArea.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,256,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmConfirm.xfdl", function() {
        /**
        *  확인창
        *  @MenuPath      cmm > cmmConfirm (공통확인창)
        *  @FileName 	  cmmConfirm.xfdl
        *  @Creator 	  parkmg
        *  @CreateDate    2023.02.27
        *  @Desction         메세지팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          Modifier    Description
        *******************************************************************************
        *  2023.02.27    parkmg      nexacro sample base
        *******************************************************************************
        */
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	var sContents = this.getOwnerFrame().paramContents;
        	this.fnMsgSetting(sContents);
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
          this.fnMsgSetting = function (sMsgContent)
         {
         	this.divCont.form.staMsgContent.set_text(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 확인버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	if(this.getOwnerFrame().trueFunc)
        		//this.getOwnerFrame().trueFunc(true);
        		this.lookupFunc(this.getOwnerFrame().trueFunc).call(true);
        	this.close();
        };

        /**
        * @description 취소버튼
        */
        this.btnCancel_onclick = function(obj,e)
        {
        	if(this.getOwnerFrame().falseFunc)
        		this.lookupFunc(this.getOwnerFrame().falseFunc).call(false);
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtnArea.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.divBtnArea.form.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
        };
        this.loadIncludeScript("cmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
