﻿/**
*  컨설팅 표준화
*  @FileName      Popup.js
*  @Creator       parkmg
*  @CreateDate 	  2023.01.20
*  @Desction      Popup
************** 소스 수정 이력 ***********************************************
*  date          Modifier    Description
*******************************************************************************
*  2023.01.20    parkmg 	 Template 적용
*******************************************************************************/

var pForm = nexacro.Form.prototype;

/**
 * @class 팝업오픈
 * @param {String} sPopupId	- 팝업ID
 * @param {String} sUrl	 - 팝업URL
 * @param {String} [oArg] - 전달값
 * @param {String} [sPopupCallback] - 팝업콜백. 없으면 confirm message 로 간주.
 * @param {Object} [oOption] - 팝업옵션 <br>
 *	oOption.top : 상단 좌표 <br>
 *	oOption.left : 좌측 좌표 <br>
 *	oOption.width : 넓이 <br>
 *	oOption.height : 높이 <br>
 *	oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWinddow) <br>
 *	oOption.layered : 투명 윈도우 <br>
 *	oOption.opacity : 투명도 <br>
 *	oOption.autosize : autosize <br>
 * @return N/A
 * @example
 * this.gfnOpenPopup(this);
 */
pForm.gfnOpenPopup = function ( sPopupId, sUrl, oArg, sPopupCallback, oOption)
{
	this._rtnModal = null;
    var objApp = nexacro.getApplication();
	var nLeft = -1;
	var nTop = -1;
	var nWidth = -1;
	var nHeight = -1;
	var bShowTitle = false;	
	var bShowStatus = false;	
	var sPopupType = "modal";
	var bLayered = false;
	var nOpacity = 100;
	var bAutoSize = false;
	var bResizable = false;
	//var sPopupCallback = (this.gfnIsNull(sPopupCallback)) ? "fnPopupAfter" : sPopupCallback;
	var sTitleText = "";

	for (var key in oOption) {
       if (oOption.hasOwnProperty(key)) {
            switch (key) 
			{
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "popuptype":
					sPopupType = oOption[key];
					break;
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
			}	
        }
    }

	var sOpenalign = "";
	if(nLeft == -1 && nTop == -1) 
	{		
		sOpenalign = "center middle";
        nLeft   =  (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;		
	}else{
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop   =  this.getOffsetTop() + nTop;
	}
		
	if(nWidth == -1 || nHeight == -1)
	{
	    bAutoSize = true;
	}
	
	var objParentFrame = this.getOwnerFrame();

    if(sPopupType == "modeless")
    {
         var sOpenStyle= "showtitlebar=true showstatusbar=false resizable=true autosize=true";
		
         nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight, this);
    }
	else if(sPopupType == "modalsync")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		system.showModalSync(newChild, objParentFrame, oArg);	
	}
	else if(sPopupType == "modalwindow")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
        return rtn;
//         var objCF = new ChildFrame();
// 
// 		objCF .init("CF_modal", 0, 0, 500, 500);
// 		objCF .set_formurl("cmm::cmmPopup.xfdl");
// 		var ret = system.showModalWindow(objCF , "CF_modal", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this);

	}	
    else
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		newChild.showModal(objParentFrame, oArg, this, this[sPopupCallback]);
		//newChild.titlebar.closebutton.set_visible(false);	//close버튼 visible false 처리
		//newChild.style.set_border("2 solid #24322b");
		//newChild.style.set_bordertype("round 10 10");
		//newChild.style.set_background("white");    
		//newChild.style.set_opacity(nOpacity);
    }
};

/**
* gfnOpenPopup() 관련 내부 함수 - 결과 반환
* @param {Oject} Form 
* @return Object
* @example
* @memberOf private
*/  
pForm._setReturn = function(obj) {

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
};

/**
* gfnOpenPopup()으로 호출된 화면의 결과값 받아오는 함수
* @return Object
* @example
* @memberOf private
*/   
pForm.gfnGetPopupRtn = function() {
    return this._rtnModal;
};

/**
* 팝업창 close 처리
* @param {variant} val 리턴값
* @return N/A
* @example      
*/    
pForm.gfnPopupClose = function(val) {
    this.close(this.opener._setReturn(val));
};
