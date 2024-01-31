(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commonPopupSample");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1177);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUser", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"320\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"20\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"20\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"300\"/><Column id=\"ogdpDeptNm\" type=\"STRING\" size=\"300\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"userId\" type=\"STRING\" size=\"20\"/><Column id=\"memberId\" type=\"STRING\" size=\"20\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"memberNmKr\" type=\"STRING\" size=\"300\"/><Column id=\"memberNmEn\" type=\"STRING\" size=\"300\"/><Column id=\"ogdpInstCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpInstNm\" type=\"STRING\" size=\"200\"/><Column id=\"emlAddr\" type=\"STRING\" size=\"320\"/><Column id=\"ofcTelno\" type=\"STRING\" size=\"20\"/><Column id=\"ofcFxno\" type=\"STRING\" size=\"20\"/><Column id=\"mblTelno\" type=\"STRING\" size=\"20\"/><Column id=\"joinAplyStts\" type=\"STRING\" size=\"20\"/><Column id=\"corpYn\" type=\"STRING\" size=\"1\"/><Column id=\"jbpsCd\" type=\"STRING\" size=\"20\"/><Column id=\"jbpsNm\" type=\"STRING\" size=\"300\"/><Column id=\"ogdpDeptCd\" type=\"STRING\" size=\"20\"/><Column id=\"ogdpDeptNm\" type=\"STRING\" size=\"300\"/><Column id=\"mbrAddr\" type=\"STRING\" size=\"300\"/><Column id=\"ofcAddr\" type=\"STRING\" size=\"300\"/><Column id=\"whdwlYn\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"deptNmPath\" type=\"STRING\" size=\"2147473647\"/><Column id=\"deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"1\"/><Column id=\"deptCd\" type=\"STRING\" size=\"20\"/><Column id=\"deptNm\" type=\"STRING\" size=\"150\"/><Column id=\"deptLdrId\" type=\"STRING\" size=\"20\"/><Column id=\"deptLdrNm\" type=\"STRING\" size=\"300\"/><Column id=\"deptMngrId\" type=\"STRING\" size=\"20\"/><Column id=\"deptMngrNm\" type=\"STRING\" size=\"300\"/><Column id=\"deptDesc\" type=\"STRING\" size=\"300\"/><Column id=\"useYn\" type=\"STRING\" size=\"1\"/><Column id=\"ordSn\" type=\"INT\" size=\"20\"/><Column id=\"upDeptCd\" type=\"STRING\" size=\"20\"/><Column id=\"upDeptNm\" type=\"STRING\" size=\"150\"/><Column id=\"level\" type=\"INT\" size=\"20\"/><Column id=\"matched\" type=\"STRING\" size=\"1\"/><Column id=\"deptNmPath\" type=\"STRING\" size=\"2147483647\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통 팝업 샘플");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("divUserList","50","53",null,"300","50",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserManage","0","45",null,null,"0","0",null,null,null,null,this.divUserList.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"96\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"회원 ID\"/><Cell col=\"3\" text=\"사용자 이름\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"E-MAIL\"/><Cell col=\"7\" text=\"사무실 전화\"/><Cell col=\"8\" text=\"휴대전화\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:memberId\"/><Cell col=\"3\" text=\"bind:userNmKr\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:ogdpDeptNm\"/><Cell col=\"5\" text=\"bind:jbpsNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:emlAddr\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:ofcTelno\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:mblTelno\" edittype=\"none\"/></Band></Format></Formats>");
            this.divUserList.addChild(obj.name, obj);

            obj = new Static("sta005","0","0","390","45",null,null,null,null,null,null,this.divUserList.form);
            obj.set_taborder("0");
            obj.set_text("사용자 선택 팝업 예제");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divUserList.addChild(obj.name, obj);

            obj = new Button("btnAddOnePerson",null,"14","109","26","0",null,null,null,null,null,this.divUserList.form);
            obj.set_taborder("2");
            obj.set_text("한 명만 선택");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divUserList.addChild(obj.name, obj);

            obj = new Button("btnAddMultiplePerson",null,"14","109","26","btnAddOnePerson:5",null,null,null,null,null,this.divUserList.form);
            obj.set_taborder("3");
            obj.set_text("여러 명 선택");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divUserList.addChild(obj.name, obj);

            obj = new Div("divUserForm","50","divUserList:10",null,"250","50",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("staHeader","0","0","390","45",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("0");
            obj.set_text("사용자 선택 팝업 예제");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta000","0","44",null,"34","0",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta001","0","44","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("ID");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta002","33.30%","44","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("3");
            obj.set_text("회원ID");
            obj.set_cssclass("sta_WF_condition02");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staUserId","160","48",null,"26","sta002:10",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("4");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta003","66.65%","44","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("5");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_condition02");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staMemberId","sta002:10","48",null,"26","sta003:10",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("6");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staUserNmKr","sta003:10","48",null,"26","10",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("7");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta000_00","0","77",null,"34","0",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta004","0","77","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("기관명");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta005","33.30%","77","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("10");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_condition02");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staOgdpInstNm","160","81",null,"26","1224",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("11");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta006","66.65%","77","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("12");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_condition02");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staOgdpDeptNm","766","81",null,"26","618",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("13");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","1373","81",null,"26","11",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("14");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta000_01","0","110",null,"34","0",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta007","0","110","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("사무실 전화번호");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta008","33.30%","110","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("17");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_condition02");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staOfcTelno","160","114",null,"26","1224",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("18");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta009","66.65%","110","150","34",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("19");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_condition02");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staMblTelno","766","114",null,"26","618",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("20");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staEmlAddr","1373","114",null,"26","11",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("21");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta000_02","0","143",null,"54","0",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta010","0","143","150","54",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("주소");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staMbrAddr","160","147",null,"47","10",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("24");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Button("btnSelectUser",null,"14","63","26","0",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("25");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_grdSelect_W");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta000_02_00","0","196",null,"54","0",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("sta011","0","196","150","54",null,null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("사무실 주소");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Static("staOfcAddr","160","200",null,"47","10",null,null,null,null,null,this.divUserForm.form);
            obj.set_taborder("28");
            this.divUserForm.addChild(obj.name, obj);

            obj = new Div("divDeptList","50","divUserForm:10",null,"300","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta005","0","0","390","45",null,null,null,null,null,null,this.divDeptList.form);
            obj.set_taborder("0");
            obj.set_text("부서 선택 팝업 예제");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divDeptList.addChild(obj.name, obj);

            obj = new Button("btnAddOneDept",null,"14","121","26","0",null,null,null,null,null,this.divDeptList.form);
            obj.set_taborder("2");
            obj.set_text("한 부서만 선택");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divDeptList.addChild(obj.name, obj);

            obj = new Button("btnAddMultipleDept",null,"14","121","26","btnAddOneDept:5",null,null,null,null,null,this.divDeptList.form);
            obj.set_taborder("1");
            obj.set_text("여러 부서 선택");
            obj.set_cssclass("btn_WF_Row_Add");
            this.divDeptList.addChild(obj.name, obj);

            obj = new Grid("grdDeptList","0","45",null,null,"0","0",null,null,null,null,this.divDeptList.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsDeptList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"96\"/><Column size=\"120\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"부서 코드\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" text=\"bind:deptNmPath\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:deptCd\" edittype=\"none\"/></Band></Format></Formats>");
            this.divDeptList.addChild(obj.name, obj);

            obj = new Div("divDeptInfo","50","divDeptList:10",null,"244","50",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta005","0","0","390","45",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("0");
            obj.set_text("부서 선택 팝업 예제");
            obj.set_cssclass("sta_WF_subTitle01");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Button("btnSelectUser",null,"14","63","26","0",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_grdSelect_W");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta000","0","44",null,"34","0",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta001","0","44","150","34",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("경로");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staUserId","160","48",null,"26","10",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("4");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staMemberId","766","48",null,"26","618",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("5");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staUserNmKr","1373","48",null,"26","11",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("6");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta000_00","0","77",null,"34","0",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta004","0","77","150","34",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("부서명");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta005_00","33.30%","77","150","34",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("9");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_condition02");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staOgdpInstNm","160","81",null,"26","1224",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("10");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta006","66.65%","77","150","34",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("11");
            obj.set_text("상위부서명");
            obj.set_cssclass("sta_WF_condition02");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staOgdpDeptNm","766","81",null,"26","618",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("12");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staJbpsNm","1373","81",null,"26","11",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("13");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta000_00_00","0","110",null,"34","0",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta004_00","0","110","150","34",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("부서장");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta005_01","33.30%","110","150","34",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("16");
            obj.set_text("부서담당자");
            obj.set_cssclass("sta_WF_condition02");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staOgdpInstNm00","160","114",null,"26","1224",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("17");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta006_00","66.65%","110","150","34",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_condition02");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staOgdpDeptNm00","766","114",null,"26","618",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("19");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staJbpsNm00","1373","114",null,"26","11",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("20");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta000_02","0","143",null,"64","0",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("staMbrAddr","160","147",null,"57","10",null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("23");
            this.divDeptInfo.addChild(obj.name, obj);

            obj = new Static("sta010","0","143","150","64",null,null,null,null,null,null,this.divDeptInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_condition02_L");
            obj.set_text("설명");
            this.divDeptInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divUserList.form
            obj = new Layout("default","",0,0,this.divUserList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdUserManage.set_taborder("1");
                p.grdUserManage.set_binddataset("dsUser");
                p.grdUserManage.set_autofittype("col");
                p.grdUserManage.set_autoenter("select");
                p.grdUserManage.set_autoupdatetype("itemselect");
                p.grdUserManage.move("0","45",null,null,"0","0");

                p.sta005.set_taborder("0");
                p.sta005.set_text("사용자 선택 팝업 예제");
                p.sta005.set_cssclass("sta_WF_subTitle01");
                p.sta005.move("0","0","390","45",null,null);

                p.btnAddOnePerson.set_taborder("2");
                p.btnAddOnePerson.set_text("한 명만 선택");
                p.btnAddOnePerson.set_cssclass("btn_WF_Row_Add");
                p.btnAddOnePerson.move(null,"14","109","26","0",null);

                p.btnAddMultiplePerson.set_taborder("3");
                p.btnAddMultiplePerson.set_text("여러 명 선택");
                p.btnAddMultiplePerson.set_cssclass("btn_WF_Row_Add");
                p.btnAddMultiplePerson.move(null,"14","109","26","btnAddOnePerson:5",null);
            	}
            );
            this.divUserList.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divUserList.form
            obj = new Layout("screen00","",0,0,this.divUserList.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divUserList.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divUserForm.form
            obj = new Layout("default","",0,0,this.divUserForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staHeader.set_taborder("0");
                p.staHeader.set_text("사용자 선택 팝업 예제");
                p.staHeader.set_cssclass("sta_WF_subTitle01");
                p.staHeader.move("0","0","390","45",null,null);

                p.sta000.set_taborder("1");
                p.sta000.set_cssclass("sta_WF_condition02box");
                p.sta000.set_text("");
                p.sta000.move("0","44",null,"34","0",null);

                p.sta001.set_taborder("2");
                p.sta001.set_cssclass("sta_WF_condition02_L");
                p.sta001.set_text("ID");
                p.sta001.move("0","44","150","34",null,null);

                p.sta002.set_taborder("3");
                p.sta002.set_text("회원ID");
                p.sta002.set_cssclass("sta_WF_condition02");
                p.sta002.move("33.30%","44","150","34",null,null);

                p.staUserId.set_taborder("4");
                p.staUserId.move("160","48",null,"26","sta002:10",null);

                p.sta003.set_taborder("5");
                p.sta003.set_text("이름");
                p.sta003.set_cssclass("sta_WF_condition02");
                p.sta003.move("66.65%","44","150","34",null,null);

                p.staMemberId.set_taborder("6");
                p.staMemberId.move("sta002:10","48",null,"26","sta003:10",null);

                p.staUserNmKr.set_taborder("7");
                p.staUserNmKr.move("sta003:10","48",null,"26","10",null);

                p.sta000_00.set_taborder("8");
                p.sta000_00.set_cssclass("sta_WF_condition02box");
                p.sta000_00.set_text("");
                p.sta000_00.move("0","77",null,"34","0",null);

                p.sta004.set_taborder("9");
                p.sta004.set_cssclass("sta_WF_condition02_L");
                p.sta004.set_text("기관명");
                p.sta004.move("0","77","150","34",null,null);

                p.sta005.set_taborder("10");
                p.sta005.set_text("부서명");
                p.sta005.set_cssclass("sta_WF_condition02");
                p.sta005.move("33.30%","77","150","34",null,null);

                p.staOgdpInstNm.set_taborder("11");
                p.staOgdpInstNm.move("160","81",null,"26","1224",null);

                p.sta006.set_taborder("12");
                p.sta006.set_text("직급");
                p.sta006.set_cssclass("sta_WF_condition02");
                p.sta006.move("66.65%","77","150","34",null,null);

                p.staOgdpDeptNm.set_taborder("13");
                p.staOgdpDeptNm.move("766","81",null,"26","618",null);

                p.staJbpsNm.set_taborder("14");
                p.staJbpsNm.move("1373","81",null,"26","11",null);

                p.sta000_01.set_taborder("15");
                p.sta000_01.set_cssclass("sta_WF_condition02box");
                p.sta000_01.set_text("");
                p.sta000_01.move("0","110",null,"34","0",null);

                p.sta007.set_taborder("16");
                p.sta007.set_cssclass("sta_WF_condition02_L");
                p.sta007.set_text("사무실 전화번호");
                p.sta007.move("0","110","150","34",null,null);

                p.sta008.set_taborder("17");
                p.sta008.set_text("휴대전화번호");
                p.sta008.set_cssclass("sta_WF_condition02");
                p.sta008.move("33.30%","110","150","34",null,null);

                p.staOfcTelno.set_taborder("18");
                p.staOfcTelno.move("160","114",null,"26","1224",null);

                p.sta009.set_taborder("19");
                p.sta009.set_text("이메일");
                p.sta009.set_cssclass("sta_WF_condition02");
                p.sta009.move("66.65%","110","150","34",null,null);

                p.staMblTelno.set_taborder("20");
                p.staMblTelno.move("766","114",null,"26","618",null);

                p.staEmlAddr.set_taborder("21");
                p.staEmlAddr.move("1373","114",null,"26","11",null);

                p.sta000_02.set_taborder("22");
                p.sta000_02.set_cssclass("sta_WF_condition02box");
                p.sta000_02.set_text("");
                p.sta000_02.move("0","143",null,"54","0",null);

                p.sta010.set_taborder("23");
                p.sta010.set_cssclass("sta_WF_condition02_L");
                p.sta010.set_text("주소");
                p.sta010.move("0","143","150","54",null,null);

                p.staMbrAddr.set_taborder("24");
                p.staMbrAddr.move("160","147",null,"47","10",null);

                p.btnSelectUser.set_taborder("25");
                p.btnSelectUser.set_text("선택");
                p.btnSelectUser.set_cssclass("btn_WF_grdSelect_W");
                p.btnSelectUser.move(null,"14","63","26","0",null);

                p.sta000_02_00.set_taborder("26");
                p.sta000_02_00.set_cssclass("sta_WF_condition02box");
                p.sta000_02_00.set_text("");
                p.sta000_02_00.move("0","196",null,"54","0",null);

                p.sta011.set_taborder("27");
                p.sta011.set_cssclass("sta_WF_condition02_L");
                p.sta011.set_text("사무실 주소");
                p.sta011.move("0","196","150","54",null,null);

                p.staOfcAddr.set_taborder("28");
                p.staOfcAddr.move("160","200",null,"47","10",null);
            	}
            );
            this.divUserForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divUserForm.form
            obj = new Layout("screen00","",0,0,this.divUserForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divUserForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDeptList.form
            obj = new Layout("default","",0,0,this.divDeptList.form,function(p){});
            this.divDeptList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDeptInfo.form
            obj = new Layout("default","",0,0,this.divDeptInfo.form,function(p){});
            this.divDeptInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1177,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divUserForm.form.staUserId","text","dsUserInfo","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divUserForm.form.staMemberId","text","dsUserInfo","memberId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divUserForm.form.staUserNmKr","text","dsUserInfo","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divUserForm.form.staOgdpInstNm","text","dsUserInfo","ogdpInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divUserForm.form.staOgdpDeptNm","text","dsUserInfo","ogdpDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divUserForm.form.staJbpsNm","text","dsUserInfo","jbpsNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divUserForm.form.staOfcTelno","text","dsUserInfo","ofcTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divUserForm.form.staMblTelno","text","dsUserInfo","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divUserForm.form.staEmlAddr","text","dsUserInfo","emlAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divUserForm.form.staMbrAddr","text","dsUserInfo","mbrAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divUserForm.form.staOfcAddr","text","dsUserInfo","ofcAddr");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDeptInfo.form.staUserId","text","dsDeptInfo","deptNmPath");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDeptInfo.form.staOgdpInstNm","text","dsDeptInfo","deptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDeptInfo.form.staOgdpDeptNm","text","dsDeptInfo","deptCd");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDeptInfo.form.staJbpsNm","text","dsDeptInfo","upDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDeptInfo.form.staOgdpInstNm00","text","dsDeptInfo","deptLdrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDeptInfo.form.staOgdpDeptNm00","text","dsDeptInfo","deptMngrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDeptInfo.form.staJbpsNm00","text","dsDeptInfo","useYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDeptInfo.form.staMbrAddr","text","dsDeptInfo","deptDesc");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("commonPopupSample.xfdl","lib::common.xjs");
        this.registerScript("commonPopupSample.xfdl", function() {
        /**
         *  공통 팝업 예제
         *  MenuPath      -
         *  FileName      sam::commonPopupSample.xfdl
         *  Creator       parksw
         *  CreateDate    2023.11.30
         *  Desription    권한 사용자 조회 팝업
         ************** 소스 수정 이력 ***********************************************
         *  date          Modifier    Description
         *******************************************************************************
         *  2023.11.30    parksw      최초 생성
         *******************************************************************************/

        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;

        /***********************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ***********************************************************************************************/

        this.commonPopupSample_onload = function(obj,e)
        {
            this.gfnFormOnLoad(this);
        };

        /************************************************************************************************
         * TRANSACTION 서비스 호출 처리
         ************************************************************************************************/


        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/

        this.fnPopupClosed = function (popupId, args)
        {
            const result = this.gfnGetPopupRtn();
            let user;
            let users;
            let dept;
            let depts;
            switch (popupId) {
                case "singleAddUser":       // 단일 사용자 추가
                    if (result.canceled) {
                        this.gfnAlert("취소됨");
                        return;
                    }

                    user = result.user;

                    // 그리드에 행을 추가하고 데이터를 입력한다.
                    this.gfnInsertRow(this.dsUser, "last");
                    this.dsUser.setColumn(this.dsUser.rowposition, "userId", user.userId);
                    this.dsUser.setColumn(this.dsUser.rowposition, "memberId", user.memberId);
                    this.dsUser.setColumn(this.dsUser.rowposition, "userNmKr", user.userNmKr);
                    this.dsUser.setColumn(this.dsUser.rowposition, "ogdpDeptNm", user.ogdpDeptNm);
                    this.dsUser.setColumn(this.dsUser.rowposition, "emlAddr", user.emlAddr);
                    this.dsUser.setColumn(this.dsUser.rowposition, "ofcTelno", user.ofcTelno);
                    this.dsUser.setColumn(this.dsUser.rowposition, "mblTelno", user.mblTelno);
                    break;
                case "multipleAddUser":     // 여러 사용자 추가
                    if (result.canceled) {
                        this.gfnAlert("취소됨");
                        return;
                    }

                    users = result.users;
                    // 그리드에 행을 추가하고 데이터를 입력한다.
                    for (const user of users) {
                        this.gfnInsertRow(this.dsUser, "last");
                        this.dsUser.setColumn(this.dsUser.rowposition, "userId", user.userId);
                        this.dsUser.setColumn(this.dsUser.rowposition, "memberId", user.memberId);
                        this.dsUser.setColumn(this.dsUser.rowposition, "userNmKr", user.userNmKr);
                        this.dsUser.setColumn(this.dsUser.rowposition, "ogdpDeptNm", user.ogdpDeptNm);
                        this.dsUser.setColumn(this.dsUser.rowposition, "jbpsNm", user.jbpsNm);
                        this.dsUser.setColumn(this.dsUser.rowposition, "emlAddr", user.emlAddr);
                        this.dsUser.setColumn(this.dsUser.rowposition, "ofcTelno", user.ofcTelno);
                        this.dsUser.setColumn(this.dsUser.rowposition, "mblTelno", user.mblTelno);
                    }
                    break;
                case "selectUser":          // 사용자 선택
                    if (result.canceled) {
                        this.gfnAlert("취소됨");
                        return;
                    }

                    if (result.reset) {
                        // 초기화 버튼 클릭 시 폼의 내용을 초기화
                        this.dsUserInfo.clearData();
                        this.dsUserInfo.addRow();
                        return;
                    }

                    if (this.dsUserInfo.rowcount == 0) {
                        this.dsUserInfo.addRow();
                    }

                    user = result.user;
                    // 선택한 내용을 폼에 설정한다.
                    this.dsUserInfo.setColumn(0, "userId", user.userId);
                    this.dsUserInfo.setColumn(0, "memberId", user.memberId);
                    this.dsUserInfo.setColumn(0, "userNmKr", user.userNmKr);
                    this.dsUserInfo.setColumn(0, "ogdpInstNm", user.ogdpInstNm);
                    this.dsUserInfo.setColumn(0, "ogdpDeptNm", user.ogdpDeptNm);
                    this.dsUserInfo.setColumn(0, "jbpsNm", user.jbpsNm);
                    this.dsUserInfo.setColumn(0, "emlAddr", user.emlAddr);
                    this.dsUserInfo.setColumn(0, "ofcTelno", user.ofcTelno);
                    this.dsUserInfo.setColumn(0, "mblTelno", user.mblTelno);
                    this.dsUserInfo.setColumn(0, "mbrAddr", [user.mbrZip, user.mbrAddr, user.mbrDaddr].join("\n"));
                    this.dsUserInfo.setColumn(0, "ofcAddr", [user.ofcZip, user.ofcAddr, user.ofcDaddr].join("\n"));
                    break;
                case "singleAddDept":       // 단일 부서 추가
                    if (result.canceled) {
                        return;
                    }

                    dept = result.dept;

                    this.gfnInsertRow(this.dsDeptList, "last");
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptCd", dept.deptCd);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptNm", dept.deptNm);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptLdrId", dept.deptLdrId);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptLdrNm", dept.deptLdrNm);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptMngrId", dept.deptMngrId);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptMngrNm", dept.deptMngrNm);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptDesc", dept.deptDesc);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "useYn", dept.useYn);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "ordSn", dept.ordSn);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "upDeptCd", dept.upDeptCd);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "upDeptNm", dept.upDeptNm);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "level", dept.level);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "matched", dept.matched);
                    this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptNmPath", dept.deptNmPath.join(">"));

                    break;
                case "multipleAddDept":     // 여러 부서 추가
                    if (result.canceled) {
                        return;
                    }

                    depts = result.depts;

                    for (const dept of depts) {
                        this.gfnInsertRow(this.dsDeptList, "last");
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptCd", dept.deptCd);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptNm", dept.deptNm);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptLdrId", dept.deptLdrId);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptLdrNm", dept.deptLdrNm);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptMngrId", dept.deptMngrId);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptMngrNm", dept.deptMngrNm);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptDesc", dept.deptDesc);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "useYn", dept.useYn);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "ordSn", dept.ordSn);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "upDeptCd", dept.upDeptCd);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "upDeptNm", dept.upDeptNm);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "level", dept.level);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "matched", dept.matched);
                        this.dsDeptList.setColumn(this.dsDeptList.rowposition, "deptNmPath", dept.deptNmPath.join(">"));
                    }

                    break;
                case "selectDept":          // 부서 선택
                    if (result.canceled) {
                        this.gfnAlert("취소됨");
                        return;
                    }

                    if (result.reset) {
                        this.dsDeptInfo.clearData();
                        this.dsDeptInfo.addRow();
                        return;
                    }

                    if (this.dsDeptInfo.rowcount == 0) {
                        this.dsDeptInfo.addRow();
                    }

                    dept = result.dept;

                    this.dsDeptInfo.setColumn(0, "deptCd", dept.deptCd);
                    this.dsDeptInfo.setColumn(0, "deptNm", dept.deptNm);
                    this.dsDeptInfo.setColumn(0, "deptLdrId", dept.deptLdrId);
                    this.dsDeptInfo.setColumn(0, "deptLdrNm", dept.deptLdrNm);
                    this.dsDeptInfo.setColumn(0, "deptMngrId", dept.deptMngrId);
                    this.dsDeptInfo.setColumn(0, "deptMngrNm", dept.deptMngrNm);
                    this.dsDeptInfo.setColumn(0, "deptDesc", dept.deptDesc);
                    this.dsDeptInfo.setColumn(0, "useYn", dept.useYn);
                    this.dsDeptInfo.setColumn(0, "ordSn", dept.ordSn);
                    this.dsDeptInfo.setColumn(0, "upDeptCd", dept.upDeptCd);
                    this.dsDeptInfo.setColumn(0, "upDeptNm", dept.upDeptNm);
                    this.dsDeptInfo.setColumn(0, "level", dept.level);
                    this.dsDeptInfo.setColumn(0, "matched", dept.matched);
                    this.dsDeptInfo.setColumn(0, "deptNmPath", dept.deptNmPath.join(">"));
                    break;
                default:
                    break;
            }
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.divResult_btnAddMultiplePerson_onclick = function(obj,e)
        {
            this.fnAddUser("multiple");
        };

        this.divResult_btnAddOnePerson_onclick = function(obj,e)
        {
            this.fnAddUser("single");
        };

        this.divUserForm_btnSelectUser_onclick = function(obj,e)
        {
            this.fnSelectUser();
        };

        this.divDeptList_btnAddMultipleDept_onclick = function(obj,e)
        {
            this.fnAddDept("multiple");
        };

        this.divDeptList_btnAddOneDept_onclick = function(obj,e)
        {
            this.fnAddDept("single");
        };

        this.divDeptInfo_btnSelectUser_onclick = function(obj,e)
        {
            this.fnSelectDept();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /**
         * 사용자를 추가한다.
         *
         * @param {"single" | "multiple"} mode 사용자 선택 모드(single: 단일, multiple: 다중)
         */
        this.fnAddUser = function (mode)
        {
            /**
             * 사용자 검색 팝업을 표시할 옵션
             *
             * @property {"single" | "multiple"} mode 사용자 선택 모드(single: 단일, multiple: 다중)
             * @property {boolean} enableReset 초기화 버튼 사용 여부
             */
            const args = {
                mode: mode,
                enableReset: false
            };

            this.gfnOpenPopup(mode + "AddUser", "cmm::userSearchPopup.xfdl", args, "fnPopupClosed", "");
        };

        /**
         * 사용자를 선택한다.
         */
        this.fnSelectUser = function ()
        {
            const args = {
                mode: "single",
                enableReset: true
            };

            this.gfnOpenPopup("selectUser", "cmm::userSearchPopup.xfdl", args, "fnPopupClosed", "");
        };

        /**
         * 부서를 추가한다.
         *
         * @param {"single" | "multiple"} mode 부서선택 모드(single: 단일, multiple: 다중)
         */
        this.fnAddDept = function (mode)
        {
            /**
             * 부서 검색 팝업을 표시할 옵션
             *
             * @property {"single" | "multiple"} mode 부서 선택 모드(single: 단일, multiple: 다중)
             * @property {boolean} enableReset 초기화 버튼 사용 여부
             */
            const args = {
                mode: mode,
                enableReset: false
            };

            this.gfnOpenPopup(mode + "AddDept", "cmm::deptSearchPopup.xfdl", args, "fnPopupClosed", "");
        };

        /**
         * 부서를 선택한다.
         */
        this.fnSelectDept= function ()
        {
            const args = {
                mode: "single",
                enableReset: true
            };

            this.gfnOpenPopup("selectDept", "cmm::deptSearchPopup.xfdl", args, "fnPopupClosed", "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commonPopupSample_onload,this);
            this.divUserList.form.grdUserManage.addEventHandler("onheadclick",this.Div00_grdUserManage_onheadclick,this);
            this.divUserList.form.grdUserManage.addEventHandler("oncelldblclick",this.divResult_grdUserManage_oncelldblclick,this);
            this.divUserList.form.grdUserManage.addEventHandler("oncellclick",this.divResult_grdUserManage_oncellclick,this);
            this.divUserList.form.btnAddOnePerson.addEventHandler("onclick",this.divResult_btnAddOnePerson_onclick,this);
            this.divUserList.form.btnAddMultiplePerson.addEventHandler("onclick",this.divResult_btnAddMultiplePerson_onclick,this);
            this.divUserForm.form.btnSelectUser.addEventHandler("onclick",this.divUserForm_btnSelectUser_onclick,this);
            this.divDeptList.form.btnAddOneDept.addEventHandler("onclick",this.divDeptList_btnAddOneDept_onclick,this);
            this.divDeptList.form.btnAddMultipleDept.addEventHandler("onclick",this.divDeptList_btnAddMultipleDept_onclick,this);
            this.divDeptList.form.grdDeptList.addEventHandler("onheadclick",this.Div00_grdUserManage_onheadclick,this);
            this.divDeptList.form.grdDeptList.addEventHandler("oncelldblclick",this.divResult_grdUserManage_oncelldblclick,this);
            this.divDeptList.form.grdDeptList.addEventHandler("oncellclick",this.divResult_grdUserManage_oncellclick,this);
            this.divDeptInfo.form.btnSelectUser.addEventHandler("onclick",this.divDeptInfo_btnSelectUser_onclick,this);
            this.dsUser.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
            this.dsUserInfo.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
            this.dsDeptInfo.addEventHandler("onrowposchanged",this.dsUser_onrowposchanged,this);
        };
        this.loadIncludeScript("commonPopupSample.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
