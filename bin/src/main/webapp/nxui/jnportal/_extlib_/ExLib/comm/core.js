/**
 * @fileoverview 프로젝트 메인프레임관련 공통함수
 */
if ( !JsNamespace.exist("Ex.core")  )
{

	/**
	 * @namespace
	 * @name Ex.core
	 * @author
	 * @memberof!  <global>
	 */
	JsNamespace.declare("Ex.core",{

         /**
 		 * 메뉴 param
 		 * @private
 		 * @type array
 		 * @memberOf Ex.core
 		 */
         o_menu : {},
		
		/**
		 * 폼 온로드시 폼 init 설정
		 * @param {xpComp} object
		 * @return
		 * @example
		 * @memberOf Ex.core
		 */
		init : function(obj,_height)
		{

		
		    var oComp = Eco.XComp.query(obj,"typeOf == 'Button' || typeOf == 'Grid' || typeOf == 'Combo' || typeOf == 'Edit' || typeOf == 'MaskEdit' || typeOf == 'TextArea'");

		    for(var i=0; i<oComp.length; i++)
		    {

		    }

		},
		
		/**
		 *폼 최초 로드 설정 값 setting
		 * @param {xpComp} object
		 * @return
		 * @example
		 * @memberOf Ex.core
		 */
		_set : function(obj,_height)
		{
		 
		   	
			//화면의 버튼권한 제어
		    //Ex.core._setAuth(obj);
		   //디버깅 단축키 생성 (ctrl+m)
		    //obj.setEventHandler("onkeydown", obj.gfn_formObj_onkeydown, obj);
	     	 
		    //form id setting		  
// 		    var stCurFormId = nexacro.getApplication().gv_curFormId;
// 		    if(Ex.util.isForm() == "M")
// 			{
// 				//화면 오픈시 페이징정보 초기화
// 				nexacro.getApplication().gds_pageInfo.clearData();
// 				nexacro.getApplication().gds_pageInfo.addRow();
// 			}
// 		    else
// 		    {
// 		    	stCurFormId = stCurFormId.split("::")[0] + "::" + Eco.XComp.getTopLevelForm(obj).titletext + ".xfdl";
// 		    }
		   
              
// 		    Eco.XComp.setUserProperty(obj, "_UserFormId", stCurFormId);
// 		    obj._loadGridFormat(obj);
		   
		    var oComp = Eco.XComp.query(obj,"typeOf == 'Button' || typeOf == 'Grid' || typeOf == 'Combo' || typeOf == 'Edit' || typeOf == 'MaskEdit' || typeOf == 'TextArea'");

		    for(var i=0; i<oComp.length; i++)
		    {
// 		   
// 		    	if(oComp[i].hasOwnProperty("_find") || oComp[i].hasOwnProperty("_excel") || oComp[i].hasOwnProperty("_format"))    //find 검색 컴퍼넌트
// 				{   
// 					if(oComp[i].hasOwnProperty("_find")){
// 						oComp[i].set_tooltiptext("Find");
// 						
// 					}else if(oComp[i].hasOwnProperty("_excel")){
// 					
// 						oComp[i].set_tooltiptext("Save excel");
// 					}else if(oComp[i].hasOwnProperty("_format")){
// 						
// 						oComp[i].set_tooltiptext("Save format");
// 					}
// 					
// 					
// 					oComp[i].setEventHandler("onclick", this.ffobj.gfn_grdNavi_onclick, this.ffobj);
// 				}
// 				 
// 				 Ex.core._setDefault(oComp[i]);
		    }
		   
// 		    if(Ex.util.isForm() == "M")
// 			{
//           
// 		    	if(obj.name == "div_work" || obj.name == "div_main"){
//                  
// 		    		 Ex.core._fh =  Eco.isEmpty(_height) ? 640 : (_height+145); //work size
// 		    		 Ex.core._onResize(obj);
// 		    	}
// 			}
// 		    else
// 		    {
// 		        obj.set_titletext('');	//팝업일경우 타이틀텍스트 삭제
// 		    	obj.resetScroll();
// 		    }
// 		    
// 		    if (Eco.isFunction(obj.form_init))
// 		    {
// 		    	obj["form_init"]();
// 		    }
		},

		/**
		* 화면안의 컨트롤의 default 속성을 설정한다.
		* @param {object} 컨트롤 객체
		* @return N/A
		* @example
		* @memberOf Ex.core
		*/
		_setDefault : function (obj)
		{
			var strType = obj.toString().toUpperCase();

			switch (strType)
			{
			
				case "[OBJECT GRID]":
				
					if (obj.autofittype == "none")
					{
						obj.set_cellsizingtype("col");
					}

					obj.set_autoenter("select");

					for (var nCell = 0; nCell < obj.getCellCount("Body"); nCell++)
					{
						obj.setCellProperty("Body", nCell, "editautoselect", true);
						obj.setCellProperty("Body", nCell, "combodisplayrowcount", 10);

						obj.setCellProperty("Body", nCell, "background","EXPR(comp.parent._gfn_grid_background(comp,currow))");
						obj.setCellProperty("Body", nCell, "background2","EXPR(comp.parent._gfn_grid_background(comp,currow))");
					}


					if(!obj.hasOwnProperty("_useSort") || (!obj.hasOwnProperty("_useSort") && obj._useSort != "N"))
					{
 					  obj.addEventHandler("onheadclick",this.ffobj._gridSort,this.ffobj);
					}

					if(!obj.hasOwnProperty("_useAllCheck") || (!obj.hasOwnProperty("_useAllCheck") && obj._useAllCheck != "N"))
					{
					    obj.addEventHandler("onheadclick",this.ffobj._setGridCheckAll,this.ffobj);
						
					}

					if(!obj.hasOwnProperty("_useCopy") || (!obj.hasOwnProperty("_useCopy") && obj._useCopy != "N"))
					{
					    obj.addEventHandler("onkeydown",this.ffobj._gridOnkeydown,this.ffobj);
					}
				
					 obj.addEventHandler("onkeyup",this.ffobj._gridOnkeyup,this.ffobj);
					
					break;
				case "[OBJECT COMBO]":
					
					
					if(obj.hasOwnProperty("_useprop")){
					
						if(obj._useprop == "true"){
							obj.set_autoselect('true');
							obj.set_type('search');
							obj.addEventHandler("oneditclick",this.ffobj._comboOnEditClick,this.ffobj);
						}
						
					}else{
						obj.set_autoselect('true');
						obj.set_type('search');
						obj.addEventHandler("oneditclick",this.ffobj._comboOnEditClick,this.ffobj);
					}
					
					if (obj.displayrowcount == -1)
					{
						obj.set_displayrowcount(10);
					}
				case "[OBJECT EDIT]":
				case "[OBJECT MASKEDIT]":
				case "[OBJECT TEXTAREA]":
				//	obj.set_autoselect(true);
					break;
				default:
					break;
			}
		},

		/**
		* 메뉴 아이디를  기준으로 신규 윈도우 화면을 생성하고 open 시킴
		* @param {string}  menuid 메뉴아이디
		* @return  N/A
		* @example
		* @memberOf Ex.core
		*/
		//openMenuForMDI : function (sMenuId,sMenuNm,sPageUrl,sMymenuYn,oArg,sDrillMenuYn,sNavigation,sLang)
		openMenuForMDI : function (sMenuId,sMenuNm,sPageUrl,sMymenuYn,oArg,sDrillMenuYn,sNavigation)
		{

			if (Eco.isEmpty(sMenuId))
			{
				return;
			}
			sMenuId = sMenuId.toString().trim();
			
			var nRow = -1;
			var menuFilterGrp ='';
			var sLang=""; //openMenuForMDI 메소드변경시 삭제
			Ex.core._callWorkForMDI(sMenuId,sMenuNm,sPageUrl,sMymenuYn,oArg,sDrillMenuYn,sNavigation,sLang);

		},

		/**
		* VFrameSet 메인, 업무화면 전환 처리
		* @param status - 메인, 업무화면 구분 문자열
		* @return  N/A
		* @example
		* @memberOf Ex.core
		*/
		mainView : function (status)
		{
			if(status && status == "home")
			{
				nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet.set_separatesize("36,0,*");
			}else
			{
				nexacro.getApplication().mainframe.VFrameSet.HFrameSet.VFrameSet.set_separatesize("36,*,0");  
			}

		},
		
		/**
		* gds_menu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴
		* @param  {string} sMenuid 메뉴아이디
		* @param  {object} oArgs 전달인자
		* @return  N/A
		* @example
         * Ex.core._callWork(1000);
		* @memberOf Ex.core
		*/
		_callWorkForMDI : function (sMenuId,sMenuNm,sPageUrl, sMymenuYn,oArg,sDrillMenuYn,sNavigation,sLang)
		{
			
			var strTitle,sTitleText;
			var sPgmId="";
			var sMenuAuth = "";
			var sViewNavigation="";
			
			if(sDrillMenuYn!="Y"){
				sPgmId = nexacro.getApplication().gds_menu.lookup("MENU_ID",sMenuId,"PGM_ID");
			}else{
				sPgmId = sMenuId;
				sMenuNm = nexacro.getApplication().gds_pgm.lookup("PGM_ID",sMenuId,"PGM_NM");
			}
			
			sViewNavigation = sMenuNm;
			var sUpId = sMenuId;
			var sUpNm = "";
			
			if(sDrillMenuYn!="Y"){
				while(!Eco.isEmpty(sUpId)){
					sUpId = nexacro.getApplication().gds_menu.lookup("MENU_ID",sUpId,"UPPER_MENU_ID");
					sUpNm = nexacro.getApplication().gds_menu.lookup("MENU_ID",sUpId,"MENU_NM");
					if(!Eco.isEmpty(sUpNm))
					{
						sViewNavigation = sUpNm + " > " + sViewNavigation;
					}
				}
			}else{
				sViewNavigation =sNavigation +" > " +sViewNavigation;
				sMenuNm = " [" + sMenuNm + "]";
			}
		    sViewNavigation += " [" + sPgmId + "]";
		    
			this.oMenu = {
				MENU_ID : sMenuId,
				MENU_NM : sMenuNm,
				PGM_PATH : sPageUrl,
				MENU_AUTH: sMenuAuth,
				VIEW_NAVIGATION: sViewNavigation,
				PARAM  : []

		    };

			if (!Eco.isEmpty(oArg) && typeof oArg == "object"){
			/*
				for ( var key=0; key<oArg.length;key++ ){
					if ( oArg.hasOwnProperty(key) ){
						this.o_menu.PARAM[key] = oArg[key];
					}
				}
				*/
			}
			
			this.oMenu.PARAM["menuId"]   =  sMenuId;
			this.oMenu.PARAM["menuNm"]   =  sMenuNm;
			this.oMenu.PARAM["pageUrl"]  =  sPageUrl;

			// Child Frame 생성
			var oChildFrame = nexacro.getApplication().MDIWORK.frames[sMenuId];

			if (oChildFrame == null) {
			
				//열수 있는 화면을 제한한다.
				if (nexacro.getApplication().MDIWORK.frames.length  > 8) {
					if (confirm("최대 8개창을 초과하였습니다. 첫번째 창을 닫으시겠습니까?")){
					//if (confirm(Ex.core.getMessage("COM_APP_0001", sLang, []))){
						nexacro.getApplication().FRAMETAB.form.fn_closeTab(0);
					} else{
						return;
					}
				}
				
				oChildFrame = new ChildFrame;
				oChildFrame.init(sMenuId,  0, 0, 1051, 768);
				nexacro.getApplication().MDIWORK.addChild(sMenuId, oChildFrame);		
				
				oChildFrame.set_formurl("frame::baseForm.xfdl");
        		oChildFrame.set_text("");
        		oChildFrame.set_titletext(sMenuNm);				
				oChildFrame.set_showtitlebar(false);
				oChildFrame.set_showstatusbar(false);
				oChildFrame.set_showcascadetitletext(true);
				oChildFrame.set_dragmovetype("none"); 
				oChildFrame.set_resizable(true);
				oChildFrame.set_openstatus("maximize");
				//oChildFrame.set_border("1px solid tranparent");

 				oChildFrame.menuObj  = this.oMenu;
 				oChildFrame.args  = oArg;
				oChildFrame.show();
 				nexacro.getApplication().FRAMETAB.form.fn_addTabPage(sMenuId, sMenuNm, sMymenuYn);       //Open Tab 처리	
				
			} else {
				nexacro.getApplication().FRAMETAB.form.fn_selectTabPage(sMenuId, sMymenuYn);
        		oChildFrame.setFocus();
				if(sDrillMenuYn=="Y"){
					oChildFrame.args  = oArg;
					oChildFrame.form.reload();
				}else{			
				/*
					if (confirm("이미 해당 메뉴가 열려있습니다. 기존 화면을 다시 여시겠습니까?")) {
					//if (confirm(confirm(Ex.core.getMessage("COM_APP_0002", sLang, [])))) {
						oChildFrame.args  = oArg;
						oChildFrame.form.reload();
					} 
					*/
				}
			}
			return oChildFrame ;			
		},
		
	    /**
		* 메세지 값을 문자열 치환하여 메세지 내용을 조회한다.
		* @param {string} sMsg 치활할 문자열
		* @param {json}   sReplaceJson json형태 문자열 
		* @return String, 변형문자열 실패시는 null
		* @example
		* @memberOf Ex.core
		*/
		replaceByJson : function (sMsg, sReplaceJson)
		{
			if(Eco.isEmpty(sReplaceJson)) return sMsg ;
			var	idx,sRegExp ;
			for(idx in sReplaceJson){
				sRegExp = "/"+idx+"/";
				sRegExp = eval("("+sRegExp+")");
				if(sRegExp == undefined) continue ;
				sReplaceText = sReplaceJson[idx];
				sMsg = sMsg.replace(sRegExp, sReplaceText);
			}
			return sMsg ;
		},

		getLangMsg : function (strVal,lang)
		{
			var nRow =nexacro.getApplication().gds_lang.findRowExpr(" PGM_ID=='"+this.pgmId+"'  && ITEM_ID=='"+strVal+"'");
			if(nRow < 0){
				nRow =nexacro.getApplication().gds_lang.findRowExpr(" PGM_ID=='COM' && ITEM_ID=='"+strVal+"'");
			}
			
			if (nRow >= 0){
				strVal =nexacro.getApplication().gds_lang.getColumn(nRow, lang);
			}
			
			return strVal;
		},
		/**
		* 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
		* @param {string}  sMsgId message id
		* @param {array}   arrParam msgArr[](메세지값으로 치환될 Parameter Array)
		* @param {string}  sType meesage type
		* @return {object} 팝업에 해당 메세지값을 표현
		* @example
		* Ex.core.showMsg("001",["1","건"],"alert");
		* @memberOf Ex.core
		*/
		showMsg : function (sMsgId,arrParam,sType,pgmId,lang)
		{
			this.pgmId=pgmId;
			var strMsg = Ex.core.getMessage(sMsgId, lang, arrParam);
			switch(sType)
			{
			   case "confirm":
				   return confirm(strMsg);
				   break;

				default:
					alert(strMsg);
					break;				   
			}
		},
		
		/**
		* 문자열으로 받은 메세지 치환해서 팝업창을 보여주는 함수
		* @param {string}  sMsg message String(치환할 메시지 문자열)
		* @param {json}   oReplaceJson json Object  
		* @param {string}  sType meesage type (confirm|alert)
		* @return {boolean} null : alert요청시,부정한 sReplaceJson일때 메시지를 찾을 수 없을 때
		*                   ture : confirm시 "OK" 누렀을때
		*                   false : confirm시 "CANCEL" 누렀을때
		* @example
		* Ex.core.showCodeMessage("paramName",'paramName:"홍길동",paramAge:"34"',"alert");
		* @memberOf Ex.core
		*/
		/*
		showMessage : function (sMsg,oReplaceJson,sType)
		{
			sMsg = Ex.core.replaceByJson(sMsg, oReplaceJson);
			switch(sType){
			   case "confirm" :
					return confirm(sMsg) ;
					break ;

				default:
					alert(sMsg) ;
					return null ;
					break ;
			}
		},	
			*/
		
	    /**
		* 메세지 값을 문자열 치환하여 메세지 내용을 조회한다.
		* @param {string} sMsgId 메세지ID
		* @param {array}  aArgs 토큰문자배열
		* @return String, 변형문자열
		* @example
		* @memberOf Ex.core
		*/
		getMessage : function (sMsgId, lang, aArgs)
		{
			var colNm="MSG";
			
			if(lang != "KOR"){
				colNm=lang+"_MSG";
			}
			
			if (Eco.isEmpty(sMsgId))
			{
				return "";
			}

			var sRtnMsg = nexacro.getApplication().gdsMessage.lookup("MSG_ID",sMsgId,colNm);

		    if(Eco.isEmpty(sRtnMsg))
		    {
		        sRtnMsg = sMsgId;
		    }

			if (Eco.isEmpty(aArgs))
			{
				return sRtnMsg;
			}

			var sType = typeof (aArgs);

			switch (sType)
			{
				case "object":
					if (aArgs.length > 0)
					{
						for (var i = 0; i < aArgs.length; i++)
						{
						
							var strVal  = aArgs[i];
							strVal= this.getLangMsg(strVal,lang);
							sRtnMsg = sRtnMsg.replace("\@",  this.getMessage(strVal,lang));
						}
					}
					else
					{
						
						var strVal  = aArgs[strName];
						strVal= this.getLangMsg(strVal,lang);
						sRtnMsg = sRtnMsg.replace("\@", this.getMessage(strVal,lang));
						
					}
					break;
				default:
					var strVal  =aArgs;
					strVal= this.getLangMsg(strVal,lang);
					sRtnMsg = sRtnMsg.replace("\@", this.getMessage(strVal,lang));
					break;
			}

			return sRtnMsg;
		},
		
	   /**
		* 팝업 오픈 실행 함수
		* @param {string}  oForm Form
		* @param {string}  sPopupId Popup Form의 ID
		* @param {string}  sUrl Popup Form  URL )
		* @param {object}  oArg Popup Form으로 전달될 Argument
		* @param {string}  sOption 옵션들
		* @param {string}  sPopupCallback 콜백함수
		* @example N/A
		* @memberOf Ex.core
		*/
		popup : function (oForm,sPopupId, sUrl, oArg, sOption, sPopupCallback)
		{

			var nLeft = -1;
			var nTop = -1;
			var nWidth = 1;
			var nHeight = 1;
			var bShowTitle = true;
			var bShowStatus = false;
			var bModeless = false;
			var bLayered = true;
			var nOpacity = 100;
			var bAutoSize = true;
			var bResizable = false;
			var bRound = false;
            var pThis =oForm;
            //this.ffobj = obj;
            
            var sPopupCallback = Eco.isEmpty(sPopupCallback) ? "gfn_popupAfter" : sPopupCallback;  

			var sTitleText = "";
			this.ff_preCurFormId = nexacro.getApplication().gv_curFormId;
		    nexacro.getApplication().gv_curFormId =  sUrl;

		    if(!Eco.isEmpty(oArg) && typeof oArg =="object" )
	    	{
        		for ( var key; key<oArg.length;oArg++ )
	    		{
	    		    if ( oArg.hasOwnProperty(key) )
	    		    {
	    		    	if(Eco.isUndefined(oArg[key])){
	    		    		oArg[key] = "";
	    		    	}
	    		    }
	    		}
	    	}else
	    	{
	    		oArg = {};
	    		
	    	}	

			var aVal = Eco.isEmpty(sOption) ? "" :sOption.split(",");

			for (var i=0; i<aVal.length; i++)
			{
				var aVal2 = aVal[i].trim().split("=");

				switch (aVal2[0])
				{
					case "top":
						nTop = parseInt(aVal2[1]);
						break;
					case "left":
						nLeft = parseInt(aVal2[1]);
						break;
					case "width":

						nWidth = nexacro.toNumber(aVal2[1].toString());

						break;
					case "height":
						nHeight = parseInt(aVal2[1]);
						break;
					case "title":
						bShowTitle = aVal2[1];
						break;
					case "titletext":
						sTitleText = aVal2[1];
						break;
					case "status":
						bShowStatus = aVal2[1];
						break;
					case "modaless":
						bModeless = aVal2[1];
						break;
					case "layered":
						bLayered = aVal2[1];
						break;
					case "opacity":
						nOpacity = aVal2[1];
						break;
					case "autosize":
						bAutoSize = aVal2[1];
						break;
					case "resizable":
						bResizable = aVal2[1];
						break;
					case "round":
						bRound = aVal2[1];
						break;

				}
			}

			var sOpenalign = "";

			sTitleText = (Eco.isEmpty(sTitleText)) ? Ex.core.getMessage(sPopupId) : sTitleText;

			if (nLeft == -1 && nTop == -1)
			{
				sOpenalign = "center middle";
		        nLeft   =  (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
			    nTop    = (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2) ;
			}


			var objParentFrame = pThis.getOwnerFrame();			 
             
		    if(bModeless == "true")
		    {

		        var sOpenStyle= "showtitlebar=true showstatusbar=false";
		        nexacro.getApplication().open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight,oForm);
		    }
		    else
		    {


				newChild = new nexacro.ChildFrame;
				newChild.init(sPopupId,"absolute",nLeft, nTop, nWidth, nHeight, null, null, sUrl);
            
				newChild.set_dragmovetype("all");
				newChild.set_showtitlebar(bShowTitle);
				newChild.set_autosize(bAutoSize);
				newChild.set_resizable(bResizable);
				newChild.set_titletext(sTitleText);
				newChild.set_showstatusbar(bShowStatus);
				newChild.set_openalign(sOpenalign);
				
				//newChild.set_layered(false);

				if(bRound)
				{
				//  newChild.style.set_bordertype("round 10 10");
				}
				//newChild.style.set_background("transparent");
				//newChild.style.set_opacity(nOpacity);

				newChild.showModal(objParentFrame, oArg, oForm, sPopupCallback,true);
		    }
		},

		/**
		* 공통 트랜잭션 함수
		* @param {obj} oForm form
		* @param {string} svcID serviceID
		* @param {string} sController Transaction 요청 경로
		* @param {string} inDatasets inputdataset 명   = 로 구분
		* @param {string} outDatasets outDatasets 명   = 로 구분
		* @param {string} argument argument 명   Dataset 외의 Transaction을 위한 인자값
		*                            a=b의 형태로 입력하고, 빈칸으로 구분
		* @param {string} callbackFunc callbackFunc 명
		* @param {booolen} showProgress ProgressBar 표시여부(default:true)
		* @param {booolen} bAsync 비동기 여부를 지정합니다.(Default : true)
		* @param {nDataType} nDataType Binary 형태로 전송할 지 여부를 지정합니다.(Default : false)
		* @return N/A
		* @example
		* @memberOf Ex.core
		*/
		tran : function(oForm, svcID, sController, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, nDataType)
		{

			//화면ID
			if( typeof(argument)==undefined  || argument==null || ( argument.indexOf(" pgmId=")==-1  && argument.indexOf("pgmId=")!=0 ) ){
				if( typeof(argument)!= undefined || argument!=null ||  argument.length > 0 ){
					argument+=" ";
				}					
				argument+="pgmId="+oForm.pgmId;				
			}
							
			argument+=" svcId="+svcID;
				
			if (Eco.isEmpty(showProgress))
			{
				showProgress = true;
			}
			if (Eco.isEmpty(bAsync))
			{
				bAsync = true;
			}
			if (Eco.isEmpty(nDataType))
			{
				nDataType = 0;
			}
			if (Eco.isEmpty(argument))
			{
				argument = "";
			}
			if (Eco.isEmpty(callbackFunc))
			{
				callbackFunc = "fn_callBack";				
			}
			
			inDatasets = Ex.core.datasetconf(inDatasets);
			outDatasets = Ex.core.datasetconf(outDatasets);
			
			oForm.result=""; //서버에서 받을 Variable정의 (dataset으로 받을 경우 불필요) 

			nexacro.getEnvironment().set_usewaitcursor(showProgress,true);
			var service = nexacro.getEnvironment().services["svcurl"].url;
			
		    // Service ID Merge
			var sSvcID = {id:svcID, callbackFunc:callbackFunc};
			var sURL = service + sController;
			
			oForm.transaction(sSvcID, sURL, inDatasets, outDatasets, argument, "_gfn_callback", bAsync, nDataType);

		},
		/**
		* dataset 재설정
		* @param {dataset} 재설정할 데이타셋
		* @return 
		* @example
		* @memberOf Ex.core
		*/
		datasetconf : function(datasets)
		{
			var arrDataset = datasets.split(" ");
			var datas="";
			var newdatas="";
			var datatypes="";
			
			if(datasets!=""){
				for(var i=0;i<arrDataset.length;i++){
					datas = arrDataset[i].split("=");  
					if(i>0){
						newdatas +=" ";
					}
					
					if(datas.length==1){
						datatypes=datas[0].split(":");
						if(datatypes.length==1){
							newdatas +=datas[0]+"="+datas[0]+":A";
						}else{
							newdatas +=datatypes[0]+"="+datatypes[0]+":"+datatypes[1];
						}
					}else{
						datatypes=datas[0].split(":");
						if(datatypes.length==1){
							newdatas +=arrDataset[i]+":A";
						}else{
							newdatas +=arrDataset[i];
						}
					}
				}
			}
			return newdatas;
		},
		/**
		* = 을 배열로 분리 처리
		* @param {string} objString (inds=inds)
		* @param {number} type 0 : 배열 첫번째값 1: 배열 두번째값
		* @return {string} return 된 배열값
		* @example
		* @memberOf Ex.util
		*/ 
		_splitDsName : function(objString, type)
		{
			var strDsMapping;			//mapping string
			var objArr;					//dataset name array
			var objReturn = new Array();
			
			strDsMapping = objString.split(" ");
			
			for (var i = 0; i < strDsMapping.length ; i++ ){
				objArr = strDsMapping[i].split("=");    // objArr = a,cd
				if (type == 0)
					objReturn[i] = objArr[0];
				else
					objReturn[i] = objArr[1];
			}
			
			return objReturn;
		},
		/**
		* dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
		* @param {object} ObjDs dataset
		* @param {string} strIdCol 키칼럼
		* @param {string} strId 키값
		* @param {string} : dataSet 칼럼
		* @param {string} : 서브키칼럼
		* @param {string} : 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/   
		getLookupData : function (ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId)
		{
			var strVal;
			
			var curRow = Ex.util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			if (curRow < 0) 
			{
				return "";
			}
			
			strVal = ObjDs.getColumn(curRow, strInfo);
			if (Eco.isEmpty(strVal)) 
			{
				return "";
			}

			return strVal;
		}		
	});
}

