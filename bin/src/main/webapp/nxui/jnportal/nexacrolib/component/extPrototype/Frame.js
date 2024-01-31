/**
*  컨설팅 표준화
*  @FileName      Frame.js
*  @Creator       parkmg
*  @CreateDate 	  2023.01.20
*  @Desction      Frame 관련 처리
************** 소스 수정 이력 ***********************************************
*  date          Modifier    Description
*******************************************************************************
*  2023.01.20    parkmg 	 Template 적용
*  2023.02.10    parkmg 	 Grid rowStatus 추가
*******************************************************************************/

var pForm = nexacro.Form.prototype;

/**
* @class frame open  <br>
* @param {String} sMenuId - 화면ID
* @param {String} sPreFix - 경로
* @param {String} sArgment 
* @return N/A
* @example 
* this.gfnAddPage(strMenuId, strPreFix);
*/
pForm.gfnAddPage = function(sMenuId, sPreFix, sArgment)
{
	// Null Check
	if (this.gfnIsNull(sMenuId) || this.gfnIsNull(sPreFix)){
		return false;
	}
	var objApp = nexacro.getApplication();
	var objMenuDs = objApp.gdsMenu; 		//글로벌데이터셋 메뉴
	var objOpenDS = objApp.gdsOpenMenu; //글로벌데이터셋 오픈메뉴
	
	//workFrameset 
	var objWorkFrame = objApp.gvWorkFrameset;
	
	//글로벌데이터셋에서 현재ID에 맞는 로우검색
	var nFindrow = objMenuDs.findRow("MENU_ID",sMenuId);
	
	if( nFindrow < 0 ) return false;
	
	//make form id
	var sFormId = "WORK_FRAME_"+sMenuId;
	var sMenuNm = objMenuDs.getColumn(nFindrow,"MENU_NM");
	
	// Finding existence
	var nOpenRow;
	      nOpenRow = objOpenDS.findRow("FORM_ID", sFormId);
	
	var objPage;
		  objPage = objWorkFrame.all[sFormId];
		  
	if (objPage != null || nOpenRow > -1) {
			objPage.form.setFocus();
			var objMdi = objApp.gvNaviFrame;
			objMdi.form.fnActiveTab(sFormId);
			return;
	}
	
	// Check limit open pages
	var nLimitCnt = objOpenDS.getRowCount();
	if (nLimitCnt == 10) {
		alert("최대열개까지열수있습니다.");
		return;
	}
	
	//create childFrame
	var objNewFrame;
	objNewFrame = new ChildFrame();
	objNewFrame.init(sFormId, 0, 0, 1368, 818, null, null, "Frame::frameWork.xfdl");
	objWorkFrame.addChild(sFormId, objNewFrame);
	
	objNewFrame.ARG_FORM_URL	= sPreFix;
	objNewFrame.ARG_FORM_ID		= sFormId;
	objNewFrame.ARG_MENU_ID		= sMenuId;
	objNewFrame.ARG_MENU_NM		= sMenuNm;
	objNewFrame.set_titletext(sMenuNm); 
	objNewFrame.set_resizable(true);
	objNewFrame.set_openstatus("maximize");
	objNewFrame.set_layered(false);
	objNewFrame.set_showtitlebar(false);
	objNewFrame.set_showstatusbar(false);
	objNewFrame.set_showcascadetitletext(false);
	
	// It is Temp.
	objNewFrame.set_background("white");
	objNewFrame.show();
	//openDs에넣기
	var nAddRow = objOpenDS.addRow();
	objOpenDS.setColumn(nAddRow, "MENU_ID",		sMenuId);
    objOpenDS.setColumn(nAddRow, "MENU_NM", 	sMenuNm);
    objOpenDS.setColumn(nAddRow, "MENU_PREFIX", sPreFix);
    objOpenDS.setColumn(nAddRow, "FORM_ID", 	sFormId);

	// Create MDI Tab
	objApp.gvNaviFrame.form.fnAddTab(sFormId, sMenuNm);
	return true;
};

/**
* @clsdd 탭 전체닫기 <br>
* @return N/A
* @example
*/
pForm.gfnAllClose = function()
{
	var objApp = nexacro.getApplication();
	var objRemove; //삭제대상
	var key;			//삭제FORM_ID
	
	var nFormCnt   = objApp.gvNaviFrame.form.tabNavi.getTabpageCount();
	var objOpenDs =  objApp.gdsOpenMenu;
	
	if( nFormCnt < 0 ) return false;
	
	var arrTab = new Array();
	for( var i=nFormCnt-1; i >= 0; i-- )
	{
		arrTab.push( objApp.gvNaviFrame.form.tabNavi.tabpages[i].name );
	}
	
	for( var j=0; j<arrTab.length; j++)
	{
		key = arrTab[j];
		objRemove = objApp.gvWorkFrameset.removeChild(key);
		
		if( objRemove != null ) objRemove.destroy();
		
		var idx = objApp.gvNaviFrame.form.tabNavi.tabindex;
		objApp.gvNaviFrame.form.tabNavi.removeTabpage(key);
		
		var nRow = objOpenDs.findRow("FORM_ID",key);
		objOpenDs.deleteRow(nRow);
	}
};

/**
* @class frame open <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnFormOnLoad(this);
*/
pForm.gfnFormOnLoad = function(objForm, pNode)
{
    var arrComp = objForm.components;
    var nLength = arrComp.length;
    var objGrid;
	var sLang = nexacro.getEnvironmentVariable("gvLang");
   
    for(var i = 0; i < nLength; i++)
    {
		if(arrComp[i] instanceof nexacro.Div)
		{
			this.gfnFormOnLoad(arrComp[i].form, "Div"); //재귀함수
		}
		else if(arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;
			
			for(var j = 0; j < nPages; j++)
			{
				this.gfnFormOnLoad(arrComp[i].tabpages[j].form, "Tab") ; //재귀함수
			}
		}
		else if(arrComp[i] instanceof nexacro.Grid)
		{
			objGrid = arrComp[i];
			objGrid.set_cellsizingtype("col");                                   //Fixed Column Resizing 처리
			objGrid.set_cellmovingtype("col");                                   //moving처리
			objGrid.set_autoenter("select");                                     //Column Auto Edit & Select
		
 			objGrid.setEventHandler("onrbuttonup",this.gfnGridOnrbuttonup,this);
 			objGrid.addEventHandler("oncellclick",this.gfnGridOncellclick,this);
			
 			if(Eco.isEmpty(objGrid.nodatatext)){ 
				if(sLang=="ko"){
					objGrid.set_nodatatext("검색 결과가 없습니다.");
				}else if(sLang=="en"){
					objGrid.set_nodatatext("No results were found for your search."); 
				}
			}
			
			//grid sort 초기화
			if(objGrid["nosort"] == undefined){
			//	this.gfn_initGridHeadClickSort(objGrid);
			}else if(objGrid.nosort != "true"){
			//	this.gfn_initGridHeadClickSort(objGrid);
			}
			
			var objBindDataset = objGrid.getBindDataset();
			
			if(objBindDataset) {
				var isUpCtrl = objBindDataset.updatecontrol;
				
				if(isUpCtrl) {
					objBindDataset.addEventHandler("onvaluechanged", this.gfnDatasetOnvaluechanged, this);
					objGrid.addEventHandler("oninput", this.gfnGridOninput, this);
					objBindDataset.addEventHandler("onload", this.gfnDatasetOnload, this);
					
					for(var j = 0; j < objGrid.getCellCount("Body"); j++){
					
						if(!this.gfnIsNull(objGrid.getCellProperty("Body",j,"text"))){
						
							if(objGrid.getCellProperty("Body",j,"text").replace("bind:","") == "rowCheck"){
								objBindDataset.addEventHandler("cancolumnchange", this._datasetUpdateControlFalse, this);
								objBindDataset.addEventHandler("oncolumnchanged", this._datasetUpdateControlTrue, this);
							}
							else if(objGrid.getCellProperty("Body",j,"text").replace("bind:","") == "rowStatus"){
								objGrid.setCellProperty("Body", j, "expr", "rowStatus == 'inserted' ? 'C' : rowStatus == 'updated' ? 'U' : rowStatus == 'deleted' ? 'D' : ''");
								break;
							}
						}
					}
				}
			}
			
			// ?? grid - change lang bind datacolumn in grid
			
		}
    }
	
	// componet lang
	if(!pNode && sLang != "ko")
	{
		var nFormId = this.name;
		var nLang = nexacro.getEnvironmentVariable("gvLang");
		
		var strMLFilter = "formId == '" + nFormId + "' && langId == '" + nLang + "'";
		var gdsML = nexacro.getApplication().gdsCompLanguage;
		gdsML.filter(strMLFilter);
		
		// component lang 변경
		for(var i = 0; i < gdsML.rowcount; i++){
			var sCompId = gdsML.getColumn(i, "compId");
			var sCompText = gdsML.getColumn(i, "compText");
			var sComp;
			
			if(sCompId){
				var arrComp = sCompId.split(".");
				
				for(var j = 0; j < arrComp.length; j++){
					if(j == 0) sComp = this[arrComp[j]];
					else       sComp = sComp[arrComp[j]];
					
					if(!sComp) break;
				}
			}
			
			if(sComp){
				
				if(sComp instanceof nexacro.Grid){
					var sCompIndex = gdsML.getColumn(i, "compIndex");
					sComp.setCellProperty("head", sCompIndex, "text", sCompText);
				}else{
					sComp.set_text(sCompText);
				}
			}
		}
		
		// 1. component - change lang bind datacolumn   
		var fBinds = this.binds;
		var fBindItem = null;
		
		for(var i = 0; i < fBinds.length; i++){
			fBindItem = fBinds[i];
			console.log('fBindItem: ', fBindItem);
			
			var bindComp = fBindItem._comp;
			
			if(bindComp instanceof nexacro.Combo){
				
				var dataCol = bindComp.datacolumn;
				// "LINE_CODE_NM_KR" 이면
				if(dataCol == "LINE_CODE_NM_KR"){
					// inner dataset 에 LINE_CODE_NM_EN 존재확인
					var innserDS = bindComp._innerdataset;
					
					if(innserDS.getColumnInfo("LINE_CODE_NM_EN")){
						// datacolumn 변경
						bindComp.set_datacolumn("LINE_CODE_NM_EN");
					}
				}
			}
			// List Box
			// Radio
		}
		
		// 2. grid - change lang bind datacolumn in grid
		
		
		
		
	}
};

/**
 * @class left메뉴 클릭시 해당화면 호출함수 <br>
 * @param {Object} oObj 
 * @return N/A
 * @example 
 */
pForm.gfnCall = function(oObj)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp = nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenMenu;		//열린 dataset	
	var ds   = oObj.ds;							//넘어온 dataset
	var nRow = oObj.nRow;						//선택된 현재 row
	var aArgs = this.gfnIsNull(oObj.oArg) ? "" : oObj.oArg;   //넘어온 arguments
	var sMenuId;
	
	if (!this.gfnIsNull( oObj.sMenuId)){
		sMenuId = oObj.sMenuId;
	}else{
		sMenuId = ds.getColumn(nRow, objApp.gvMenuColumns.menuId);
	}	
	
	var winid = gdsOpen.lookup(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.winId);

	if (!this.gfnIsNull(winid))
	{
		if (objApp.gvMdiFrame.form.isActiveFrame(winid, aArgs) == true)
		{
			objApp.gvMdiFrame.form.fnMoveTab(winid);
			return;
		}
	}
	
	//열린메뉴 체크( application.gvMax = 8)	
	if( objApp.gvMax <= gdsOpen.getRowCount() ){
		          
		alert(objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
		return false;
	}
	
	this.gfnNewMdi(sMenuId, nRow, aArgs);
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Array} aArgs - arguments
 * @return N/A
 */
pForm.gfnNewMdi = function(sMenuId,  nRow, aArgs)
{
	var objApp = nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenMenu;		//열린 dataset
	var gdsMenu = objApp.gdsMenu;
	var winid = "win" + sMenuId + "_" + gdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);		
	var strTitle = gdsMenu.lookupAs("menuId", sMenuId, "menuNm");	
	var sPageUrl = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.pageUrl);
	var sMenuNm = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.menuNm);
	var sGroupId = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);

	if(this.gfnIsNull(sPageUrl)) return;		//pageURl 이 없으면 return
	this.gfnSetOpenMenuDs(winid, sMenuId, strTitle, sPageUrl, sGroupId);	// 열린메뉴 화면 삽입

	var objNewWin = new ChildFrame;
	objNewWin.init(winid, 0, 0, objApp.gvWorkFrame.getOffsetWidth() - 0, objApp.gvWorkFrame.getOffsetHeight() - 0);
	objApp.gvWorkFrame.addChild(winid, objNewWin);

	objNewWin.set_tooltiptext(winid);
	objNewWin.arguments = [];
	objNewWin.set_dragmovetype("all");
	objNewWin.set_showtitlebar(false);
	objNewWin.set_resizable(true);
	objNewWin.set_openstatus("maximize");
	objNewWin.set_titletext( strTitle);
	objNewWin.set_showcascadetitletext(false);
	objNewWin.arguments["winKey"] = winid;
	objNewWin.arguments["menuId"] = sMenuId;
	objNewWin.arguments["menuNm"] = sMenuNm;
	objNewWin.arguments["pageUrl"] = sPageUrl;
	objNewWin.arguments["aArgs"] = aArgs;
	objNewWin.set_formurl("frame::frameWork.xfdl");
	objNewWin.show();

	objApp.gvMdiFrame.form.fnAddTab(winid, strTitle);   //mdi tab button add	
	objApp.gvMdiFrame.form.isActiveFrame(winid);		
};

/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} winid
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfnSetOpenMenuDs = function(winid, menuid, strTitle, spageUrl, sGroupId)
{
	var objApp = nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenMenu ;  //열린 dataset
	var nRow = gdsOpen.addRow();
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.winId, winid);
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.menuId, menuid);
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.title, strTitle);	
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.groupId, sGroupId);
	gdsOpen.setColumn(nRow, "pageUrl", spageUrl);
};

/**
 * 공통 그리드 마우스 우클릭 이벤트
 * @param {Grid} obj 그리드객체 
 * @param {GridMouseEventInfo} e 마우스이벤트
 * @return {void}
 */
pForm.gfnGridOnrbuttonup = function (obj, e)
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
};

/**
* 데이타셋 표현값 변경시 발생 이벤트(체크,상태 표시해주는 부분) 초기값에서 설정
* @param obj 데이타셋 object
* @param e 에러 object
* @return N/A
* @example
* @memberOf 
*/   
pForm.gfnDatasetOnvaluechanged = function(obj, e)
{
	if(obj.getColumnInfo("rowCheck") && !obj.getColumnInfo("rowStatus")) {
		this.gfnDatasetAddColumn(obj, "rowStatus", "STRING", 10);
	}
	// 상태값 표시 처리 - 'inserted' 인서트
	if(obj.getRowType(e.row) == Dataset.ROWTYPE_INSERT){
		if(e.columnid == ""){  // 행추가
			obj.setColumn(e.row, "rowStatus", "inserted");	//상태값
			obj.setColumn(e.row, "rowCheck", 1);	
		}
		return;
	}
	// 상태값 표시 처리 - 'updated' 업데이트
	if(e.row >-1 && e.col > -1) //컬럼 수정이 된 경우
	{
		var orgColValue;
		var sRowType = obj.getColumn(e.row,"rowStatus");	//상태값
		var newValue;
		var colId;
		var cCnt = 0;  // 변경건수
		
		if(e.columnid != "rowCheck" && e.columnid != "rowStatus"){  //체크, 상태 컬럼 제외
		
			for(var colidx = 0; colidx < obj.colcount; colidx = colidx + 1){
				orgColValue = obj.getOrgColumn(e.row, colidx);
				if(this.gfnIsNull(orgColValue)) orgColValue = "";
				
				newValue = obj.getColumn(e.row, colidx);
				if(this.gfnIsNull(newValue)) newValue = "";
				
				colId = obj.getColID(colidx);
				
				if(colId != "rowCheck" && colId != "rowStatus"){  //체크, 상태 컬럼 제외
				
					if(!Eco.equals(newValue, orgColValue) && sRowType != "inserted" && sRowType != "deleted"){
						cCnt++;
					}
				}
			}
 			
			if(cCnt > 0){
				obj.setColumn(e.row, "rowStatus", "updated");
				obj.setColumn(e.row, "rowCheck", 1);
			}else if(sRowType != "inserted" && sRowType != "deleted"){
				obj.setColumn(e.row, "rowStatus", null);
				obj.setColumn(e.row, "rowCheck", 0);
				obj.set_updatecontrol(false);
				obj.setRowType(e.row, Dataset.ROWTYPE_NORMAL);
				obj.set_updatecontrol(true);
			}
		}
	}
};

/**
* 그리드 마우스 클릭 이벤트
* rowCheck 클릭 C insert 행은 바로 삭제(Dataset onvaluechanged event 사용시 error)
* @param {object} obj Grid
* @return {object} e 그리드 클릭 이벤트 (nexacro.GridClickEventInfo)
* @return {void}
* @example     
*/    
pForm.gfnGridOncellclick = function(obj, e)
{
	var gType = obj.getCurEditType();
	
	if (gType == "combo" ) {
		obj.dropdownCombo();
	}
	else if(gType == "date") {
		obj.dropdownCalendar();
	}
	else if(gType == "checkbox"){
		if(obj.getCellProperty("Body",e.col,"text").replace("bind:","") == "rowCheck"){
			var ds = obj.getBindDataset();
			if(ds.getRowType(e.row) == Dataset.ROWTYPE_INSERT && ds.getColumn(e.row, "rowCheck") == 0)
				ds.deleteRow(e.row);
		}
	}
};

pForm._datasetUpdateControlFalse = function(obj,e)
{
	if(e.columnid=="rowCheck") obj.set_updatecontrol(false);
};

pForm._datasetUpdateControlTrue = function(obj,e)
{
	if(e.columnid=="rowCheck") obj.set_updatecontrol(true);
};

/**
* Grid input 값 변경시 dataset update로 rowStatus 즉시 적용
* @param obj Grid object
* @param e 에러 object
* @return N/A
* @example
* @memberOf 
*/   
pForm.gfnGridOninput = function(obj, e)
{
	var gType = obj.getCurEditType();
	
	if(gType == "text")
		obj.updateToDataset();
};

/**
* Dataset onload 시 Grid head check 해제
* @param obj Dataset object
* @param e event object
* @return N/A
* @example
* @memberOf 
*/   
pForm.gfnDatasetOnload = function(obj, e)
{
	this.gfnGridHeadUncheck(this, obj.id);
};

/**
* Grid head check 해제
* @param obj Form object
* @param dsId Dataset Id
* @return N/A
* @example
* @memberOf 
*/
pForm.gfnGridHeadUncheck = function(obj, dsId)
{
    var arrComp = obj.components;
    var objGrid;
   
    for(var i = 0; i < arrComp.length; i++)
    {
		if(arrComp[i] instanceof nexacro.Div)
		{
			this.gfnGridHeadUncheck(arrComp[i].form, dsId); //재귀함수
		}
		else if(arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;
			
			for(var j = 0; j < nPages; j++)
			{
				this.gfnGridHeadUncheck(arrComp[i].tabpages[j].form, dsId); //재귀함수
			}
		}
		else if(arrComp[i] instanceof nexacro.Grid)
		{
			var objGrid = arrComp[i];
			var dsBind = objGrid.getBindDataset();
			
			if(dsBind && dsBind.id == dsId){
				var hCellIdx = objGrid.getBindCellIndex("body", "rowCheck");
				objGrid.isGridCheckAll = 0;
				objGrid.setCellProperty("Head", hCellIdx, "expr", objGrid.isGridCheckAll);
			}
		}
	}	
};
