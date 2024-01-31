(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("btn_addRow");
            this.set_titletext("컴포넌트");
            this.set_cssclass("btn_WF_Sort");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,3510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RQST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DETP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"PLC\" type=\"STRING\" size=\"4000\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"TP\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"COM_CAR_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"4000\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"4000\"/></ColumnInfo><Rows><Row><Col id=\"RQST_AMT\">2222223</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"isChecked\" type=\"STRING\" size=\"256\"/><Column id=\"tmHeader\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IDX\" type=\"STRING\" size=\"256\"/><Column id=\"RECEV_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RECEV_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"APV_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_main", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DT\" type=\"STRING\" size=\"8\"/><Column id=\"RQST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_DETP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RQST_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"SBJ\" type=\"STRING\" size=\"256\"/><Column id=\"PLC\" type=\"STRING\" size=\"4000\"/><Column id=\"YY\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"TP\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"COM_CAR_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CONT\" type=\"STRING\" size=\"4000\"/><Column id=\"APV_STAT_CD\" type=\"STRING\" size=\"4000\"/><Column id=\"APV_STAT_NM\" type=\"STRING\" size=\"4000\"/><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCH_RQST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_RQST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_RQST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_RQST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_APV_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_CAL_MON\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_LAST_UPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_LAST_UPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_LAST_UPT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_RQST_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_RQST_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCH_DOC_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comCode", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UP_COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_NM\">ds_code000010</Col><Col id=\"UP_COMM_CD\">000-010</Col><Col id=\"USE_YN\">Y</Col></Row><Row><Col id=\"DS_NM\">ds_code113</Col><Col id=\"UP_COMM_CD\">113</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_domain", this);
            obj.set_filterstr("COL0 == \'KR\'");
            obj._setContents("<ColumnInfo><Column id=\"domain\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"domain\">kor</Col><Col id=\"name\">이름</Col><Col id=\"company\">회사</Col></Row><Row><Col id=\"domain\">eng</Col><Col id=\"name\">name</Col><Col id=\"company\">company</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code000010_1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code020", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ETC1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code000010", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excelupload", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gw", this);
            obj._setContents("<ColumnInfo><Column id=\"gwFormId\" type=\"STRING\" size=\"256\"/><Column id=\"gwUserId\" type=\"STRING\" size=\"256\"/><Column id=\"gwSubUserId\" type=\"STRING\" size=\"256\"/><Column id=\"gwUserNm\" type=\"STRING\" size=\"256\"/><Column id=\"gwDeptCd\" type=\"STRING\" size=\"256\"/><Column id=\"gwDeptNm\" type=\"STRING\" size=\"256\"/><Column id=\"gwTitle\" type=\"STRING\" size=\"256\"/><Column id=\"gwRqstNo\" type=\"STRING\" size=\"256\"/><Column id=\"gwPgmId\" type=\"STRING\" size=\"256\"/><Column id=\"gwFileCnt\" type=\"STRING\" size=\"256\"/><Column id=\"gwApprIds\" type=\"STRING\" size=\"256\"/><Column id=\"gwApvLineNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_test", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"test\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTypeTab1", this);
            obj._setContents("<ColumnInfo><Column id=\"rowCheck\" type=\"STRING\" size=\"256\"/><Column id=\"rowStatus\" type=\"STRING\" size=\"256\"/><Column id=\"sysId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"progNm\" type=\"STRING\" size=\"256\"/><Column id=\"progTy\" type=\"STRING\" size=\"256\"/><Column id=\"progUrl\" type=\"STRING\" size=\"256\"/><Column id=\"progDc\" type=\"STRING\" size=\"256\"/><Column id=\"progFileNm\" type=\"STRING\" size=\"256\"/><Column id=\"progAuthor\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUrl\" type=\"STRING\" size=\"256\"/><Column id=\"substituteUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"atchFileId\" type=\"STRING\" size=\"256\"/><Column id=\"permissionUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"permissionDc\" type=\"STRING\" size=\"256\"/><Column id=\"radioUseYn\" type=\"STRING\" size=\"256\"/><Column id=\"rgstId\" type=\"STRING\" size=\"256\"/><Column id=\"rgstNm\" type=\"STRING\" size=\"256\"/><Column id=\"rgstIp\" type=\"STRING\" size=\"256\"/><Column id=\"rgstDt\" type=\"STRING\" size=\"256\"/><Column id=\"updtId\" type=\"STRING\" size=\"256\"/><Column id=\"updtIp\" type=\"STRING\" size=\"256\"/><Column id=\"updtDt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sysId\">3</Col><Col id=\"progId\">3</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row><Row><Col id=\"sysId\">5</Col><Col id=\"progId\">5</Col><Col id=\"progNm\">5</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row><Row><Col id=\"sysId\">1</Col><Col id=\"progId\">1</Col><Col id=\"progNm\">테스트</Col><Col id=\"substituteUseYn\">N</Col><Col id=\"permissionUseYn\">N</Col><Col id=\"radioUseYn\">N</Col><Col id=\"rgstDt\">2023/02/10</Col></Row><Row><Col id=\"sysId\">2</Col><Col id=\"progId\">2</Col><Col id=\"substituteUseYn\">Y</Col><Col id=\"permissionUseYn\">Y</Col><Col id=\"radioUseYn\">Y</Col><Col id=\"rgstDt\">2023/02/10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">1차메뉴</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"data\">2차메뉴</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">3차메뉴-1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">3차메뉴-2</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">3차메뉴-3</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">2차메뉴-2</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"data\">3차메뉴-1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">3차메뉴-1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">3차메뉴-1</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"data\">1차메뉴</Col><Col id=\"level\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,"20","65","28","254",null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Save");
            obj.set_visible("true");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"20","65","28","118",null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"20","65","28","186",null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("true");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registration",null,"20","65","28","322",null,null,null,null,null,this);
            obj.set_text("신규");
            obj.set_cssclass("");
            obj.set_visible("true");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","65","28","50",null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1809","0","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h 20");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","50","3275","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("W\r\n 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","50","3274",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title02","51","2487","169","58",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("공통 버튼");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Upload","284","2576","79","28",null,null,null,null,null,null,this);
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_icoUpload");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exel_up","462","2576","107","28",null,null,null,null,null,null,this);
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_icoExcel_Up");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Approval","668","2576","93","28",null,null,null,null,null,null,this);
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_icoApproval");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Registration","764","2576","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_icoRegistration");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Contdelete","860","2576","107","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("내용지우기");
            obj.set_cssclass("btn_WF_icoContDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Download","366","2576","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_icoDownload");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","51","2545","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","117","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Button("btn_List","249","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_icoList");
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search","381","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_icoSearch");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","183","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_icoDelete");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Return","711","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("회수");
            obj.set_cssclass("btn_WF_icoReturn");
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel_dn","572","2576","93","28",null,null,null,null,null,null,this);
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_icoExcel_Dn");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","315","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_icoCancel");
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Print","447","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_icoPrint");
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Help","202","2576","79","28",null,null,null,null,null,null,this);
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_icoHelp");
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reject","513","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_icoReject");
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Approbation","579","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_icoApprobation");
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reports","120","2576","79","28",null,null,null,null,null,null,this);
            obj.set_text("보고서");
            obj.set_cssclass("btn_WF_icoReport");
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Sms","51","2576","66","28",null,null,null,null,null,null,this);
            obj.set_text("SMS");
            obj.set_cssclass("btn_WF_icoSms");
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Mail","645","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_icoMail");
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Upload_D","278","2700","76","28",null,null,null,null,null,null,this);
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_icoUpload");
            obj.set_taborder("30");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exel_up_D","449","2700","102","28",null,null,null,null,null,null,this);
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_icoExcel_Up");
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Approval_D","646","2700","89","28",null,null,null,null,null,null,this);
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_icoApproval");
            obj.set_taborder("32");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Registration_D","738","2700","89","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_icoRegistration");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Contdelete_D","830","2700","102","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("내용지우기");
            obj.set_cssclass("btn_WF_icoContDelete");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Download_D","357","2700","89","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_icoDownload");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add_D","51","2669","63","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_icoAdd");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save_D","117","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_icoSave");
            obj.set_taborder("37");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_List_D","249","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_icoList");
            obj.set_taborder("38");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search_D","381","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_icoSearch");
            obj.set_taborder("39");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete_D","183","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_icoDelete");
            obj.set_taborder("40");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Return_D","711","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("회수");
            obj.set_cssclass("btn_WF_icoReturn");
            obj.set_taborder("41");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel_dn_D","554","2700","89","28",null,null,null,null,null,null,this);
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_icoExcel_Dn");
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel_D","315","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_icoCancel");
            obj.set_taborder("43");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Print_D","447","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_icoPrint");
            obj.set_taborder("44");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Help_D","199","2700","76","28",null,null,null,null,null,null,this);
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_icoHelp");
            obj.set_taborder("45");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reject_D","513","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_icoReject");
            obj.set_taborder("46");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Approbation_D","579","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_icoApprobation");
            obj.set_taborder("47");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reports_D","120","2700","76","28",null,null,null,null,null,null,this);
            obj.set_text("보고서");
            obj.set_cssclass("btn_WF_icoReport");
            obj.set_taborder("48");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Sms_D","51","2700","66","28",null,null,null,null,null,null,this);
            obj.set_text("SMS");
            obj.set_cssclass("btn_WF_icoSms");
            obj.set_taborder("49");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Mail_D","645","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_icoMail");
            obj.set_taborder("50");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search00","50","2800",null,"710","50",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","169","45",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("0");
            obj.set_text("폼 버튼");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_rowAdd","0","45","73","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_rowDelete","78","45","73","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_download","314","170","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdDownload");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_upload","233","170","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("4");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcelUp","408","170","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("5");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_grdExcel");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdsave","68","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_sort","1700","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("7");
            obj.set_text("정렬");
            obj.set_cssclass("btn_WF_grdSort");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_search","340","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_down","156","45","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("9");
            obj.set_text("아래로");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_up","237","45","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("10");
            obj.set_text("위로");
            obj.set_cssclass("btn_WF_grdArrUp");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_rowAdd_D","0","76","73","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("11");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_rowDelete_D","78","76","73","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("12");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_download_D","314","201","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("13");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdDownload");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_upload_D","233","201","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("14");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcelUp_D","408","201","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("15");
            obj.set_text("엑셀업로드");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdExcel");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdsave_D","68","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("16");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_sort_D","1700","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("17");
            obj.set_text("정렬");
            obj.set_cssclass("btn_WF_grdSort");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_search_D","340","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_down_D","156","76","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("19");
            obj.set_text("아래로");
            obj.set_cssclass("btn_WF_grdArrDown");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_up_D","237","76","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("20");
            obj.set_text("위로");
            obj.set_cssclass("btn_WF_grdArrUp");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdTxt","553","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_grdTxt");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdTxt_D","553","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_grdTxt");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExe","584","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_grdExe");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExe_D","584","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_grdExe");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_maximum","615","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_Maximum");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_maximum_D","615","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_Maximum");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_minimum","646","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_Minimum");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_minimum_D","646","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_Minimum");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdClose_D","677","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_Close");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdClose","677","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_Close");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("Static00","20","485","200","200",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("31");
            obj.set_tooltiptext("loading");
            obj.set_cssclass("loading");
            obj.set_background("url(\'theme://images/loading.gif\') no-repeat center center");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd_D","0","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("32");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd","0","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("33");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_grdAdd");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDelete_D","136","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("34");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_grdDelete");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDelete","136","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("35");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_grdDelete");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdPrint_D","408","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("36");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_grdPrint");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdPrint","408","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("37");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_grdPrint");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdList_D","204","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("38");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_grdList");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdList","204","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("39");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_grdList");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdCancel_D","272","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("40");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_grdCancel");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdCancel","272","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("41");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_grdCancel");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReturn_D","680","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("42");
            obj.set_text("회수");
            obj.set_cssclass("btn_WF_grdReturn");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReturn","680","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("43");
            obj.set_text("회수");
            obj.set_cssclass("btn_WF_grdReturn");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdMail_D","612","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("44");
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_grdMail");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdMail","612","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("45");
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_grdMail");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSms","0","170","66","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("46");
            obj.set_text("SMS");
            obj.set_cssclass("btn_WF_grdSms");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSms_D","0","201","66","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("47");
            obj.set_text("SMS");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdSms");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoTxt_D","985","201","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("48");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_grdIcoTxt");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoTxt","985","170","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("49");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_grdIcoTxt");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExe","1066","170","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("50");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_grdIcoExe");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExe_D","1066","201","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("51");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_grdIcoExe");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRegistration_D","703","201","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("52");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_grdRegistration");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRegistration","703","170","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("53");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_grdRegistration");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApproval_D","609","201","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("54");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_grdApproval");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApproval","609","170","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("55");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_grdApproval");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSelect","816","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("56");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_grdSelect");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSelect_D","816","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("57");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_grdSelect");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAccept_D","1156","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("58");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_grdAccept");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAccept","1156","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("59");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_grdAccept");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_notify_D","1292","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("60");
            obj.set_text("통보");
            obj.set_cssclass("btn_WF_grdNotify");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_notify","1292","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("61");
            obj.set_text("통보");
            obj.set_cssclass("btn_WF_grdNotify");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApplication_D","1496","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("62");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_grdApplication");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApplication","1496","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("63");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_grdApplication");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReview_D","1564","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("64");
            obj.set_text("검토");
            obj.set_cssclass("btn_WF_grdReview");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReview","1564","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("65");
            obj.set_text("검토");
            obj.set_cssclass("btn_WF_grdReview");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdEvaluation_D","1632","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("66");
            obj.set_text("평가");
            obj.set_cssclass("btn_WF_grdEvaluation");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdEvaluation","1632","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("67");
            obj.set_text("평가");
            obj.set_cssclass("btn_WF_grdEvaluation");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReject_D","476","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("68");
            obj.set_text("반려");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdReject");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReject","476","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("69");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_grdReject");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAppr","544","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("70");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_grdApprobation");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAppr_D","544","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("71");
            obj.set_text("승인");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdApprobation");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_check_D","748","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("72");
            obj.set_text("확인");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdCheck");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_check","748","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("73");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_grdCheck");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_modi_D","884","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("74");
            obj.set_text("수정");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdModify");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_modi","884","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("75");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_grdModify");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDecision_D","952","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("76");
            obj.set_text("확정");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdDecision");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDecision","952","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("77");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_grdDecision");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRep_D","1020","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("78");
            obj.set_text("보고");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdReport");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRep","1020","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("79");
            obj.set_text("보고");
            obj.set_cssclass("btn_WF_grdReport");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_conclu_D","1088","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("80");
            obj.set_text("체결");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdConclusion");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_conclu","1088","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("81");
            obj.set_text("체결");
            obj.set_cssclass("btn_WF_grdConclusion");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_submit_D","1224","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("82");
            obj.set_text("제출");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdSubmit");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_submit","1224","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("83");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_grdSubmit");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_term_D","1360","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("84");
            obj.set_text("해지");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdTermination");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_term","1360","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("85");
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_grdTermination");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRescission_D","1428","140","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("86");
            obj.set_text("해약");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdRescission");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRescission","1428","109","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("87");
            obj.set_text("해약");
            obj.set_cssclass("btn_WF_grdRescission");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReport_D","71","201","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("88");
            obj.set_text("보고서");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdReport");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReport","71","170","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("89");
            obj.set_text("보고서");
            obj.set_cssclass("btn_WF_grdReport");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdHelp_D","152","201","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("90");
            obj.set_text("도움말");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdHelp");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdHelp","152","170","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("91");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_grdHelp");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcelDown","515","170","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("92");
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_grdExcel");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcelDown_D","515","201","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("93");
            obj.set_text("엑셀다운");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdExcel");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_contDelete","797","170","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("94");
            obj.set_text("내용지우기");
            obj.set_cssclass("btn_WF_grdContDelete");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_contDelete_D","797","201","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("95");
            obj.set_text("내용지우기");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdContDelete");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdOut","904","170","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("96");
            obj.set_text("나가기");
            obj.set_cssclass("btn_WF_grdClose");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdOut_D","904","201","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("97");
            obj.set_text("나가기");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdClose");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrRight_D","305","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrRight");
            obj.set_taborder("98");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrLeft_D","336","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrLeft");
            obj.set_taborder("99");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrUp_D","367","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrUp");
            obj.set_taborder("100");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrDown_D","398","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrDown");
            obj.set_taborder("101");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_calendar_D","429","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoCalendar");
            obj.set_taborder("102");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_help_D","460","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoHelp");
            obj.set_taborder("103");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_etc_D","491","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoEtc");
            obj.set_taborder("104");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_Setting_D","522","76","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoSetting");
            obj.set_taborder("105");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrRight","305","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrRight");
            obj.set_taborder("106");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrLeft","336","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrLeft");
            obj.set_taborder("107");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrUp","367","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrUp");
            obj.set_taborder("108");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrDown","398","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoArrDown");
            obj.set_taborder("109");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_calendar","429","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoCalendar");
            obj.set_taborder("110");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_help","460","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoHelp");
            obj.set_taborder("111");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_etc","491","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoEtc");
            obj.set_taborder("112");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_Setting","522","45","26","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_cssclass("btn_WF_grdIcoSetting");
            obj.set_taborder("113");
            obj.set_text("");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExit","1134","170","61","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("114");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_grdIcoExit");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExit_D","1134","201","61","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("115");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_grdIcoExit");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","236","169","45",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("116");
            obj.set_text("폼 버튼(강조)");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDownload_W","312","342","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("117");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdDownload_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdUpload_W","232","342","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("118");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcel_W","407","342","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("119");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_grdExcel_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSave_W","67","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("120");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSort_W","1700","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("121");
            obj.set_text("정렬");
            obj.set_cssclass("btn_WF_grdSort_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSearch_W","340","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("122");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDownload_W_D","312","372","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("123");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdDownload_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdUpload_W_D","232","372","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("124");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcel_W_D","407","372","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("125");
            obj.set_text("엑셀업로드");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdExcel_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSort_W_D","1700","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("126");
            obj.set_text("정렬");
            obj.set_cssclass("btn_WF_grdSort_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSearch_W_D","340","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("127");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_grdSearch_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd_W_D","0","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("128");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_grdAdd_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd_W","0","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("129");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_grdAdd_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDelete_W_D","135","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("130");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_grdDelete_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDelete_W","135","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("131");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_grdDelete_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdPrint_W_D","407","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("132");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_grdPrint_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdPrint_W","407","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("133");
            obj.set_text("인쇄");
            obj.set_cssclass("btn_WF_grdPrint_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdList_W_D","202","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("134");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_grdList_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdList_W","202","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("135");
            obj.set_text("목록");
            obj.set_cssclass("btn_WF_grdList_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdCancel_W_D","271","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("136");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_grdCancel_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdCancel_W","271","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("137");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_grdCancel_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReturn_W_D","678","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("138");
            obj.set_text("회수");
            obj.set_cssclass("btn_WF_grdReturn_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReturn_W","678","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("139");
            obj.set_text("회수");
            obj.set_cssclass("btn_WF_grdReturn_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdMail_W_D","611","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("140");
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_grdMail_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdMail_W","611","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("141");
            obj.set_text("메일");
            obj.set_cssclass("btn_WF_grdMail_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSms_W","0","342","66","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("142");
            obj.set_text("SMS");
            obj.set_cssclass("btn_WF_grdSms_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSms_W_D","0","372","66","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("143");
            obj.set_text("SMS");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdSms_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoTxt_W_D","984","372","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("144");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_grdIcoTxt_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoTxt_W","984","342","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("145");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_grdIcoTxt_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExe_W","1065","342","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("146");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_grdIcoExe_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExe_W_D","1065","372","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("147");
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_grdIcoExe_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRegistration_W_D","702","372","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("148");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_grdRegistration_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRegistration_W","702","342","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("149");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_grdRegistration_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApproval_W_D","608","372","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("150");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_grdApproval_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApproval_W","608","342","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("151");
            obj.set_text("결재상신");
            obj.set_cssclass("btn_WF_grdApproval_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSelect_W","815","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("152");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_grdSelect_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSelect_W_D","815","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("153");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_grdSelect_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAccept_W_D","1155","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("154");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_grdAccept_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdAccept_W","1155","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("155");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_grdAccept_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdNotify_W_D","1291","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("156");
            obj.set_text("통보");
            obj.set_cssclass("btn_WF_grdNotify_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdNotify_W","1291","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("157");
            obj.set_text("통보");
            obj.set_cssclass("btn_WF_grdNotify_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApplication_W_D","1495","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("158");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_grdApplication_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApplication_W","1495","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("159");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_grdApplication_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReview_W_D","1562","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("160");
            obj.set_text("검토");
            obj.set_cssclass("btn_WF_grdReview_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReview_W","1562","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("161");
            obj.set_text("검토");
            obj.set_cssclass("btn_WF_grdReview_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdEvaluation_W_D","1631","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("162");
            obj.set_text("평가");
            obj.set_cssclass("btn_WF_grdEvaluation_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdEvaluation_W","1631","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("163");
            obj.set_text("평가");
            obj.set_cssclass("btn_WF_grdEvaluation_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReject_W_D","475","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("164");
            obj.set_text("반려");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdReject_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReject_W","475","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("165");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_grdReject_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApprobation_W","542","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("166");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_grdApprobation_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdApprobation_W_D","542","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("167");
            obj.set_text("승인");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdApprobation_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdCheck_W_D","747","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("168");
            obj.set_text("확인");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdCheck_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdCheck_W","747","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("169");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_grdCheck_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdModify_W_D","882","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("170");
            obj.set_text("수정");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdModify_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdModify_W","882","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("171");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_grdModify_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDecision_W_D","951","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("172");
            obj.set_text("확정");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdDecision_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdDecision_W","951","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("173");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_grdDecision_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReport_W_D","1020","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("174");
            obj.set_text("보고");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdReport_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdReport_W","1020","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("175");
            obj.set_text("보고");
            obj.set_cssclass("btn_WF_grdReport_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdConclusion_W_D","1087","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("176");
            obj.set_text("체결");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdConclusion_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdConclusion_W","1087","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("177");
            obj.set_text("체결");
            obj.set_cssclass("btn_WF_grdConclusion_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSubmit_W_D","1222","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("178");
            obj.set_text("제출");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdSubmit_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSubmit_W","1222","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("179");
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_grdSubmit_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdTermination_W_D","1358","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("180");
            obj.set_text("해지");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdTermination_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdTermination_W","1358","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("181");
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_grdTermination_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRescission_W_D","1427","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("182");
            obj.set_text("해약");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdRescission_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRescission_W","1427","281","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("183");
            obj.set_text("해약");
            obj.set_cssclass("btn_WF_grdRescission_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRept_W_D","70","372","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("184");
            obj.set_text("보고서");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdReport_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdRept_W","70","342","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("185");
            obj.set_text("보고서");
            obj.set_cssclass("btn_WF_grdReport_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdHelp_W_D","151","372","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("186");
            obj.set_text("도움말");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdHelp_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdHelp_W","151","342","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("187");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_grdHelp_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcelDown_W","514","342","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("188");
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_grdExcel_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdExcelDown_W_D","514","372","89","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("189");
            obj.set_text("엑셀다운");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdExcel_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdContDelete_W","795","342","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("190");
            obj.set_text("내용지우기");
            obj.set_cssclass("btn_WF_grdContDelete_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdContDelete_W_D","795","372","102","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("191");
            obj.set_text("내용지우기");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdContDelete_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdOut_W","902","342","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("192");
            obj.set_text("나가기");
            obj.set_cssclass("btn_WF_grdClose_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdOut_W_D","902","372","76","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("193");
            obj.set_text("나가기");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_grdClose_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExit_W","1132","342","61","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("194");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_grdIcoExit_W");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdIcoExit_W_D","1132","372","61","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("195");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_grdIcoExit_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_grdSave_W_D","67","312","63","26",null,null,null,null,null,null,this.div_Search00.form);
            obj.set_taborder("196");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave_W");
            obj.set_enable("false");
            this.div_Search00.addChild(obj.name, obj);

            obj = new Button("btn_arrRight","51","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrRight");
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new Button("btn_arrRight0","51","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrRight");
            obj.set_taborder("53");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_arrLeft","82","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrLeft");
            obj.set_taborder("54");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_arrLeft0","82","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrLeft");
            obj.set_taborder("55");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search01","50","619",null,"294","50",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","75","45",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","Static09:10","0","149","45",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","45",null,null,"0","0",null,null,null,null,this.div_Search01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"85\"/><Column size=\"83\"/><Column size=\"43\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"95\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\" cssclass=\"essential\"/><Cell col=\"2\" text=\"신청번호\" autosizerow=\"default\"/><Cell col=\"3\" text=\"신청일\"/><Cell col=\"4\" text=\"결재상태\"/><Cell col=\"5\" text=\"문서\" cssclass=\"essential\"/><Cell col=\"6\" text=\"신청부서\" cssclass=\"essential\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청금액\"/><Cell col=\"9\" text=\"출장명\"/><Cell col=\"10\" colspan=\"2\" text=\"신청기간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:isChecked\" textAlign=\"center\" verticalAlign=\"middle\" expandsize=\"16\" cssclass=\"essential\"/><Cell col=\"2\" displaytype=\"decoratetext\" edittype=\"none\" text=\"bind:RQST_NO\" expandsize=\"16\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:RQST_DT\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"상태\" expandsize=\"16\"/><Cell col=\"5\" text=\"bind:APV_STAT_CD\" displaytype=\"combocontrol\" expandsize=\"16\" cssclass=\"essential\"/><Cell col=\"6\" displaytype=\"editcontrol\" edittype=\"none\" text=\"bind:RQST_DEPT_NM\" cssclass=\"essential\" expandsize=\"16\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" text=\"bind:RQST_NM\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:RQST_AMT\" mask=\"!#,###,###\" textAlign=\"right\" verticalAlign=\"middle\" cssclass=\" cellLink\" expandsize=\"16\"/><Cell col=\"9\" displaytype=\"textareacontrol\" edittype=\"none\" text=\"bind:SBJ\" autosizerow=\"default\" autosizecol=\"default\" textAlign=\"left\" verticalAlign=\"middle\" wordWrap=\"none\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:FRM_DT\" expandsize=\"16\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"date\" text=\"bind:TO_DT\" expandsize=\"16\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","129","0","60","45",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("3");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Div("div_Search02","50","389",null,"220","50",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","19","0","169","45",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","0","44",null,"34","0",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_01","0","77",null,"34","0",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","110",null,"34","0",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","0","143",null,"77","0",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01","21","127",null,"3","21",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00","21","127",null,"3","21",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_00","21","45",null,"1","21",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01","21","127",null,"3","21",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("in_TRP_NM","0","44","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("9");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("in_IN_OUT00","0","110","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("10");
            obj.set_text("라이오버튼입력");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("in_RQST_AMT","33.33%","44","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("11");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("in_Type","0","77","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("12");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("in_TRP_PERIOD","66.66%","77","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("13");
            obj.set_text("기간입력");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Combo("Combo00","in_Type:10","81","17.53%","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("14");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("COMM_CD");
            obj.set_datacolumn("COMM_NM");
            obj.set_innerdataset("ds_code000010");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Edit("Edit05","in_RQST_AMT:10","48","17.53%","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("in_RQST_NM","33.33%","77","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("16");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Edit("RQST_NM","in_RQST_NM:10","81","17.53%","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("17");
            obj.set_cssclass("");
            obj.set_enable("false");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Edit("SBJ","in_TRP_NM:10","48","17.53%","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("18");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Calendar("FRM_DT","in_TRP_PERIOD:10","81","8.41%","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("19");
            obj.set_displaynulltext("____-__-__");
            obj.set_popuptype("none");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Radio("Radio00","in_IN_OUT00:10","114","136","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div_Search02_form_Radio00_innerdataset = new nexacro.NormalDataset("div_Search02_form_Radio00_innerdataset", obj);
            div_Search02_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">조건01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">조건02</Col></Row></Rows>");
            obj.set_innerdataset(div_Search02_form_Radio00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static_textarea00","0","143","150","77",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("21");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","Static_textarea00:10","147",null,"69","33",null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("22");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("in_YY","66.66%","44","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("23");
            obj.set_text("Spinner");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Spin("Spin00","in_YY:10","48","8.41%","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("24");
            obj.set_cssclass("");
            obj.set_value("2020");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static12","66.66%","110","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("25");
            obj.set_text("팝업입력");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static35","33.33%","110","150","34",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("26");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_condition02");
            this.div_Search02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","Static35:10","114","130","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Edit("commCd","Static12:10","114","8.41%","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("28");
            obj.set_maxlength("100");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Button("btnPop","1571","114","26","26",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_enable("false");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static10_00","150","44","10","173",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("30");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","in_RQST_AMT:0","45","10","173",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("31");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","in_YY:0","44","10","173",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("32");
            obj.set_text("w8");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.div_Search02.form);
            obj.set_taborder("33");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search02.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_02","45","379","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("h 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_Excel","50","923",null,"269","50",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","169","45",null,null,null,null,null,null,this.div_Excel.form);
            obj.set_taborder("0");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Excel.addChild(obj.name, obj);

            obj = new Grid("excelupload","0","45",null,null,"0","0",null,null,null,null,this.div_Excel.form);
            obj.set_cssclass("");
            obj.set_taborder("1");
            obj.set_binddataset("ds_excelupload");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"135\"/><Column size=\"178\"/><Column size=\"169\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/><Cell row=\"1\" text=\"Column0\"/><Cell row=\"1\" col=\"1\" text=\"Column1\"/><Cell row=\"1\" col=\"2\" text=\"Column2\"/><Cell row=\"1\" col=\"3\" text=\"Column3\"/><Cell row=\"1\" col=\"4\" text=\"Column4\"/><Cell row=\"1\" col=\"5\" text=\"Column5\"/><Cell row=\"1\" col=\"6\" text=\"Column6\"/><Cell row=\"1\" col=\"7\" text=\"Column7\"/><Cell row=\"1\" col=\"8\" text=\"Column8\"/><Cell row=\"1\" col=\"9\" text=\"Column9\"/><Cell row=\"1\" col=\"10\" text=\"Column10\"/></Band></Format></Formats>");
            this.div_Excel.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","110","0","60","45",null,null,null,null,null,null,this.div_Excel.form);
            obj.set_taborder("2");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Excel.addChild(obj.name, obj);

            obj = new Button("btn_grdExcelUp",null,"14","97","26","66",null,null,null,null,null,this.div_Excel.form);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_grdExcel");
            this.div_Excel.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"14","61","26","0",null,null,null,null,null,this.div_Excel.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_grdSave");
            this.div_Excel.addChild(obj.name, obj);

            obj = new Tab("Tab00","50","1202",null,"328","50",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_WF_comp");
            obj.set_tabbuttonheight("34");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("그리드입력");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button16",null,"13","73","26","156",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button15",null,"13","85","26","234",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdDownload");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static37_00","0","0","250","45",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Grid입력");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_row_add00",null,"13","73","26","78",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_row_delete00",null,"13","73","26","0",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdTypeTwo","0","45",null,null,"0","0",null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsTypeTab1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"시스템ID\"/><Cell col=\"4\" text=\"프로그램ID\"/><Cell col=\"5\" text=\"프로그램명\"/><Cell col=\"6\" text=\"프로그램유형\"/><Cell col=\"7\" text=\"URL\"/><Cell col=\"8\" text=\"프로그램 설명\"/><Cell col=\"9\" text=\"프로그램 파일명\"/><Cell col=\"10\" text=\"대체URL\"/><Cell col=\"11\" text=\"대체URL 사용여부\"/><Cell col=\"12\" text=\"첨부파일\"/><Cell col=\"13\" text=\"권한레벨 사용여부\"/><Cell col=\"14\" text=\"권한레벨 사용설명\"/><Cell col=\"15\" text=\"radio사용\"/><Cell col=\"16\" text=\"radio미사용\"/><Cell col=\"17\" text=\"등록자\"/><Cell col=\"18\" text=\"등록일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\" text=\"bind:rowCheck\"/><Cell col=\"2\" textAlign=\"center\" imagestretch=\"fit\" displaytype=\"normal\" text=\"expr:rowStatus == &apos;inserted&apos; ? &apos;C&apos; : rowStatus == &apos;updated&apos; ? &apos;U&apos; : rowStatus == &apos;deleted&apos; ? &apos;D&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:sysId\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:progId\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:progNm\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:progTy\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"7\" text=\"bind:progUrl\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:progDc\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:progFileNm\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:substituteUrl\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:substituteUseYn\" edittype=\"combo\" displaytype=\"combocontrol\" combodataset=\"dsUseYn\" combocodecol=\"LINE_CODE\" combodatacol=\"LINE_CODE_NM_KR\" comboautoselect=\"true\"/><Cell col=\"12\" text=\"bind:atchFileId\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:permissionUseYn\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"14\" text=\"bind:permissionDc\" edittype=\"text\"/><Cell col=\"15\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"Y\" text=\"bind:radioUseYn\"/><Cell col=\"16\" text=\"bind:radioUseYn\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"N\"/><Cell col=\"17\" text=\"bind:rgstNm\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:rgstDt\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_00","110","0","60","45",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("일반입력");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("파일첨부");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("btn_arrUp","113","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrUp");
            obj.set_taborder("61");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_arrUp0","113","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrUp");
            obj.set_taborder("62");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_arrDown","144","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrDown");
            obj.set_taborder("63");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_arrDown0","144","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_ArrDown");
            obj.set_taborder("64");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_calendar","175","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Calendar");
            obj.set_taborder("65");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_calendar0","175","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Calendar");
            obj.set_taborder("66");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help1","206","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Help");
            obj.set_taborder("67");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_help11","206","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Help");
            obj.set_taborder("68");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_etc","237","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Etc");
            obj.set_taborder("69");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_etc0","237","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Etc");
            obj.set_taborder("70");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setting","268","2607","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Setting");
            obj.set_taborder("71");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setting0","268","2731","28","28",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_Setting");
            obj.set_taborder("72");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Grid00","50","1540","47.14%","294",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            obj.set_flexgrow("1");
            obj.set_flexshrink("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","75","45",null,null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("2");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","Static09:10","0","149","44",null,null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("3");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","45",null,null,"0","0",null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"85\"/><Column size=\"83\"/><Column size=\"43\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"95\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"신청번호\" autosizerow=\"default\"/><Cell col=\"3\" text=\"신청일\"/><Cell col=\"4\" text=\"결재상태\"/><Cell col=\"5\" text=\"문서\"/><Cell col=\"6\" text=\"신청부서\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청금액\"/><Cell col=\"9\" text=\"출장명\"/><Cell col=\"10\" colspan=\"2\" text=\"신청기간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:isChecked\" textAlign=\"center\" verticalAlign=\"middle\" expandsize=\"16\"/><Cell col=\"2\" displaytype=\"decoratetext\" edittype=\"none\" text=\"bind:RQST_NO\" expandsize=\"16\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:RQST_DT\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:APV_STAT_NM\" expandsize=\"16\"/><Cell col=\"5\" text=\"bind:APV_STAT_CD\" displaytype=\"combocontrol\" expandsize=\"16\"/><Cell col=\"6\" displaytype=\"editcontrol\" edittype=\"none\" text=\"bind:RQST_DEPT_NM\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" text=\"bind:RQST_NM\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:RQST_AMT\" mask=\"!#,###,###\" textAlign=\"right\" verticalAlign=\"middle\" cssclass=\" cellLink\" expandsize=\"16\"/><Cell col=\"9\" displaytype=\"textareacontrol\" edittype=\"none\" text=\"bind:SBJ\" autosizerow=\"default\" autosizecol=\"default\" textAlign=\"left\" verticalAlign=\"middle\" wordWrap=\"none\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:FRM_DT\" expandsize=\"16\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"date\" text=\"bind:TO_DT\" expandsize=\"16\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Static("Static10_00","930","0","20","295",null,null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("0");
            obj.set_text("w20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Button("Button15",null,"14","85","26","234.08799999999997",null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("4");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdArrDown");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Button("btn_row_delete00",null,"14","73","26","0.08799999999996544",null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("5");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("false");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Button("btn_row_add00",null,"14","73","26","78.08799999999997",null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("6");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Button("Button16",null,"14","73","26","156.08799999999997",null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("7");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","128","0","60","45",null,null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("8");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Static("Static30","827","14","5","26",null,null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("9");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Static("Static05","861","0","44","14",null,null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("10");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Static("Static05_00","541","40","364","5",null,null,null,null,null,null,this.div_Grid00.form);
            obj.set_taborder("11");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Grid00.addChild(obj.name, obj);

            obj = new Div("div_Grid01","div_Grid00:15","1540",null,"294","50",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            obj.set_flexgrow("1");
            obj.set_flexshrink("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","0","75","45",null,null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("1");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Static("stc_gridRowCnt","Static09:10","0","149","44",null,null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("2");
            obj.set_text("(총 0건)");
            obj.set_cssclass("sta_WF_subTxt");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","45",null,null,"0","0",null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj.set_selectscrollmode("scroll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"85\"/><Column size=\"83\"/><Column size=\"43\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"95\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"신청번호\" autosizerow=\"default\"/><Cell col=\"3\" text=\"신청일\"/><Cell col=\"4\" text=\"결재상태\"/><Cell col=\"5\" text=\"문서\"/><Cell col=\"6\" text=\"신청부서\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청금액\"/><Cell col=\"9\" text=\"출장명\"/><Cell col=\"10\" colspan=\"2\" text=\"신청기간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:isChecked\" textAlign=\"center\" verticalAlign=\"middle\" expandsize=\"16\"/><Cell col=\"2\" displaytype=\"decoratetext\" edittype=\"none\" text=\"bind:RQST_NO\" expandsize=\"16\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:RQST_DT\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:APV_STAT_NM\" expandsize=\"16\"/><Cell col=\"5\" text=\"bind:APV_STAT_CD\" displaytype=\"combocontrol\" expandsize=\"16\"/><Cell col=\"6\" displaytype=\"editcontrol\" edittype=\"none\" text=\"bind:RQST_DEPT_NM\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" text=\"bind:RQST_NM\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:RQST_AMT\" mask=\"!#,###,###\" textAlign=\"right\" verticalAlign=\"middle\" cssclass=\" cellLink\" expandsize=\"16\"/><Cell col=\"9\" displaytype=\"textareacontrol\" edittype=\"none\" text=\"bind:SBJ\" autosizerow=\"default\" autosizecol=\"default\" textAlign=\"left\" verticalAlign=\"middle\" wordWrap=\"none\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:FRM_DT\" expandsize=\"16\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"date\" text=\"bind:TO_DT\" expandsize=\"16\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Button("Button15",null,"14","85","26","234.91200000000003",null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_grdDownload");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Button("btn_row_delete00",null,"14","73","26","0.9120000000000346",null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Row_Delete");
            obj.set_enable("false");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Button("btn_row_add00",null,"14","73","26","78.91200000000003",null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Row_Add");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Button("Button16",null,"14","73","26","156.91200000000003",null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("6");
            obj.set_text("업로드");
            obj.set_cssclass("btn_WF_grdUpload");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","127","0","60","45",null,null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("7");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Static("Static05","860","0","44","14",null,null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("8");
            obj.set_text("h 14");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Static("Static30","826","14","5","26",null,null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("9");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Static("Static05_00","540","40","364","5",null,null,null,null,null,null,this.div_Grid01.form);
            obj.set_taborder("10");
            obj.set_text("h 5");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Grid01.addChild(obj.name, obj);

            obj = new Button("btn_Txt","1052","2576","79","28",null,null,null,null,null,null,this);
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_icoTxt");
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe","1134","2576","65","28",null,null,null,null,null,null,this);
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_icoExe");
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Txt_D","1014","2700","76","28",null,null,null,null,null,null,this);
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_icoTxt");
            obj.set_taborder("77");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exe_D","1093","2700","63","28",null,null,null,null,null,null,this);
            obj.set_text("실행");
            obj.set_cssclass("btn_WF_icoExe");
            obj.set_taborder("78");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm","777","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_icoConfirm");
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Select","843","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_icoSelect");
            obj.set_taborder("80");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Modify","909","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("81");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Decision","975","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_icoDecision");
            obj.set_taborder("82");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Report","1041","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("보고");
            obj.set_cssclass("btn_WF_icoReport");
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Conclusion","1107","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("체결");
            obj.set_cssclass("btn_WF_icoConclusion");
            obj.set_taborder("84");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Accept","1173","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_icoAccept");
            obj.set_taborder("85");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Submit","1239","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_icoSubmit");
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Notify","1305","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("통보");
            obj.set_cssclass("btn_WF_icoNotify");
            obj.set_taborder("87");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Termination","1371","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_icoTermination");
            obj.set_taborder("88");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Rescission","1437","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("해약");
            obj.set_cssclass("btn_WF_icoRescission");
            obj.set_taborder("89");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Application","1503","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_icoApplication");
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Review","1569","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("검토");
            obj.set_cssclass("btn_WF_icoReview");
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Evaluation","1635","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("평가");
            obj.set_cssclass("btn_WF_icoEvaluation");
            obj.set_taborder("92");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm_D","777","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_icoConfirm");
            obj.set_taborder("93");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Select_D","843","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_icoSelect");
            obj.set_taborder("94");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Modify_D","909","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_icoModify");
            obj.set_taborder("95");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Decision_D","975","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_icoConfirm");
            obj.set_taborder("96");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Report_D","1041","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("보고");
            obj.set_cssclass("btn_WF_icoReport");
            obj.set_taborder("97");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Conclusion_D","1107","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("체결");
            obj.set_cssclass("btn_WF_icoConclusion");
            obj.set_taborder("98");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Accept_D","1173","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_icoAccept");
            obj.set_taborder("99");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Submit_D","1239","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("제출");
            obj.set_cssclass("btn_WF_icoSubmit");
            obj.set_taborder("100");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Notify_D","1305","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("통보");
            obj.set_cssclass("btn_WF_icoNotify");
            obj.set_taborder("101");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Termination_D","1371","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("해지");
            obj.set_cssclass("btn_WF_icoTermination");
            obj.set_taborder("102");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Rescission_D","1437","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("해약");
            obj.set_cssclass("btn_WF_icoCancel");
            obj.set_taborder("103");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Application_D","1503","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_icoApplication");
            obj.set_taborder("104");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Review_D","1569","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("검토");
            obj.set_cssclass("btn_WF_icoReview");
            obj.set_taborder("105");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Evaluation_D","1635","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("평가");
            obj.set_cssclass("btn_WF_icoEvaluation");
            obj.set_taborder("106");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","2356",null,"65","50",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Button("btnFirst","23","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_first8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnPrev","48","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pre8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn0","73","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn1","98","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn2","123","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn3","148","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn4","173","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn5","198","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn6","223","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn7","248","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn8","273","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn9","298","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_pagination8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnNext","323","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_next8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnLast","348","15","15","25",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_last8");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("div_Search01_00","50","1844",null,"502","51",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("div_WF_Area");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","0","169","45",null,null,null,null,null,null,this.div_Search01_00.form);
            obj.set_taborder("0");
            obj.set_text("트리구조");
            obj.set_cssclass("sta_WF_subTitle01");
            this.div_Search01_00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00_00","0","76","260",null,null,"0",null,null,null,null,this.div_Search01_00.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_cssclass("grd_WF_tree");
            obj.set_treeasynctoggle("true");
            obj.set_treeusecheckbox("true");
            obj.set_treeuseexpandkey("true");
            obj.set_selectscrollmode("default");
            obj.set_scrolltype("vertical");
            obj.set_scrollpixel("default");
            obj.set_scrollbartype("none default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Tree Title\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:data\"/></Band></Format></Formats>");
            this.div_Search01_00.addChild(obj.name, obj);

            obj = new Button("btn_expand","114","45","80","26",null,null,null,null,null,null,this.div_Search01_00.form);
            obj.set_taborder("2");
            obj.set_text("전체펼침");
            obj.set_cssclass("btn_WF_grdExpand");
            this.div_Search01_00.addChild(obj.name, obj);

            obj = new Button("btn_collapse","199","45","80","26",null,null,null,null,null,null,this.div_Search01_00.form);
            obj.set_taborder("3");
            obj.set_text("전체닫힘");
            obj.set_cssclass("btn_WF_grdCollapse");
            this.div_Search01_00.addChild(obj.name, obj);

            obj = new Grid("grd_list","Grid00_00_00:10","76",null,null,"0","0",null,null,null,null,this.div_Search01_00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_tooltiptype("default");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"110\" band=\"left\"/><Column size=\"85\"/><Column size=\"83\"/><Column size=\"43\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"95\"/><Column size=\"400\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"선택\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"신청번호\" autosizerow=\"default\"/><Cell col=\"3\" text=\"신청일\"/><Cell col=\"4\" text=\"결재상태\"/><Cell col=\"5\" text=\"문서\"/><Cell col=\"6\" text=\"신청부서\"/><Cell col=\"7\" text=\"신청자\"/><Cell col=\"8\" text=\"신청금액\"/><Cell col=\"9\" text=\"출장명\"/><Cell col=\"10\" colspan=\"2\" text=\"신청기간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" expandsize=\"16\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:isChecked\" textAlign=\"center\" verticalAlign=\"middle\" expandsize=\"16\"/><Cell col=\"2\" displaytype=\"decoratetext\" edittype=\"none\" text=\"bind:RQST_NO\" expandsize=\"16\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" text=\"bind:RQST_DT\" calendardateformat=\"yyyy-MM-dd\" expandsize=\"16\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" text=\"bind:APV_STAT_NM\" expandsize=\"16\"/><Cell col=\"5\" text=\"bind:APV_STAT_CD\" displaytype=\"combocontrol\" expandsize=\"16\"/><Cell col=\"6\" displaytype=\"editcontrol\" edittype=\"none\" text=\"bind:RQST_DEPT_NM\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" text=\"bind:RQST_NM\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"masknumber\" text=\"bind:RQST_AMT\" mask=\"!#,###,###\" textAlign=\"right\" verticalAlign=\"middle\" cssclass=\" cellLink\" expandsize=\"16\"/><Cell col=\"9\" displaytype=\"textareacontrol\" edittype=\"none\" text=\"bind:SBJ\" autosizerow=\"default\" autosizecol=\"default\" textAlign=\"left\" verticalAlign=\"middle\" wordWrap=\"none\" cssclass=\"\" expandsize=\"16\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:FRM_DT\" expandsize=\"16\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"date\" text=\"bind:TO_DT\" expandsize=\"16\"/></Band></Format><Format id=\"format_copy\"/></Formats>");
            this.div_Search01_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","129","0","60","45",null,null,null,null,null,null,this.div_Search01_00.form);
            obj.set_taborder("5");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.div_Search01_00.addChild(obj.name, obj);

            obj = new Button("btn_Sort_D","1701","2669","63","28",null,null,null,null,null,null,this);
            obj.set_text("정렬");
            obj.set_cssclass("btn_WF_icoSort");
            obj.set_taborder("109");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Sort","1701","2545","63","28",null,null,null,null,null,null,this);
            obj.set_text("정렬");
            obj.set_cssclass("btn_WF_icoSort");
            obj.set_taborder("110");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close","970","2576","79","28",null,null,null,null,null,null,this);
            obj.set_text("나가기");
            obj.set_cssclass("btn_WF_icoClose");
            obj.set_taborder("111");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close_D","935","2700","76","28",null,null,null,null,null,null,this);
            obj.set_text("나가기");
            obj.set_cssclass("btn_WF_icoClose");
            obj.set_taborder("112");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","50","59",null,"130","50",null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("");
            obj.set_cssclass("div_WF_Transparent");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"90","0",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_bg");
            obj.set_text("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static01","20","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("신청번호");
            obj.set_cssclass("sta_WF_condition01Essential");
            obj.set_usedecorate("true");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static00_00","25.00%","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("신청일");
            obj.set_cssclass("sta_WF_condition01Essential");
            this.div_Search.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","Static00_00:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_daysize("28 28");
            obj.set_cssclass("essential");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static03","50.00%","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit01","Static03:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button00","MaskEdit01:4","15","26","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_frmSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static05","75.00%","15","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("Combo00","Static05:10","15","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("key");
            obj.set_datacolumn("value");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static07","20","49","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("9");
            obj.set_text("최종수정자");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static08","25.00%","49","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("10");
            obj.set_text("최종수정일");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","Static08:10","49","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("11");
            obj.set_headheight("28");
            obj.set_popupsize("220");
            obj.set_daysize("28 28");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static09","50.00%","49","100","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("12");
            obj.set_text("신청부서");
            obj.set_cssclass("sta_WF_condition01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit02","Static09:10","49","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("21");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("Button01","MaskEdit02:4","49","26","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_frmSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("MaskEdit00","Button01:5","49","118","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("13");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("Edit00","Static01:10","15","250","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static07:10","49","250","26",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("16");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static11","20","0",null,"15","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("17");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static14","20","41",null,"8","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("18");
            obj.set_text("h 8");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static15","20","75",null,"15","20",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("19");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13","1010","15","10","54",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("20");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static17","1465","15","10","60",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("22");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static16_00","555","7","10","68",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("23");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static06_00","0",null,"50","15",null,"25",null,null,null,null,this.div_Search.form);
            obj.set_taborder("24");
            obj.set_text("h 15");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_00","0","0","20","90",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("25");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01","395","0","60","91",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("26");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","850","0","60","90",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("27");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13_00","1138","15","5","60",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("28");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","1168","15","5","60",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("29");
            obj.set_text("w 5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","20","90","0",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("30");
            obj.set_text("w 20");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12_01_00_00","1305","0","60","90",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("31");
            obj.set_text("w 60");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static12","120","0","10","84",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("32");
            obj.set_text("w 10");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("sta_title","50","0","500","58",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("기본화면구성");
            obj.set_cssclass("sta_WF_compTitle01");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","50","164",null,"215","50",null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dtlInfo","20","0","169","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_subTitle01");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00_01","110","0","60","45",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("h 45");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.7");
            obj.set_font("normal 12px/normal \"Arial\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","44",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","0","77",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","0","110",null,"34","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","0","143",null,"72","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_condition02box");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_basic","0","44","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("수기입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","Static_basic:10","48","320","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_radio","0","110","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("라디오버튼입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","Static_radio:10","114","180","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div01_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_00_innerdataset", obj);
            Div01_form_Radio00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">조건01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">조건02</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_comboBox","0","77","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo","Static_comboBox:10","81","320","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_popup","66.66%","110","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("팝업입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02_00","Static_popup:10","114","153","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnPop","Edit02_00:0","114","26","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_frmSearch");
            obj.set_enable("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_essential","33.33%","44","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_text("필수입력");
            obj.set_cssclass("sta_WF_condition02Essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit05_00","Static_essential:10","48","320","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("essential");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_readOnly","33.33%","77","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_condition02");
            obj.set_usedecorate("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","Static_readOnly:10","81","320","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_checkbox","33.33%","110","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","Static_checkbox:10","114","130","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_text("사용여부");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_spinner","66.66%","44","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_text("Spinner");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin01_00","sta_spinner:10","48","153","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_value("2020");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07_01_01_00_01_00_00",null,"19.55%","570","1","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sta_WF_borCondition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_calendar","66.66%","77","150","34",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("기간입력");
            obj.set_cssclass("sta_WF_condition02");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","Static_calendar:10","81","153","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_displaynulltext("____-__-__");
            obj.set_cssclass("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static_textarea","0","143","150","72",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_text("textarea입력");
            obj.set_cssclass("sta_WF_condition02_L");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea01_00","Static_textarea:10","147",null,"64","50",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","155","0","50","58",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("h 58");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exit_D","1159","2700","63","28",null,null,null,null,null,null,this);
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_icoExit");
            obj.set_taborder("117");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exit","1202","2576","65","28",null,null,null,null,null,null,this);
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_icoExit");
            obj.set_taborder("118");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","940",null,"40","26",null,"3335",null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_cssclass("btn_WF_toggleDown");
            obj.set_tooltiptext("더보기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search00.form
            obj = new Layout("default","",1032,72,this.div_Search00.form,function(p){});
            this.div_Search00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search01.form
            obj = new Layout("default","",1032,72,this.div_Search01.form,function(p){});
            this.div_Search01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search02.form
            obj = new Layout("default","",1032,72,this.div_Search02.form,function(p){});
            this.div_Search02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Excel.form
            obj = new Layout("default","",1032,72,this.div_Excel.form,function(p){});
            this.div_Excel.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.tabpage1.form
            obj = new Layout("default","",1032,392,this.Tab00.tabpage1.form,function(p){});
            this.Tab00.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.tabpage2
            obj = new Layout("default","",0,0,this.Tab00.tabpage2.form,function(p){});
            this.Tab00.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.tabpage3
            obj = new Layout("default","",0,0,this.Tab00.tabpage3.form,function(p){});
            this.Tab00.tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Grid00.form
            obj = new Layout("default","",1032,72,this.div_Grid00.form,function(p){});
            this.div_Grid00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Grid01.form
            obj = new Layout("default","",1032,72,this.div_Grid01.form,function(p){});
            this.div_Grid01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search01_00.form
            obj = new Layout("default","",1032,72,this.div_Search01_00.form,function(p){});
            this.div_Search01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",1032,72,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","div_Excel.form.SCH_RQST_NO","value","ds_search","SCH_RQST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_Excel.form.SCH_RQST_DT","value","ds_search","SCH_RQST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_Excel.form.SCH_RQST_ID","value","ds_search","SCH_RQST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_Excel.form.SCH_APV_STAT_CD","value","ds_search","SCH_APV_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_Excel.form.SCH_LAST_UPT_NM","value","ds_search","SCH_LAST_UPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_Excel.form.SCH_LAST_UPT_DT","value","ds_search","SCH_LAST_UPT_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_Excel.form.SCH_DEPT_CD","value","ds_search","SCH_RQST_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_Excel.form.SCH_RQST_NM","value","ds_search","SCH_RQST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_Excel.form.SCH_CAL_MON","value","ds_search","SCH_CAL_MON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_Excel.form.Radio00","value","ds_main","INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_Excel.form.CheckBox00","value","ds_main","COM_CAR_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_Excel.form.Spin00","value","ds_main","YY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_Excel.form.SBJ00","value","ds_main","DOC_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_Search.form.Combo00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("bas_components.xfdl", function() {
        /****************************************************************************************************
         * File Name   : bas_0010M
         * Description : 개발자 샘플용
         *---------------------------------------------------------------------------------------------------
         * Modify Date   Programer		Description
         *---------------------------------------------------------------------------------------------------
         * 2016.01.01    문덕찬			최초작성
        ****************************************************************************************************/

        var lv_userId = "";
        var lv_userNm = "";

        var fv_userId = "";
        var fv_userNm = "";

        /****************************************************************************************************
        * initial method (onload, 권한, style)
        ****************************************************************************************************/
        /**
         * Function Name	: fn_onload
         * Description		: 화면초기화
         * param			: N/A
         */
        this.fn_onload = function (obj, e) {

        }

        /****************************************************************************************************
        * tran method (tran 이 있는 function)
        ****************************************************************************************************/
        /**
         * Function Name	: fn_search
         * Description		: 저장
         * param			: N/A
         */
        this.fn_search = function () {
        	// var sOutDatasets    = "ds_list ds_main ds_grid";
        	var sOutDatasets = "ds_list2 ds_main ds_grid ds_code000010_1 ds_code000010 ds_code020";
        	// this.gfn_tran(oForm, svcID, sController, inDatasets, outDatasets, argument, callbackFunc, showProgress)
        	this.gfn_tran(this, "getBasData", "/sam/bas/bas0010/getBasData.do", "ds_search", sOutDatasets,"pagmId=2");

        }

        /**
         * Function Name	: fn_save
         * Description		:  저장
         * param			: N/A
         */
        this.fn_save = function (type) {
        	if (!this.gfn_isUpdated(this.ds_main) && !this.gfn_isUpdated(this.ds_grid)) {
        		this.gfn_showMsg("COM_CHK_0010", "", "");
        		return false;
        	} else {
        		// 필수값 전체 체크
        		/*
        		 if(!this.gfn_validateComps(this)) {
        			return;
        		 }
        		 */
        		// 유효성검사(일반항목)    항목명 : this.in_TRP_NM.text
        		if (!this.gfn_chkValue(this.SBJ, [this.in_TRP_NM.text], "MAX_LEN:10|NULL")) {
        			return false;
        		}

        		// 유효성검사(그리드)
        		// 임의로 항목명을 정의할 때 (param5가 빈문자면 모든 row 체크)
        		// 그리드에 여러개 체크
        		var chkArg = [
        			[["grd_deptNm"], "MAX_LEN:10|NULL", "DEPT_CD"],
        			[["grd_apvNm"], "MAX_LEN:10|NULL", "APV_NM"]
        		];

        		if (!this.gfn_grdChkValue(this.grd_detail, chkArg, "")) {
        			return false;
        		}

        		// 한개씩 체크
        		// if(!this.gfn_chkValue(this.grd_detail,["부서"],"NULL","DEPT_CD",0)) return false;

        		/*
        		 //그리드의 항목명으로 메시지를 보여줄때는 빈문자 this.gfn_getGridHeadText(this.grd_detail,"DEPT_CD")
        		 if(this.gfn_chkValue(this.grd_detail,[""],"DEPT_CD","")==false){
        			return false;
        		 }
        		 */

        		if ((this.gfn_showMsg("COM_CRUD_0001", [], "confirm"))) {

        			if(type == "Y"){
        				// 결재연동을 위한 데이타셋 셋팅
        				// rqstNo:신청번호,
        				// fromId:양식ID,
        				// pgmId:프로그램ID,
        				// docNm:결재문서명,
        				// itemNm: 추가 제목,
        				// rqstDt:신청일,
        				// gwTitle:정해진제목,
        				// gwApprIds:완결문서ID("1111||22222")
        				// gwUserId:기안을 대신할 경우 기안자사번
        				// gwAvpLineNo:결재선번호
        				//this.gfn_gwData(rqstNo, formId, pgmId, docNm, itemNm, rqstDt, gwTitle, gwApprIds, gwUserId, gwApvLineNo);
        				this.gfn_gwData("111111", "0000000005", this.pgmId, "", "", "", "", "", "", "L0021");

        				this.gfn_tran(this, "setGwData", "/sam/bas/bas0010/setGwData.do", "ds_main ds_grid ds_gw", "ds_gw","approvalYn=Y");
        			} else {
        				this.gfn_tran(this, "setBasData", "/sam/bas/bas0010/setBasData.do", "ds_main ds_grid:U", "","approvalYn=N","fn_callBack2");
        			}
        		} else {
        			return false;
        		}
        	}
        }

        /**
         * Function Name	: fn_exception
         * Description		: mail
         * param			: N/A
         */
        this.fn_mail = function () {
        	this.gfn_tran(this, "setSendMail", "/sam/bas/bas0010/setSendMail.do", "", "ds_main");
        }

        /**
         * Function Name	: fn_excelUpload
         * Description		: mail
         * param			: N/A
         */
        this.fn_excelUpoad = function () {
        	if ((this.gfn_showMsg("COM_CRUD_0001", [], "confirm"))) {
        		this.gfn_tran(this, "setExcelUpload", "/sam/bas/bas0010/setExcelUpload.do", "ds_excelupload", "");
        	}
        }

        /**
         * Function Name	: fn_exception
         * Description		: exception테스트
         * param			: N/A
         */
        this.fn_exception = function () {
        	this.gfn_tran(this, "getException", "/sam/bas/bas0010/getException.do", "", "ds_main ds_grid");
        }

        /**
         * Function Name	: fn_msgSend
         * Description		: 메시지발송
         * param			: N/A
         */
        this.fn_msgSend = function () {
        	this.gfn_tran(this, "msgSend", "/sam/bas/bas0010/setSendMessage.do", "ds_main", "");
        }

        /****************************************************************************************************
        * callback method (collBack, fn_popupAfter 등)
        ****************************************************************************************************/

        /*
         * Function Name : fn_callBack
         * Description   :  svcId에 따른 분기처리
         */
        this.fn_callBack = function (sSvcId)
        {
        	if (sSvcId == "setBasData") {
        		if (this.result == "Y") {
        			this.gfn_showMsg("COM_CRUD_0002", "", "");
        		}
        		this.btn_search_onclick();
        	} else if (sSvcId == "delBasData") {
        		this.gfn_showMsg("DEL_0010");
        	} else if (sSvcId == "getBasData") {
        		// trace("==>ds_list: "+this.ds_list.saveXML());
        		//this.ImageViewer00.set_image("");
        		this.gfn_rowCount(this.ds_list, this.stc_gridRowCnt);
        	} else if (sSvcId == "getCodeList") {
        		// 공통코드 callback
        		// 초기값설정
        		// trace("==>ds_code: "+this.ds_code020.saveXML());
        		// this.ds_search.setColumn(0,"SCH_APV_STAT_CD","");
        		// this.ds_code020.setColumn(0,"COMM_CD","020-020");
        	} else if (sSvcId == "setGwData") {
        		// 결재호출(첨부파일이 있는경우에는 첨부파일을 감싸고 있는 div를 넘김, 없을때는 제외)
        		//this.gfn_gwCall(this.div_file);
        	} else if (sSvcId == "getException") {
        		alert(this.result);
        	} else if (sSvcId == "setExcelUpload") {
        		if (this.result == "Y") {
        			this.gfn_showMsg("COM_CRUD_0002", "", "");
        		}
        	} else if (sSvcId == "comCode") {
        		alert("comCode==================");
        	} else if (sSvcId == "createJavaExcel") {
        		this.gfn_fileDown(this.result,"excel")
        	}
        };

        /*
         * Function Name : fn_popupAfter
         * Description   : 팝업 Callback
         */
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	var rtn = this.gfn_getPopupRtn();
        	if (rtn != null) {
        		if (rtn.svcId=="signPad"){
        			alert(rtn.result);
        		} else{
        			this.ds_main.setColumn(0, "COMM_CD", rtn.COMM_CD);
        		}
        	}
        };

        /****************************************************************************************************
        * event method (버튼이벤트, 행추가, 행삭제, 팝업, 링크, 도움말, 엑셀다운, 닫기, 탭 등)
        ****************************************************************************************************/
        /**
         * Function Name	: btn_save_onclick
         * Description		: 저장
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_save_onclick = function (obj, e)
        {
        	this.fn_save();
        };

        /**
         * Function Name	: btn_search_onclick
         * Description		: 조회
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_search_onclick = function (obj, e)
        {
        	this.fn_search();
        	/*
        	var svcID    = "getBasData";
        	var sController    ="/sam/bas/bas0010/getBasData.do";
        	var sInDatasets    = "ds_main";
        	var sOutDatasets    = "ds_list ds_main ds_grid";
        	// this.gfn_tran(oForm, svcID, sController, inDatasets, outDatasets, argument, callbackFunc, showProgress)
        	this.gfn_tran(this, svcID, sController, inDataset, sOutDatasets);
        	*/
        };

        /*
         * Function Name	: btn_registration_onclick
         * Description		: 신규버튼 클릭시
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_registration_onclick = function (obj, e)
        {
        	this.gfn_clearData(this.ds_main);
        	this.gfn_clearData(this.ds_grid);
        	this.SBJ.setFocus();
        };

        /*
         * Function Name	: div_Search_btn_rqst_nm_onclick
         * Description		: 사용자검색
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.div_Search_btn_rqst_nm_onclick = function (obj, e)
        {
        	this.gfn_popupValueSet("this.ds_search", "SCH_RQST_ID", "EMP_NO", "");
        	this.gfn_popupValueSet("this.ds_search", "SCH_RQST_NM", "EMP_NM", "");
        	this.gfn_empPopup("this.ds_search", "S", "");
        };

        /*
         * Function Name	: div_Search_btn_rqst_nm_onclick
         * Description		: 사용자검색
         * param			: obj:Edit, e:nexacro.ClickEventInfo
         */
        this.div_Search_SCH_RQST_NM_onchanged = function (obj, e)
        {
        	this.ds_search.setColumn(this.ds_search.rowposition, "SCH_RQST_ID", "");
        	this.gfn_popupValueSet("this.ds_search", "SCH_RQST_ID", "EMP_NO", "");
        	this.gfn_popupValueSet("this.ds_search", "SCH_RQST_NM", "EMP_NM", "E");
        	this.gfn_empPopup("this.ds_search", "S", "");
        };

        /*
         * Function Name	: btn_addRow_onclick
         * Description		: 행추가
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_addRow_onclick = function (obj, e)
        {
        	this.gfn_insertRow(this.ds_grid, "Y", "last");
        };

        /*
         * Function Name	: btn_deleteRow_onclick
         * Description		: 행삭제
         * param			: obj:Button, e:nexacro.ClickEventInfo
        */
        this.btn_deleteRow_onclick = function (obj, e)
        {
        	this.gfn_deleteRow(this.ds_grid);
        };

        /*
         * Function Name	: grd_list_oncellclick
         * Description		: grid클릭시
         * param			: obj:Grid, e:nexacro.ClickEventInfo
         */
        this.grd_list_oncellclick = function (obj, e)
        {
        	if (e.col != obj.getBindCellIndex("body", "isChecked")) {
        		var sArgument = "RQST_NO=" + this.gfn_getColumn(this.ds_list, "RQST_NO");
        		this.gfn_tran(this, "getBasData", "/sam/bas/bas0010/getBasDataDtl.do", "", "ds_main ds_grid", sArgument);
        	}
        };

        /*
         * Function Name	: grd_list_onheadclick
         * Description		: 그리드 전체 선택
         * param			: obj:Grid, e:nexacro.ClickEventInfo
         */
        this.grd_list_onheadclick = function (obj, e)
        {
        	this.gfn_setGridCheckAll(obj, e, "isChecked");
        };

        /*
         * Function Name	: btnPop_onclick
         * Description		: 팝업호출
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btnPop_onclick = function (obj, e)
        {
        	var oArg = {
        		UP_COMM_CD : "020",
        		aaa : "aa"
        	};
        	this.gfn_openPopup("popNm", "com.popup::comStdPopup.xfdl", oArg, "", "");
        };


        /*
         * Function Name	: btn_reset_onclick
         * Description		: 데이타 undo
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_reset_onclick = function (obj, e)
        {
        	this.ds_main.reset();
        };

        /*
         * Function Name	: btn_orgdata_onclick
         * Description		: 기존데이타 읽기
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_orgdata_onclick = function (obj, e)
        {
        	this.alert(this.ds_main.getOrgColumn(0, "SBJ"));
        };

        /*
         * Function Name	: btn_calendarMonth_onclick
         * Description		: 년월
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_calendarMonth_onclick = function (obj, e)
        {
        	this.gfn_popupCalendarMonth(this, this.div_Search.form.SCH_CAL_MON);
        };

        /*
         * Function Name	: btn_exel_dn_onclick
         * Description		: 엑셀다운
         * param			: obj:Grid, e:nexacro.ClickEventInfo
         */
        this.btn_exel_dn_onclick = function (obj, e)
        {
        	//this.gfn_exportExcel(this.grd_list, "테스트"); //기본엑셀다운
        	this.gfn_exportChkExcel(this.grd_list, "테스트"); //개인정보엑셀다운시
        };

        /*
         * Function Name	: div_Search_sch_apv_stat_cd_ondropdown
         * Description		: combo 필터적용
         * param			: obj:Combo, e:nexacro.EventInfo
         */
        this.div_Search_sch_apv_stat_cd_ondropdown = function (obj, e)
        {
        	// this.ds_code000010.filter("ETC4=='Y'");
        };

        /*
         * Function Name	: div_Search_sch_apv_stat_cd_oncloseup
         * Description		: filter를 해제할 경우
         * param			: obj:Combo, e:nexacro.ComboCloseUpEventInfo
         */
        this.div_Search_sch_apv_stat_cd_oncloseup = function (obj, e)
        {
        	// this.ds_code000010.filter("");
        };

        /*
         * Function Name	: grd_detail_oncloseup
         * Description		: grid에 filter 해제
         * param			: obj:Grid, e:nexacro.GridEditEventInfo
         */
        this.grd_detail_oncloseup = function (obj, e)
        {
        	// this.ds_code000010.filter("");
        };

        /*
         * Function Name	: ds_grid_oncolumnchanged
         * Description		: 데이타 변경시
         * param			: obj:Dataset, e:nexacro.DSColChangeEventInfo
         */
        this.ds_grid_oncolumnchanged = function (obj, e)
        {
        	// checkbox클릭에 따라 상태값 변경
        	this.gfn_checkBox(obj, e);
        };

        /*
         * Function Name 	: grd_detail_oncellclick
         * Description   	: 데이타 셀 클릭시
         * param			: obj:Grid, e:nexacro.GridEditEventInfo
         */
        this.grd_detail_oncellclick = function (obj, e)
        {
        	// cell index 얻기
        	// var idx=obj.getBindCellIndex("body", "RECEV_NO");
        	// e.columnid로 비교

        	if (e.cell == 7) {
        		var oArg = {
        			RECEV_NO : this.gfn_getColumn(this.ds_grid, "RECEV_NO")
        		};
        		this.gfn_openPopup("popNm", "com.popup::comStdPopup.xfdl", oArg, "", "");
        	}
        	if (e.cell == 6) {
        		// this.grd_detail.dropdownCombo();
        	}
        };

        /*
         * Function Name 	: cbo_language_onitemchanged
         * Description   	: 영문화 테스트
         * param			: obj:Combo, e:nexacro.ItemChangeEventInfo
         */
        this.cbo_language_onitemchanged = function (obj, e)
        {
        	this.gfn_setLangText(this, obj.value);
        };

        /*
         * Function Name 	: btn_disable_onclick
         * Description   	: 모든 버튼 disable
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_disable_onclick = function (obj, e)
        {
        	this.gfn_setBtnAllCtrl(this,false);
        };

        /*
         * Function Name 	: btn_enable_onclick
         * Description   	: 모든 버튼 enable
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_enable_onclick = function (obj, e)
        {
        	this.gfn_setBtnAllCtr(true);
        };


        /*
         * Function Name 	: btn_disable00_onclick
         * Description   	: 모든 컴포넌트 disable
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_disable00_onclick = function (obj, e)
        {
        	this.gfn_setCompAllCtrl(this,false);
        };

        /*
         * Function Name 	: btn_approval_onclick
         * Description   	: 결재호출
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_approval_onclick = function (obj, e)
        {
        	this.fn_save("Y");
        };

        /*
         * Function Name 	: btn_imgView_onclick
         * Description   	: 이미지보기
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_imgView_onclick = function (obj, e)
        {
        	// 파일 위치가 첨부파일이 저장되는 위치라면 예)  /data/attach/mis/2000/  -> this.gfn_imgUrl("","/mis/2000/0000000.jpg")
        	// 파일 위치가 web경로가 있는 경우라면 /webapp/file/ -> this.gfn_imgUrl("web","000000.jpg");
        	var url = this.gfn_imgUrl("web", "/photo/000000.jpg");
        	this.ImageViewer00.set_image(url);
        };

        /*
         * Function Name 	: btn_exception_onclick
         * Description   	: exception테스트
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_exception_onclick = function (obj, e)
        {
        	this.fn_exception();
        };

        /*
         * Function Name 	: btn_print_onclick
         * Description   	: 인쇄
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_print_onclick = function (obj, e)
        {
        	var param = "EMP_NO=20145012&SEQ=1&YYYY=2021";
        	var oArg = {
        		arg1 : "hrm_3010_1",
        		//arg1 : "test",
        		arg2 : param,
        		arg3 : ""
        	};

        	 alert(JSON.stringify(oArg));
        	this.gfn_openReport("report", oArg, "", "");
        };

        /*
         * Function Name 	: grd_detail_onheadclick
         * Description   	: 그리드 전체선택
         * param			: obj:Grid, e:nexacro.GridClickEventInfo
         */
        this.grd_detail_onheadclick = function (obj, e)
        {
        	this.gfn_setGridCheckAll(obj, e, "isChecked");
        };

        /*
         * Function Name 	: div_Search_SCH_LAST_UPT_DT_onchanged
         * Description   	: 칼런더 데이타 변경시
         * param			: obj:Calendar, e:nexacro.ChangeEventInfo
         */
        this.div_Search_SCH_LAST_UPT_DT_onchanged = function (obj, e)
        {
        	alert(this.div_Search.form.SCH_LAST_UPT_DT.value);

        };

        /*
         * Function Name 	: ds_search_onvaluechanged
         * Description   	: 년월값 변경 시
         * param			: obj:Dataset, e:nexacro.DSColChangeEventInfo
         */
        this.ds_search_onvaluechanged = function (obj, e)
        {
        	if (e.columnid == "SCH_CAL_MON") {
        		// alert(this.gfn_getColumn(this.ds_search,"SCH_CAL_MON"));
        		// alert(e.oldvalue);
        		// alert(e.newvalue);
        	}
        };

        /*
         * Function Name 	: btn_import_onclick
         * Description   	: 엑셀 Import
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_exel_up_onclick = function (obj, e)
        {
        	this.gfn_importExcel("ds_excelupload", "Sheet1", "A2");
        };

        /*
         * Function Name 	: btn_mail_onclick
         * Description   	: 메일발송
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_mail_onclick = function (obj, e)
        {
        	this.fn_mail();
        };

        /*
         * Function Name 	: btn_filedown_onclick
         * Description   	: 파일다운로드
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_filedown_onclick = function (obj, e)
        {
        	// 첨부파일 위치
        	// data/attach폴더
        	// this.gfn_fileDown("text.txt","");

        	// webapp/file폴더
        	this.gfn_fileDown("/act/formatA210.xlsx", "web");
        	// this.gfn_fileDown("605171478069015548_1.txt&param="+rqstNo+"@"+pgmId,"")
        };

        /*
         * Function Name 	: Spin00_onspin
         * Description   	: spin테스트
         * param			: obj:Spin, e:nexacro.SpinEventInfo
         */
        this.Spin00_onspin = function (obj, e)
        {
        	alert(e.postvalue);
        };

        /*
         * Function Name 	: btn_progressY_onclick
         * Description   	: progressbar테스트
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_progressY_onclick = function (obj, e)
        {
        	//nexacro.getEnvironment().set_usewaitcursor(true);
        	 this.gfn_progress(true);
        };

        /*
         * Function Name 	: btn_progressN_onclick
         * Description   	: progressbar테스트
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_progressN_onclick = function (obj, e)
        {
        	this.gfn_progress(false);
        };

        /*
         * Function Name 	: btn_help_onclick
         * Description   	: 도움말호출
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_help_onclick = function (obj, e)
        {
        	this.gfn_openHelp();
        };

        /*
         * Function Name 	: btn_save1_onclick
         * Description   	: 엑셀업로드
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_save1_onclick = function (obj, e)
        {
        	this.fn_excelUpoad();
        };

        /*
         * Function Name 	: btn_import_onclick
         * Description   	: 엑셀 upload
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_import_onclick = function (obj, e)
        {
        	this.btn_exel_up_onclick(obj, e);
        };

        /*
         * Function Name 	: btn_new_onclick
         * Description   	: 팝업호출
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_new_onclick = function (obj, e)
        {
        	this.gfn_openPopup("app", "sam.bas::bas_0010M.xfdl", "", "autosize=false", "");
        };

        /*
         * Function Name 	: btn_docCall_onclick
         * Description   	: 완결문서호출
         * param			: obj:Button, e:nexacro.ClickEventInfo
         */
        this.btn_docCall_onclick = function(obj,e)
        {
        	this.gfn_popupValueSet("this.ds_main", "DOC_ID", "DOC_ID", "");

        	this.gfn_setColumn(0, this.ds_search, "SCH_DOC_TYPE", "0,1");

        	this.gfn_docPopup("this.ds_search");
        };

        this.FRM_DT_oneditclick = function(obj,e)
        {
        	this.gfn_popupCalendarMulti(this, this.FRM_DT, this.TO_DT);
        };


        this.btn_msgSend_onclick = function(obj,e)
        {
        	this.fn_msgSend();
        };

        /*
         * Function Name	: btn_javaExcel_onclick
         * Description		: 자바엑셀 생성
         * param			:
         */
        this.btn_javaExcel_onclick = function(obj,e)
        {
        	this.gfn_tran(this, "createJavaExcel", "/sam/bas/bas0010/createJavaExcel.do", "","","fileNm=test.xls");
        };


        /****************************************************************************************************
        * logic method (업무로직, 계산식 등)
        ****************************************************************************************************/
        /*
         * Function Name	: fn_regExp
         * Description		: 정규식 사용
         * param			: obj
         */
        this.fn_regExp = function (obj)
        {
        	var objRegExp = /^(?=.*\d)(?=.*[~`!@#$%\^&*()-])(?=.*[a-zA-Z]).{9,20}$/g;
	var objResult = objRegExp.exec(obj.value);
        	if (objResult) {
        		alert(true);
        	} else {
        		alert(false);
        	}
        };


        this.btn_report_onclick = function(obj,e)
        {
        	//리포트 호출
        	var param = this.parent.arg2;
        	if (!this.gfn_isEmpty(param)) {
        		param += "&pSessEmpNo='" + nexacro.getApplication().gds_userInfo.getColumn(0, "SESS_USER_ID") + "'";
        	} else {
        		param = "pSessEmpNo='" + nexacro.getApplication().gds_userInfo.getColumn(0, "SESS_USER_ID") + "'";
        	}

        	var mode = this.parent.arg3;
        	tobjWebBrowser.callMethod("aiReport", reportUrl, param, "", "", mode);

        };

        this.btn_crypto_onclick = function(obj,e)
        {
        	var encryptData = this.gfn_encryptAES("test");
        	this.gfn_tran(this, "decryptoAES", "/sam/bas/bas0010/decryptoAES.do", "ds_main", "","encryptData="+encryptData);
        };

        this.btn_web_onclick = function(obj,e)
        {
        	//this.gfn_winPopUp("http://www.crespeed.com","new1");
        	var oArg = {
        		url : "http://www.crespeed.com"
        	};
        	this.gfn_openPopup("new1", "com.base::callBrowser.xfdl", oArg, "autosize=false", "");

        };


        this.btn_filedown00_onclick = function(obj,e)
        {
        	var oArg = {
        		//rqstNo : "ACT0220200506-0001@act_1035_007,OTH0420200031@oth_0061_007",  //여러 신청번호일 경우 신청번호@프로그램ID@파일타입
        		rqstNo : "ACT0220200506-0001",
        		pgmId : "act_1035_007",
        		fileType : ""
        	};
        	this.gfn_fileDownList("filedownload", oArg);
        };

        this.btn_sign_onclick = function(obj,e)
        {
        	var oArg = {
        		fileNm : "00122-0001", //사진명
        		dir : "sign" //사인저장폴더(값이 없을 경우 sign폴더가 기본)
        	};
        	this.gfn_signPad("sign", oArg);
        };

        this.btn_docView_onclick = function(obj,e)
        {
        	//협조문서인 경우에는 발신문서번호와 접수문서번호를 보내야 함
        	this.gfn_gwDocCall("문서iD,문서iD");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_registration.addEventHandler("onclick",this.btn_registration_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.sta_title02.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.btn_Upload.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Exel_up.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_Approval.addEventHandler("onclick",this.btn_approval_onclick,this);
            this.btn_Registration.addEventHandler("onclick",this.btn_help_onclick,this);
            this.btn_Contdelete.addEventHandler("onclick",this.btn_sms_onclick,this);
            this.btn_Download.addEventHandler("onclick",this.btn_exel_dn_onclick,this);
            this.btn_Add.addEventHandler("onclick",this.btn_exel_up_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_List.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Return.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Excel_dn.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Print.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Help.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Reject.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Approbation.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Reports.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Sms.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Mail.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Upload_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Exel_up_D.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_Approval_D.addEventHandler("onclick",this.btn_approval_onclick,this);
            this.btn_Registration_D.addEventHandler("onclick",this.btn_help_onclick,this);
            this.btn_Contdelete_D.addEventHandler("onclick",this.btn_sms_onclick,this);
            this.btn_Download_D.addEventHandler("onclick",this.btn_exel_dn_onclick,this);
            this.btn_Add_D.addEventHandler("onclick",this.btn_exel_up_onclick,this);
            this.btn_Save_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_List_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Search_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Delete_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Return_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Excel_dn_D.addEventHandler("onclick",this.btn_print_onclick,this);
            this.btn_Cancel_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Print_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Help_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Reject_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Approbation_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Reports_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Sms_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Mail_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.div_Search00.form.sta_subTitle.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.div_Search00.form.btn_download.addEventHandler("onclick",this.div_Search00_btn_download_onclick,this);
            this.div_Search00.form.btn_arrRight_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_arrLeft_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_arrUp_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_arrDown_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_calendar_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_help_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_etc_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_Setting_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_arrRight.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_arrLeft.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_arrUp.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_arrDown.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_calendar.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_help.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_etc.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.btn_Setting.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search00.form.sta_subTitle00.addEventHandler("onclick",this.div_Search_Static05_onclick,this);
            this.btn_arrRight.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_arrRight0.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_arrLeft.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_arrLeft0.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search01.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.div_Search01.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_Search01.form.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_Search01.form.grd_list.addEventHandler("onclick",this.grd_list_onclick,this);
            this.div_Search01.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.div_Search02.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.div_Search02.form.Static07_01_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.div_Search02.form.Static07_01_01_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.div_Search02.form.Static07_01_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.div_Search02.form.Static07_01_01_00_01.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.div_Search02.form.in_RQST_AMT.addEventHandler("onclick",this.Static22_onclick,this);
            this.div_Search02.form.in_RQST_NM.addEventHandler("onclick",this.Static06_onclick,this);
            this.div_Search02.form.SBJ.addEventHandler("oneditclick",this.SBJ_oneditclick,this);
            this.div_Search02.form.FRM_DT.addEventHandler("oneditclick",this.FRM_DT_oneditclick,this);
            this.div_Search02.form.Radio00.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.div_Search02.form.Radio00.addEventHandler("onitemchanged",this.div_Search02_Radio00_onitemchanged,this);
            this.div_Search02.form.TextArea01.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.div_Search02.form.TextArea01.addEventHandler("onchanged",this.div_Search02_TextArea01_onchanged,this);
            this.div_Search02.form.Spin00.addEventHandler("onchanged",this.Spin00_onchanged,this);
            this.div_Search02.form.CheckBox00.addEventHandler("onclick",this.CheckBox00_onclick,this);
            this.div_Search02.form.btnPop.addEventHandler("onclick",this.btnPop_onclick,this);
            this.div_Search02.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Static04_00_00_02.addEventHandler("onclick",this.Static31_onclick,this);
            this.div_Excel.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.div_Excel.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.tabpage1.form.Static37_00.addEventHandler("onclick",this.Static09_onclick,this);
            this.Tab00.tabpage1.form.btn_row_add00.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.Tab00.tabpage1.form.btn_row_delete00.addEventHandler("onclick",this.btn_deleteRow_onclick,this);
            this.Tab00.tabpage1.form.Static04_00_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.btn_arrUp.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_arrUp0.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_arrDown.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_arrDown0.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_calendar.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_calendar0.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_help1.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_help11.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_etc.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_etc0.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_setting.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_setting0.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Grid00.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.div_Grid00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_Grid00.form.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_Grid00.form.grd_list.addEventHandler("onclick",this.grd_list_onclick,this);
            this.div_Grid00.form.Button15.addEventHandler("onclick",this.div_Grid00_Button15_onclick,this);
            this.div_Grid00.form.btn_row_delete00.addEventHandler("onclick",this.btn_deleteRow_onclick,this);
            this.div_Grid00.form.btn_row_add00.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.div_Grid00.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.div_Grid01.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.div_Grid01.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_Grid01.form.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_Grid01.form.grd_list.addEventHandler("onclick",this.grd_list_onclick,this);
            this.div_Grid01.form.btn_row_delete00.addEventHandler("onclick",this.btn_deleteRow_onclick,this);
            this.div_Grid01.form.btn_row_add00.addEventHandler("onclick",this.btn_addRow_onclick,this);
            this.div_Grid01.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.btn_Txt.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Exe.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Txt_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Exe_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Select.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Modify.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Decision.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Report.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Conclusion.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Accept.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Submit.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Notify.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Termination.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Rescission.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Application.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Review.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Evaluation.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Confirm_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Select_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Modify_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Decision_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Report_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Conclusion_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Accept_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Submit_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Notify_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Termination_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Rescission_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Application_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Review_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Evaluation_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div00.form.btnFirst.addEventHandler("onclick",this.Button_onclick,this);
            this.Div00.form.btnPrev.addEventHandler("onclick",this.Button_onclick,this);
            this.Div00.form.btn0.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn1.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn2.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn3.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn4.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn5.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn6.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn7.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn8.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btn9.addEventHandler("onclick",this.BtnNum_onclick,this);
            this.Div00.form.btnNext.addEventHandler("onclick",this.Button_onclick,this);
            this.Div00.form.btnLast.addEventHandler("onclick",this.Button_onclick,this);
            this.div_Search01_00.form.Static09.addEventHandler("onclick",this.Static09_onclick,this);
            this.div_Search01_00.form.grd_list.addEventHandler("oncellclick",this.grd_list_oncellclick,this);
            this.div_Search01_00.form.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.div_Search01_00.form.grd_list.addEventHandler("onclick",this.grd_list_onclick,this);
            this.div_Search01_00.form.Static04_00_00_00.addEventHandler("onclick",this.Static31_onclick,this);
            this.btn_Sort_D.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Sort.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Close_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.div_Search.form.Static00.addEventHandler("onclick",this.div_Search_Static00_onclick,this);
            this.div_Search.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.div_Search.form.Static14.addEventHandler("onclick",this.Static_onclick,this);
            this.div_Search.form.Static12_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12_01_00_00.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.div_Search.form.Static12.addEventHandler("onclick",this.div_Search_Static12_onclick,this);
            this.Div01.form.sta_dtlInfo.addEventHandler("onclick",this.Static09_onclick,this);
            this.Div01.form.Static04_00_00_00_01.addEventHandler("onclick",this.Static31_onclick,this);
            this.Div01.form.Radio00_00.addEventHandler("onitemclick",this.Div00_Radio00_onitemclick,this);
            this.Div01.form.btnPop.addEventHandler("onclick",this.btnPop_onclick,this);
            this.Div01.form.Static_checkbox.addEventHandler("onclick",this.div_Search02_00_Static35_onclick,this);
            this.Div01.form.sta_spinner.addEventHandler("onclick",this.div_Search02_00_in_YY_onclick,this);
            this.Div01.form.Static07_01_01_00_01_00_00.addEventHandler("onclick",this.div_Search_Static07_onclick,this);
            this.Div01.form.TextArea01_00.addEventHandler("oneditclick",this.TextArea01_oneditclick,this);
            this.btn_Exit_D.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.btn_Exit.addEventHandler("onclick",this.btn_mail_onclick,this);
            this.ds_grid.addEventHandler("oncolumnchanged",this.ds_grid_oncolumnchanged,this);
            this.ds_main.addEventHandler("onvaluechanged",this.ds_main_onvaluechanged,this);
            this.ds_search.addEventHandler("onvaluechanged",this.ds_search_onvaluechanged,this);
        };
        this.loadIncludeScript("bas_components.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
