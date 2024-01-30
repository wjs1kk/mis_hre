(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("USER_1010M");
            this.set_titletext("사용자관리");
            this.set_cssclass("frm_WF_comp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"jobPosition\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserManage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"memberId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"userNmEn\" type=\"STRING\" size=\"256\"/><Column id=\"passwd\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"phoneNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"FLOAT\" size=\"256\"/><Column id=\"updtIp\" type=\"FLOAT\" size=\"256\"/><Column id=\"updtDt\" type=\"DATE\" size=\"256\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"jobTitle\" type=\"STRING\" size=\"256\"/><Column id=\"jobPosition\" type=\"STRING\" size=\"256\"/><Column id=\"pwExpireDt\" type=\"STRING\" size=\"256\"/><Column id=\"useYnText\" type=\"STRING\" size=\"256\"/><Column id=\"joinAprvStts\" type=\"STRING\" size=\"256\"/><Column id=\"joinAprvSttsNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"text\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_delete",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"20","65","28","btn_delete:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자 관리");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","50","58",null,"56","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"56","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta002","20","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("회원 ID");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","sta002:10","15","160","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta003","25%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자이름");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","sta003:10","15","160","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta004","50%","15","100","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_condition01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtJbps","sta004:10","15","238","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divResult","50","divSearch:15",null,null,"50","30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserManage","0","45",null,null,"0","0",null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsUserManage");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"회원 ID\"/><Cell col=\"3\" text=\"사용자 이름\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"E-MAIL\"/><Cell col=\"7\" text=\"TEL\"/><Cell col=\"8\" text=\"PHONE\"/><Cell col=\"9\" text=\"사용여부\"/><Cell col=\"10\" text=\"비밀번호 만기일\"/><Cell col=\"11\" text=\"승인 상태\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:memberId\"/><Cell col=\"3\" text=\"bind:userNmKr\" edittype=\"none\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:jobPosition\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:emailAddr\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:telNo\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:phoneNo\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:useYn\" combodataset=\"dsUseYn\" combocodecol=\"value\" combodatacol=\"text\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:pwExpireDt\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"11\" displaytype=\"expr:joinAprvStts === &apos;APPLY&apos; ? &apos;buttoncontrol&apos; : &apos;normal&apos;\" edittype=\"expr:joinAprvStts === &apos;APPLY&apos; ? &apos;button&apos; : &apos;none&apos;\" text=\"bind:joinAprvSttsNm\"/></Band></Format></Formats>");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("sta005","0","0","136","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("1");
            obj.set_text("사용자 관리 목록");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divResult.addChild(obj.name, obj);

            obj = new Static("staGridRowCnt","sta005:10","0","149","45",null,null,null,null,null,null,this.divResult.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.divResult.addChild(obj.name, obj);

            obj = new Button("btnUpdate",null,"20","65","28","btnSearch:3",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","btnUpdate:3",null,null,null,null,null,this);
            obj.set_text("신규");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divResult.form
            obj = new Layout("default","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdUserManage.set_taborder("1");
                p.grdUserManage.set_binddataset("dsUserManage");
                p.grdUserManage.set_autofittype("col");
                p.grdUserManage.set_autoenter("select");
                p.grdUserManage.set_autoupdatetype("itemselect");
                p.grdUserManage.move("0","45",null,null,"0","0");

                p.sta005.set_taborder("1");
                p.sta005.set_text("사용자 관리 목록");
                p.sta005.set_cssclass("sta_WF_subTitle01");
                p.sta005.move("0","0","136","45",null,null);

                p.staGridRowCnt.set_taborder("2");
                p.staGridRowCnt.set_text("(총 0건)");
                p.staGridRowCnt.set_cssclass("sta_WF_subTxt");
                p.staGridRowCnt.move("sta005:10","0","149","45",null,null);
            	}
            );
            this.divResult.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divResult.form
            obj = new Layout("screen00","",0,0,this.divResult.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divResult.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사용자관리");
                p.set_cssclass("frm_WF_comp");

                p.btn_delete.set_text("삭제");
                p.btn_delete.set_cssclass("btn_WF_Delete");
                p.btn_delete.set_visible("true");
                p.btn_delete.set_taborder("4");
                p.btn_delete.move(null,"20","65","28","50",null);

                p.btnSearch.set_taborder("0");
                p.btnSearch.set_text("조회");
                p.btnSearch.move(null,"20","65","28","btn_delete:3",null);

                p.sta001.set_taborder("1");
                p.sta001.set_text("사용자 관리");
                p.sta001.set_cssclass("sta_WF_compTitle01");
                p.sta001.move("50","0","500","58",null,null);

                p.divSearch.set_taborder("2");
                p.divSearch.set_text("");
                p.divSearch.move("50","58",null,"56","50",null);

                p.divResult.set_taborder("3");
                p.divResult.set_text("");
                p.divResult.set_cssclass("div_WF_Area");
                p.divResult.move("50","divSearch:15",null,null,"50","30");

                p.btnUpdate.set_taborder("5");
                p.btnUpdate.set_text("수정");
                p.btnUpdate.move(null,"20","65","28","btnSearch:3",null);

                p.btn_registration.set_text("신규");
                p.btn_registration.set_cssclass("");
                p.btn_registration.set_visible("true");
                p.btn_registration.set_taborder("6");
                p.btn_registration.move(null,"20","65","28","btnUpdate:3",null);
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
            obj = new BindItem("item3","divSearch.form.edtUserId","value","dsSearch","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtUserNm","value","dsSearch","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtJbps","value","dsSearch","jobPosition");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("USER_1010M.xfdl","lib::common.xjs");
        this.registerScript("USER_1010M.xfdl", function() {
        /**
         *  사용자 관리
         *  MenuPath      시스템 관리 - 기준정보 관리 - 사용자, 메뉴 및 권한 관리
         *  FileName      user.Manage.xfdl
         *  Creator 	     moonsj
         *  CreateDate    2023.02.27
         *  Desction      사용자 관리
         ************** 소스 수정 이력 *************************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.02.27    moonsj 	 최초 생성
         *  2023.08.25    parksw     회원ID만 표시/수정하고, 사용자ID는 드러나지 않도록 수정
         *  2023.10.31    parksw     회원가입 승인 추가
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
        	this.gfnLoadCombo("loadCombo", "dsUseYn=SM:USE_YN:C", "fnCallBack");
        	this.fnSearch();
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/

        /**
         * description 삭제
         */
        this.fnDelete = function ()
        {
        	var strSvcId	= "deleteUserManageList";
        	var strSvcUrl	= "sm/deleteUserManageList.do";
        	var inData		= "dsUserManage";
        	var outData		= "";
        	var strArg		= "";
        	var callBackFnc = "fnCallBack";
        	var isAsync     = true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 조회
        */
        this.fnSearch = function()
        {
        	var strSvcId    = "getUserManageList";
        	var strSvcUrl   = "sm/getUserManage.do";
        	var inData      = "dsSearch";  // input1=dsSearch
        	var outData     = "dsUserManage";  // dsUserManage
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /**
         * description 저장
        */
        this.fnSave = function()
        {
        	var strSvcId    = "setUserManageList";
        	var strSvcUrl   = "sm/setUserManageList.do";
        	var inData      = "dsUserManage";  // input1=dsSearch
        	var outData     = "";  // dsUserManage=output1
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";
        	var isAsync   	= true;

        	this.gfnTransaction(strSvcId,strSvcUrl, inData,outData, strArg, callBackFnc, isAsync);
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        /**
         * description Transaction CallBack 함수
         */
        this.fnCallBack = function (sSvcId, nErrorCode, sErrorMsg)
        {
        	switch (sSvcId) {
                case "getUserManageList":
        			this.gfnRowCount(this.dsUserManage, this.divResult.form.staGridRowCnt);
                    break;
                case "setUserManageList":
        			if (this.callbackMsg == "success") {
        				this.gfnAlert("CM_MSG_SAVE_SUCCESS");  // 저장 되었습니다.
        				//총 건수 계산
        			    this.gfnRowCount(this.dsUserManage, this.divResult.form.staGridRowCnt);
        				this.fnSearch();
        			} else {
        				this.gfnAlert("저장 실패");
        			}

        			this.gfnRowCount(this.dsUserManage, this.divResult.form.staGridRowCnt);
        			break;
        		case "deleteUserManageList":
        			if (this.callbackMsg == "success") {
        				 this.gfnAlert("CM_MSG_DELETE_SUCCESS"); //삭제되었습니다.
        				 //총 건수 계산
        		         this.gfnRowCount(this.dsUserManage, this.divResult.form.staGridRowCnt);
        				 this.dsUserManage.clearData();
        				 this.dsUserManage.addRow();
        				 this.fnSearch();
        			} else {
        				this.gfnAlert("삭제 실패");
        			}

                    this.gfnRowCount(this.dsUserManage, this.divResult.form.staGridRowCnt);
        			break;
        		default:
        			break;
        	}
        };

        /**
         * description Popup CallBack 함수
         */
        this.fnPopupAfter = function (sPopupId, vArg)
        {
            switch (sPopupId) {
                case "userManagePopup":
                    this.fnSearch();
                    break;
                case "registerApprovePopup":
                    this.fnSearch();
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
         * description 삭제버튼 클릭
         */
        this.btn_delete_onclick = function(obj,e)
        {
        	var cCnt = this.dsUserManage.getCaseCount("rowCheck==1");

        	if (cCnt == 0) {
        		this.gfnAlert("삭제할 데이터를 선택해주세요.");
        		return;
        	}

        	this.gfnAlert("CM_CFM_DELETE", "", "", { trueFunc: "fnDelete", falseFunc: "" });  // 변경된 내역을 삭제 하시겠습니까?
        };

        /**
         * description 그리드헤드 클릭
         */
        this.Div00_grdUserManage_onheadclick= function(obj,e)
        {
        	this.gfnSetGridCheckAll(obj, e, "rowCheck");
        };

        /**
         * description 사용자관리 신규등록 Popup
         */
        this.btn_registration_onclick = function(obj,e)
        {
        	this.gfnOpenPopup("userManagePopup", "sys::user/USER_1010P.xfdl", {}, "fnPopupAfter", "");
        };

        /**
         * description 그리드에 선택된 데이터를 수정팝업창 오픈
         */
        this.btnUpdate_onclick = function(obj,e)
        {
        	//체크된 행 갯수 count
        	var cnt = 0;
        	for (var i = 0; i < this.dsUserManage.rowcount; i++) {
        		if (this.dsUserManage.getColumn(i, "rowCheck") == 1) {
        			cnt++;
        		}
        	}

        	if (cnt > 1) {
                this.gfnAlert("수정 할 데이터를 한 개만 선택하세요.");
                return;
        	}

        	this.fnUpdateUserInfo(this.dsUserManage.rowposition);
        };

        /**
         * description 그리드 셀 더블클릭 시 수정팝업창 오픈
         */
        this.divResult_grdUserManage_oncelldblclick = function(obj,e)
        {
        	this.fnUpdateUserInfo(e.row);
        };

        /**
         * description generate multi language Excel
         */
        this.btnExportCompML_onclick = function(obj,e)
        {
        	// generate multi language Excel
        	this.gfnGenerateML(this);
        	this.gfnGenerateMLExcel();
        };

        this.divSearch_edtUserNm_onkeyup = function(obj,e)
        {
            if (e.keycode == 13) {
                this.fnSearch();
            }
        };

        /**
         * 회원가입 승인 팝업
         */
        this.divResult_grdUserManage_oncellclick = function(obj,e)
        {
        	const aprvStts = this.dsUserManage.getColumn(e.row, "joinAprvStts");
            if (e.col == 11 && aprvStts === "APPLY") {
                this.fnApproveRegistration(e.row);
            }
        };

        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/

        /**
         * description 수정팝업창 오픈
         */
        this.fnUpdateUserInfo = function (sRow)
        {
            var args = {
                userId: this.dsUserManage.getColumn(sRow, "userId")
            };

        	this.gfnOpenPopup("userManagePopup", "sys::user/USER_1010P.xfdl", args, "fnPopupAfter", "");
        };

        /**
         * 회원가입 승인 화면
         */
        this.fnApproveRegistration = function (row)
        {
            var args = {
                userId: this.dsUserManage.getColumn(row, "userId")
            };

        	this.gfnOpenPopup("registerApprovePopup", "sys::user/USER_1010P_02.xfdl", args, "fnPopupAfter", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.sta001.addEventHandler("onclick",this.sta_01_onclick,this);
            this.divSearch.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.divSearch.form.sta002.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtUserId.addEventHandler("onkeyup",this.divSearch_edtUserNm_onkeyup,this);
            this.divSearch.form.sta003.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtUserNm.addEventHandler("onkeyup",this.divSearch_edtUserNm_onkeyup,this);
            this.divSearch.form.sta004.addEventHandler("onclick",this.divSearch_sta_01_onclick,this);
            this.divSearch.form.edtJbps.addEventHandler("onkeyup",this.divSearch_edtUserNm_onkeyup,this);
            this.divResult.form.grdUserManage.addEventHandler("onheadclick",this.Div00_grdUserManage_onheadclick,this);
            this.divResult.form.grdUserManage.addEventHandler("oncelldblclick",this.divResult_grdUserManage_oncelldblclick,this);
            this.divResult.form.grdUserManage.addEventHandler("oncellclick",this.divResult_grdUserManage_oncellclick,this);
            this.divResult.form.sta005.addEventHandler("onclick",this.Static09_onclick,this);
            this.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.btn_registration.addEventHandler("onclick",this.btn_registration_onclick,this);
        };
        this.loadIncludeScript("USER_1010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
