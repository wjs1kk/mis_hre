//XJS=common_ref.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.pgmId="";
        this.pgmNm="";
        this.helpPgmId="";
        this.helpYn="Y";
        this.chkCnt=0;
        this.errCd="";
        this.e =null;
        objWebBrowser = null;

        var application = nexacro.getApplication();
        if (system.navigatorname != "nexacro") {
        	nexacro.getEnvironment().services["svcurl"].url = application.gv_domain;
        }

        this.domainNm = nexacro.getEnvironment().services["svcurl"].url;
        this.reportComUrl = nexacro.getEnvironment().services["svcurl"].url + "/common/createReport.html";
        this.reportUrl = nexacro.getEnvironment().services["svcurl"].url + "/report/";
        this.progressbarObj="";
        /******************************************************************************
        	popupValueSet 관련 변수 선언
        ******************************************************************************/
        this.popupObject;
        this.popupColNm;
        this.popupCnt = 0;
        this.popupDsId;
        this.chkPopupValueColNm = "";
        this.popupfwdDs = "";

        /******************************************************************************
        	그리드 헤드 셀 클릭 정렬 기능 관련 function
        ******************************************************************************/
        // 정렬이 토글될 때 취소를 실행할지 여부
        // true 일 경우 오름차순/내림차순/취소 반복
        // false 일 경우 오름차순/내림차순 반복
        this.SORT_TOGGLE_CANCEL = true;

        // 정렬 표시자 구분 (text or image)
        this.MARKER_TYPE = "text";

        // Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정
        // [오름차순표시, 내림차순표시]
        //this.MARKER = ["URL('temp::grd_sort_up.png')", "URL('temp::grd_sort_dn.png')"];	// ["▲", "▼"]
        this.MARKER = ["▲", "▼"];

        /*excel 멀티 export 시 생성되는 동적 데이타셋명*/
        this.xfv_sExportDsCtrlID = "__ds_excelCtrl" ;

        /*excel 멀티 export 시 그리드 리스트*/
        this.xfv_aExcelGridList ;

        this.xfv_importObject = null;  //ExcelImportObject Component
        this.xfv_exportObject = null;  //ExcelImportObject Component

        sLang = nexacro.getApplication().gds_userInfo.getColumn(0, "SESS_LANG");

        /**
        * 폼 초기화 처리
        * @param {obj} form
        * @return
        * @example
        * @memberOf private
        */
        this.gfn_initForm = function (oForm, e)
        {
        	this.e =e;
        	//영문일경우 타이틀초기화
        	if(sLang!="KOR"){
        		oForm.set_titletext("");
        	}

        	if(typeof(e)!="undefined"){
        		if(this.pgmId == ""){
        			this.pgmId = this.gfn_pgmId(e);
        		}
        		this.helpPgmId=this.pgmId;
        	}
        	// 팝업 종료시 gfn_clearPopValueSet 실행
        	if( Eco.isEmpty(this.onclose) && !Eco.isEmpty(this.parent))	this.addEventHandler("onclose",this.parent.gfn_clearPopValueSet,this);

        	//this.gfn_setComp(oForm);
        	if(this.pgmId!="mainFrame" || this.parent.sessChkYn!="false"){
        		this.gfn_tran(this, "setPgmRight", "/common/right/getPgmRight.do", "", "gds_lang_temp","pgmId="+this.pgmId,"","",false);
        	}

        	//창 타이틀변경(영문)
        	if(this.pgmNm!=""){
        		oForm.set_titletext(this.pgmNm);
        	}

        	this.gfn_setComponent(oForm);

        	// targetParam 세팅

        	var param ="";
        	var params ="";
        	if( !Eco.isEmpty(application.gv_targetParam) ){
        		param = application.gv_targetParam;
        		params = param.split("@");
        		for(var i=0;i<params.length;i++){
        			var data = params[i].split("=");
        			eval("this.parent."+data[0]+"='"+data[1]+"'");
        		}
        	}

        	//메뉴에서 설정한 파라미터값
        	if( !Eco.isEmpty(application.gv_menuParam) ){
        		param = application.gv_menuParam;
        		params = param.split("@");
        		for(var i=0;i<params.length;i++){
        			var data = params[i].split("=");
        			eval("this.parent."+data[0]+"='"+data[1]+"'");
        		}
        	}

        	//목록에서 tab을 호출할때
        	try{
        		if( !Eco.isEmpty(this.getOwnerFrame().args) ){

        			param = JSON.stringify(this.getOwnerFrame().args);
        			params = JSON.parse(param);

        			for(var name in params) {
        				if(!Eco.isEmpty(params[name])){
        					eval("this.parent."+name+"='"+params[name]+"'");
        				}
        			}
        		}
        	}catch(e){}

        	//영문화
        	var rtext="";
        	if(sLang!="KOR"){
        		this.gfn_setLangText(oForm,sLang);
        	}


        // help
        /*
        	if(!Eco.isEmpty(this.sta_title) && this.helpYn=="Y"){
        		var stc = this.sta_title;
        		var i =14;
        		if(sLang!="KOR"){
        			i=7;
        		}
        		if( stc.cssclass == "sta_WF_title01" && stc.top < 10 && stc.left < 30
        		 && Eco.isEmpty(this.btn_satis) && stc.visible == true){
        			var nLeft = Number(stc.left) + Number(Eco.XComp.PositionSize.getTextSize(stc)[0]) + 30;

        			if(nexacro.Browser=="Runtime")
        			{	// Runtime 에서 Eco.XComp.PositionSize.getTextSize 안됨
        				nLeft = nLeft + (stc.text.length * i)+5;
        			}
        			if( nLeft <= 60 )	nLeft = stc.width;	// 최초타이틀 비어있고 스크립트로 설정하는 화면 있음.

        			var nTop = Number(stc.top) + Math.ceil((Number(stc.height)-20)/2)-2 ;
        			var btnSatis = new Button("btn_help","absolute",nLeft,nTop,19,22);
        			btnSatis.set_tooltiptext("HELP");
        			btnSatis.style.set_align("center middle");
        			//btnSatis.style.set_bordertype("round 3px 3px");
        			btnSatis.set_cssclass("WF_Help");
        			btnSatis.addEventHandler("onclick",this.gfn_openHelp,this);
        			this.addChild("btn_satis",btnSatis);
        			this.btn_satis.titleComp = stc;
        			btnSatis.show();
        		}
        	}
        	*/
        }

        /**
        * help이미지 재설정
        * @param
        * @return {void}
        * @example
        */
        this.gfn_setHelpPosition = function () {
        	var stc = this.sta_title;
        	var i =14;
        	if(sLang!="KOR"){
        		i=7;
        	}
        	var nLeft = Number(stc.left) + Number(Eco.XComp.PositionSize.getTextSize(stc)[0]) + 30;

        	if(system.navigatorname != "nexacro"){
        		nLeft = nLeft + (stc.text.length * i)+5;
        	}
        	if( nLeft <= 60 )	nLeft = stc.width;

        	this.btn_satis.set_left(nLeft-10);
        }

        /**
        * 그리드 초기 설정
        * @param {object} oForm 폼객체
        * @return {void}
        * @example
        */
        this.gfn_setComponent = function (oForm) {

        	// 해당 폼의 Control을 배열에 할당한다.
        	var arrContents = oForm.components;

        	var	objGrid ;
        	var	i,k, nMaxCol ;

        	// Form에서 Component 만큼 돌면서
        	for (i = 0; i < arrContents.length; i++) {
        		// 컴포넌트중 Grid일 경우
        		if (arrContents[i] instanceof Grid) {
        			objGrid = arrContents[i] ;
        			objGrid.set_cellsizingtype("col");                                   //Fixed Column Resizing 처리
        			objGrid.set_cellmovingtype("col");                                   //moving처리
        			objGrid.set_autoenter("select");                                     //Column Auto Edit & Select
        		//	objGrid.set_enableevent(false);
         			objGrid.setEventHandler("onrbuttonup",this.gfn_gridOnrbuttonup,this);
         			objGrid.addEventHandler("oncellclick",this.gfn_gridOncellclick,this);
         			if( Eco.isEmpty(objGrid.nodatatext) ){
        				if(sLang=="KOR"){
        					objGrid.set_nodatatext("검색 결과가 없습니다.");
        				}else if(sLang=="ENG"){
        					objGrid.set_nodatatext("No results were found for your search");
        				}
        			}

        			//grid sort 초기화
        			if(objGrid["nosort"] == undefined){
        				this.gfn_initGridHeadClickSort(objGrid);
        			}else if(objGrid.nosort != "true"){
        				this.gfn_initGridHeadClickSort(objGrid);
        			}
        			var objBindDataset = objGrid.getBindDataset();
        			if(objBindDataset) {
        				objBindDataset.addEventHandler("onvaluechanged", this.gfn_datasetOnvaluecharged, this);
        				for(var j=0; j<objGrid.getCellCount("Body"); j++ ){
        					if(this.gfn_isNull(objGrid.getCellProperty("Body",j,"text"))==false){
        						if(objGrid.getCellProperty("Body",j,"text").replace("bind:","") == "isChecked"){
        							objBindDataset.addEventHandler("cancolumnchange", this._datasetUpdateControlFalse, this);
        							objBindDataset.addEventHandler("oncolumnchanged", this._datasetUpdateControlTrue, this);
        							break;
        						}
        						objGrid.setCellProperty("Body", j, "editimemode", "hangul");
        					}
         				}
        			}

        			//	그리드 캡션 언어 적용
        			//var rtnText = this.gfn_getLangText(this.gfn_getCmpntPath(objGrid, ""), sLang);
        			//this.gfn_setLangGridText(objGrid, rtnText);

        		} else if (arrContents[i] instanceof Calendar){
        			objComp = arrContents[i] ;
        			//objComp.set_cellmovingtype("col");
        			if( Eco.isEmpty(objComp.onkeydown) && objComp.type == "normal" ){
        				objComp.setEventHandler("onkeydown",this.gfn_calUpDown,this);
        			}
        		} else if (arrContents[i] instanceof nexacro.Button) {
        			sName = arrContents[i].id;

        			if(sLang!="KOR"){
        				if (this.gfn_isNull(arrContents[i].text)) {
        					continue;
        				}

        				rtext=this.gfn_getLangText(sName, sLang);
        				if(rtext!=""){
        					arrContents[i].set_text(rtext);
        				}
        			}
        		}else{
        			if(this.chkCnt==0){
        				if (arrContents[i] instanceof Edit || arrContents[i] instanceof TextArea ) {
        					arrContents[i].set_imemode("hangul");
        					this.chkCnt++;
        				}
        			}
        		}

        		if(arrContents[i] instanceof Tab){
        			var arrchilds = arrContents[i].tabpages;

        			for(var j=0 ; j < arrchilds.length; j++){
        				this.gfn_setComponent(arrContents[i].tabpages[j].form);
        			}
        		} else if(arrContents[i] instanceof Div){
        			var arrchilds = arrContents[i].form.components;
        	 		if (arrchilds != null && arrchilds.length > 0) {
        	 			this.gfn_setComponent(arrContents[i].form);
        	 		}
        		}
        	}
        }

        this.copyPaste = {

        	addGrid: function(grid) {
        		if (system.navigatorname == "nexacro" || system.navigatorname == "IE" ) {
        			grid.setEventHandler("onkeydown", this.copyGridCellData1(this), this);
        		} else {
        			// other browser
        			//create an HTML DOM Textarea element and append it to the end of the body element of the HTML document
        			var objTA = document.createElement("textarea");
        			document.body.appendChild(objTA);

        			grid.setEventHandler("onkeydown", this.copyGridCellData2(this, objTA), this);
        		}

        	},

        	makeData: function(obj) {
        		var sBody = "";
        		var sSpr = "	";	//tab
        		var nStartrow = obj.selectstartrow;
        		var nEndrow = obj.selectendrow;
        		var nStartCol = obj.selectstartcol;
        		var nEndCol = obj.selectendcol;

        		//case of selecttype is row or multirow
        		var nLoop = nStartrow.length;

        		if(nStartCol == -1 && nEndCol == -1) {
        			nStartCol = 0;
        			nEndCol = obj.getFormatColCount()-1;
        		}

        		//copy cell data from selected cell
        		for(var k=0; k < nLoop; k++) {

        			for (var i = nStartrow[k]; i <= nEndrow[k]; i++) {
        				for (var j = nStartCol; j <= nEndCol; j++) {
        					if (j < nEndCol) {
        						sBody += obj.getCellText(i, j) + sSpr;
        					} else {
        						sBody += obj.getCellText(i, j) + "\r\n";
        					}
        				}
        			}
        		}

        		return sBody;
        	},

        	copyGridCellData1: function(pThis) {
        		return function(obj, e) {
        			if (e.ctrlkey && !e.shiftkey && !e.altkey) {
        				if (e.keycode == 67) {		//'c'
        					var rtnStr = pThis.makeData(obj);

        					//copy selected data to clipboard
        					system.clearClipboard();
        					system.setClipboard("CF_TEXT", rtnStr);
        				}
        			}
        		}
        	},

        	copyGridCellData2: function(pThis, objTA) {
        		return function(obj, e) {
        			//ctrl=17, shift=16, alt=18
        			//// alphabet "c"= 67
        			if (e.ctrlkey && !e.shiftkey && !e.altkey) {
        				if (e.keycode == 67) {
        					var rtnStr = pThis.makeData(obj);

        					//after copying the selected data to the textarea, select it.
        					objTA.value = rtnStr;
        					objTA.select();
        				}
        			}
        		}
        	}//end of copyGridCellData2: function(pThis, objTA)

        }//end of this.copyPaste

        // 파라미터의 값 리턴
        this.gfn_sysParam = function(paramId)
        {
        	return nexacro.getApplication().gds_sysParam.lookup("PARAM_ID",paramId,"PARAM_DATA");
        }

        // 만족도평가 팝업 호출
        this.gfn_satisPopup = function(obj,  e)
        {
        	var oArg =	{ pgmId	: this.pgmId
        				, pgmNm	: obj.titleComp.text
        				};

        	this.gfn_openPopup("satisEvalPopup","com.base::satisEval.xfdl", oArg, "", "");
        }

        this._datasetUpdateControlFalse = function(obj,e)
        {
        	if(e.columnid=="isChecked") obj.set_updatecontrol(false);
        }

        this._datasetUpdateControlTrue = function(obj,e)
        {
        	if(e.columnid=="isChecked") obj.set_updatecontrol(true);
        }

        /**
        * 그리드 마우스 클릭 이벤트
        * @param {object} obj 폼객체
        * @return {object} e 그리드 클릭 이벤트 (nexacro.GridClickEventInfo)
        * @return {void}
        * @example
        */
        this.gfn_gridOncellclick = function(obj, e)
        {
        	var sType = obj.getCurEditType();
        // 	if(sType == "normal" || sType == "text" || sType == "textarea")
        // 	{
        // 		var temp = obj.getCellText(e.row, e.cell);
        // 		obj.setEditSelect(temp.length);
        // 	}
        	if (sType == "combo" ) {
        		obj.dropdownCombo();
        	} else if(sType == "date") {
        		obj.dropdownCalendar();
        	}
        }

        /**
        * Grid head click 시 소팅 처리하기 위한 초기 지정
        * @param {object} grid 그리드 Component
        * @return {void}
        * @example
        */
        this.gfn_initGridHeadClickSort = function(grid) {

        	// 대상이 이미 초기화 되었는지 확인
        	if (this._GetUserProperty(grid, "initGridHeadClickSort")) return;

        	// add headclick handler
        	grid.addEventHandler("onheadclick", this._SortGridOnHeadClickHandler, this);

        	// 초기화 설정 완료 속성 지정 - 초기화 재설정 방지용
        	this._SetUserProperty(grid, "initGridHeadClickSort", true);

        }

        /**
        * 그리드 onheadclick Event Handler
        * @param {object} obj 그리드객체
        * @param {object} e Event Object(GridClickEventInfo)
        * @return {void}
        * @example
        */
        this._SortGridOnHeadClickHandler = function(obj, e) {

        	if(obj.getCellProperty( "Head", e.cell, "edittype" ) == "checkbox") return;

        	var multiple = false;

        	// Shift 키
        	if ( e.shiftKey ) multiple = true;

        	// Ctrl 키
        	if ( e.ctrlKey ) multiple = true;

        	// 정렬 상태 변경이 성공하면 정렬을 실행한다.
        	if (this._SetSortStatus(obj, e, multiple))
        	{
        		this._ExecuteSort(obj);
        	}

        }

        /**
         * 정렬 상태 지정 - 실제 소팅은 executeSort 에서 처리
         * @param {Grid} grid 그리드객체
         * @param {GridClickEventInfo} evnt 그리드 클릭 이벤트
         * @param {boolean=} isMultiple 다중선택여부
         * @param {number=} sortStatus 정렬상태 강제 지정 (미지정시 현재 상태 반전)
         * @return {boolean} 상태 변경 여부 default : 'true'
         * @example
         */
        this._SetSortStatus = function(grid, evnt, isMultiple, sortStatus) {

        	var headCellIndex = evnt.cell;

         	var columnName = this._GetBindColumnNameByIndex(grid, evnt.col);
        	if ( Eco.isEmpty(columnName) ) {
        		trace("Check Grid body cell bind value");
        		return false;
        	}

        	if ( Eco.isEmpty(isMultiple) ) isMultiple = false;

        	if ( Eco.isEmpty(sortStatus) ) sortStatus = -1;

        	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
        	if ( this._GetUserProperty(grid, "sortInfos") === undefined ){
        		this._SetUserProperty(grid, "sortInfos", {});
        	}

        	// 정렬대상컬럼 (순서중요)
        	if ( this._GetUserProperty(grid, "sortItems") === undefined ){
        		this._SetUserProperty(grid, "sortItems", []);
        	}

        	var sortInfos = this._GetUserProperty(grid, "sortInfos"),
        		sortItems = this._GetUserProperty(grid, "sortItems"),
        		sortInfo = sortInfos[columnName],
        		sortItem,
        		status;

        	if ( Eco.isEmpty(sortInfo) ){
        		var headText = grid.getCellText(-1, headCellIndex);

        		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
        		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다.
        		var refCell = this._GetGridCellObject(grid, "head", headCellIndex);

        		sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
        	}

        	// set sort status
        	if ( isMultiple ) {
        		status = sortInfo.status;
        		if ( sortStatus == -1 ) {
        			if ( status == 0 ) {
        				sortInfo.status = 1;
        			} else if ( status == 1 ) {
        				sortInfo.status = 2;
        			} else if ( status == 2 ) {
        				sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
        			}
        		} else {
        			sortInfo.status = sortStatus;
        		}
        	} else {
        		for (var p in sortInfos) {
        			if ( sortInfos.hasOwnProperty(p) ) {
        				sortInfo = sortInfos[p];

        				if ( p == columnName ) {
        					status = sortInfo.status;
        					if ( sortStatus == -1 ) {
        						if ( status == 0 ) {
        							sortInfo.status = 1;
        						} else if ( status == 1 ) {
        							sortInfo.status = 2;
        						} else if ( status == 2) {
        							sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
        						}
        					} else {
        						sortInfo.status = sortStatus;
        					}
        				} else {
        					sortInfo.status = 0;
        				}

        				if ( sortInfo.status == 0 ) {
        					for (var j=0, len2=sortItems.length; j<len2; j++) {
        						if ( sortItems[j] !== columnName ) {
        							sortItems.splice(j,1);
        							break;
        						}
        					}
        				}
        			}
        		}
        	}

        	// 컬럼정보 등록
        	if ( this._ArrayIndexOfItem(sortItems, columnName, null, null) == -1 ) {
        		sortItems.push(columnName);
        	}
        	return true;
        }

        /**
         * 정렬 적용
         * @param {Grid} grid 대상 Grid Component
         * @return {void}
         * @example
         */
        this._ExecuteSort = function(grid)
        {
        	var sortInfo,
        		sortItem,
        		sortInfos = this._GetUserProperty(grid, "sortInfos"),
        		sortItems = this._GetUserProperty(grid, "sortItems"),
        		columnName,
        		status,
        		cell,
        		sortString = "";

        	if ( Eco.isEmpty(sortInfos) || Eco.isEmpty(sortItems) ) return;

        	// keystring 조합
        	for (var i=0; i<sortItems.length; i++) {
        		columnName = sortItems[i];
        		sortInfo = sortInfos[columnName];
        		status = sortInfo.status;
        		cell = sortInfo.refCell;

        		// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
        		// 확인하여 없으면 제거해 준다.
        		/*
        		if ( Eco.isEmpty(cell) || grid.getBindCellIndex("body", columnName) < 0 ) {
        			sortItems.splice(i,1);
        			sortInfos[columnName] = null;
        			delete sortInfos[columnName];
        			i--;
        		}	else if ( status > 0 ) {
        			sortString += (status == 1 ? "+" : "-") + columnName;
        		}
        		*/
        		sortString += (status == 1 ? "+" : "-") + columnName;
        	}

        	var ds = this._Lookup(grid.parent, grid.binddataset);
        	//grid.set_enableredraw(false);
        	ds.set_enableevent(false);

        	// keystring 확인
        	var curKeyString = ds.keystring;
        	var groupKeyString = "";

        	if ( curKeyString.length > 0 && curKeyString.indexOf(",") < 0 ) {
        		var sIndex = curKeyString.indexOf("S:");
        		var gIndex = curKeyString.indexOf("G:");

        		if ( sIndex > -1 ){
        			groupKeyString = "";
        		}else{
        			if ( gIndex < 0 ){
        				groupKeyString = "G:"+curKeyString;
        			}else{
        				groupKeyString = curKeyString;
        			}
        		}
        	} else {
        		var temps = curKeyString.split(",");
        		var temp;
        		for (var i=0,len=temps.length; i<len; i++)
        		{
        			temp = temps[i];
        			if ( temp.length > 0 && temp.indexOf("S:") < 0 )
        			{
        				if ( temp.indexOf("G:") < 0 )
        				{
        					groupKeyString = "G:"+temp;
        				}
        				else
        				{
        					groupKeyString = temp;
        				}
        			}
        		}
        	}

        	if ( sortString.length > 0 ){
        		var sortKeyString = "S:"+sortString;

        		if ( groupKeyString.length > 0 ) {
        			ds.set_keystring(sortKeyString + "," + groupKeyString);
        		} else {
        			ds.set_keystring(sortKeyString);
        		}

        		this._SetUserProperty(grid, "sortKeyString", sortKeyString);
        	} else {
        		ds.set_keystring(groupKeyString);

        		this._SetUserProperty(grid, "sortKeyString", "");
        	}



        	// 정렬표시
        	var type = this.MARKER_TYPE;
        	var index, marker;
        	for (var p in sortInfos) {
        		if ( sortInfos.hasOwnProperty(p) ){
        			sortInfo = sortInfos[p];
        			cell = sortInfo.refCell;

        			if ( cell ){
        				index = this._GetCellObjectIndex(cell);

        				marker = sortInfo.status == 1? this.MARKER[0]:(sortInfo.status == 2? this.MARKER[1]:"");

        				if ( type == "text" ){
        					grid.setCellProperty( "head", index, "text", sortInfo.text + marker);
        					trace(sortInfo.text + marker);
        				} else if ( type == "image" ){
        					grid.setCellProperty( "head", index, "style", "background:"+marker + " 50 5;");
        				}
        			}
        		}
        	}
        	//grid.set_enableredraw(true);
        	ds.set_enableevent(true);
        }

        /**
         * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {Grid} grid 대상 Grid Component
         * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
         * @param {number} index 얻고자 하는 cell 의 index
         * @return {object} cell object
         */
        this._GetGridCellObject = function(grid, band, index)
        {
        	// 내부속성을 통해 얻어온다.
        	var refCell;
        	var format = grid._curFormat;
        	if (format){
        		if ( band == "head" ){
        			refCell = format._headcells[index];
        		} else if ( band == "body" ) {
        			refCell = format._bodycells[index];
        		} else if ( band == "summ" || band == "summary" ) {
        			refCell = format._summcells[index];
        		}
        	}

        	return refCell;
        }

        /**
         * cell object에서 index 를 얻어온다. (Grid 내부 속성이므로 get 용도로만 사용)
         * @param {object} cell 대상 cell object
         * @return {number} cell index
         */
        this._GetCellObjectIndex = function(cell)
        {
        	return cell._cellidx;
        }

        /**
         * body cell index로 binding 된 컬럼명을 얻어온다.
         * @param {Grid} grid 대상 Grid Component
         * @param {number} index body cell index
         * @return {string} columnid 바인드 컬럼명
         */
        this._GetBindColumnNameByIndex = function(grid, index)
        {
        	var text = "";
        	var columnid = "";
        	var subCell = grid.getCellProperty("body", index, "subcell");
        	if ( subCell > 0 ) {
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	} else	{
        		text = grid.getCellProperty("body", index, "text");
        	}

        	if(text.indexOf("expr")>-1){
        		text = "bind:"+text.substring(text.lastIndexOf(":")+1,text.length).trim();
        	}

        	if ( !Eco.isEmpty(text) ) {
        		if ( text.search(/^BIND\(/) > -1 ) {
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		} else if ( text.search(/^bind:/) > -1 ) {
        			columnid = text.replace(/^bind:/, "");
        		}
        	}

        	return columnid;
        }

        /**
         * head cell에 match되는 body cell을 얻어온다
         * @param {Grid} grid 대상 Grid Component
         * @param {number} headCellIndex head cell index
         * @param {boolean=} useColspan head cell 이 colspan 일 경우에도 반환값을 받을지 여부
         * @return {number} cellIndex cell index
         */
        this._GetBodyCellIndex = function(grid, headCellIndex, useColspan)
        {
        	// Max Head Row Index
        	var maxHeadRow = 0;
        	for (var i=0, len=grid.getCellCount("head"); i<len; i++) {
        		var row = grid.getCellProperty("head", i, "row");
        		if (maxHeadRow < row) {
        			maxHeadRow = row;
        		}
        	}
        	// Max Body Row Index
        	var maxBodyRow = 0;
        	for (var i=0, len=grid.getCellCount("body"); i<len; i++) {
        		var row = grid.getCellProperty("body", i, "row");
        		if (maxBodyRow < row) {
        			maxBodyRow = row;
        		}
        	}

        	if (maxHeadRow == 0 && maxBodyRow == 0) {
        		return headCellIndex;
        	}

        	// Body Row 가 1개 이상일 경우
        	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
        	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.
        	var cellIndex = -1;
        	var sRow = -1;
        	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
        	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
        	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));

        	if (maxHeadRow > maxBodyRow) {
        		sRow = nRow - (maxHeadRow - maxBodyRow);
        		sRow = (sRow < 0 ? 0 : sRow);
        	} else {
        		sRow = nRow;
        	}

        	var cRow, cCol, cColspan;
        	for (var i=0, len=grid.getCellCount("body"); i<len; i++) {
        		cRow = parseInt(grid.getCellProperty("body", i, "row"));
        		cCol = parseInt(grid.getCellProperty("body", i, "col"));
        		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));

        		// colspan 이 적용된 cell 도 반환값을 사용할 경우 첫번째 항목에 매칭되는 index
        		if ( useColspan ) {
        			if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) {
        				cellIndex = i;
        				break;
        			}
        		} else {
        			if (sRow == cRow && nCol == cCol && nColspan == cColspan) {
        				cellIndex = i;
        				break;
        			}
        		}
        	}
        	return cellIndex;
        }

        /**
         * 주어진 nexacro Component, object 에 사용자 속성을 추가한다.<br>
         * 대상이 원래 가지고 있는 이름을 지정해도 상관없이 동작한다.<br>
         * ※ 사용자 정의 속성을 대상에 바로 사용하면 내부 속성을<br>
         * 덮어쓸 수 있으므로 본 메소드를 통해서 사용하도록 한다.
         * @public
         * @param {*} target nexacro Component, object
         * @param {string} name 사용자 정의 속성 명
         * @param {*=} value 속성 값
        * @return {void}
         */
        this._SetUserProperty =  function(target, name, value)
        {
        	 var propName = "";
        	 propName += "_" + name;

        	 target[propName] = value;
        }

        /**
         * 주어진 nexacro Component, object 에서 사용자 정의 속성값을 얻어온다.<br>
         * ※ setUserProperty 메소드에 의해 지정된 사용자 정의 속성값을 얻어온다.
         * @public
         * @param {*} target nexacro Component, object
         * @param {string} name 사용자 정의 속성 명
         * @return {*} 주어진 target에 name으로 지정된 사용자 정의 속성값
         */
        this._GetUserProperty = function(target, name)
        {
        	 var propName = "";
        	 propName += "_" + name;

        	 return target[propName];
        }

        /**
         * 주어진 대상을 포함한 상위 범위로 지정된 이름에 최초로 일치하는 component, object 반환
         * @public
         * @param {XComp} p 찾을 대상
         * @param {string} name 찾을 대상 이름
         * @return {XComp} 검색된 component, object
         */
        this._Lookup = function(p, name)
        {
        	var o;
        	while (p)
        	{
        		o = p.components;
        		if ( o && o[name] ) return o[name];

        		o = p.objects;
        		if ( o && o[name] ) return o[name];

        		p = p.parent;
        	}
        	return null;
        }


        /**
        * 원하는 항목을 배열에서 삭제 처리한다.
        * @param {array} array remove 대상 Array
        * @param {object} item remove하고자 하는 item
        */
        this._ArrayRemoveItem = function(array, item)
        {
        	var index = this._ArrayIndexOfItem(array, item);

        	if (index !== -1) {
        		array.splice(index, 1);
        	}
        }

        /**
        * 지정된 항목이 처음 나오는 배열 위치를 반환한다.
        * @param {array} array 검색 대상 Array
        * @param {object} item 찾고자 하는 Item
        * @param {number=} from 검색의 시작 위치 (default: 0)
        * @param {boolean=} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false)
        * @return {number} 검색된 배열 위치. 없다면 -1 리턴
        */
        this._ArrayIndexOfItem = function(array, item, from, strict)
        {
        	var len = array.length;
        	if ( from == null ) from = 0;;
        	strict == !!strict;
        	from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        	if (from < 0){
        		from += len;
        	}

        	if (strict) {
        		for (; from < len; from++) {
        			if ( array[from] === item) {
        				return from;
        			}
        		}
        	} else {
        		for (; from < len; from++) {
        			if ( array[from] == item) {
        				return from;
        			}
        		}
        	}

        	return -1;
        }

        /**
        * object에서 각 반복되는 속성값들을 주어진 함수로 처리한다.<br>
        * 주어진 함수에서 임의 속성 처리에서 return false를 하면 임의 속성지점에서 반복이 멈춘다.
        * @param {object} object
        * @param {function} func callback 함수
        * @param {string} func.prop object property name
        * @param {object} func.val object property value
        * @param {object} func.object object 그 자체
        * @param {object=} scope callback 함수에 대한 수행 scope
        */
        this._ObjectEach = function(object, func, scope)
        {
        	var p,
        		scope = scope || object;
        	for (p in object) {
        		if (object.hasOwnProperty(p)) {
        			if (func.call(scope, p, object[p], object) === false) {
        				return;
        			}
        		}
        	}
        }

        /**
         * 공통 그리드 마우스 우클릭 이벤트
         * @param {Grid} obj 그리드객체
         * @param {GridMouseEventInfo} e 마우스이벤트
         * @return {void}
         */
        this.gfn_gridOnrbuttonup = function (obj, e)
        {
         	if ( !this.isValidObject("_pdiv_gridMenu") ) {
        		var objPdiv = new PopupDiv();
        		objPdiv.init("_pdiv_gridMenu", "absolute", 0, 0, 155, 150);
        		this.addChild(objPdiv.name, objPdiv);
        		objPdiv.set_url("com.base::gridMenu.xfdl");
        		objPdiv.show();
         	}

        	this._pdiv_gridMenu.clickinfo = {"targetgrid":obj,"col":e.col,"row":e.row};
        	this._pdiv_gridMenu.trackPopupByComponent(obj,e.clientX,e.clientY,null,null, "_callbackForGridMenu");//trackPopup(x,y,null,null, "_callbackForGridMenu");

        }

        /**
         * 마우스 우클릭 콜백함수
         * @param {string} popupId 팝업ID
         * @param {object} val 그리드메뉴 callback
         * @return {void}
         */
        this._callbackForGridMenu = function(popupId,val)
        {
        	//trace("val.targetgrid="+val.targetgrid.name);
        	//trace("val.selectmenu="+val.selectmenu);
        	switch (val.selectmenu) {
        		case "100"  : //틀고정
        			val.targetgrid.cellmovingtype = "none";
        			val.targetgrid.setFormatColProperty(val.col, "band", "left");
        			val.targetgrid.setFixedRow(val.row);

        		    break;

        		case "110"://틀해제

        			//2016.01 틀해제 후 무조건 cellmovingtype이 적용되는 문제로 막음.
        			// cellmovingtype적용하면 어떻게 처리할지 생각해야 함. - 원래 설정된 값으로 바꿔줘야 하는데...
        			//val.targetgrid.cellmovingtype = "col";

        			var iColCnt = val.targetgrid.getCellCount("head");
        			for(var i=iColCnt-1; i >=0; i--)
        			{
        				val.targetgrid.setFormatColProperty(i, "band", "body");
        			}
        			val.targetgrid.setFixedRow(-1);
        			break;
        		case "120"  : //열틀고정
        			val.targetgrid.cellmovingtype = "none";
        			val.targetgrid.setFormatColProperty(val.col, "band", "left");

        		    break;

        		case "130"://열틀해제
        			//2016.01 틀해제 후 무조건 cellmovingtype이 적용되는 문제로 막음.
        			// cellmovingtype적용하면 어떻게 처리할지 생각해야 함. - 원래 설정된 값으로 바꿔줘야 하는데...
        			//val.targetgrid.cellmovingtype = "col";

        			var iColCnt = val.targetgrid.getCellCount("head");
        			for(var i=iColCnt-1; i >=0; i--)
        			{
        				val.targetgrid.setFormatColProperty(i, "band", "body");
        			}
        			break;
        		case "140"  : //행틀고정
        			val.targetgrid.setFixedRow(val.row);
        		    break;
        		case "150"  : //행틀해제
        			val.targetgrid.setFixedRow(-1);
        		    break;
        		case "200"  : //선택
        			val.targetgrid.set_selecttype("area");
        			val.targetgrid.selectArea( 0, val.col, val.targetgrid.rowcount-1, val.col );
        		    break;
        	}
        }

        /**
        * 엑셀 익스포트 시 사유저장
        * @param {Grid} obj - 대상 그리드
        * @param {string} sFileName - 엑셀파일명
        * @return {void}
        */
        this.gfn_exportChkExcel = function (obj, sFileName)
        {
        	var oArg = {
        		arg1 : obj,
        		arg2 : sFileName,
        		arg3 : this.pgmId
        	};

        	this.gfn_openPopup("exceldown", "com.base::excelDownChk.xfdl", oArg, "width=620,height=400,autosize=false", "");
        }

        this.excelParams = [];	// 엑셀 익스포트 콜백함수용 변수

        /**
        * 엑셀 익스포트
        * @param {Grid} obj - 대상 그리드
        * @param {string} sFileName - 엑셀파일명
        * @return {void}
        */
        this.gfn_exportExcel = function (obj, sFileName)
        {

        	if( Eco.isEmpty(obj.getBindDataset()) )
        	{	// BindDataset 없을 경우 바로 Export ( ex:양식다운로드 )
        		//ExcelExportObjext를 초기화
        		this.ExcelExportObject = null;
        		this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);

        		this.ExcelExportObject.addEventHandler("onsuccess", this.gfn_excelExportObject_onsuccess, this);
        		this.ExcelExportObject.addEventHandler("onerror", this.gfn_excelExportObject_onerror, this);

        		//var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, obj, "Sheet1!A1","allband","allrecord","merge","onlyvalue","none","color,background","both");

        		// 엑셀 색상포함해서 다운로드
        		//var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, obj, "Sheet1!A1","allband","allrecord","merge","onlyvalue","none","color,background","both");
        		var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, obj, "Sheet1!A1","allband","allrecord","merge","selectstyle","none","color","both");

        		this.ExcelExportObject.set_exportuitype("exportprogress");
        		this.ExcelExportObject.set_exporteventtype("itemrecord");
        	//	this.ExcelExportObject.set_exportactivemode("noactive");
        		this.ExcelExportObject.set_exportmessageprocess("%d[%d/%d]")

        		this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        		this.ExcelExportObject.set_exportfilename(sFileName);
        		this.ExcelExportObject.set_exporturl(this.domainNm + "/XExportImport");
        		this.ExcelExportObject.exportData();

        		this.setWaitCursor(false);
        		return;
        	}

        	if(obj.rowcount == 0){
        		this.gfn_showMsg("COM_CHK_0011","","");
        		return false;
        	}
        	this.setWaitCursor(true);

        	var oDs = "";

        	if(Eco.isEmpty(sFileName))
        	{
        		sFileName = "ExcelExport";
        	}


        	oDs = obj.getBindDataset();

        	//익스포터 전 변경사항이 있으면 return 처리
        	var func = Ex.util.isUpdated;
        	if ( func(oDs) == true ) {
        		var sExportName = obj._excel_name;
        		var sPopupId = "export_msg_" + obj.name;				//멀티 export시 팝업명 중복방지 처리

        		this.setWaitCursor(false);
        		this.gfn_showMsg("COM_CHK_0051","","");

        		return;
        	}

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);

        	this.ExcelExportObject.addEventHandler("onsuccess", this.gfn_excelExportObject_onsuccess, this);
        	this.ExcelExportObject.addEventHandler("onerror", this.gfn_excelExportObject_onerror, this);

        	//var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, obj, "Sheet1!A1","allband","allrecord","merge","onlyvalue","none","color,background","both","cellline");
        	var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, obj, "Sheet1!A1","allband","allrecord","merge","selectstyle","none","color","both","cellline");

        	//progressbar
        	this.ExcelExportObject.set_exportmessageprocess("%d [ %d / %d ]");
        	this.ExcelExportObject.set_exportuitype("exportprogress");
        	this.ExcelExportObject.set_exporteventtype("itemrecord");
        	//this.ExcelExportObject.set_exportactivemode("noactive");
            this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.ExcelExportObject.set_exportfilename(sFileName);
            this.ExcelExportObject.set_exporturl(this.domainNm + "/XExportImport");

        	// var objExportItem = this.ExcelExportObject.getExportItem( nexacro.ExportItemTypes.GRID, 0 );
        	// objExportItem.set_exceptstyle("background,background2");

        	this.ExcelExportObject.exportData();

        	//엑셀다운 이력
        	var sArgument = "param=excel@"+this.pgmId+"@"+sFileName;
        	this.gfn_tran(this, "setFileDownHistory", "/setFileDownHistory.do", "", "",sArgument);

        	obj.set_binddataset(oDs); // GRID BIND DATASET RESET

        }

        /**
        * Multi 엑셀 익스포트
        * @param {Form|Div} oForm 폼객체
        * @param {Dataset} oDs 데이타셋
        * @param {Grid} obj 그리드객체
        * @return {void}
        */
        this.gfnl_makeExcelList = function (oForm,oDs,aGridList) {
        	var	aComps = oForm.components ;
        	var	aTabpages ;
        	var	i, nMax, idx ;
        	var	oComp ;
        	var	nMax = aComps.length ;
        	for(i = 0 ; i < nMax ; i++){
        		oComp = aComps[i] ;
        		if(!Eco.isEmpty(oComp.components)){				// 하위 컴포넌트들이 있으면 recursive call로 처리
        			this.gfnl_makeExcelList(oComp,oDs,aGridList);
        		}else if(oComp instanceof Grid){
        			if(!Eco.isEmpty( oComp._excel_name )){		// Grid컴포넌트에 _excel_name이 선언되어 있으면 처리
        				idx = oDs.addRow();
        				oDs.setColumn(idx,"FILE_NAME", oComp._excel_name ) ;
        				oDs.setColumn(idx,"FILE_FLAG",0) ;
        				aGridList[idx] = oComp ;
        			}
        		}
        	}
        }

        /**
        * Multi 엑셀 익스포트
        * @param {Form|Div} oForm 폼객체
        * @return {void}
        */
        this.gfn_exportExcels = function (oForm) {

        	if(Eco.isEmpty(this.gfn_openPopup)){
        		Ex.core.showMessage("gfn_exportExcels함수를 쓰기위해서는 common.xjs를 include해야 합니다.",{},"alert");
        	}
        	var oDs = this.all[this.xfv_sExportDsCtrlID];
        	if(Eco.isEmpty(oDs)){
        		oDs = new Dataset(this.xfv_sExportDsCtrlID) ;
        		oDs.addColumn("FILE_NAME","String",256);
        		oDs.addColumn("FILE_FLAG","Int",256);
        		oForm.addChild(this.xfv_sExportDsCtrlID, oDs) ;
        	}else{
        		oDs.clearData() ;
        	}

        	var	aGridList = new Array ;
        	this.gfnl_makeExcelList(oForm, oDs, aGridList);
        	this.xfv_aExcelGridList = aGridList ;

        	if ( aGridList.length >1 ){
        		this.setWaitCursor(false);
        		this.gfn_openPopup("GFN_EXCELS","com.base::exportMultiExcel.xfdl", aGridList, "", "gfn_exportExcelsCallback");
        	}
        	else if ( aGridList.length == 1 ){
        		this.gfn_exportExcel(aGridList[0],oDs.getColumn(0,"FILE_NAME"));
        	}
        	else{
        		this.setWaitCursor(false);
        	}
        }

        /**
        * Multi 엑셀 익스포트 콜백함수
        * @param {string} ID - Callback ID
        * @param {boolean} retVal - true:Export,false:Cancel
        * @return {void}
        */
        this.gfn_exportExcelsCallback = function(ID,retVal){

        	this.setWaitCursor(true);

        	if(retVal){
        		oDs = this.all[this.xfv_sExportDsCtrlID];
        		aGridList = this.xfv_aExcelGridList ;
        		var	i,nMax ;
        		nMax = oDs.rowcount ;
        		for( i = 0 ; i < nMax ; i++ ){
        			if(oDs.getColumn(i,"FILE_FLAG")){
        				this._nextExcelIndex = i+1;
        				this._lastExcelIndex = nMax;
        				this.gfn_exportExcel(aGridList[i],oDs.getColumn(i,"FILE_NAME"));
        				break;
        			}
        		}
        	}
        	else{
        		this.setWaitCursor(false);
        	}

        }

        /**
        * excel export onsuccess 이벤트
        * @param {ExportObject} obj export객체
        * @param {ExcelExportObject} e 이벤트객체
        * @return {void}
        */
        this.gfn_excelExportObject_onsuccess = function(obj, e)
        {
        	trace("=========== export onsuccess ============");
        	trace("e.eventid: " + e.eventid);
        	trace("e.url: " + e.url);
        	// 멀티엑셀 순차적 다운로드
        	if( !Eco.isEmpty(this._lastExcelIndex) )
        	{
        		var oDs = this.all[this.xfv_sExportDsCtrlID];
        		var aGridList = this.xfv_aExcelGridList ;
        		for( i = this._nextExcelIndex ; i < this._lastExcelIndex ; i++ ){
        			// 변수초기화
        			if( i+1 == this.lastExcelIndex ){
        				this.lastExcelIndex = null;
        			}

        			if(oDs.getColumn(i,"FILE_FLAG")){
        				this._nextExcelIndex = i+1;
        				this.gfn_exportExcel(aGridList[i],oDs.getColumn(i,"FILE_NAME"));
        				break;
        			}
        		}
        	}
        }


        /**
         * 멀티 시트 엑셀 다운로드
         * @function gfn_exportExcelMultiSheet
         * @param {Array} arrObj 그리드목록
         * @param {String} sFileName 파일명
         * @member Common
        */
        this.gfn_exportExcelMultiSheet = function(arrObj, sFileName)
        {
        	this.setWaitCursor(true);

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);
        	this.ExcelExportObject.addEventHandler("onsuccess", this.gfn_excelExportObject_onsuccess, this);
        	this.ExcelExportObject.addEventHandler("onerror", this.gfn_excelExportObject_onerror, this);

        	for(var i=0; i<arrObj.length; i++)
        	{
        		var obj = arrObj[i];

        		if( !Eco.isEmpty(obj.getBindDataset()) )
        		{
        			if(obj.rowcount == 0){
        				this.gfn_showMsg("COM_CHK_0011","","");
        				this.setWaitCursor(false);
        				return false;
        			}

        			// 변경사항이 있으면 return 처리
        			var oDs = obj.getBindDataset();
        			var func = Ex.util.isUpdated;
        			if( func(oDs) == true ){
        				this.gfn_showMsg("COM_CHK_0051","","");
        				this.setWaitCursor(false);
        				return;
        			}

        			if( ret < 0 ){
        				this.gfn_showMsg("엑셀 익스포트 오류");
        				this.setWaitCursor(false);
        				return;
        			}
        		}

        		var ret = this.ExcelExportObject.addExportItem(nexacro.ExportItemTypes.GRID, obj, "Sheet"+(i+1)+"!A1","allband","allrecord","suppress","onlyvalue","none","color,background","both","cellline");
        	}

        	this.ExcelExportObject.set_exportmessageprocess("%d [ %d / %d ]");
        	this.ExcelExportObject.set_exportuitype("exportprogress");
        	this.ExcelExportObject.set_exporteventtype("itemrecord");

        	this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	if(Eco.isEmpty(sFileName))	sFileName = "ExcelExport";
        	this.ExcelExportObject.set_exportfilename(sFileName);
        	this.ExcelExportObject.set_exporturl(this.domainNm + "/XExportImport");
        	this.ExcelExportObject.exportData();

        	this.setWaitCursor(false);
        	return;
        }


        /**
        * excel export onerror 이벤트
        * @param {ExportObject} obj export객체
        * @param {ExcelExportObject} e 이벤트객체
        * @return {void}
        */
        this.gfn_excelExportObject_onerror = function(obj, e)
        {
        	trace("=========== export onerror ============");
        	trace("e.eventid: " + e.eventid);
        	trace("e.errormsg: " + e.errormsg);
        	trace("e.errortype: " + e.errortype);
        	trace("e.statuscode: " + e.statuscode);
        }

        /**
         * 엑셀 데이터를 데이터셋으로 import 처리
         * @param {string} sDataset - import 대상 dataset 콤포넌트
         * @param {string} sSheet   - 엑셀 시트명
         * @param {string} sBody    - 시트 body 시작영역 지정 - default 'A2'
         * @param {string} sHead    - 시트 header 영역 지정 - default 'A1:Z1'
         * @param {string} sSuccFunc - 성공시 이벤트명
         * @param {string} sErrFunc - 실패시 이벤트명
         * @return {void}
         * @example
         * 엑셀 title 이 2줄 이상 일때(2줄:'A3', 3줄:'A4',.....)<br>
         * this.gfn_importExcel("dsList", "Sheet1", "A3");
         * @memberOf private
         */

        this.gfn_importExcel = function(sDataset, sSheet, sBody, sHead, sSuccFunc, sErrFunc)
        {
        	//import url
        	var sExcelImportUrl = this.domainNm + "/XImport";

        	//ExcelImportObject 초기화
        	if( this.xfv_importObject && this.xfv_importObject instanceof ExcelImportObject ){
        		this.xfv_importObject.destroy();
        		this.xfv_importObject = null;
        	}

        	//callback 처리
        	if(Eco.isEmpty(sSuccFunc)) sSuccFunc = "Import00_onsuccess";
        	if(Eco.isEmpty(sErrFunc)) sErrFunc = "Import00_onerror";

        	/*unique ID 생성 - destroy 처리를 위해 unique ID 생성*/
        	var sDate = new Date();
        	var sImportName = "xImport_" + this.name + "_" +  sDate.getTime();
        	this.xfv_importObject = new nexacro.ExcelImportObject( sImportName, this );
        	this.xfv_importObject.set_importtype(nexacro.ImportTypes.EXCEL);
        	this.xfv_importObject.set_importurl(sExcelImportUrl);
        	this.xfv_importObject.set_importfilemode("server");

        	//이벤트 등록
        	this.xfv_importObject.addEventHandler("onsuccess", this.gfn_import_excel_onsuccess, this);
        	this.xfv_importObject.addEventHandler("onerror", this.gfn_import_excel_onerror, this);

        	this.xfv_importObject.usercallbackfunc = sSuccFunc;
        	this.xfv_importObject.usercallbackerrfunc = sErrFunc;

        //	this.setWaitCursor(true);   //dailog 취소시 에러 cursor 남음. - 주석처리

        	/**
        	* import 대상 컬럼이 다를 때 처리 방법(예:excel 컬럼명이 한글일 경우)
        	* 임시데이타셋으로 import 처리 후 실제 데이타 바인드는 onsuccess 이벤트에서 처리.
        	*/
        	sDataset = "_x_import_"+sDataset;
        	Ex.util.createDs(this, sDataset);
        	this.xfv_importObject.userdatasetname = sDataset;

        	var sParam, sParam2;
        	if(Eco.isEmpty(sSheet)){
        		this.xfv_importObject.userbody = sBody;
        		sParam = "[command=getsheetdata;output=outDs;]";
        		sParam2 = "["+sDataset+"=outDs]";
        	}else{
        		if(Eco.isEmpty(sHead)){
        			if(Eco.isEmpty(sBody)){
        				sParam = "[command=getsheetdata;output=outDs;]";
        			}else{
        				sParam = "[command=getsheetdata;output=outDs;Body=" + sSheet + "!" + sBody +";]";
        			}
        		}else{
        			sParam = "[command=getsheetdata;output=outDs;Head="+sSheet+"!"+ sHead + ";Body=" + sSheet + "!" + sBody +";]";
        		}
        		sParam2 = "["+sDataset+"=outDs]";

        	}

        	this.xfv_importObject.importData( "", sParam, sParam2 );
        }

        /**
        * import onsuccess Event
        * @param {ExcelImportObject} obj import객체
        * @param {ExcelImportEventInfo} e import이벤트객체
        * @return {void}
        */
        this.gfn_import_excel_onsuccess = function(obj,  e)
        {
        	this.setWaitCursor(false);
        	Ex.core.showMsg("엑셀 업로드 성공");

        	trace("------------------성공함-----------------");
        	trace(e.eventid);
        	trace(e.fromobject);
        	trace(e.fromreferenceobject);
        	trace(e.url);
        	trace("------------------------------------------");

        	//결과 데이타셋 받기
        	var objReturnDs = this.objects[obj.userdatasetname];

        	//특수문자 처리
        	var sXml = objReturnDs.saveXML();
        	/*
        	sXml = sXml.replace(/"></g,'">');
        	objReturnDs.loadXML(sXml);
        	*/
        	var regExpr = /\&(lt|gt|nbsp|amp|quot)\;/;//특수문자 &lt;&gt;&nbsp;&amp;&quot;
        	if (regExpr.test(sXml))
        	{
        		objReturnDs.loadXML(sXml);
        	}

        	//시트명 없이 첫번째 시트를 가져오는 import 로직에서는 사용자 지정 body 처리
        	var sBody = obj.userbody;
        	if( sBody && !Eco.isEmpty(sBody) )
        	{
        		var nStartRow = parseInt(sBody.replace("A", ""), 10);
        		if(!Eco.isEmpty(nStartRow))
        		{
        			for(var i=(nStartRow-2); i >= 0; i=i-1){
        				objReturnDs.filterRow(i);
        			}
        		}
        	}

        	//import 대상 컬럼이 다를 때 처리 방법(예:excel 컬럼명이 한글일 경우)
        	var sName = obj._responseLVal.toString().substr(10);
        	var objDs = this.objects[sName];
        	objDs.clearData();
        	objDs.appendData( objReturnDs, false, false );


        	//excel import 성공 시 화면 후 처리 함수 호출
        	var sCallback = obj.usercallbackfunc;
        	var func = this[sCallback];
        	if(func && Eco.isFunction(func))
        	{
        		func.call(this, obj, e);
        	}
        }

        /**
        * import onerror Event
        * @param {ExcelImportObject} obj import객체
        * @param {ExcelImportErrorEventInfo} e import이벤트에러객체
        * @return {void}
        */
        this.gfn_import_excel_onerror = function(obj,  e)
        {

        	this.setWaitCursor(false);
        	Ex.core.showMsg("엑셀 업로드 실패");

        	trace("------------- 에러발생 --------------------");
        	trace(e.eventid);
        	trace(e.fromobject);
        	trace(e.fromreferenceobject);
        	trace(e.errorcode);
        	trace(e.errormsg);
        	trace("------------------------------------------");

        	//excel import 실패 시 화면 후 처리 함수 호출
        	var sCallback = obj.usercallbackerrfunc;
        	var func = this[sCallback];
        	if(func && Eco.isFunction(func))
        	{
        		func.call(this, obj, e);
        	}
        }

        /**
         * 그리드 헤더에 All 클릭시 체크/해제
         * @param {Grid} obj Grid Object
         * @param {GridClickEventInfo} e 그리드클릭이벤트객체
         * @param {string} sColChk - Dataset check column id
         * @param {string} truevalue - true value
         * @param {string} falsevalue - false value
         * @return {void}
         */
        this.gfn_setGridCheckAll = function (obj, e, sColChk, truevalue, falsevalue)
        {

        	if (e.col == obj.getBindCellIndex("body",sColChk)) {

        		var dsObj = obj.getBindDataset();

        		if(Eco.isEmpty(truevalue)) truevalue = 1;
        		if(Eco.isEmpty(falsevalue)) falsevalue = 0;
        		var sColid;
        		if(Eco.isEmpty(sColChk)){
        			sColid = obj.getCellProperty("body", e.cell, "text").split("bind:").join("");
        		}else{
        			sColid = sColChk;
        		}

        		obj.isGridCheckAll = (obj.isGridCheckAll ? 0 : 1);
        		dsObj.set_enableevent(false);

        		for (var i = 0; i < dsObj.getRowCount(); i++) {
        			dsObj.setColumn(i, sColid, (obj.isGridCheckAll?truevalue:falsevalue));

        			if(sColChk=="isChecked" && obj.isGridCheckAll==0 && dsObj.getColumnInfo("tmHeader") && (dsObj.getColumn(i,"tmHeader") =="D" || dsObj.getColumn(i,"tmHeader") =="U") ){
        				dsObj.set_updatecontrol(false);
        				dsObj.setColumn(i,"tmHeader",'') ;
        				dsObj.setRowType(i,Dataset.ROWTYPE_NORMAL);
        				dsObj.set_updatecontrol(true);
        			}
        		}
        		obj.setCellProperty("Head", e.cell, "expr", obj.isGridCheckAll);
        		dsObj.set_enableevent(true);
        	}
        }

        /**
        * 그리드 헤더에 데이터조회 할때 checkbox set 해제또는 설정
        * @param {Grid} obj Grid Object
        * @param {string} sColChk - Dataset check column id ( ex. 0, 1 .. )
        * @param {string} bValue - 설정할 상태 true/false 미입력시 false
        * @return N/A
        */
        this.gfn_gridHeadCheckInit = function (obj, sColChk, bValue)
        {
        	var bVal = 0;

        	if(!Eco.isEmpty(bValue)){
        		bVal = bValue;
        	}else{
        	}

        	obj.isGridCheckAll = bVal;
        	obj.setCellProperty("Head", sColChk, "expr", bVal);
        }

        /**
         * 그리드의 특정컬럼을 지정하면 해당 컬럼의 체크된 내역이 존재하는 지 여부를 반환
         * @param {dataset} obj -	dataId
         * @param {string} sColChk - Dataset check column id ( ex. "isChecked" )
         * @param {string} bChecked - 확인할 상태. 체크가 된 것을 찾을 때는 1, 해제는 0, 미지정시는 1
         * @return {boolean} bChecked 에 설정된 값이 하나라도 있으면 true, 없으면 false.
         * @example
         * 사용예시
         *   if( this.gfn_isGridChecked(this.ds_grid, "isChecked")==false ){
         *		Ex.core.showMsg("삭제할 항목을 선택해주세요.");
         *		return;
         *	}
         */
        this.gfn_isGridChecked = function( dsId, sColChk, bChecked ){

        //	var grdBindDataset = obj.getBindDataset();
        	if(Eco.isEmpty(bChecked)){
        		bChecked = 1;
        	}
        	for( var i=0; i<dsId.rowcount ; i++ ){
        		var colValue =dsId.getColumn(i,sColChk);
        		if(Eco.isEmpty(colValue)){
        			colValue = 0;
        		}
        		if( colValue == bChecked ){
        			return true;
        		}
        	}

        	return false;
        }


        /**
         * 행추가후에 rowposition 행의 첫번째 편집 가능한 행으로 이동.
         * @param {Grid} obj -	Grid Object
         * @param {number} row - 그리드row index
         * @param {number} col - 그리드cell index
         * @return {void}
         * @example
         */
        this.gfn_grd_CellFocus = function(obj, row, col ){

        	if(Eco.isEmpty(col)){
        		for(var i=0 ;i<obj.getCellCount("Body") ; i++){
        			var sEditType = obj.getCellProperty("Body", i, "edittype");

        			if ( !Eco.isEmpty(sEditType) && sEditType != "none" && sEditType != "checkbox")
        			{
        				col=i;
        				break;
        			}
        		}
        	}
        	if(Eco.isEmpty(row)){
        		row = obj.binddataset.rowposition;
        	}

        	obj.getBindDataset().set_rowposition(row);
        	obj.setCellPos(col);
        	obj.showEditor(true);
        }

        /**
        * 데이타셋 표현값 변경시 발생 이벤트(체크,상태 표시해주는 부분) 초기값에서 설정
        * @param obj 데이타셋 object
        * @param e 에러 object
        * @return N/A
        * @example
        * @memberOf
        */
        this.gfn_datasetOnvaluecharged = function(obj,  e)
        {

        	if(obj.getColumnInfo("isChecked") && !obj.getColumnInfo("tmHeader")) {
        		this.gfn_datasetAddColumn(obj, "tmHeader", "STRING", 1);
        	}

        	//상태값 표시 처리 - 'U' 업데이트, 'I' 인서트
        	if(obj.getRowType(e.row) == Dataset.ROWTYPE_INSERT){
        		obj.setColumn(e.row, "tmHeader", "I");	//상태값
        	//	obj.setColumn(e.row, "isChecked", "1");			//체크박스		//신규추가시 체크박스 체크 필요시 해제
        		return;
        	}
        	if(e.row >-1 && e.col > -1)//컬럼 수정이 된 경우
        	{
        		var orgColValue;
        		var sRowType = obj.getColumn(e.row,"tmHeader");	//상태값
        		var sRowChk = "";	//체크박스
        		var newValue;
        		var colId;
        		if(e.columnid != "isChecked" && e.columnid != "tmHeader")//체크, 상태 컬럼 제외
        		{
        			for(var colidx=0; colidx < obj.colcount; colidx=colidx+1){
        				orgColValue = obj.getOrgColumn(e.row, colidx);
        				newValue = obj.getColumn(e.row, colidx);
        				colId = obj.getColID(colidx);
        				if(colId != "isChecked" && colId != "tmHeader")//체크, 상태 컬럼 제외
        				{
        					if(!Eco.equals(newValue, orgColValue) && sRowType!="I"){
        						sRowType = "U";//Dataset.ROWTYPE_UPDATE;
        						sRowChk = "1";
        					}
        				}
        			}
        		//	obj.setColumn(e.row, "isChecked", sRowChk);		//변경시 체크박스 체크 필요시 해제
        			obj.setColumn(e.row, "tmHeader", sRowType);
        		}
        	}
        }


        /**
        * 데이타셋 컬럼 추가함수
        * @param objDs 데이타셋 object
        * @param colName 컬럼명
        * @param colType 컬럼타입
        * @param colSize 컬럼사이즈
        * @return N/A
        * @example
        * @memberOf
        */
        this.gfn_datasetAddColumn = function(objDs, colName, colType, colSize)
        {
        	if(Eco.isEmpty(colName)) return;
        	if(Eco.isEmpty(colType)) colType = "STRING";
        	if(Eco.isEmpty(colSize)) colSize = 256;

        	if(!objDs.getColumnInfo(colName))
        	{
        		objDs.set_enableevent(false);
        		objDs.addColumn(colName, colType, colSize);
        		objDs.set_enableevent(true);
        	}
        }


        /**
         * 컬럼 선택창 호출[그리드선택 엑셀다운]
         * @param {xComp} obj PopupDiv를 보여줄 좌표계의 기준이 되는 Component
         * @param {grid} objGrd 엑셀 그리드
         * @return {void}
         */
        this.gfn_getComSelectCol = function (obj, objGrd)
        {
        	var objPdiv;
         	if ( !this.isValidObject("xpdiv_comSelectCol") ){
        		objPdiv = new PopupDiv();
        		objPdiv.init("xpdiv_comSelectCol", "absolute", 0, 0, 155, 220, null, null);
        		this.addChild(objPdiv.name, objPdiv);
        		objPdiv.set_url("common::comSelectCol.xfdl");
        		objPdiv.show();
         	}else{
        		objPdiv = this["xpdiv_comSelectCol"];
        		objPdiv.fn_init();//그리드 초기화.
         	}

        	//그리드명 저장
        	objPdiv.snuusergridpathname =  Eco.XComp.getPathName(objGrd, this);
        	objPdiv.trackPopupByComponent(obj, 0, 0,null,null, "gfn_popupDivCallback");

        }

        /**
         * 팝업디비젼 콜백 함수[그리드선택 엑셀다운]
         * @param {string} popupId 팝업ID
         * @param {object} val 그리드메뉴 callback
         * @return {void}
         */
        this.gfn_popupDivCallback = function(popupId, retVal)
        {
        	//trace("popupId : "+popupId + ", retVal : "+ retVal);

        	if(popupId == "xpdiv_comSelectCol" ){
        		if( !Eco.isEmpty(retVal) ){
        			//대상 그리드 가져오기
        			var sCompName = this["xpdiv_comSelectCol"].snuusergridpathname;
        			var objGrd = Eco.XComp.getCompByPathName(sCompName, this);
        			this.gfn_exportExcelBySelectCol( objGrd, retVal );
        		}
        	}
        }

        /**
         * 공통코드 멀티선택 팝업
         * @param {objGrd} objGrd 그리드
         * @param {obj} obj PopupDiv를 보여줄 좌표계의 기준이 되는 Component
         * @param {edit} 멀티선택된 내역 표현 Edit
         * @example : this.gfn_getComStdMulti(this, grid, obj, edit);
         * @example : this.gfn_getComStdMulti(this, grid, obj);
         * @return {void}
         */
        this.gfn_getComStdMulti = function (objForm, objGrd, obj, objEdit)
        {
        	this.popComSelGrd = objGrd.id;
        	this.popComSelEdit = objEdit;

         	if (!objForm.isValidObject("pdiv_comStdMulti")){
        		var objPdiv = new PopupDiv();
        		objPdiv.init("pdiv_comStdMulti", 0, 0, 275, 350);
        		objForm.addChild(objPdiv.name, objPdiv);
        		objPdiv.set_url("com.base::comStdMulti.xfdl");
        		objPdiv.show();
         	}else{
        		objForm.pdiv_comStdMulti.form.fn_init();//그리드 초기화.
         	}

        	//그리드명 저장
        	var pos = Eco.XComp.PositionSize.getPopupPosition(obj, 275,350, "vert", 2);
        	objForm.pdiv_comStdMulti.trackPopup(pos[1], pos[2], null, null, "");
        }

        /**
         * 엑셀 export -선택한 cell 다운로드[그리드선택 엑셀다운]
         * @param {grid} objGrd export 그리드
         * @param {array} arrColList 사용자 선택 리스트
         * @return {void}
         * @example
         * @memberOf
         */
        this.gfn_exportExcelBySelectCol = function(objGrd, arrColList)
        {
        	//동적 그리드 생성
        	var objExportGrid = this.gfn_generateExportGrid(objGrd);

        	if(arrColList instanceof Array && arrColList.length > 0){
        		objExportGrid.set_enableevent(false);
        		for(var i=0; i < arrColList.length; i=i+1){
        			objExportGrid.deleteContentsCol(arrColList[i]);
        		}
        		objExportGrid.set_enableevent(true);
        	}

        	//export 컬럼이 없으면 리턴 처리
        	if(objExportGrid.getCellCount("Head") < 1){
        		trace("getCellCount : " + objExportGrid.getCellCount("Head"));
        		return alert("컬럼을 선택하지 않았습니다.");
        	}

        	//엑셀 export
        	this.gfn_exportExcel(objExportGrid, "exportfilename");
        }


        /**
         * 엑셀용 그리드 생성[그리드선택 엑셀다운]
         * @param {grid} objTargetGrd 포멧을 가져올 그리드
         * @return {grid} objGrid 동적 생성 그리드 콤포넌트
         * @example
         * @memberOf
         */
        this.gfn_generateExportGrid = function(objTargetGrd)
        {
        	var objGrid = this["xfv_compExportGrd"];
        	if(objGrid)
        	{
        		//데이타셋 바인드
        		objGrid.set_binddataset(objTargetGrd.binddataset);

        		var sFormat = objTargetGrd.getCurFormatString();

        		objGrid.set_formats(sFormat);
        	}
        	else
        	{
        		objGrid = new Grid();
        		objGrid.init("xfv_compExportGrd", "absolute", 0, 0, 0, 0, null, null);

        		this.addChild("xfv_compExportGrd", objGrid);

        		objGrid.set_visible(false);

        		//데이타셋 바인드
        		objGrid.set_binddataset(objTargetGrd.binddataset);

        		var sFormat = objTargetGrd.getCurFormatString();

        		objGrid.set_formats(sFormat);

        		// Show Object
        		objGrid.show();
        	}

        	return objGrid;
        }

        /**
         * 그리드 건수 표시
         * @param {grid} 행추가할 그리드
         * @return {grid} 행추가
         * @example
         * @memberOf
         */
        this.gfn_rowCount = function (dsId,oComponent)
        {
        	//데이터셋의 현재 행의 카운터를 구함
        	var strRowCount = '(총 ' + this.gfn_setAddComma(dsId.rowcount) + '건)';
        	if(sLang=="ENG"){
        		strRowCount = '(Total : ' + this.gfn_setAddComma(dsId.rowcount) + ')';
        	}
        	oComponent.set_text(strRowCount);
        }

        //세자리컴마
        this.gfn_setAddComma = function (cost)
        {
        	var minus;

        	if (cost < 0){
        		cost *= -1;
        		minus = true;
        	}else minus = false;

        		var dotPos = (cost + "").split (".");
        		var dotU = dotPos [0];
        		var dotD = dotPos [1];
        		var CommaFlag = dotU.length % 3;

        		if(CommaFlag){
        			var out = dotU.substring (0, CommaFlag);

        			if(dotU.length > 3) out += ",";
        		}else var out = "";

        		for(var i = CommaFlag; i < dotU.length; i += 3){
        			out += dotU.substring (i, i + 3);

        			if(i < dotU.length - 3) out += ",";
        		}

        	if(minus) out = "-" + out;

        		if(dotD) return out + "." + dotD;
        		else return out;
        }

        /**
         * 그리드 행추가
         * @param {datasetid} 행추가할 dataset id, chk
         * @return {grid} 행추가
         * @example
         * @memberOf
         */
        this.gfn_insertRow = function(dsId,chk,type)
        {
        	if(Eco.isEmpty(chk)){
        		if(Eco.isEmpty(type)){
        			dsId.insertRow(dsId.rowposition+1);
        		}else if(type.toLowerCase()=="last"){
        			dsId.insertRow(dsId.rowcount+1);
        		}else if(type.toLowerCase()=="first"){
        			dsId.insertRow(0);
        		}
        	}else{
        		if(chk=="Y"){
        			var cnt=0;
        			for( var i=dsId.rowcount-1; i>=0 ; i-- ){
        				if( dsId.getColumn(i,"tmHeader") == 'I' ){
        					cnt++;
        				}
        			}

        			if(cnt==0){
        				if(Eco.isEmpty(type)){
        					dsId.insertRow(dsId.rowposition+1);
        				}else if(type=="last"){
        					dsId.insertRow(dsId.rowcount+1);
        				}else if(type=="first"){
        					dsId.insertRow(0);
        				}
        			}else {
        				this.gfn_showMsg("COM_CHK_0014","","");
        			}
        		}
        	}
        }

        /**
         * 그리드 행삭제
         * @param {datasetid} 행삭제할 dataset id
         * @return {grid} 행삭제
         * @example
         * @memberOf
         */
        this.gfn_deleteRow = function(dsId)
        {

        	if( this.gfn_isGridChecked(dsId, "isChecked")==false ){
        		//Ex.core.showMsg("COM_CHK_0017");//삭제할 행을 선택해 주십시오.
        		Ex.core.showMsg("삭제할 행을 선택해 주십시오.");
        		return false;
        	}

        	for( var i=dsId.rowcount-1; i>=0 ; i-- ){
        		//tmHeader가 없는 경우에는 바로 행삭제처리
        		if(dsId.getColumnInfo("isChecked") && dsId.getColumnInfo("tmHeader")) {
        			if( dsId.getColumn(i,"isChecked") == 1 ){
        				if( dsId.getColumn(i,"tmHeader") == 'I' ){
        					dsId.set_updatecontrol(false);
        					dsId.setColumn(i,"tmHeader",'') ;
        					dsId.set_updatecontrol(true);
        					dsId.deleteRow(i);
        				}else{
        					dsId.set_updatecontrol(false);
        					dsId.setColumn(i,"tmHeader",'D') ;
        					dsId.setRowType(i,Dataset.ROWTYPE_DELETE);
        					dsId.set_updatecontrol(true);
        				}
        			}
        		}else{
        			dsId.deleteRow(i);
        		}
        	}
        }

        this.gfn_deleteRow2 = function(dsId,nRow){
        	// tmHeader가 없는 경우에는 바로 행삭제처리
        	if( dsId.getColumnInfo("tmHeader") )
        	{
        		dsId.set_updatecontrol(false);
        		var tmHeader = dsId.getColumn(nRow,"tmHeader");

        		if( tmHeader == "I" )
        		{
        			dsId.setColumn(nRow,"tmHeader","");
        			dsId.deleteRow(nRow);
        		}
        		else if( tmHeader == "U" && dsId.getColumnInfo("tmHeaderOrg") )
        		{
        			dsId.setColumn(nRow,"tmHeaderOrg","U");
        			dsId.setColumn(nRow,"tmHeader","D");
        			dsId.setRowType(nRow,Dataset.ROWTYPE_DELETE);
        		}
        		else if( tmHeader == "D" )
        		{
        			var tmHeaderOrg = dsId.getColumn(nRow,"tmHeaderOrg");
        			if( tmHeaderOrg == "U" )
        			{
        				dsId.setColumn(nRow,"tmHeader","U");
        				dsId.setRowType(nRow,Dataset.ROWTYPE_UPDATE);
        			}else{
        				dsId.setColumn(nRow,"tmHeader","");
        				dsId.setRowType(nRow,Dataset.ROWTYPE_NORMAL);
        			}
        		}else{
        			dsId.setColumn(nRow,"tmHeader","D");
        			dsId.setRowType(nRow,Dataset.ROWTYPE_DELETE);
        		}
        		dsId.set_updatecontrol(true);
        	}else{
        		dsId.deleteRow(nRow);
        	}
        }

        /**
         * 그리드 컬럼정보가져오기
         * @param {String} 현재row
         * @param {Dataset} 정보추가할  dataset id
         * @param {String} 컬럼명
         * @return {String} 컬럼value
         * @example :  this.gfn_getColumn(dsId,colum), this.gfn_getColumn(row, dsId, column)
         * @memberOf
         */
        this.gfn_getColumn = function(row, dsId, column)
        {
        	if (dsId instanceof Dataset) {
        		return dsId.getColumn(row,column);
        	}else{
        		return row.getColumn(row.rowposition,dsId);
        	}
        }

        /**
         * 그리드 컬럼정보넣기
         * @param {String} 현재row
          * @param {Dataset} 정보추가할  dataset id
         * @param {String} 컬럼명
         * @param {String} 컬럼값
         * @example : this.gfn_setColumn(dsId,colum,value), this.gfn_getColumn(row, dsId, column, value)
         * @memberOf
         */
        this.gfn_setColumn = function(row, dsId, column, value)
        {
        	if (dsId instanceof Dataset) {
        		dsId.setColumn(row, column, value);
        	} else {
        		row.setColumn(row.rowposition, dsId, column);
        	}
        }

        /**
         * 그리드 index값
         * @param {grid} grid id
         * @return {int} index
         * @example
         * @memberOf
         */
        this.gfn_getCellIndex = function(gridId,column)
        {
        	return gridId.getBindCellIndex("body", column);
        }

        /**
         * 그리드 checkbox 클릭시
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.gfn_checkBox = function(obj,e)
        {
        	if(e.columnid == "isChecked"){
        		if( this.gfn_getColumn(obj.rowposition,obj,"tmHeader") == 'D' ||
        			this.gfn_getColumn(obj.rowposition,obj,"tmHeader") == 'U'){
        			obj.setColumn(obj.rowposition,"tmHeader",'') ;
        			obj.setColumn(obj.rowposition,"isChecked",0) ;

        			obj.set_updatecontrol(false);
        			obj.setRowType(obj.rowposition,Dataset.ROWTYPE_NORMAL);
        			obj.set_updatecontrol(true);
        		}
        	}
        }

        /**
         * 그리드 중복체크
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.gfn_gridChkValue = function(dsId,column,value)
        {
        	for( var i=dsId.rowcount-1; i>=0 ; i-- ){
        		if(dsId.getColumn(i,column)==value) {
        			return false;
        		}
        	}

        	return true;
        }

        /**********************************************form***********************************/

        /**
        *영문화
        *
        */
        /************************************************************************************************************/
        this.gfn_setLangText = function (obj, sLang, sMode) {
        	var arrContents = obj.components;
        	var sName = "";
        	var sDivName = "";
        	var objDiv="";
        	var rtext="";

        	for (var i = 0; i < arrContents.length; i++){
        		if (arrContents[i] instanceof nexacro.Static || arrContents[i] instanceof nexacro.Button || arrContents[i] instanceof nexacro.CheckBox) {

        			sName = this.gfn_getCmpntPath(arrContents[i]);
        			rtext = this.gfn_getLangText(sName, sLang);

        			if(rtext!=""){
        				eval("this."+sName).set_text(rtext);
        			}

        		} else if (arrContents[i] instanceof nexacro.Div){
        			this.gfn_setLangText(arrContents[i].form, sLang, "D");
        		} else if (arrContents[i] instanceof nexacro.Tab){
        			var tabpageList = arrContents[i].tabpages;

        			for (var j = 0; j < tabpageList.length; j++){
        				rtext=this.gfn_getLangText(arrContents[i].id+"."+tabpageList[j].id, sLang);

        				if(rtext!=""){
        					tabpageList[j].set_text(rtext);
        				}

        				this.gfn_setLangText(tabpageList[j], sLang, "T");
        			}
        		}
        	}
        }

        this.gfn_getLangText = function (sName, lang) {

        	var nRow =application.gds_lang.findRowExpr(" PGM_ID=='"+this.pgmId+"'  && ITEM_ID=='"+sName+"'");
        	if(nRow < 0){
        		nRow =application.gds_lang.findRowExpr(" PGM_ID=='COM'  && ITEM_ID=='"+sName+"'");
        	}

        	if (nRow < 0){
        		return "";
        	}

        	rtnVal = application.gds_lang.getColumn(nRow, lang);
            return rtnVal;
        }

        this.gfn_setLangGridText = function (obj, sCaption)
        {
        	if(!this.gfn_isEmpty(sCaption)){
        		var aGridCapCol = sCaption.split(",");
        		for(var colIdx=0; colIdx < aGridCapCol.length; colIdx++){
        			if(aGridCapCol[colIdx] != ""){
        				obj.setCellProperty("Head", colIdx, "text", aGridCapCol[colIdx]);
        			}
        		}
        	}

        }

        /**
        * component 경로 조회
        */
        this.gfn_getCmpntPath = function(obj){
        	var rtnText = obj.id;
        	var oCmpnt = obj;

        	while (oCmpnt.parent != null) {
              if(!Eco.isEmpty(oCmpnt.parent) && oCmpnt.parent.id != this.id){
                 rtnText = oCmpnt.parent.id+"."+rtnText;
                 oCmpnt = oCmpnt.parent;
              } else {
                 break;
              }
           }

        	return rtnText;
        }

        /************************************************************************************************/
        /**
        * Null 체크
        * @param {obj} form
        * @return
        * @example
        * @memberOf private
        */
        this.gfn_isNull = function(sValue)
        {
        	if (String(sValue).valueOf() == "undefined"){
        		return true;
        	}
        	if (sValue == null){
        		return true;
        	}
        	if (("x"+sValue == "xNaN") && (new String(sValue.length).valueOf() == "undefined")){
        		return true;
        	}
        	if (sValue.length == 0){
        		return true;
        	}
        	return false;
        }

        /**
        * 이 함수가 먼저 수행되고 사용자지정 Callback함수가 수행된다
        * @param {string} sSvcId
        * @param {string} 에러코드
        * @param {string} 에러 메시지
        * @return N/A
        * @example
        * @memberOf comLib
        */
        this._gfn_callback = function(o, nErrorCode, sErrorMsg)
        {
        	this.error = false;
        	if (nErrorCode < 0 ){

        		if(sErrorMsg=="ERR1024"){
        			if(this.errCd!="ERR1024"){
        				this.errCd="ERR1024";
        				Ex.core.showMsg("세션이 만료 되었습니다. 재로그인해주세요.");
        				this.gfn_setBtnAllCtrl(this,false);

        				if (system.navigatorname != "nexacro" && window) {
        					if(window.opener!=null){
        						window.close();
        					}else{
        						window.parent.location.replace(this.domainNm+"/logout.do");
        					}
        				}
        			}
        			this.error = true;
        		}else if(sErrorMsg=="ERR1025"){
        			Ex.core.showMsg(this.result);
        			this.gfn_setBtnAllCtrl(this,false);
        			if (system.navigatorname != "nexacro" && window) {
        				if(window.opener!=null){
        					window.close();
        				}else{
        					window.parent.location.replace(this.domainNm+"/logout.do");
        				}
        			}
        			this.error = true;
        		} else if (sErrorMsg.indexOf("Exception")>0){
        			if(this.gfn_getSession("SESS_ADMIN_YN")=="Y"){
        				Ex.core.showMsg(sErrorMsg);
        			}else{
        				Ex.core.showMsg("ERR1030");
        			}
        		} else {
        			if(this.errCd!="ERR1024"){
        				Ex.core.showMsg(sErrorMsg);
        			}
        		}
        		return;
        	} else {
        		if(!Eco.isEmpty(this.ds_file)){
        			this.ds_file.clearData();
        		}
        	}

        	if(o.id=="setPgmRight"){

        		var btRights = this.result.split(',');

        		if(btRights!=""){
        /*
        			if(btRights[12]=="null" && this.e.url.indexOf("/frame")<0 && this.e.url.indexOf("/com/popup")<0
        				&& this.e.url.indexOf("/com/base")<0 && this.e.url.indexOf("/sam")<0 ){
        				this.error = true;
        				this.gfn_setCompAllCtrl(this,false);
        				var errDiv = new Div("ErrDiv", 10, 0, "100%", "100%");
        				this.addChild("Div", errDiv);
        				errDiv.show();
        				errDiv.set_background("ffffff");

        				alert("권한이 없습니다.");
        				return;
        			}
        	*/
        			// 해당 폼의 Control을 배열에 할당한다.
        			var arrContents = this.components;
        			for (var i = 0; i < arrContents.length; i++) {
        				if (arrContents[i] instanceof Button) {
        					if(arrContents[i].id=="btn_search" || arrContents[i].id=="bt_search"){
        						//arrContents[i].set_enable(btRights[0]);
        					}else if(arrContents[i].id=="btn_registration" || arrContents[i].id=="bt_registration"){
        						arrContents[i].set_enable(btRights[1]);
        					}else if(arrContents[i].id=="btn_save" || arrContents[i].id=="bt_save"){
        						arrContents[i].set_enable(btRights[1]);
        					}else if(arrContents[i].id=="btn_modify" || arrContents[i].id=="bt_modify"){
        						arrContents[i].set_enable(btRights[2]);
        					}else if(arrContents[i].id=="btn_delete" || arrContents[i].id=="bt_delete"){
        						arrContents[i].set_enable(btRights[3]);
        					}else if(arrContents[i].id=="btn_print" || arrContents[i].id=="bt_print"){
        						arrContents[i].set_enable(btRights[4]);
        					}else if(arrContents[i].id=="btn_exel_dn" || arrContents[i].id=="bt_exel"){
        						arrContents[i].set_enable(btRights[5]);
        					}else if(arrContents[i].id=="btn_help"){
        						arrContents[i].set_visible(true);
        					}
        				}
        			}

        			if(!Eco.isEmpty(btRights[13]) && btRights[13]!="null" ){
        				this.pgmNm=btRights[13];
        			}

        			if(!Eco.isEmpty(btRights[20]) && btRights[20]!="null" ){
        				this.helpPgmId=btRights[20];
        			}

        			this.helpYn=btRights[22];

        			if(this.helpYn=="null"){
        				this.helpYn="Y";
        			}
        		}
        		var nRow =application.gds_lang.findRowExpr("PGM_ID=='"+this.pgmId+"'");
        		if(nRow<0){
        			application.gds_lang.appendData(application.gds_lang_temp,true,true);
        		}
        	}

        	nexacro.getEnvironment().set_usewaitcursor(false,true); //커서 비활성화.

        	var sSvcId = o.id;
        	var sCallBackId = o.callbackFunc;
        	this[sCallBackId](sSvcId,nErrorCode,sErrorMsg);

        }

        /**
        * transaction
        * 공통 트랜잭션 함수
        * @param {obj} oForm form
        * @param {string} svcID serviceID
        * @param {string} sController Transaction 요청 경로
        * @param {string} inDatasets inputdataset 명   = 로 구분 (=이 없는 경우는 같은 명칭으로 인식)
        * @param {string} outDatasets outDatasets 명   = 로 구분 (=이 없는 경우는 같은 명칭으로 인식)
        * @param {string} argument argument 명   Dataset 외의 Transaction을 위한 인자값 a=b의 형태로 입력하고, 빈칸으로 구분
        * @param {string} callbackFunc callbackFunc 명
        * @param {booolen} showProgress ProgressBar 표시여부(default:true)
        * @param {booolen} bAsync 비동기 여부를 지정합니다.(Default : true)
        * @param {nDataType} nDataType Binary 형태로 전송할 지 여부를 지정합니다.(Default : false)
        * @return N/A
        */
        this.gfn_tran = function (oForm, svcID, sController, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, nDataType)
        {
        	if(this.error != true ){
        		Ex.core.tran(oForm, svcID, sController, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, 2);
        	}
        }

        /**
        * gfn_progress
        * progress bar호출
        * @param {boolen} true/false
        */
        this.gfn_progress = function (show)
        {
        	if (Eco.isEmpty(show)){
        		show = true;
        	}
        	this.setWaitCursor( show, true );
        	this.setTimer(1,2000);
        }

        /**
        * 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
        * @param {string}  sMsgId message id
        * @param {array}   arrParam msgArr[](메세지값으로 치환될 Parameter Array)
        * @param {string}  sType meesage type
        * @return {object} 팝업에 해당 메세지값을 표현
        * @example
        * this.gfn_showMsg("001",["1","건"],"alert");
        */
        this.gfn_showMsg = function (sMsgId,arrParam,sType)
        {
        	if(!Ex.core.showMsg(sMsgId,arrParam,sType,this.pgmId, sLang)){
        		return false;
        	}else{
        		return true;
        	}
        }

        /**
        * dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
        * @param {object} objDs DataSet
        * @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
        * @example
        */
        this.gfn_isUpdated = function (objDs)
        {
        	if(!Ex.util.isUpdated(objDs)){
        		return false;
        	}else{
        		return true;
        	}
        }

        /**
         * validaition 메인 호출 공통 함수
         * @param {object} oForm form
         * @return {boolen} true false
         * @example
         */
        this.gfn_validateComps = function (oForm)
        {
        	if(Ex.vali.validateComps(oForm)==false){
        		return false;
        	}else{
        		return true;
        	}
        }

        /**
         * value의 빈값 여부 반환.<br>
         * 1. null, undefined type : true 반환<br>
         * 2. string, array type : length 가 0인 경우 true 반환<br>
         * 3. object type : 하위 속성이 존재할 경우 true 반환<br>
         * 4. boolean, number, date type : false 반환
         * @param {*} value 확인할 value.
         * @return {boolean} empty 여부.
         * @example
         */
        this.gfn_isEmpty = function (value)
        {
        	if(Eco.isEmpty(value)==false){
        		return false;
        	}else{
        		return true;
        	}
        }

        /**
        * 콤보용 공통코드 가져오기
        * @param {obj} dataset
        * @return
        * @example
        * @memberOf private
        */
        this.gfn_getCommCodeList = function (obj,svcId)
        {
        	var sInDatasets ="";
        	var sOutDatasets  	= "";
        	var arrObj = obj.split(",");
        	var sSvcId="getCodeList";
        	var codes = "";
        	this.codeSet="";
        	this.codeRslt="";

        	for(var i=0;i<arrObj.length;i++){
        		codes = arrObj[i].split(":");
        		sOutDatasets += "ds_code"+codes[0].replace(/ /gi, "").replace("-","") + "=" + "ds_code"+codes[0].replace(/ /gi, "").replace("-","") + " ";
        	}

        	var sArgument = "code="+obj.replace(/ /gi, "");
        	if(Eco.isEmpty(svcId)==false){
        		sSvcId = svcId;
        	}
        	this.gfn_tran(this,sSvcId,"/common/code/getComCodeList.do", sInDatasets, sOutDatasets, sArgument, "gfn_getCommCodeCallBack","",false);
        }
        this.gfn_getCommCodeCallBack = function (sSvcId)
        {
        	var arrObj = this.codeRslt.split(":");
        	var arrCode = this.codeSet.split(",");
        	var codes = "";
        	var obj="";
        	/*
        	for(var i=0;i<arrObj.length;i++){
        		if(arrObj[i]!=""){
        			eval("this."+arrObj[i]).set_index(0);
        		}
        	}

        	for(var i=0;i<arrCode.length;i++){
        		if(arrCode[i]!=""){
        			obj = eval("this."+arrCode[i]);
        		//	obj.setColumn("0","COMM_CD","");
        		}
        	}
        	*/

        	this.fn_callBack(sSvcId);
        }


        /**
        * 팝업창 오픈하기
        * @param {obj} sPopupId
        * @param {string} sUrl
        * @param {string} oArg
        * @param {string} sOption
        * @param {string} sPopupCallback
        * @return
        * @example
        * @memberOf private
        */
        this.gfn_openPopup = function (sPopupId, sUrl, oArg, sOption, sPopupCallback) {

        	this._rtnModal = null;
           	var objParentFrame = this.getOwnerFrame();
        	var sOpenalign = "";

        	var bModeless = false;
        	var bAutoSize = true;
        	var nTop = -1;
        	var nLeft = -1;
        	var nWidth = 0;
        	var nHeight = 0;
        	var bShowTitle = true;
        	var sTitleText = "";
        	var bShowStatus = false;
        	var bResizable = true;

        	var sPopupCallback = (Eco.isEmpty(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;

        	//Open Sytle 처리
        	var aVal = sOption.split(",");

        	for (var i = 0; i < aVal.length; i++) {

        		var aVal2 = aVal[i].trim().split("=");

        		switch (aVal2[0]) {
        			case "modeless"  : bModeless   = aVal2[1];           break;
        			case "autosize"  : bAutoSize   = aVal2[1];           break;
        			case "top"       : nTop        = parseInt(aVal2[1]); break;
        			case "left"      : nLeft       = parseInt(aVal2[1]); break;
        			case "width"     : nWidth      = parseInt(aVal2[1]); break;
        			case "height"    : nHeight     = parseInt(aVal2[1]); break;
        			case "title"     : bShowTitle  = aVal2[1];           break;
        			case "titletext" : sTitleText  = aVal2[1];           break;
        			case "status"    : bShowStatus = aVal2[1];           break;
        			case "resizable" : bResizable  = aVal2[1];           break;
        		}
        	}

        	//출력일경우
        	if(sPopupId.indexOf("report")>-1 || sPopupId.indexOf("help")>-1 || sPopupId.indexOf("gwCall")>-1 || sPopupId.indexOf("interApproval")>-1){
        		bModeless="true";
        	}
        	if(nWidth>0){
        		bAutoSize=false;
        	}else{
        		if(bAutoSize=="false"){
        			nWidth = application.mainframe.width-100;
        			nHeight = 790;
        		}
        	}

        	//Top & Left -1은 소유창의 가운데 위치
        	if (nLeft == -1 && nTop == -1) {
        		sOpenalign = "center middle";
        		nLeft      = (application.mainframe.width / 2) - Math.round(nWidth / 2);
        		nTop       = (application.mainframe.height / 2) - Math.round(nHeight / 2) ;
        	}
            //Form Open Type
            if (bModeless == "true") {
                var sOpenStyle= "showtitlebar=true showstatusbar=false resizable=true";
                nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,0,0, nWidth, nHeight,this);

            } else {
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
        		newChild.set_dragmovetype("all");
        		newChild.set_layered("true");
        		newChild.set_autosize(bAutoSize);
        		newChild.set_showtitlebar(bShowTitle);
        		newChild.set_titletext(sTitleText);
        		newChild.set_showstatusbar(bShowStatus);
        		newChild.set_resizable(bResizable);
        		newChild.set_openalign(sOpenalign);
        		newChild.set_background("#ffffff");
        		newChild.showModal(objParentFrame, oArg, this, sPopupCallback, true);

            }

        }

        /**
        * gfn_OpenPopup() 관련 내부 함수
        * @return
        * @example
        * @memberOf private
        */
        this._rtnModal=null;

        /**
        * gfn_OpenPopup() 관련 내부 함수 - 결과 반환을 위한
        * @param {Oject} Form
        * @return Object
        * @example
        * @memberOf private
        */
        this._setReturn = function(obj) {

        	this._rtnModal = null;

        	if (typeof(obj) == "string") {
        		this._rtnModal = obj;
        		return obj;
        	}

        	if (obj instanceof Array) {
        		this._rtnModal = new Array();
        	} else {
        		this._rtnModal = new Object();
        	}

        	for (var prop in obj) {
        		this._rtnModal[prop] = obj[prop];
        	}

        	return "_rtnModal";

        }

        /**
        * gfn_OpenPopup()으로 호출된 화면의 결과값 받아오는 함수
        * @return Object
        * @example
        * @memberOf private
        */
        this.gfn_getPopupRtn = function() {
            return this._rtnModal;
        }


        /**
        * 팝업창 close 처리
        * @param {variant} val 리턴값
        * @return N/A
        * @example
        */
        this.gfn_popupClose = function(val) {
            this.close(this.opener._setReturn(val));
        }

        /**
        * 팝업에서 받아올 데이터 컬럼을 세팅한다.
        */
        this.gfn_popupValueSet = function(dsId,column,popupCol,chkMode)
        {
        	if(this.popupObject == null) this.popupObject = new Object();
        	if(this.popupColNm == null) this.popupColNm = new Array();
        	if(this.popupDsId == null) this.popupDsId = new Array();

        	eval("this.popupObject."+column+" = \""+popupCol+"\"");
        	eval("this.popupObject."+column+"_CHK = \""+chkMode+"\"");

        	this.popupColNm[this.popupCnt] = column;
        	this.popupDsId[this.popupCnt] = dsId;

        	this.popupCnt++;

        	if(chkMode != "" && chkMode == "E"){
        		this.chkPopupValueColNm = popupCol;
        	}
        }

        /**
        * gfn_popupValueSet 을 통해 세팅된 컬럼의 데이터를 팝업으로 부터 받아온다.
        */
        this.gfn_comInfo = function (obj)
        {
        	for(var j = 0; j < this.popupColNm.length; j++){
        		if((""+eval("this.popupObject."+this.popupColNm[j]+"_CHK")).indexOf("D") > -1){
        			var col = eval("this.popupObject."+this.popupColNm[j]);	// "EMP_NO"
        			var chkData = eval("obj."+col);

        			// 현재Row는 중복체크 제외
        			var nDuplCnt = eval(this.popupDsId[j]).getCaseCount(this.popupColNm[j]+"=='"+chkData+"'");
        			var nDuplRow = eval(this.popupDsId[j]).findRow(this.popupColNm[j],chkData);
        			if(nDuplCnt > 1 || ( nDuplCnt == 1 && nDuplRow != eval(this.popupDsId[j]).rowposition) ){
        //			if(eval(this.popupDsId[j]+".findRow(\""+this.popupColNm[j]+"\", \""+chkData+"\")") > -1){

        				alert("중복된 데이터 입니다.");
        				this.gfn_clearPopValueSet();
        				return false;
        			}
        		}
        	}

        	//eval(this.popupDsId[0]).set_enableevent(false);

        	for(var i = 0; i < this.popupColNm.length; i++){

        		// enableevent 원래상태 유지
        		var dsObj = eval(this.popupDsId[i]);
        		var bEventStatus = dsObj.enableevent;
        		dsObj.set_enableevent(false);

        		var col = eval("this.popupObject."+this.popupColNm[i]);	// "EMP_NO"

        		eval(this.popupDsId[i]+".setColumn("+this.popupDsId[i]+".rowposition, \""+this.popupColNm[i]+"\", obj."+col+")");
        //alert(this.popupDsId[i]+".setColumn("+this.popupDsId[i]+".rowposition, \""+this.popupColNm[i]+"\", obj."+col+")");
        //alert(col+" : "+eval("obj."+col));

        		// tmHeader 관리
        		if(dsObj.getColumnInfo("tmHeader") && this.gfn_isEmpty(dsObj.getColumn(dsObj.rowposition,"tmHeader")) ){
        			dsObj.set_updatecontrol(false);
        			dsObj.setColumn(dsObj.rowposition,"tmHeader","U") ;
        			dsObj.setRowType(dsObj.rowposition,Dataset.ROWTYPE_UPDATE);
        			dsObj.set_updatecontrol(true);
        		}
        		dsObj.set_enableevent(bEventStatus);
        	}
        	//eval(this.popupDsId[0]).set_enableevent(true);

        	this.gfn_clearPopValueSet();
        }

        /*******************************************
        *	function Name : gfn_clearPopValueSet
        *	Description   : 키인 값 컬럼 설정값 초기화
        *******************************************/
        this.gfn_clearPopValueSet = function(){

        	this.popupObject = new Object();
        	this.popupColNm = new Array();
        	this.popupDsId = new Array();
        	this.popupCnt = 0;
        	this.chkPopupValueColNm = "";

        	this.popupfwdDs = "";

        //this.alert("done to clear2!!");
        }

        /**
        * gfn_popupValueSet 을 통해 세팅된 컬럼의 데이터를 팝업으로 부터 받아온다.(멀티)
        */
        this.gfn_comMultiInfo = function (arry, obj){
        	var sDupData = "";																			//	alert 에 띄워줄 중복데이터를 담을 변수 선언
        	var nDup = 0;


        	for(var i = 0; i < arry.length; i++){
        		nDup = 0;																					//	중복데이터에 한 체크를 위한 변수선언
        		for(var j = 0; j < this.popupColNm.length; j++){
        			if((""+eval("this.popupObject."+this.popupColNm[j]+"_CHK")).indexOf("D") > -1){				//	중복체크 필요 컬럼이 있는지 확인
        				var col = eval("this.popupObject."+this.popupColNm[j]);	// "EMP_NO"
        				var chkData = eval("arry[i]."+col);
        				if(eval(this.popupDsId[j]+".findRow(\""+this.popupColNm[j]+"\", \""+chkData+"\")") > -1){	//	중복데이터가 있으면
        					if(col == "EMP_NO"){
        						chkData = arry[i].EMP_NM+"["+arry[i].EMP_NO+"]";
        					}

        					sDupData += (sDupData == "" ? chkData : ","+chkData);
        					nDup++;																						//	중복데이터가 있음을 체크
        				}
        			}
        		}

        		if(nDup > 0){																					//	중복데이터가 있었으면 스킵
        			continue;
        		}

        		var nRow = eval(this.popupDsId[0]).addRow();
        		eval(this.popupDsId[0]).set_enableevent(false);
        		for(var k = 0; k < this.popupColNm.length; k++){
        			var col = eval("this.popupObject."+this.popupColNm[k]);	// "EMP_NO"
        			eval(this.popupDsId[k]+".setColumn("+this.popupDsId[k]+".rowposition, \""+this.popupColNm[k]+"\", arry[i]."+col+")");
        		}
        		eval(this.popupDsId[0]).set_enableevent(true);
        	}

        	if(sDupData != ""){
        		alert(sDupData+"은(는) 중복된 데이터입니다.");
        	}


        	this.gfn_clearPopValueSet();
        }

        /**
        * 월달력을 팝업한다
        * @param {obj}    폼
        * @param {obj}    월 컴포넌트
        * @param {string} callback 함수
        * @return N/A
        * @example      this.gfn_popupCalendarMonth(this, this.output);
        */
        var popCalObject=null;
        var popCalDs=null;
        var popCalCol=null;
        this.gfn_popupCalendarMonth = function(objForm,objEdit)
        {
        	popCalObject = objEdit;
        	for(var i=0; i<this.binds.length ; i++){
        		if(this.binds[i].compid.indexOf(".combo")<0){
        			if( eval("this."+this.binds[i].compid) == objEdit){
        				popCalDs=eval("this."+this.binds[i].datasetid);
        				popCalCol=this.binds[i].columnid;
        			}
        		}
        	}

         	this.calMonth = objEdit.value;

         	if ( !objForm.isValidObject("pdiv_calendarMonth") ){
        		var objPdiv = new PopupDiv();
        		objPdiv.init("pdiv_calendarMonth", 0, 0, 160, 160);
        		objForm.addChild(objPdiv.name, objPdiv);
        		objPdiv.set_url("com.base::calendarMonthSub.xfdl");
        		objPdiv.show();
         	}else{
        		var idx=0;
        		var calObj;
        		if(!Eco.isEmpty(this.calMonth)){
        			idx=nexacro.toNumber(this.calMonth.substring(4,6));
        			objForm.pdiv_calendarMonth.form.sta_year.set_text(this.calMonth.substring(0,4));
        			for(i=1;i<=12;i++){
        				calObj= eval("objForm.pdiv_calendarMonth.form.btn_month"+i);
        				calObj.set_cssclass("btn_WF_CalMonth");
        				/*
        				calObj.set_style("background:#ffffff00");
        				calObj.set_style("border:1 solid #c9c9c9;");
        				calObj.set_style("color:#58617cff");
        				*/
        			}
        			calObj=eval("objForm.pdiv_calendarMonth.form.btn_month"+idx);
        			calObj.set_cssclass("btn_WF_CalMonth_O");
        			/*
        			calObj.set_style("color:#ffffffff");
        			calObj.set_style("background:#4d64a7ff");
        			*/
        		}
        	}
         	var pos = Eco.XComp.PositionSize.getPopupPosition(objEdit, 155,156, "vert", 2);
        	objForm.pdiv_calendarMonth.trackPopup(pos[1], pos[2],null,null, "fn_callbackForPopupdiv");

        }
        /**
        * 월달력 팝업 callback
        * @param {obj}    팝업ID
        * @param {obj}    데이타
        * @return N/A
        * @example
        */
        this.fn_callbackForPopupdiv = function(popupId,val)
        {
        	if(!this.gfn_isEmpty(val)){
        		popCalObject.set_value(val);
        		popCalDs.setColumn(popCalDs.rowposition,popCalCol,val);
        		popCalObject.setFocus(false);
        	}
        }


        /**
        * 멀티달력을 팝업한다
        * @param {obj}    폼
        * @param {obj}    멀티달력 컴포넌트
        * @param {string} callback 함수
        * @return N/A
        * @example      this.gfn_popupCalendarMulti(this, this.frmDt, this.toDT);
        */
        var popFormObj=null;
        var popFrmObj=null;
        var popToObj=null;
        var popFrmCalDs=null;
        var popFrmCalCol=null;
        var popToCalDs=null;
        var popToCalCol=null;

        this.gfn_popupCalendarMulti = function(objForm,frmEdit,toEdit)
        {
        	//console.log('=== gfn_popupCalendarMulti ===');
        	//console.log(objForm);

        	//FromToCalendar 설정값 만들기
        	/*임시주석 처리 인사평가 반영후 풀어야함. 2022-050-12
        	var objConfig = {
        						calstart		: frmEdit,
        						calend			: toEdit,
        						btndrop			: frmEdit,
        						popdrop 		: null
        				    };

        	//FromToCalendar 초기화 함수 호출

        	//console.log(objConfig);

        	this.gfnFromToCalendar(objConfig);


        	return;
        	*/
        	//================= new fromToCalrendar end ======

        	toEdit.setFocus();
        	popFormObj=objForm;
        	popFrmObj=frmEdit;
        	popToObj=toEdit;

        	this.frmDtData = frmEdit.value;
        	this.toDtData = toEdit.value;
        	/*
        	for(var i=0; i<this.binds.length ; i++){
        		if(this.binds[i].compid.indexOf(".combo")<0){
        			if( eval("this."+this.binds[i].compid) == frmEdit){
        				popFrmCalDs=eval("this."+this.binds[i].datasetid);
        				popFrmCalCol=this.binds[i].columnid;
        			}

        			if( eval("this."+this.binds[i].compid) == toEdit){
        				popToCalDs=eval("this."+this.binds[i].datasetid);
        				popToCalCol=this.binds[i].columnid;
        			}
        		}
        	}
        	*/

         	if ( !objForm.isValidObject("pdiv_calendarMulti") ) {
        		var objPdiv = new PopupDiv();
        		objPdiv.init("pdiv_calendarMulti", 0, 0, 420, 230);
        		objForm.addChild(objPdiv.name, objPdiv);
        		objPdiv.set_url("com.base::calendarMulti.xfdl");
        		objPdiv.show();
         	} else {
         		objForm.pdiv_calendarMulti.form.frmDt.set_value(this.frmDtData);
         		objForm.pdiv_calendarMulti.form.toDt.set_value(this.toDtData);
        		objForm.pdiv_calendarMulti.form.Div00.set_visible(false);
        	}

         	var pos = Eco.XComp.PositionSize.getPopupPosition(frmEdit, 420,230, "vert", 2);

        	objForm.pdiv_calendarMulti.trackPopup(pos[1], pos[2],null,null,"fn_callbackCalendarMulti");
        }

        /**
        * 멀티달력 팝업 callback
        * @param {obj}    팝업ID
        * @param {obj}    데이타
        * @return N/A
        * @example
        */
        this.fn_callbackCalendarMulti = function(popupId,val)
        {
        	var data ="";

        	if(!this.gfn_isEmpty(val)){

        		data = val.split("@");

        		if(data[0]!="" && data[1]!="" && data[0]> data[1]){
        			alert("종료일이 시작일보다 이전일 수 없습니다.");
        			//this.gfn_popupCalendarMulti(popFormObj, popFrmObj, popToObj);
        			return;
        		}

        		if(data[0]!=""){
        			popFrmObj.set_value(data[0]);
        			//popFrmCalDs.setColumn(popFrmCalDs.rowposition,popFrmCalCol,data[0]);
        			popFrmObj.setFocus(false);
        		}
        		if(data[1]!=""){
        			popToObj.set_value(data[1]);
        			//popToCalDs.setColumn(popToCalDs.rowposition,popToCalCol,data[1]);
        			popToObj.setFocus(false);
        		}
        	}

        	popFrmObj=null;
        	popToObj=null;
        	popFrmCalDs=null;
        	popFrmCalCol=null;
        	popToCalDs=null;
        	popToCalCol=null;

        }

        /**
        * 메세지 코드에 따른 실제 메세지값을 찾은 후 상태바(bottomFrame) 또는 팝업창을 생성해서 해당 값을 보여주는 함수
        * @param {string}  sMsgId message id
        * @param {array}   arrParam msgArr[](메세지값으로 치환될 Parameter Array)
        * @param {string}  sType meesage type
        * @param {string}  callback function
        * @return {object} 팝업에 해당 메세지값을 표현
        * @example
        * this.gfn_msg("MsgPop",sMsgCd, oArg, "alert", "fn_msgCallback");
        */
        this.gfn_msg = function( sMsgPopId, sMsgId, oParm, sType, sCallback)
        {
            if (sType == "alert")
            {
        		var sMsg = application.gds_message.lookup("MSG_ID",sMsgId,"MSG");

        		if(sMsg == undefined){
        			alert("Ex.core.showCodeMessage:Illegal MSG_ID:"+sMsgId);
        			return null ;
        		}

        		var oReplaceJson  = oParm;
        		sMsg = Ex.core.replaceByJson(sMsg, oReplaceJson);

        		var oArg ={pMsg:sMsg};
        		var sMsgCallback = (Eco.isEmpty(sCallback)) ? "fn_msgAfter" : sCallback;
        	}

        	switch(sType)
        	{
        		case "confirm":
        			this.gfn_openPopup(sMsgPopId,"common::comConfirm.xfdl", oArg, "resizable=false", sMsgCallback);
        			break;
        		default:
        			application.BOTTOM.form.st_msg.set_text(sMsgId);
        			break;
        	}
        }

        /**
        * 프로그램정보 가져오기
        * @param {event}  e
        * @return {string} 프로그램 id
        * @example
        * this.gfn_pgmId(e);
        */
        this.gfn_pgmId = function(e)
        {
        	var filenm=e.url.substring(e.url.lastIndexOf("/")+1);
        	return filenm.substring(0,filenm.indexOf("."));
        }

        /**
        * 창닫기
        * @param {object} Button obj
        * @param {event}  nexacro.ClickEventInfo e
        * @return
        * @example
        * this.btn_close_onclick(obj,e);
        */
        this.btn_close_onclick = function(obj,  e)
        {
        	this.close();
        }

        /**
        * 권한체크
        * @param {string} role id
        * @return {string} Y/N
        * @example
        * this.gfn_chkRight('0000,0010');
        */
        this.gfn_chkRight = function(roleId)
        {
        	var roleIds=roleId.split(",");
        	var userRoles=application.gds_userInfo.getColumn(0,"SESS_USER_ROLES");
        	var cnt=0;
        	if(userRoles!="" && userRoles!=null){
        		for(i=0;i<roleIds.length;i++){
        			if(userRoles.indexOf(roleIds[i])>-1){
        				cnt++;
        			}
        		}
        	}

        	if(cnt>0){
        		return "Y";
        	}else{
        		return "N";
        	}
        }


        /**
        * 체크로직
        * @param {string} id
        * @param {string} 체크대상
        * @param {string} row
        * @return {boolen} true/false
        * @example
        * this.gfn_grdChkValue(id, chkArg, row);
        */
        this.gfn_grdChkValue = function(id, chkArg,row)
        {
        	for(var i=0;i<chkArg.length;i++){
        		if(!this.gfn_chkValue(id,chkArg[i][0],chkArg[i][1],chkArg[i][2],row)){
        			return false;
        		}
        	}
        	return true;
        }
        /**
        * 체크로직
        * @param {string} id
        * @param {string} msg
        * @param {string} column
        * @param {string} row
        * @param {string} logicType
        * @return {boolen} true/false
        * @example
        * this.gfn_chkValue(id, msg, column);
        */
        this.gfn_chkValue = function(id, msg, chkType,column,row,logicType)
        {
        	var data;

        	if(Eco.isEmpty(chkType)){
        		chkType ="NULL";
        	}

        	var nRow =application.gds_lang.findRowExpr(" PGM_ID=='"+this.pgmId+"'  && ITEM_ID=='"+msg+"'");
        	if(nRow < 0){
        		nRow =application.gds_lang.findRowExpr(" PGM_ID=='COM'  && ITEM_ID=='"+msg+"'");
        	}

        	if (nRow >= 0){
        		msg =application.gds_lang.getColumn(nRow, sLang);
        	}

        	if(Eco.isEmpty(column)){

        		if(Eco.isEmpty(id.value)==false && Eco.XComp.typeOf(id) == "MaskEdit"){
        			data = nexacro.trim(id.value);
        		}else{
        			data = id.value;
        		}

        		if(Ex.vali.checkValue(data,chkType,msg,sLang,logicType)==false){
        			id.setFocus();
        			return false;
        		}
        	}else{
        		var cellIdx=id.getBindCellIndex("body", column);
        		var ds = id.binddataset;
        		var rowType=1;
        		var tmHeader="";
        		if(msg==""){
        			msg = id.getCellText(-1,cellIdx).replace(String.fromCharCode(13), '').replace(String.fromCharCode(10), '');
        		}

        		if(Eco.isEmpty(row)){
        			for(var i=0;i<id.rowcount;i++){
        				if(eval("this."+ds).getColumnInfo("tmHeader")) {
        					tmHeader=id.getCellValue(i,id.getBindCellIndex("body", "tmHeader"));
        					if(tmHeader=="I" || tmHeader=="U"){
        						if(Ex.vali.checkValue(id.getCellValue(i,cellIdx),chkType,msg,sLang)==false){
        							eval("this."+ds).set_rowposition(i);
        							id.setCellPos(cellIdx);
        							id.showEditor(true);
        							return false;
        						}
        					}
        				}else{
        					rowType=eval("this."+ds).getRowType(i);
        					//추가,수정된 데이타만 체크
        					if(rowType==2 || rowType==4){
        						if(Ex.vali.checkValue(id.getCellValue(i,cellIdx),chkType,msg,sLang)==false){
        							eval("this."+ds).set_rowposition(i);
        							id.setCellPos(cellIdx);
        							id.showEditor(true);
        							return false;
        						}
        					}
        				}

        			}
        		}else{
        			if(Ex.vali.checkValue(id.getCellValue(row,cellIdx),chkType,msg,sLang,logicType)==false){
        				eval("this."+ds).set_rowposition(row);
        				id.setCellPos(cellIdx);
        				id.showEditor(true);
        				return false;
        			}
        		}
        	}

        	return true;
        }

        /**
        * tran 버튼 컨트롤
        * @param {string} div
        * @return {void} true/false
        * @example
        * this.gfn_setBtnTransCtrl(true);
        */
        this.gfn_setBtnTransCtrl= function (oForm,div)
        {
        	// 해당 폼의 Control을 배열에 할당한다.
        	var arrContents = oForm.components;
        	if(arrContents!=null){
        		for (var i = 0; i < arrContents.length; i++) {
        			if (arrContents[i] instanceof Button) {
        				if( arrContents[i].name == "btn_satis" || arrContents[i].id=="btn_help" || arrContents[i].id=="btn_exel_dn" || arrContents[i].id=="btn_close" || arrContents[i].id=="btn_new" ){
        					continue;	// 만족도평가,도움말,엑셀다운  버튼 제외
        				}
        				arrContents[i].set_enable(div);
        			} else if(arrContents[i] instanceof Tab){
        				var arrchilds = arrContents[i].tabpages;
        				for(var j=0 ; j < arrchilds.length; j++){
        					this.gfn_setBtnTransCtrl(arrContents[i].tabpages[j].form,div);
        				}
        			} else if(arrContents[i] instanceof Div){
        				var arrchilds = arrContents[i].form.components;
        				if (arrchilds != null && arrchilds.length > 0) {
        					this.gfn_setBtnTransCtrl(arrContents[i].form,div);
        				}
        			}
        		}
        	}
        }


        /**
        * 버튼 컨트롤
        * @param {string} div
        * @return {void} true/false
        * @example
        * this.gfn_setBtnAllCtrl(this,true);
        */
        this.gfn_setBtnAllCtrl= function (oForm,div)
        {
        	// 해당 폼의 Control을 배열에 할당한다.
        	var arrContents = oForm.components;
        	if(arrContents!=null){
        		for (var i = 0; i < arrContents.length; i++) {
        			if (arrContents[i] instanceof Button) {
        				if( arrContents[i].name == "btn_satis"  ||  arrContents[i].name == "btn_close" ||arrContents[i].name == "btn_help"){
        					continue;	// 만족도평가
        				}
        				arrContents[i].set_enable(div);

        			} else if(arrContents[i] instanceof Tab){
        				var arrchilds = arrContents[i].tabpages;

        				for(var j=0 ; j < arrchilds.length; j++){
        					this.gfn_setBtnAllCtrl(arrContents[i].tabpages[j].form,div);
        				}
        			} else if(arrContents[i] instanceof Div){
        				var arrchilds = arrContents[i].form.components;
        				if (arrchilds != null && arrchilds.length > 0) {
        					this.gfn_setBtnAllCtrl(arrContents[i].form,div);
        				}
        			}
        		}
        	}
        }


        /**
        * 모든 컨포넌트 컨트롤
        * @param {string} div
        * @return {void} true/false
        * @example
        * this.gfn_setCompAllCtrl(this,true);
        */
        this.gfn_setCompAllCtrl= function (oForm,div)
        {
        	// 해당 폼의 Control을 배열에 할당한다.
        	var arrContents = oForm.components;
        	if(arrContents!=null){
        		for (var i = 0; i < arrContents.length; i++) {
        			if (arrContents[i] instanceof Static) {
        				continue;
        			} else if(arrContents[i] instanceof Tab){
        				var arrchilds = arrContents[i].tabpages;

        				for(var j=0 ; j < arrchilds.length; j++){
        					this.gfn_setCompAllCtrl(arrContents[i].tabpages[j].form,div);
        				}
        			} else if(arrContents[i] instanceof Div){
        				var arrchilds = arrContents[i].form.components;
        				if (arrchilds != null && arrchilds.length > 0) {
        					this.gfn_setCompAllCtrl(arrContents[i].form,div);
        				}
        			} else if(arrContents[i] instanceof Grid){
        				if(div==true){
        					arrContents[i].set_readonly(false);
        				}else{
        					arrContents[i].set_readonly(true);
        				}
        			} else{
        				arrContents[i].set_enable(div);
        			}
        		}
        	}
        }

        /**
        * dataset 초기화
        * @param {object} datasert
        * @return {void}
        * @example
        * this.gfn_clearData(dsId);
        */
        this.gfn_clearData= function (dsId)
        {
        	dsId.clearData();
        	dsId.addRow();
        }

        /**
        * 세션정보
        * @param {object} datasert
        * @return {void}
        * @example
        * this.gfn_getSession(column);
        */
        this.gfn_getSession= function (column) {
        	if(Eco.isEmpty(column)){
        		var obj = new Object();
        		obj.SESS_USER_ID= application.gds_userInfo.getColumn(0,"SESS_USER_ID"); 		//사용자ID
        		obj.SESS_USER_NM= application.gds_userInfo.getColumn(0,"SESS_USER_NM"); 		//사용자명
        		obj.SESS_EMP_NO= application.gds_userInfo.getColumn(0,"SESS_EMP_NO"); 			//사번
        		obj.SESS_EMP_NM= application.gds_userInfo.getColumn(0,"SESS_EMP_NM"); 			//성명
        		obj.SESS_EMP_ENG_NM= application.gds_userInfo.getColumn(0,"SESS_EMP_ENG_NM"); 	//영문명
        		obj.SESS_DEPT_CD= application.gds_userInfo.getColumn(0,"SESS_DEPT_CD"); 		//부서코드
        		obj.SESS_DEPT_NM= application.gds_userInfo.getColumn(0,"SESS_DEPT_NM"); 		//부서명
        		obj.SESS_USER_ROLES= application.gds_userInfo.getColumn(0,"SESS_USER_ROLES"); 	//권한
        		obj.SESS_EMAIL_ADDR= application.gds_userInfo.getColumn(0,"SESS_EMAIL_ADDR"); 	//이메일
        		obj.SESS_UP_DEPT_CD= application.gds_userInfo.getColumn(0,"SESS_UP_DEPT_CD"); 	//상위부서코드
        		obj.SESS_ADMIN_YN= application.gds_userInfo.getColumn(0,"SESS_ADMIN_YN"); 		//관리자여부
        		obj.SESS_GRD_CD= application.gds_userInfo.getColumn(0,"SESS_GRD_CD"); 			//직급코드
        		obj.SESS_GRD_NM= application.gds_userInfo.getColumn(0,"SESS_GRD_NM"); 			//직급명
        		obj.SESS_JOB_POST= application.gds_userInfo.getColumn(0,"SESS_JOB_POST");		//직위코드
        		obj.SESS_JOB_POST_NM= application.gds_userInfo.getColumn(0,"SESS_JOB_POST_NM"); //직위명
        		obj.SESS_ASSIN_CD= application.gds_userInfo.getColumn(0,"SESS_ASSIN_CD");		//보직코드
        		obj.SESS_ASSIN_NM= application.gds_userInfo.getColumn(0,"SESS_ASSIN_NM");		//보직명
        		obj.SESS_JOB_TP= application.gds_userInfo.getColumn(0,"SESS_JOB_TP");			//직종코드
        		obj.SESS_JOB_TP_NM= application.gds_userInfo.getColumn(0,"SESS_JOB_TP_NM");		//직종명
        		obj.SESS_DEPT_DOC_NO= application.gds_userInfo.getColumn(0,"SESS_DEPT_DOC_NO");	//부서번호
        		obj.SESS_DEPT_EMP_NO= application.gds_userInfo.getColumn(0,"SESS_DEPT_EMP_NO");	//부서장사번
        		obj.SESS_WRK_AREA= application.gds_userInfo.getColumn(0,"SESS_WRK_AREA");		//지역
        		obj.SESS_DEPT_MGT_YN= application.gds_userInfo.getColumn(0,"SESS_DEPT_MGT_YN");	//부서장여부
        		obj.SESS_BUSI_PLC_CD= application.gds_userInfo.getColumn(0,"SESS_BUSI_PLC_CD");	//사업장코드
        		obj.SESS_BUSI_PLC_NM= application.gds_userInfo.getColumn(0,"SESS_BUSI_PLC_NM");	//사업장명
        		obj.SESS_IP= application.gds_userInfo.getColumn(0,"SESS_IP");					//접속IP
        		obj.SESS_DUTY_DEG= application.gds_userInfo.getColumn(0,"SESS_DUTY_DEG");		//근무차수
        		obj.SESS_DOMAIN= application.gds_userInfo.getColumn(0,"SESS_DOMAIN");			// 도메인
        		obj.SESS_DEPT_EMP_NM= application.gds_userInfo.getColumn(0,"SESS_DEPT_EMP_NM");	// 부서장명
        		obj.SESS_RES_NO= application.gds_userInfo.getColumn(0,"SESS_RES_NO");			// 주민번호
        		obj.SESS_DIS_EMP_NO= application.gds_userInfo.getColumn(0,"SESS_DIS_EMP_NO");   //표시사번
        		return obj;
        	}else{
        		return application.gds_userInfo.getColumn(0,column);
        	}
        }


        /**
        * 구분자에 따른 NOW DATE
        * @param {string} format
        * @return {string} 20160101
        * @example
        * this.gfn_getNowDate('yyymm');
        */
        this.gfn_getNowDate= function (format) {
        	if(format=="yymm"){
        		return application.gds_userInfo.getColumn(0,"SESS_NOW_YYMM");
        	}else if(format=="yy"){
        		return application.gds_userInfo.getColumn(0,"SESS_NOW_YY");
        	}else{
        		return application.gds_userInfo.getColumn(0,"SESS_NOW_YYMMDD");
        	}
        }

        /**
        * dataset 의 row를 object 형태로 반환
        * @param {datasetId, rowidx}
        * @return {object}
        * @example
        * this.gfn_getRowObj(this.Dataset00, 1);
        */
        this.gfn_getRowObj = function(oDs, nRow){
        	var oRtn = new Object();
        	var sColNm;
        	var sValue = nRow == -1 ? " = ''" : " = oDs.getColumn(nRow, i)";

        	for(var i = 0; i < oDs.colcount; i++){
        		sColNm = oDs.getColID(i);

        		var sScript = "oRtn." + sColNm + sValue;
        		eval(sScript);
        	}
        	return oRtn;
        }

        /**
        * var map = new gfn_jMap();
        * map.put(null, "data");
        * alert(map.get("0"));
        */
        this.gfn_jMap = function () {

        	/** 배열의 index 상수 */
        	this._INDEX_KEY = 0;
        	this._INDEX_VALUE = 1;

        	/** private 데이터 저장 Array */
        	this._elementData = new Array(0);

        	this.put = function(key, value) {
        		var index = this._findIndexByKey(key);
        		if (index >= 0) {
        			(this._elementData[index])[this._INDEX_VALUE] = value;
        		} else {
        			var pair = new Array(2);
        			pair[this._INDEX_KEY] = key;
        			pair[this._INDEX_VALUE] = value;
        			this._elementData.splice(this._elementData.length, 0, pair);
        		}
        	}

        	/**
        	 * public
        	 * 지정된 key 에 해당하는 value 를 얻는다
        	 * @param key 키값
        	 * @return 키에 해당하는 값
        	 */
        	this.get = function(key) {
        		var index = this._findIndexByKey(key);
        		if (index >= 0) {
        			return (this._elementData[index])[this._INDEX_VALUE];
        		}
        		return null;
        	}

        	/**
        	 * public
        	 * 지정된 key 에 해당하는 value 를 삭제한다
        	 * @param key 키값
        	 */
        	this.remove = function(key) {
        		var removeIndex = this._findIndexByKey(key);
        		if (removeIndex >= 0) {
        			this._elementData.splice(removeIndex, 1);
        		}
        	}

        	/**
        	 * public
        	 * 맵의 전체 Key 값들을 배열로 얻는다
        	 * @return key 값들의 Array
        	 */
        	this.keys = function() {
        		var keys = new Array(this._elementData.length);
        		for (var i = 0; i < this._elementData.length; i++) {
        			keys[i] = (this._elementData[i])[this._INDEX_KEY];
        		}
        		return keys;
        	}

        	/**
        	 * public
        	 * 맵의 전체 값들을 배열로 얻는다.
        	 * @return key 값들의 Array
        	 */
        	this.values = function() {
        		var values = new Array(this._elementData.length);
        		for (var i = 0; i < this._elementData.length; i++) {
        			values[i] = (this._elementData[i])[this._INDEX_VALUE];
        		}
        		return values;
        	}

        	/**
        	 * public
        	 * 맵에 key 가 포함되어 있다면 true
        	 * @param key 키값
        	 * @return 키값 포함 여부
        	 */
        	this.containsKey = function(key) {
        		return (this._findIndexByKey(key) >= 0);
        	}

        	/**
        	 * public
        	 * 맵이 비어있다면 true
        	 * @return 맵이 비었는지의 여부
        	 */
        	this.isEmpty = function() {
        		return (this.size() == 0);
        	}

        	/**
        	 * public
        	 * 맵을 비운다
        	 */
        	this.clear = function() {
        		this._elementData.splice(0, this._elementData.length);
        	}

        	/**
        	 * public
        	 * 맵을 크기를 얻는다
        	 * @return 맵의 크기
        	 */
        	this.size = function() {
        		return this._elementData.length;
        	}

        	/**
        	 * public
        	 * 객체를 문자열로 변환한다 (key^value|key^value|... 형태)
        	 * @return 문자열
        	 */
        	this.toString = function() {
        		var str = "";
        		for (var i = 0; i < this._elementData.length; i++) {
        			if (i > 0) {
        				str += "|";
        			}
        			str += (this._elementData[i]).join("^");
        		}
        		return str;
        	}

        	/**
        	 * private
        	 * 해당 key 로 index 를 찾는다.
        	 * 찾지 못하면 -1 을 return 한다. (0과의 비교가 가장 빠름)
        	 * @param key 키값
        	 * @exception JException
        	 */
        	this._findIndexByKey = function(key) {
        		if (key == null) {
        			throw new JNullPointerException("map's key is null");
        		}

        		for (var i = this._elementData.length - 1; i >= 0; i--) {
        			var oldKey = (this._elementData[i])[this._INDEX_KEY];
        			if (key == oldKey) {
        				return i;
        			}
        		}
        		return -1;
        	}
        }

        /**
        * 이미지가져오기
        */
        this.gfn_imgUrl = function (imgTp,imgUrl) {
        	return "svcurl::imgCheck.do?imgTp="+imgTp+"&fileNm="+imgUrl+"&rd="+Math.random();
        }

        /**
        * ai호출
        */
        this.gfn_openReport= function (popId,oArg, sOption, sPopupCallback) {
        	return this.gfn_openPopup(popId,"com.base::reportAI.xfdl", oArg, sOption, sPopupCallback);
        }

        /**
        * 영문인지체크
        */
        this.gfn_isEng = function (str){
        	return (/^[a-z]*$/gi).test(str);
        }

        /**
        * 영문인지체크(공백 허용)
        */
        this.gfn_isEngSp = function (str){
        	return (/^[a-z\s]*$/gi).test(str);
        }

        /**
        * 숫자인지 체크
        */
        this.gfn_isNumber = function (str){
        	//return (/^[0-9]*$/gi).test(str);
        	return !isNaN(str);
        }
        /**
        * 계좌번호 형식 체크 :: 숫자와 - 만 허용
        */
        this.gfn_isAccNo = function (str){
        	return (/^[0-9,-]*$/gi).test(str);
        }

        /**
        * RGB값을 16진수로 변환.
        */
        this.gfn_rgbtoHex = function (R,G,B){
        	return "#" + toHex(R) + toHex(G) + toHex(B);
        }
        /**
        * 10진수를 16진수로 변환
        */
        this.gfn_toHex = function (N){
        	if(isNaN(N) || N==null || N == 0 ) return "00";
        	N = parseInt(N);
        	return "01234567890ABCDEF".charAt((N-N%16)/16)
        			+ "01234567890ABCDEF".charAt(N%16);
        }
        /**
        *  문자값을 숫자값으로 변환 하기
        */
        this.gfn_changeNumber = function (srcStr , defvalue){
        	if( !defvalue) defvalue = 0;
        	if( !srcStr) return defvalue;
        	srcStr = '' + srcStr;
        	try{
        		val = parseInt(srcStr,10);
        		if( val == NaN) {
        			return defvalue;
        		 }
        		return val;
        	}catch(e){
        		return defvalue;
        	}
        }
        /**
        *  문자값을 숫자(소수점)값으로 변환 하기
        */
        this.gfn_changeNumberFloat = function (srcStr , defvalue){
        	if( !defvalue) defvalue = 0;
        	if( !srcStr) return defvalue;
        	srcStr = '' + srcStr;
        	try{
        		val = parseFloat(srcStr,10);
        		if( val == NaN) {
        			return defvalue;
        		 }
        		return val;
        	}catch(e){
        		return defvalue;
        	}
        }

        /*
        함 수 ID:  fileDown
        기	 능: 파일 다운
        */
        this.gfn_fileDown = function (fileNm,type){
        	if(fileNm==""){
        		this.gfn_showMsg("COM_CHK_0061","","");
        	}else{
        		if(objWebBrowser==null){
        			objWebBrowser = new WebBrowser("filedown00", 0,0, 0, 0, null, null);
        			this.addChild("filedown00", objWebBrowser);
        				//this.insertChild(1, "WebBrowser00", objWebBrowser);
        			objWebBrowser.show();
        		}
        		if(type!=""){
        			objWebBrowser.set_url(this.domainNm+"/fileDown.do?file="+fileNm+"&type="+type);
        		}else{
        			objWebBrowser.set_url(this.domainNm+"/fileDown.do?file="+fileNm);
        		}
        	}
        }


        /**
        * 인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
        * @param {string} 설정할 파리미터명
        * @param {string} p_value - 설정할 값
        * @return {string] String
        * @example
        *     paramStr += gfn_SetParam("sql_xml", "gspl_sql_common");
        * @memberOf global
        */
        this.gfn_setParam = function (p_name,p_value){
        	return p_name + "='" + nexacro.stripQuote(Ex.util.replaceEmpty(p_value)) + "' ";
        }


        this.gfn_childFrmae = function (oChildFrame,sMenuId,args, srcId){

        	if(Eco.isEmpty(args)){
        		args = {
        				MENU_ID : sMenuId,
        				MENU_NM : "",
        				PGM_PATH : "",
        				MENU_AUTH: "",
        				VIEW_NAVIGATION: "",
        				PARAM  : []

        		    };
        	}

        	oChildFrame = new ChildFrame;
        	oChildFrame.init(sMenuId, "absolute", 0, 0, 1051, 768);
        	application.MDIWORK.addChild(sMenuId, oChildFrame);

        	oChildFrame.set_formurl(srcId);
        	oChildFrame.set_text("");
        	oChildFrame.set_titletext("");
        	oChildFrame.set_showtitlebar(false);
        	oChildFrame.set_showstatusbar(false);
        	oChildFrame.set_showcascadetitletext(true);
        	oChildFrame.set_dragmovetype("normal");
        	oChildFrame.set_resizable(true);
        	oChildFrame.set_openstatus("maximize");
        	//oChildFrame.style.set_border("1px solid tranparent");
        	oChildFrame.set_border("1px solid #ffffffff");	//우측 1픽셀 잔상이 남는 증상있어 white로 변경.
        	oChildFrame.menuObj  = args;
        	oChildFrame.show();
        }


        /**
        * 도움말
        */
        this.gfn_openHelp= function () {
        	var helpId = this.helpPgmId;

        	if(!Eco.isEmpty(this.helpId)){
        		helpId = this.helpId;
        	}

        	if(sLang!="KOR"){
        		helpId= helpId+"_"+sLang;
        	}

        	oArg = {arg1:helpId};
        	return this.gfn_openPopup("help","com.base::help.xfdl", oArg, "", "");
        }

        /*	컴포넌트 최소높이 설정
        	- 대상 : Form 의 Bottom 과 맞닿은 컴포넌트( Grid, Tab, TextArea, Div 등 )
        	- 목적 : 브라우저의 높이가 낮아서 그리드의 데이터를 보지 못하는 현상 방지
        	- 사용법
        	1) Form 의 onsize 이벤트와 onload시 실행
        	2) sParam	: "Object_Id=nHeight,Object_Id=nHeight" 의 형태 : ex) "this.grd_main=400,this.tab.tabpage1.grd_sub=300"
        	3) this.gfn_compMinHeight("this.grd_list=297");
        	4) 샘플화면 : sys_0020M - 공통코드관리
        */
        this.gfn_compMinHeight = function(sParam)
        {
        	var arrParams = sParam.replace(" ","").split(",");

        	for( var i=0; i<arrParams.length; i++)
        	{
        		var arr = arrParams[i].split("=");
        		var objGrid = eval(arr[0]);
        		var minHeight = Number(arr[1]);

        		objGrid.set_bottom(15);	// 하단 여백 15px
        		var compHeight = objGrid.getOffsetHeight();

        		if( compHeight < minHeight )
        		{
        			objGrid.set_height(minHeight);
        		}
        	}
        	this.resetScroll();
        }

        /*	컴포넌트 Height Autofit 설정
        	- 대상 : Form 의 맨 하단에 위치한 컴포넌트( Grid, Tab, TextArea, Div 등 )
        	- 목적 : 초기설정된 Height를 기준으로 하단 여백이 생기면 자동으로 확장
        	- 사용법
        	1) Form 의 onsize 이벤트와 onload시 실행
        	2) arrComps	: 배열 - ex) var arrComps = [this.grd_sub1, this.grd_sub2, this.tab];
        	3) this.gfn_autofitH([this.grd_main, this.grd_sub1]);
        */
        this.gfn_autofitH = function(arrComps)
        {
        	if( !Eco.isArray(arrComps) )
        	{
        		if( typeof(arrComps) == "object" )
        		{
        			arrComps = [arrComps];
        		}
        		else if( typeof(arrComps) == "string" )
        		{
        			arrComps = [eval(arrComps)];
        		}else{
        			return;
        		}
        	}

        	for( var i=0; i<arrComps.length; i++ )
        	{
        		var comp = arrComps[i];
        		if( Eco.isEmpty(comp._orgHeight) )
        		{
        			comp._orgHeight = comp.getOffsetHeight();
        		}

        		comp.set_bottom(5);
        		if( comp.getOffsetHeight() < comp._orgHeight )
        		{
        			comp.set_height(comp._orgHeight);
        		}
        	}
        	this.resetScroll();
        }

        /**
        * CalendarBox 상하 입력시 value수정 (onkeydown)
        * @param	obj:Calendar, e:nexacro.KeyEventInfo
        * @return
        * @example	CalendarBox의 onkeydown이벤트에 연결해서 사용
        * @creator	최성우
        */
        this.gfn_calUpDown = function(obj, e)
        {
        	if( !Eco.isEmpty(obj.popupwindow) && obj.popupwindow.visible  ) return;
        	if( obj.readonly ) return;

        	if( e.keycode != 38 && e.keycode != 40 && e.keycode != 33 && e.keycode != 34 )
        	{	// 38:↑키, 40:↓키, 33: PageUp 키, 34: PageDown 키 36: Home 키, 35: End 키
        		return;
        	}

        	if( obj.value == null || obj.value == "" )
        	{
        		obj.set_value( Ex.util.getToday() );	// 입력값 없을 경우 현재날짜세팅
        		return;
        	}

        	var yyyy = (obj.value.toString()).substr(0,4);				// 년
        	var mm = parseInt(((obj.value).toString()).substr(4,2)) -1;	// 월 ( 0~11 이기 때문에 -1 한다.)
        	var dd = (obj.value.toString()).substr(6,2);				// 일
        	var dtVal = new Date(yyyy, mm, dd);

        	if( e.keycode == 38 ) // 38:↑키 : 일+1
        	{
        		if( obj.editformat == "yyyy-MM" )
        		{
        			dtVal = new Date(dtVal.addMonth(1));
        		}else{
        			dtVal = new Date(dtVal.addDate(1));	//	addDate 는 Number타입으로 리턴되기 때문에 Date 타입으로 변환 필요.
        		}
        	}
        	else if( e.keycode == 40 )	// 40:↓키 : 일-1
        	{
        		if( obj.editformat == "yyyy-MM" )
        		{
        			dtVal = new Date(dtVal.addMonth(-1));
        		}else{
        			dtVal = new Date(dtVal.addDate(-1));
        		}
        	}
        	else if( e.keycode == 33 )	// 33: PageUp 키 : 월+1
        	{
        		if( obj.editformat == "yyyy-MM" )
        		{
        			dtVal = new Date(dtVal.addYear(1));
        		}else{
        			dtVal = new Date(dtVal.addMonth(1));
        		}
        	}
        	else if( e.keycode == 34 )	// 34: PageDown 키 : 월-1
        	{
        		if( obj.editformat == "yyyy-MM" )
        		{
        			dtVal = new Date(dtVal.addYear(-1));
        		}else{
        			dtVal = new Date(dtVal.addMonth(-1));
        		}
        	}

        	var chgDt = (dtVal.getYear()).toString();
        	chgDt	+= Eco.string.getRightStr("0" + (dtVal.getMonth()+1), 2);	// ( 0~11 이기 때문에 +1 한다.)
        	chgDt	+= Eco.string.getRightStr("0" + dtVal.getDate(), 2);

        	obj.set_value( chgDt );
        }

        // 팝업식 TextArea 메시지 띄우기
        this.gfn_TextAreaPopup = function(obj, e, sText, bAutoSelect, bFocus )
        {
        	var objTextArea = new TextArea();
        	if( Eco.isEmpty(sText) ) sText = obj.getBindDataset().getColumn(e.row,obj.getCellProperty("body",e.col,"text").replace("bind:","") );
        	if( Eco.isEmpty(sText) ) return;
        	if( Eco.isEmpty(bAutoSelect) ) bAutoSelect = false;
        	if( Eco.isEmpty(bFocus) ) bFocus = false;

        	var txtSize = Eco.XComp.PositionSize.getTextSize(objTextArea,sText);	// 실제 text 크기값 구하기( arr[0]= width, arr[1]= height )
        	var nX = e.screenX - system.clientToScreenX(this, 0);
        	var nY = e.screenY - system.clientToScreenY(this, 0);
        	var nWidth	= txtSize[0]+20;
        	var nHeight	= txtSize[1]+10+(txtSize[1]*0.2);
        	var nLeft	= (nX + nWidth > this.getOffsetWidth() ) ? this.getOffsetWidth() - nWidth : nX;
        	var nTop	= (nY + nHeight> this.getOffsetHeight()) ? this.getOffsetHeight()- nHeight: nY;

        	if( nexacro.Browser == "Runtime" )
        	{	// Runtime 에서 Eco.XComp.PositionSize.getTextSize 안됨.
        		nWidth = nexacro.getTextSize(sText.replace("\t","AAAA"),"9 Dotum").nx * 0.77+ 21;
        		nHeight = nexacro.getTextSize(sText,"9 Dotum").ny * 0.95 + 12;
        	}

        	if ( !this.isValidObject("_gridText") )
        	{
        		objTextArea.addEventHandler("onkillfocus",this.gfn_taFocusOut,this);
        		objTextArea.addEventHandler("onkeydown",this.gfn_taKeyDown,this);
        		objTextArea.init("_gridText","absolute",nLeft,nTop,nWidth,nHeight,null,null);
        		this.addChild(objTextArea.name,objTextArea);
        		objTextArea.set_readonly(true);
        		objTextArea.style.set_border("1px solid gray");
        		objTextArea.style.set_padding("5 5 5 5");
        		objTextArea.set_scrollbars("none");
        		objTextArea.show();
        	}else{
        		this._gridText.set_left(nLeft);
        		this._gridText.set_top(nTop);
        		this._gridText.set_width(nWidth);
        		this._gridText.set_height(nHeight);
        		this._gridText.set_visible(true);
        	}
        	this._gridText.set_value(sText);
        	this._gridText.set_autoselect(bAutoSelect);
        	if( bFocus )	this._gridText.setFocus();
        }

        this.gfn_taFocusOut = function(obj, e)
        {
        	if( !this.gfn_isEmpty(obj) ){
        		obj.set_visible(false);
        	}
        }

        this.gfn_taKeyDown = function(obj, e)
        {
        	if( e.keycode == 27 || e.keycode == 13 )
        	{
        		if( !this.gfn_isEmpty(obj) ){
        			obj.set_visible(false);
        		}
        	}
        }

        //drill-down
        //호출 방식 this.gfn_openMainFormSub("act_3750M","act_3750M","mis.act::act_3750M.xfdl","",oArg);
        this.gfn_openMainFormSub = function(sPopId,sPgmId,sPageUrl,sMymenuYn,oArg)
        {
        	var sNavigation="";
        	if(!this.gfn_isEmpty(application.FRAMELEFT.form)){
        		if(!this.gfn_isEmpty(this.parent.parent.sta_navigation.text)){
        			sNavigation = this.parent.parent.sta_navigation.text;
        			idex = sNavigation.indexOf("[");
        			sNavigation=sNavigation.substring(0,idex-1);
        		}
        		application.FRAMELEFT.form.fn_openMainFormSub(sPgmId,"",sPageUrl,sMymenuYn,oArg,"Y",sNavigation);
        	}else{
        		this.gfn_openPopup(sPopId,sPageUrl, oArg, "", "");
        	}
        }


        /**
        * 파일다운화면 호출
        */
        this.gfn_comFileDown= function (oArg, sOption, sPopupCallback) {
        	if(sOption==""){
        		sOption = "width=800,height=500,autosize=false";
        	}

        	return this.gfn_openPopup("fileDown","com.base::fileDownload.xfdl", oArg, sOption, sPopupCallback);
        }



        /**************************************************************
        ** 임시
        **************************************************************/
        this.gfn_setTabstop = function (obj, sBool){
        	var arrContents = obj.components;
        	var	i;

        	for (i = 0; i < arrContents.length; i++) {
        		if (arrContents[i] instanceof Button) {
        			arrContents[i].set_tabstop(sBool);
        		}else if (arrContents[i] instanceof Grid) {
        			arrContents[i].set_tabstop(sBool);
        		}else if (arrContents[i] instanceof Static) {
        			arrContents[i].set_tabstop(sBool);
        		}else{
        			if(arrContents[i].enable == "false"){
        				arrContents[i].set_tabstop(sBool);
        			}else if(arrContents[i].cssclass == "readonly"){
        				arrContents[i].set_tabstop(sBool);
        			}
        		}

        		if(arrContents[i].components == undefined) continue;

        		this.gfn_setTabstop(arrContents[i]);
        	}
        }


        /**************************************************************
        ** 변환툴에서 사용되는 함수
        **************************************************************/

        /*
         * 상태값 변경 (변환툴)
         * @param {Dataset} 정보추가할
         * @param {String} 현재row
         * @param {String} 상태값
         * @example
        */
        this.gfn_updateStatus = function(oDs, oRow, oStatus)
        {
        	if (!this.gfn_isEmpty(oStatus)) {
        		oDs.set_updatecontrol(false);
        		if (oStatus.toUpperCase() == "INSERT") {
        			oDs.setRowType(oRow, Dataset.ROWTYPE_INSERT);
        		} else if (oStatus.toUpperCase() == "UPDATE") {
        			oDs.setRowType(oRow, Dataset.ROWTYPE_UPDATE);
        		} else if (oStatus.toUpperCase() == "DELETE") {
        			oDs.setRowType(oRow, Dataset.ROWTYPE_DELETE);
        		}
        		oDs.set_updatecontrol(true);

        		oDs.set_enableevent(false);
        		if (oStatus.toUpperCase() == "INSERT") {
        			oDs.setColumn(oRow, "tmHeader", "I");
        		} else if (oStatus.toUpperCase() == "UPDATE") {
        			oDs.setColumn(oRow, "tmHeader", "U");
        		} else if (oStatus.toUpperCase() == "DELETE") {
        			oDs.setColumn(oRow, "tmHeader", "D");
        		}
        		oDs.setColumn(oRow, "isChecked", "1");
        		oDs.set_enableevent(true);
        	} else {

        		oDs.set_enableevent(false);
        		oDs.setColumn(oRow, "tmHeader", "");
        		oDs.setColumn(oRow, "isChecked", "0");
        		oDs.set_enableevent(true);

        		oDs.set_updatecontrol(false);
        		oDs.setRowType(oRow, Dataset.ROWTYPE_NORMAL);
        		oDs.set_updatecontrol(true);
        	}
        }

        /*
         * (데이타 수정, 삭제 시 flag변경처리) (변환툴)
         * @param {Dataset} 정보추가할
         * @param {String} 현재row
         * @example
        */
        this.gfn_changeFlag = function(oDs, oRow)
        {
        	var tmHeader = oDs.getColumn(oRow, "tmHeader");
        	if( tmHeader == undefined || tmHeader=="" || tmHeader=="D"){
        		if(tmHeader==""){
        			oDs.setColumn(oRow, "isChecked",1);
        		}
        		this.gfn_updateStatus(oDs, oRow, "update");
        	}
        }

        /*
         * 메시지출력  (alert)
         * @example
        */
        this.gfn_msg = function(msg)
        {
        	return this.gfn_showMsg(msg, "","");
        }

        /*
         * 메시지출력 (confirm)
         * @example
        */
        this.gfn_confirm = function(msg)
        {
        	return this.gfn_showMsg(msg,[],"confirm");
        }


        /*
         * grid control
         * @example
        */
        this.gfn_controls = function(gridId)
        {
        	eval("this."+eval("this."+gridId).binddataset);
        }

        /*
         * (동기식 방식일 경우 progressbar 처리를 위한 메소드) (변환툴)
         * @example gfn_initForm()시 사용 함.
        */
        this.gfn_progressbar = function(){
        	this.progressbarObj = new ImageViewer("progressbar01", "40%","300", 320, "150", null, null); //left,top,width,height,right,bottom
        	this.addChild("progressbar01", this.progressbarObj);
        	this.progressbarObj.set_image("theme://images/waitimage_"+sLang+".gif");
        	this.progressbarObj.show();
        	this.progressbarObj.set_visible(false);
        }

        /*
         * 그리드의 컬럼 수정 못하도록 변경 (변환툴)
         * @example this.gfn_gridSetDisabled(this.datagrid1, "detlExpCd", false);
        */
        this.gridColumnEditType = "none";
        this.gfn_gridSetDisabled = function( oGrid, oColumn, oBool )
        {
        	if ( oBool == "false" || oBool == false ) {
        		this.gridColumnEditType = oGrid.getCellProperty("Body", oGrid.getBindCellIndex("body", oColumn), "edittype");
        		oGrid.setCellProperty("Body", oGrid.getBindCellIndex("body", oColumn), "edittype", "none");
        	} else {
        		oGrid.setCellProperty("Body", oGrid.getBindCellIndex("body", oColumn), "edittype", this.gridColumnEditType);
        	}
        }


        /*
         * 그리드의 필수 값을 체크 하여 true, false 반환 CellEssential이 있는 항목만 검사 (변환툴)
         * @example this.gfn_chkGridFieldValue(this.datagrid1);
        */
        this.gfn_chkGridFieldValue = function(oGrid)
        {

        	var oCols = oGrid.getCellCount("Body");

        	// CellEssential, CellEssentialbg
         	for (var i=0; i<oCols; i++) {
         		if (this.gfn_isNull(oGrid.getCellProperty("Body", i, "value")) && (oGrid.getCellProperty("Body", i, "cssclass") == "CellEssential" || oGrid.getCellProperty("Body", i, "cssclass") == "CellEssentialbg") ) {
         			this.gfn_showMsg(oGrid.getCellProperty("Head", i, "text")+" 값은 필수입니다.");
         			return false;
         		}
         	}

         	return true;
        }

        this.gfn_trimDs = function(objDs, row)
        {
        	if( Eco.isEmpty(row) ){
        		row = 0;
        	}

        	var bEnableEvent = objDs.enableevent;
        	objDs.set_enableevent(false);
        	for(var col=0; col<objDs.getColCount(); col++)
        	{
        		if( !Eco.isEmpty(objDs.getColumn(row,col))){
        			objDs.setColumn(row,col,nexacro.trim(objDs.getColumn(row,col)));
        		}
        	}
        	objDs.set_enableevent(bEnableEvent);
        }

        /**	Textarea 자동늘리기
         *	params
         *	obj : Textarea
         *	arr1: Height 변경대상 컴포넌트목록이 담긴 Array
         *	arr1: Top 변경대상 컴포넌트목록이 담긴 Array
        	      * 동일레벨 하위컴포넌트는 자동으로 설정하므로 Textarea가 Div나 Tab 안에 있을 경우 활용.
        **/
        this.gfn_textareaAutoSize = function(obj, arr1, arr2)
        {
        	obj._orgHeight = obj.getOffsetHeight(); // 초기 높이 저장

        	// 중간 컴포넌트목록 저장(높이 겹친 컴포넌트)
        	if( arr1 != null && arr1 instanceof Array){
        		obj._onComps = arr1;
        	}
        	// 하단 컴포넌트목록 저장
        	obj._underComps = this.gfn_getUnderComps(obj);
        	if( arr2 != null && arr2 instanceof Array){
        		obj._underComps = obj._underComps.concat(arr2);
        	}

        	if(obj.scrollbars != "autoboth"){
        		obj.set_scrollbars("autoboth");	// none일 경우 onvscroll이벤트 실행 안됨.
        	}
        	obj.addEventHandler("onvscroll",this.gfn_textareaVScrollEvent,this);
        }

        this.gfn_textareaVScrollEvent = function(obj, e)
        {
        	var comp = obj._underComps;

        	// 내용 크기에 따른 사이즈 조절
        	if( e.pos > 0 ){	// 스크롤 내려갈 때
        		if( obj.getOffsetHeight() < obj.getOffsetHeight()+e.pos ){
        			obj.setOffsetHeight(obj.getOffsetHeight()+e.pos);// 높이 증가
        			for(var i=0; i<comp.length; i++){
        				comp[i].setOffsetTop(comp[i].getOffsetTop()+e.pos);// 하위컴포넌트 위치변경
        			}

        			if( obj._onComps != null && obj._onComps instanceof Array){
        				comp = obj._onComps;
        				for(var i=0; i<comp.length; i++)
        				{
        					comp[i].setOffsetHeight(comp[i].getOffsetHeight()+e.pos);// 겹친컴포넌트 높이 변경
        				}
        			}
        			obj.parent.resetScroll();
        		}
        	}else{
        		if( this.gfn_isEmpty(obj.value) ){
        			var resetHeight = obj.getOffsetHeight() - obj._orgHeight;
        			obj.setOffsetHeight(obj._orgHeight);// 높이 초기화
        			for(var i=0; i<comp.length; i++){
        				comp[i].setOffsetTop(comp[i].getOffsetTop()-resetHeight);// 하위컴포넌트 위치 초기화
        			}

        			if( obj._onComps != null && obj._onComps instanceof Array){
        				comp = obj._onComps;
        				for(var i=0; i<comp.length; i++)
        				{
        					comp[i].setOffsetHeight(comp[i].getOffsetHeight()-resetHeight);// 겹친 컴포넌트 높이 초기화
        				}
        			}
        			obj.parent.resetScroll();
        		}else{
        			if( obj.vscrollbar.max > 0 ){ // 스크롤 생성시
        				obj.vscrollbar.set_pos(obj.vscrollbar.max); // 스크롤 위치 맨 밑으로 변경(onvscroll 이벤트 다시 발생)
        			}
        		}
        	}

        	this.resetScroll();
        }

        this.gfn_getUnderComps = function(obj)
        {
        	var arr = new Array();

        	var comp = obj.parent.components;

        	for(var i=0; i<comp.length; i++){
        		if( comp[i].getOffsetTop() > obj.getOffsetTop()+obj.getOffsetHeight()-1 ){
        			arr.push(comp[i]);
        		}
        	}

        	return arr;
        }

        /**
        	TextArea, Edit 글자수 계산해 Static 에 표현
        	TextArea 설정	: lengthunit(default : "ascii")
        					  maxlength (default : 4000)
        	oArgs - sMode	: "AUTO" - [sPrefix][현재값][sMidfix][최대값][sSuffix]
        					  null 	 - [현재값]
        			sPrefix	: 접두어
        			sMidfix	: 사이글자(default : " / " - 중간개행 등 설정시 유용
        			sSuffix : 접미어
        	// sample xfdl : pattern::test01.xfdl
        	// sample 1
        	var oArgs = { sMode : "AUTO"
        				, sPrefix : "총 "
        				, sMidfix : " / "
        				, sSuffix : " Bytes"
        				};
        	this.gfn_TextAreaCnt(this.TextArea00, this.Static00, oArgs);
        	// sample 1 result : 총 1234 / 4000 Bytes
        	// sample 2
        	this.gfn_TextAreaCnt(this.TextArea00, this.Static00, {sMode:"AUTO"});
        	// sample 2 result : 1234 / 4000
        */
        this.gfn_TextAreaCnt = function(obj, target, oArgs)
        {
        	var unit = obj.lengthunit || "ascii";
        	var nLength = Eco.string.getLength(obj.text,unit);
        	oArgs = oArgs || {};
        	var prefix = oArgs.sPrefix || "";
        	var midfix = oArgs.sMidfix || " / ";
        	var suffix = oArgs.sSuffix ||  "";
        	var nMaxLength = obj.maxlength || 4000;

        	if( oArgs.sMode && oArgs.sMode.toUpperCase() == "AUTO" )
        	{
        		target.set_text(prefix+nLength+midfix+obj.maxlength+suffix);
        	}else{
        		target.set_text(nLength);
        	}
        }

        /**
         * 공통코드 체크박스 생성
         * @function gfn_setComCheckbox
         * @param {Div} objDiv 체크박스 생성할 영역
         * @param {Dataset} objDs 공통코드 데이터셋
         * @param {String} sType 선택모드 : S-싱글 M-멀티 (default:M)
         * @param {String} sOption 부가설정 : top, left, width, height, linepadding(행간격), itempadding(열간격), colcount(열개수), itemwrap(개행여부t/f)
         * @desc <b>공통코드 콜백에서 사용</b>
         * @example this.gfn_setComCheckbox(this.div_comChk, this.ds_code020, "M", "width=120,itempadding=10,lineheight=0");
         * @member Common
        */
        this.gfn_setComCheckbox = function(objDiv, objDs, sType, sOption)
        {
        	objDiv.value = "";
        	objDiv._type = sType||"M";
        	sOption = sOption||"";

        	var nTop = 0;			// 생성할 체크박스 Top위치
        	var nLeft = 0;			// 생성할 체크박스 Left위치
        	var nWidth = 0;			// 생성할 체크박스 넓이(0 : auto)
        	var nHeight = 22;		// 생성할 체크박스 높이
        	var nLinePadding = 4;	// 개행 간격
        	var nItemPadding = 20;	// 열 간격
        	var nColCount = 0;		// 열 개수(0:auto)
        	var bItemWrap = true;	// 개행 여부

        	// 옵션 처리
        	var aVal = sOption.split(",");
        	for (var i = 0; i < aVal.length; i++) {

        		var aVal2 = aVal[i].trim().split("=");

        		switch (aVal2[0]) {
        			case "top"			: nTop			= parseInt(aVal2[1]);	break;	// 시작 Top 위치
        			case "left"			: nLeft			= parseInt(aVal2[1]);	break;	// 시작 Left 위치
        			case "width"		: nWidth		= parseInt(aVal2[1]);	break;	// 체크박스 넓이
        			case "height"		: nHeight		= parseInt(aVal2[1]);	break;	// 체크박스 높이
        			case "linepadding"	: nLinePadding	= parseInt(aVal2[1]);	break;	// 행 간격
        			case "itempadding"	: nItemPadding	= parseInt(aVal2[1]);	break;	// 열 간격
        			case "colcount"		: nColCount		= parseInt(aVal2[1]);	break;	// 열 개수
        			case "itemwrap"     : bItemWrap		= eval(aVal2[1]);		break;	// 개행 여부
        		}
        	}

        	var curCol = 0;
        	for(var i=0; i<objDs.rowcount; i++) {
        		var commCd = objDs.getColumn(i,"COMM_CD");
        		var commNm = objDs.getColumn(i,"COMM_NM");
        		var strId = "chk_"+commCd;

        		if( objDiv._type == "S" && this.gfn_isEmpty(commCd)) continue;	// 싱글일 경우 선택/전체 생략
        		// Checkbox 생성
        		var objCheckBox = new CheckBox(strId, nLeft, nTop, 20, nHeight, null, null);
        		objDiv.addChild(strId, objCheckBox);
        		if( this.gfn_isEmpty(commCd) ){
        			objCheckBox.set_text("전체");
        			objCheckBox.set_truevalue("_allChkY");
        			objCheckBox.set_falsevalue("_allChkN");
        		}else{
        			objCheckBox.set_text(commNm);
        			objCheckBox.set_truevalue(commCd);
        		}
        		objCheckBox.show();

        		// 체크이벤트
        		objCheckBox.addEventHandler("onchanged",this.gfn_comCheckboxOnchanged,this);

        		// 텍스트길이에 따른 위치 및 넓이 변경
        		if( nWidth > 0 ){
        			objCheckBox.setOffsetWidth(nWidth);
        		}else{
        			var txtSize = Eco.XComp.PositionSize.getTextSize(objCheckBox,commNm);
        			objCheckBox.setOffsetWidth(txtSize[0]+14+5);// Checkbox 넓이 재설정(텍스트+체크박스+사이여백)
        		}
        		// 라인 다 찼을 경우 다음라인으로 이동
        		if( bItemWrap && (objCheckBox.getOffsetLeft()+objCheckBox.getOffsetWidth()+nItemPadding > objDiv.getOffsetWidth() || (nColCount > 0 && curCol >= nColCount) )  )
        		{
        			nColCount = curCol;
        			nLeft = 0;
        			nTop += nHeight+nLinePadding;
        			curCol = 1;
        		}else{
        			curCol++;
        		}
        		objCheckBox.setOffsetLeft(nLeft);
        		objCheckBox.setOffsetTop(nTop);
        		nLeft += objCheckBox.getOffsetWidth()+nItemPadding; // 텍스트사이즈+체크버튼사이즈+사이여백+여백
        	}

        	// 초기값 세팅
        	if( !this.gfn_isEmpty(objDiv.bindDatasetCol) ){
        		var dsInfo = objDiv.bindDatasetCol.split(",");
        		var ds = eval("this."+dsInfo[0]);
        		var values = ds.getColumn(ds.rowposition,dsInfo[1]).split(",");
        		for(var i=0; i<values.length; i++) {
        			if( !this.gfn_isEmpty(values[i]) ){
        				var strId = "chk_"+values[i];
        				if( !this.gfn_isEmpty(objDiv.components[strId]) ){
        					objDiv.components[strId].set_value(values[i]);
        				}
        			}
        		}
        	}
        }

        /**
         * 공통코드 체크박스 onchanged 이벤트 (gfn_setComCheckbox 내부함수)
         * @function gfn_comCheckboxOnchanged
         * @param {CheckBox} obj 체크박스 생성할 영역
         * @param {Event} e nexacro.CheckBoxChangeEventInfo
         * @ignore
         * @member Common
        */
        this.gfn_comCheckboxOnchanged = function(obj, e)
        {
        	if( obj.parent.parent._type == "S" ) { // 싱글
        		// 체크값 1개 유지
        		if( obj.isChecked() ){
        			obj.parent.parent.value = e.postvalue;
        			var chkComps = obj.parent.parent.form.components;
        			for(var i=0; i<chkComps.length; i++){
        				if( chkComps[i] == obj ) continue;
        				chkComps[i].set_value("");// 체크해제
        			}
        		}else{
        			obj.parent.parent.value = "";
        		}
        	} else if( obj.parent.parent._type == "M" ) {// 멀티
        		var chkComps = obj.parent.parent.form.components;
        		if( e.postvalue == "_allChkY" ){
        			for(var i=1; i<chkComps.length; i++){
        				chkComps[i].set_value(chkComps[i].truevalue);
        			}
        		}else if( e.postvalue == "_allChkN"){
        			for(var i=1; i<chkComps.length; i++){
        				chkComps[i].set_value(chkComps[i].falsevalue);
        			}
        		}

        		var postValue = new Array();

        		for(var i=0; i<chkComps.length; i++){
        			if( chkComps[i].isChecked() ){
        				if( chkComps[i].value != "_allChkY" ){
        					postValue.push(chkComps[i].value);
        				}else if( e.postvalue != "_allChkY"){// 전체 체크해제
        					chkComps[i].set_value("_allChkN");
        				}
        			}
        		}

        		obj.parent.parent.value = postValue.toString();
        	}

        	// 바인딩 설정 있을 경우 자동세팅
        	if( !this.gfn_isEmpty(obj.parent.bindDatasetCol) ){
        		var dsCol = obj.parent.parent.bindDatasetCol.split(",");
        		var bindDs = eval("this."+dsCol[0]);
        		var bindCol = dsCol[1];
        		bindDs.setColumn(bindDs.rowposition, bindCol, obj.parent.value);
        	}
        }

        /**
         *
         * @function gfn_reportObj
         * @webbrowser 객체생성
         * @ignore
         * @member Common
        */
        this.gfn_webObj = function(type,l,t,w,h) {
        	if(l==null){
        		l=0;
        	}
        	if(t==null){
        		t=0;
        	}
        	if(w==null){
        		w=0;
        	}
        	if(h==null){
        		h=0;
        	}
        	if(objWebBrowser==null){
        		var objNm = "WebBrowser"+type;
        		objWebBrowser = new WebBrowser(objNm,  l,t, w,h, null, null);
        		this.addChild(objNm, objWebBrowser);
        		objWebBrowser.show();
        		if(type=="report"){
        			objWebBrowser.set_url(this.reportComUrl);
        		}
        	}
        }

        /**
         *
         * @function gfn_getGridHeadText
         * @webbrowser 그리드 항목명 가져오기
         * @ignore
         * @member Common
        */
        this.gfn_getGridHeadText = function(gridId, colId){
        	gridId.getCellProperty("Head", colId, "text");
        }

        /**
         *
         * @function gfn_getDupChk
         * @webbrowser 중복체크
         * @ignore
         * @member Common
        */
        this.gfn_getDupChk = function(gridId, colId){
        	var chkId="";
        	var dsId=gridId.getBindDataset();
        	for (var i = 0; i < dsId.rowcount; i++) {

        		if(dsId.getColumn(i, "tmHeader")=="I"){
        			chkId = dsId.getColumn(i, colId);
        		}else{
        			chkId = "";
        		}

        		if(dsId.findRowExpr(colId+"=='"+chkId+"'  && currow!="+i )>-1){
        			this.gfn_showMsg("COM_CHK_0027", "["+chkId+"]", "");
        			dsId.set_rowposition(i);
        			gridId.setCellPos(gridId.getBindCellIndex("body", colId));
        			gridId.showEditor(true);
        			return false;
        		}
        	}
        	return true;
        }

        /**
         *
         * @function gfn_enterSearch
         * @webbrowser 엔터키
         * @ignore
         * @member Common
        */
        this.gfn_enterSearch = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.btn_search_onclick();
        	}
        }

        /**
         *
         * @function gfn_getStringByte
         * @webbrowser byte계산
         * @ignore
         * @member Common
        */
        this.gfn_getStringByte = function (data) {
        	var buf = data.toString();
        	var len = 0;

        	for(var i=0; i < data.length;i++){
        		 if (buf.charCodeAt(i) > 127)  {
        			len += 3;
        		 } else {
        			len += 1;
        		 }
        	}
        	return len;
        }

        /**
         *
         * @function gfn_setTree
         * @원하는 위치부터 펼쳐짐
         * @ignore
         * @member Common
        */
        this.gfn_setTree = function(dsId,lev){

        	if(dsId.getColumnInfo("LEV")){

        		for( var i=0; i<dsId.rowcount ; i++ ){
        			if( dsId.getColumn(i,"LEV") < lev ){
        				dsId.setColumn(i,"TREE_STATUS",1);
        			}
        		}
        	}else{
        		alert("LEV컬럼과 TREE_STATUS칼럼을 설정해 주세요");
        		return;
        	}
        }

        /**
         *
         * @function gfn_fileDownList
         * @ 신청번호에 따른 파일 다운로드 목록
         * @ignore
         * @member Common
        */
        this.gfn_fileDownList = function(popId,oArg){
        	this.gfn_openPopup(popId, "com.base::fileDownload.xfdl", oArg, "autosize=false,width=700,height=500", "");
        }

        /**
         *
         * @function gfn_pad
         * @ padding
         * @ignore
         * @member Common
        */
        this.gfn_pad= function(type, data, cnt, charVar){

        	for(i=data.length;i<cnt;i++){
        		if(type=="left"){
        			data = charVar+data;
        		}else{
        			data = data+charVar;
        		}
        	}

        	return data;
        }

        /**
         *
         * @function gfn_signPad
         * @ signpad
         * @ignore
         * @member Common
        */
        this.gfn_signPad = function(popId,oArg){
        	this.gfn_openPopup(popId, "com.base::signCall.xfdl", oArg, "autosize=false,width=500,height=500", "");
        }

        /**
         *
         * @function gfn_getApvStat
         * @ 결재상태 ( apvStat : 상태값, rstMode : 결재상태 요청 결과구분 => EDIT:수정가능여부 체크결과, END:결재완료 여부 체크결과 )
         * @ignore
         * @member Common
        */
        this.gfn_getApvStat = function(apvStat, rstMode) {
        	if (rstMode == "EDIT") {
        		//수정가능 여부 => 작성중(000-010-010), 반려(000-010-050), 접수반송(000-010-051), 회수(000-010-060), 반송(000-010-070)
        		if (this.gfn_isEmpty(apvStat) || apvStat == "000-010-010" || apvStat == "000-010-050" || apvStat == "000-010-051" || apvStat == "000-010-060" || apvStat == "000-010-070") {
        			return true;
        		}
        	} else if (rstMode == "END") {
        		//결재완료 여부
        		if (apvStat == "000-010-040") {
        			return true;
        		}
        	}
        	return false;
        }

        /**
         *
         * @function gfn_getGwViewEnable
         * @ 결재버튼활성화여부
         * @ignore
         * @member Common
        */
        this.gfn_getGwViewEnable = function(apvStat) {
        	if (this.gfn_isEmpty(apvStat) || apvStat == "000-010-010") {
        		this.btn_approval.set_enable(false);
        	} else {
        		this.btn_approval.set_enable(true);
        	}
        }


        /**
        * 화면 상의 components 의 text 값을 alert으로 띄워 줌 (다국어 작업시 사용)
        */
        this.gfn_getCompTextList = function(oForm,sMode){
        	if(sMode == "A"){
        		gsCmpntList = "";
        	}

        	var arrContents = oForm.components;

        	for (var i = 0; i < arrContents.length; i++) {
        		if (arrContents[i] instanceof Grid){
        			gsCmpntList += this.gfn_getCmpntPath(arrContents[i])+"\t";
        			var nCellCnt = arrContents[i].getCellCount("Head");

        			for(var colIdx = 0; colIdx < nCellCnt; colIdx++){
        				if(colIdx+1 == nCellCnt){
        					gsCmpntList += arrContents[i].getCellProperty("Head", colIdx, "text");
        				}else{
        					gsCmpntList += arrContents[i].getCellProperty("Head", colIdx, "text")+",";
        				}
        			}

        			gsCmpntList += "\n";
        		}else if (arrContents[i] instanceof nexacro.Static || arrContents[i] instanceof nexacro.Button){
        			if(arrContents[i].visible == false || arrContents[i].text == "" || arrContents[i].text == undefined) continue;
        			gsCmpntList += this.gfn_getCmpntPath(arrContents[i])+"\t"+arrContents[i].text+"\n";
        		}else if (arrContents[i] instanceof nexacro.Div){
        			this.gfn_getCompTextList(arrContents[i],"");
        		}else if (arrContents[i] instanceof nexacro.Tab){
        			var arrTabContents = arrContents[i].components;

        			for (var j = 0; j < arrTabContents.length; j++) {
        				gsCmpntList += this.gfn_getCmpntPath(arrTabContents[j])+"\t";
        				gsCmpntList += arrTabContents[j].text+"\n";

        				this.gfn_getCompTextList(arrTabContents[j],"");
        			}
        		}
        	}

        	if(sMode == "A"){
        		this.alert(gsCmpntList);
        	}
        }

        this.gfn_popupTheme = function(objForm,objEdit){

         	if ( !objForm.isValidObject("pdiv_themeColor") ){
        		var objPdiv = new PopupDiv();
        		objPdiv.init("pdiv_themeColor", 0, 0, 180, 80);
        		objForm.addChild(objPdiv.name, objPdiv);
        		objPdiv.set_url("com.base::themeColor.xfdl");
        		objPdiv.show();
         	}

        	var pos = Eco.XComp.PositionSize.getPopupPosition(objEdit, 155,156, "vert", 2);

        	console.log(pos);

        	objForm.pdiv_themeColor.trackPopup(pos[1], pos[2],null,null, "fn_callbackForPopupdiv");
        }




        /**
        	======================================
        	formToCalrendar Start 2022.01.26
        	======================================
        */

        /**
        * @description 	   : FromToCalendar 드롭다운 버튼 onclick 이벤트
        */
        this.gfnFromToCalendarDropButton_onclick = function(obj,e)
        {
        	//설정정보 가져오기
        	var objConfig = obj.config;

        	//드롭다운 리스트 호출 함수 실행
        	this.gfnShowDropFromToCalPop(objConfig);
        };

        /**
        * @description 	     : FromToCalendar 초기화 함수
        * @param objConfig   : 설정정보 오브젝트
        * @return            : 없음
        */
        this.gfnFromToCalendar = function(objConfig)
        {

        	console.log('=== gfnFromToCalendar ===');
        	console.log(objConfig);

        	//시작일 Calendar 컴포넌트 가져오기
        	var objCalStart =  objConfig.calstart;

        	//종료일 Calendar 컴포넌트 가져오기
        	var objCalEnd = objConfig.calend;

        	//드롭다운 버튼 컴포넌트 가져오기
        	var objBtnDropdown = objConfig.btndrop;

        	//FromToCalendar 드롭다운 팝업 만들기 함수 호출
        	var objFromToCalPop = this.gfnCreateFromToCalPop(objConfig);

        	//팝업 컴포넌트 Config정보에 담기
        	objConfig.popdrop = objFromToCalPop;

        	//드롭다운 버튼 사용자 변수에 Config정보 설정
        	objBtnDropdown.config = objConfig;

        	//기본 드롭다운 버튼 숨기기
        	//objCalStart.set_buttonsize("0");
        	//objCalEnd.set_buttonsize("0");

        	this.gfnShowDropFromToCalPop(objConfig);

        	//드롭다운 버튼 클릭 이벤트 생성
        	//objBtnDropdown.addEventHandler("onclick", this.gfnFromToCalendarDropButton_onclick, this);
        }

        /**
        * @description 	     : FromToCalendar 드롭다운 팝업 만들기 함수
        * @param objConfig   : 설정정보 오브젝트
        * @return            : 드롭다운 팝업 오브젝트
        */
        this.gfnCreateFromToCalPop = function(objConfig)
        {

        	console.log('=== gfnCreateFromToCalPop ===');

        	var i;
        	var rtn;
        	var objFromToCalPop;
        	var objForm;

        	//드롭다운 팝업 ID 만들기
        	var sFromToCalPopId = objConfig.btndrop.id+"_dropdownpop";

        	console.log('=== sFromToCalPopId : '+sFromToCalPopId);

        	//기존에 생성된 팝업이 있을 경우 가져오기
        	if(this.gfn_isEmpty(this.components[sFromToCalPopId])==false)
        	{
        		//기존에 생성된 팝업을 리턴값으로 설정
        		rtn = this.components[sFromToCalPopId];
        	}
        	//기존에 생성된 팝업이 없을 경우 만들기
        	else
        	{

        		console.log('=== 기존에 생성된 팝업이 없을 경우');

        		//드롭다운 팝업용 PopupDiv 생성
        		objFromToCalPop = new PopupDiv(sFromToCalPopId, 0, 0, 0, 0);
        		this.addChild(objFromToCalPop.name, objFromToCalPop);

        		//프로젝트 디자인에 맞게 설정 필요
        		objFromToCalPop.set_background("#ffffff");
        		objFromToCalPop.set_border("1px solid #000000");

        		objFromToCalPop.show();

        		//url연결 후 후속 처리를 위해 sync로 변경
        		objFromToCalPop.set_async(false);
        		objFromToCalPop.set_url("com.base::fromToCalendar.xfdl");

        		//드롭다운 팝업에 사용자 변수 Config정보 설정
        		objFromToCalPop.config = objConfig;

        		//생성된 드롭다운 팝업을 리턴값으로 설정
        		rtn = objFromToCalPop;
        	}

        	//드롭다운 팝업 리턴
        	return rtn;
        };

        /**
        * @description 	 	 : 드롭다운 팝업 호출 함수
        * @param objConfig   : 설정정보 오브젝트
        * @return        	 : 없음
        */
        this.gfnShowDropFromToCalPop = function(objConfig)
        {

        	console.log('=== gfnShowDropFromToCalPop ===');

        	var nLeft;
        	var nTop;

        	//시작일 Calendar 컴포넌트 가져오기
        	var objCalStart = objConfig.calstart;

        	//드롭다운 버튼 컴포넌트 가져오기
        	var objDropButton = objConfig.btndrop;

        	//드롭다운 팝업 컴포넌트 가져오기
        	var objFromToCalPop = objConfig.popdrop;

        	//드롭다운 팝업 데이터 변경 함수 호출
        	this.gfnChangeFromToCalPopValue(objConfig);

        	//표현될 드롭다운리스트의 사이즈 계산
        	nLeft = 0;
        	nTop = objDropButton.getOffsetHeight();
        	nWidth = 470;
        	nHeight = 230;

        	//드롭다운리스트 호출
        	//objFromToCalPop.trackPopupByComponent(objCalStart, nLeft, nTop, nWidth, nHeight);
        	objFromToCalPop.trackPopupByComponent(objCalStart, nLeft, nTop, nWidth, nHeight);
        }

        /**
        * @description 	 			: 드롭다운 팝업 데이터 변경 함수
        * @param objConfig   		: 설정정보 오브젝트
        * @return        			: 없음
        */
        this.gfnChangeFromToCalPopValue = function(objConfig)
        {

        	console.log('=== gfnChangeFromToCalPopValue ===');

        	//시작일 Calendar 컴포넌트 가져오기
        	var objCalStart =  objConfig.calstart;

        	//종료일 Calendar 컴포넌트 가져오기
        	var objCalEnd = objConfig.calend;

        	//드롭다운 팝업 하위 폼 가져오기
        	var objTargetForm = objConfig.popdrop.form;

        	//데이터 변경함수 호출
        	objTargetForm.fnSetFromToDate(objCalStart.value, objCalEnd.value);
        }
        /**
        	======================================
        	formToCalrendar End 2022.01.26
        	======================================
        */

        /*
        	////////////////////////////////////////////////////////////////////////////////////////////////////
        		FUNCTION LIST
        	////////////////////////////////////////////////////////////////////////////////////////////////////

        	1. gfnIsString	 		: string 여부 반환
        	2. gfnIsNumber	 		: number 여부 반환
        	3. gfnIsBoolean	 		: boolean 여부 반환
        	4. gfnIsNull	 		: null 여부 반환
        	5. gfnIsUndefined		: undefined 여부 반환
        	6. gfnIsObject	 		: object 여부 반환
        	7. gfnIsArray	 		: array 여부 반환
        	8. gfnIsDate	 		: date 여부 반환
        	9. gfnIsFunction		: function 여부 반환
        	10. gfnIsRegExp	 		: regExp 여부 반환
        	11. gfnIsPrimitive		: primitive type (undefined, null, boolean, string, number) 여부 반환
        	12. gfnIsEmpty	 		: 빈값 여부 반환
        	13. gfnIsXComponent		: nexacro component 여부 반환
        	14. gfnIsSpace	 		: space 여부 반환
        	15. gfnIif	 			: 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환
        	16. gfnDecode	 		: 입력된 값 또는 수식을 검사해 적당한 값을 반환
        	17. gfnGetUniqueId		: 유일한 ID 를 반환
        	18. gfnGetSequenceId	: Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
        	19. gfnFormat	 		: 문자열 내의 {0},{1}...{n}값을 전달받은 arguments로 치환
        */

        this._toString = (Object.prototype.toString);
        this._hasOwnProperty = (Object.prototype.hasOwnProperty);
        this._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102];	//alphabet character code => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
        this._formatRegExp = /\{(\d+)\}/g;			//문자열 {n}… 값을 검색후 결과를 저장하기위한 정규식

        /**
         * value의 string 여부 반환
         * @param {*} value 확인할 value.
         * @return {boolean} string 여부.
         * @example
         * trace(this.gfnIsString("test string!!!"));	// output : true
         * trace(this.gfnIsString(1234));	// output : false
         * @memberOf this
         */
        this.gfnIsString = function(value)
        {
        	return typeof value === 'string';
        };

        /**
         * value의 number 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} number 여부.
         * @example
         * trace(this.gfnIsNumber(1234));	// output : true
         * trace(this.gfnIsNumber("1234"));	// output : false
         * @memberOf this
         */
        this.gfnIsNumber = function(value) {
        	return typeof value === 'number' && isFinite(value);
        };

        /**
         * value의 boolean 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} boolean 여부.
         * @example
         * trace(this.gfnIsBoolean(true));	// output : true
         * trace(this.gfnIsBoolean("true"));	// output : false
         * @memberOf this
         */
        this.gfnIsBoolean = function(value)
        {
        	return typeof value == 'boolean';
        };

        /**
         * value의 null 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} null 여부.
         * @example
         * trace(this.gfnIsNull(null));	// output : true
         * var a; // undefined
         * trace(this.gfnIsNull(a));	// output : false
         * trace(this.gfnIsNull(""));	// output : false
         * @memberOf this
         */
        this.gfnIsNull = function(value)
        {
        	return value === null;
        };

        /**
         * value의 undefined 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} undefined 여부.
         * @example
         * var a;
         * trace(this.gfnIsUndefined(a));	// output : true
         *
         * var a = "";
         * trace(this.gfnIsUndefined(a));	// output : false
         * @memberOf this
         */
        this.gfnIsUndefined = function(value)
        {
        	return value === undefined;
        };

        /**
         * value의 Object 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} Object 여부.
         * @example
         * var o = new Object();
         * trace(this.gfnIsObject(o));	// output : true
         *
         * var o = {};
         * trace(this.gfnIsObject(o));	// output : true
         *
         * var o = [1,2,3];
         * trace(this.gfnIsObject(o));	// output : false
         *
         * var o = new Button();
         * trace(this.gfnIsObject(o));	// output : false
         *
         * var o = new Rect();
         * trace(this.gfnIsObject(o));	// output : false
         *
         * @memberOf this
         */
        this.gfnIsObject = function(value)
        {
        	var pThis = this;

        	if ( value === null || value === undefined ) return false;

        	// nexacro Component
        	if ( pThis.gfnIsXComponent(value) ) return false;

        	// nexacro Object (e.g. Dataset)
        	if( value instanceof nexacro.Object ) return false;

        	return typeof value == "object" &&
        		   'constructor' in value &&
        		   value.constructor === Object;
        };

        /**
         * value의 Array 여부 반환.
         * @function gfnIsArray
         * @param {*} value 확인할 value.
         * @return {boolean} Array 여부.
         * @example
         * var a = new Array();
         * trace(this.gfnIsArray(a));	// output : true
         *
         * var a = [1,2,3];
         * trace(this.gfnIsArray(a));	// output : true
         * @memberOf this
         */
        this.gfnIsArray = Array.isArray ? function(value) {
        	return Array.isArray(value);
        }:
        function(value) {
        	var pThis = this;
        	return pThis._toString.call( value ) === '[object Array]';
        };

        /**
         * value의 Date 여부 반환.
         * @param {date} value 확인할 value.
         * @return {boolean} Date 여부.
         * @example
         * var a = new Date();
         * trace(this.gfnIsDate(a));	// output : true
         *
         * var a = "20130501";
         * trace(this.gfnIsDate(a));	// output : false
         * @memberOf this
         */
        this.gfnIsDate = function(value)
        {
        	var pThis = this;

        	return pThis._toString.call( value ) === '[object Date]';
        };

        /**
         * value의 Function 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} Function 여부.
         * @example
         * trace(this.gfnIsFunction(this.gfnIsFunction));	// output : true
         *
         * this.testFunction = function()
         * {
         * }
         * trace(this.gfnIsFunction(this.testFunction));	// output : true
         * @memberOf this
         */
        this.gfnIsFunction = function(value)
        {
        	var pThis = this;

        	return pThis._toString.call( value ) === '[object Function]';
        };

        /**
         * value의 RegExp 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} 정규식 패턴 여부.
         * @example
         * var a = new RegExp();
         * trace(this.gfnIsRegExp(a));	// output : true
         *
         * var a = /[a-z]/g;
         * trace(this.gfnIsRegExp(a));	// output : true
         * @memberOf this
         */
        this.gfnIsRegExp = function(value)
        {
        	var pThis = this;

        	return pThis._toString.call( value ) === '[object RegExp]';
        };

        /**
         * primitive type (undefined, null, boolean, string, number) 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} primitive type 여부.
         * @memberOf this
         */
        this.gfnIsPrimitive = function(value)
        {
        	return value === null || /^[usbn]/.test(typeof value);
        };

        /**
         * value의 빈값 여부 반환.<br>
         * 1. null, undefined type : true 반환<br>
         * 2. string, array type : length 가 0인 경우 true 반환<br>
         * 3. object type : 하위 속성이 존재할 경우 true 반환<br>
         * 4. boolean, number, date type : false 반환
         *
         * @param {*} value 확인할 value.
         * @return {boolean} empty 여부.
         * @example
         * var a;	// undefined
         * trace(this.gfnIsEmpty(a));	// output : true
         *
         * var a = null;	// null
         * trace(this.gfnIsEmpty(a));	// output : true
         *
         * var a = "";	// string
         * trace(this.gfnIsEmpty(a));	// output : true
         *
         * var a = "abc";	// string
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * var a = [];	// array
         * trace(this.gfnIsEmpty(a));	// output : true
         *
         * var a = [1,2,3];	// array
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * var a = new Array();	// array
         * trace(this.gfnIsEmpty(a));	// output : true
         *
         * var a = new Array(3);	// array
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * var a = {};	// object
         * trace(this.gfnIsEmpty(a));	// output : true
         *
         * var a = {a:'1', b:'2'};	// object
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * var a = new Object();	// object
         * trace(this.gfnIsEmpty(a));	// output : true
         *
         * var a = new Object();	// object
         * a.test = "abc";
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * var a = true;	// boolean
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * var a = 0;	// number
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * var a = new Date();	// date
         * trace(this.gfnIsEmpty(a));	// output : false
         *
         * @memberOf this
         */
        this.gfnIsEmpty = function(value)
        {
        	// null, undefined ==> true
        	if ( value == null ) return true;

        	var pThis = this;

        	// String, Array ==> length == 0
        	if ( pThis.gfnIsString(value) || pThis.gfnIsArray(value) )
        	{
        		return value.length == 0 ? true : false;
        	}
        	else if ( pThis.gfnIsObject(value) )
        	{
        		for (var p in value)
        		{
        			if ( value.hasOwnProperty(p) )
        			{
        				return false;
        			}
        		}
        		return true;
        	}

        	return false;
        };

        /**
         * value의 nexacro component 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} nexacro component 여부.
         * @example
         * var a = new Button();		//Component
         * trace(this.gfnIsXComponent(a));	// output : true
         *
         * var a = new Dataset();		//InVisible Object
         * trace(this.gfnIsXComponent(a));	// output : false
         *
         * var a = new String();		//Object
         * trace(this.gfnIsXComponent(a));	// output : false
         *
         * @memberOf this
         */
        this.gfnIsXComponent = function(value)
        {
        	if ( value === null || value === undefined  ) return false;

        	return value instanceof nexacro.Component;
        };

        /**
         * value의 Space 여부 반환.
         * @param {*} value 확인할 value.
         * @return {boolean} Space 여부.
         * @example
         * var a = " ";
         * trace(this.gfnIsSpace(a));	// true
         *
         * var a = "\t";
         * trace(this.gfnIsSpace(a));	// false
         * @memberOf this
         */
        this.gfnIsSpace = function(value)
        {
        	return value == ' ';
        };

        /**
         * 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
         * @param {*} expr 비교할 값. expr의 값으로 True/False 여부를 확인합니다.
         *                 expr이 Integer인경우 0이면 False아니면 True인식합니다.
         * @param {*} trueValue expr이 True에 해당하는 값일 경우 Return 되는 값.
         * @param {*} falseValue expr이 False에 해당하는 값일 경우 Return 되는 값.
         * @return {*} expr에 따라 Return 된 값.
         * @example
         *
         * trace(this.gfnIif(2-1=1, "True", "False")); // output : True
         *
         * var a = 98;
         * var b = this.gfnIif(a > 100, 100, a);
         * trace(b);	// output : 98
         *
         * @memberOf this
         */
        this.gfnIif = function(expr, trueValue, falseValue)
        {
        	return expr ? trueValue : falseValue;
        };

        /**
         * 입력된 값 또는 수식을 검사해 적당한 값을 반환.<br>
         * decoce(비교값, CASE1, 결과값1 [, CASE2, 결과값2, ... ], 디폴트 값);<br>
         * 표현식의 값이 기준값1이면 값1을 출력하고, 기준값2이면 값2를 출력한다.<br>
         * 그리고 기준값이 없으면 디폴트 값을 출력한다.<br>
         * @param {*} * 1. 비교값
         * @param {*} * 2. CASE
         * @param {*} * 3. 결과값 (2,3 반복)
         * @param {*=} * (2,3 반복)
         * @param {*=} * 4.디폴트값
         * @return {*} decode에 의해서 선택된 값.
         * @example
         * trace(this.gfnDecode("1", "1", "One", "2", "Two", "Default")); // output : One;
         *
         * trace(this.gfnDecode(100, 1, "일", 10, "십", 100, "백"));	// output : 백
         *
         * @memberOf this
         */
        this.gfnDecode = function()
        {
        	var i;
        	var count = arguments.length;
        	for( i = 1 ; i < count ; i+=2 )
        	{
        		if( arguments[0] === arguments[i] )
        		{
        			return arguments[i+1];
        		}
        	}

        	return arguments[i-2];
        };

        /**
         * 유일한 ID 를 반환
         * @public
         * @param {string=} prefix id 앞에 붙일 문자열
         * @param {string=} separator id 생성시 구분용 문자(default: '-' ).
         * @return {string} id
         * @example
         *
         * trace(this.gfnGetUniqueId());
         * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
         *
         * trace(this.gfnGetUniqueId("Button_"));
         * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
         *
         * trace(this.gfnGetUniqueId("", "_"));
         * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
         *
         * trace(this.gfnGetUniqueId("Button_", "_"));
         * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
         *
         * @memberOf this
         */
        this.gfnGetUniqueId = function(prefix, separator)
        {
        	if ( this.gfnIsEmpty(prefix) ) prefix = "";
        	if ( this.gfnIsEmpty(separator) ) {
        		separator = 45;
        	} else {
        		separator = separator.charCodeAt(0);
        	}

        	var pThis = this,
        		charcode = pThis._ALPHA_CHAR_CODES,
        		math = Math;
        	var seq = 0;
        	var seq0;
        	var tmpArray = new Array(36);
        	var idx = -1;

        	while (seq < 8)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}
        	seq = 0;
        	while (seq < 3)
        	{
        		tmpArray[++idx] = separator;//45 => "-", 95=> "_"
        		seq0 = 0;
        		while (seq0 < 4)
        		{
        			tmpArray[++idx] = charcode[math.random() * 16  | 0];
        			seq0++;
        		}
        		seq++;
        	}
        	tmpArray[++idx] = separator; //45 => "-", 95=> "_"

        	var tmpStr = (new Date()).getTime();
        	tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
        	seq = 0;
        	while (seq < 8)
        	{
        		tmpArray[++idx] = tmpStr.charCodeAt(seq);
        		seq++;
        	}
        	seq = 0;
        	while (seq < 4)
        	{
        		tmpArray[++idx] = charcode[math.random() * 16 | 0];
        		seq++;
        	}

        	return prefix + String.fromCharCode.apply(null, tmpArray);
        }

        /**
         * Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
         * @public
         * @param {form} prefix 순번 앞에 붙일 문자열
         * @param {string} prefix 순번 앞에 붙일 문자열
         * @return {string} id
         * @example
         *
         * // this = Form
         * trace(this.gfnGetSequenceId(this, "Button")); // output : Button0
         * trace(this.gfnGetSequenceId(this, "Button")); // output : Button1
         *
         * // this = Form
         * trace(this.gfnGetSequenceId(this, "chk_")); // output : chk_0
         * trace(this.gfnGetSequenceId(this, "chk_")); // output : chk_1
         *
         * @memberOf this
         */
        this.gfnGetSequenceId = function(form, prefix)
        {
        	if ( this.gfnIsEmpty(form) )
        	{
        		trace("1st argument doesn't exist !!");
        		return null;
        	}

        	if ( this.gfnIsEmpty(prefix) )
        	{
        		trace("2nd argument doesn't exist !!");
        		return null;
        	}

        	if ( !(form instanceof Form) )
        	{
        		trace("1st argument must be a Form !!");
        		return null;
        	}

        	var cache = form._sequenceIdCache;
        	if ( this.gfnIsEmpty(cache) )
        	{
        		cache = form._sequenceIdCache = {};
        	}

        	var sequence = cache[prefix];
        	if ( this.gfnIsEmpty(sequence) )
        	{
        		sequence = -1;
        	}
        	sequence++;

        	cache[prefix] = sequence;

        	return prefix + sequence;
        }

        /**
         * 문자열 내의 {0},{1}...{n}값을 전달받은 arguments로 치환.
         * @param {string} str 대상 문자열.
         * @param {arguments} arguments 식별자 {N}을 대체할 값.
         * @return {string} 치환된 문자열.
         * @requires this._formatRegExp
         * @example
         * var str = "I {0} a {1} {2}.";
         * this.format(str, "am", "cool", "guy"); //return "I am a cool guy."
         *
         * @memberOf this
         */
        this.gfnFormat = function()
        {
        	var str = arguments[0];
        	var args;

        	var iterant = arguments;

        	if (!iterant || !iterant.length)
        	{
        		args = [];
        	}else{
        		if ( this.gfnIsArray(iterant) )
        		{
        			if ( iterant.length == 1 ) args = iterant;
        			else if ( iterant.length == 2 ) args = iterant.slice(start);
        			else args = iterant.slice(start, end);
        		}else{
        			if (typeof iterant === "string")
        			{
        				iterant = iterant.split("");
        			}

        			var i, array = [],
        			end = iterant.length;

        			for (i = 1; i < end; i++)
        			{
        				array.push(iterant[i]);
        			}

        			args = array;
        		}
        	}

        	return str.replace(this._formatRegExp, function(m, i) {
        		return args[i];
        	});
        }


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
