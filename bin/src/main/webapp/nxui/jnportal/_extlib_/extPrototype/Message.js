/**
*  컨설팅 표준화
*  @FileName      Message.js
*  @Creator       parkmg
*  @CreateDate 	  2023.01.20
*  @Desction      Message
************** 소스 수정 이력 ***********************************************
*  date          Modifier    Description
*******************************************************************************
*  2023.01.20    parkmg 	 Template 적용
*******************************************************************************/

var pForm = nexacro.Form.prototype;

/**
 * @class 메세지팝업오픈
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [sPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
 * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
 * @return N/A
 * @example
 * this.gfnAlert(this, "A", "확인하세요");	
 * this.gfnAlert("치환테스트 {0} 입니다.",  ["성공"]);
 */
pForm.gfnAlert = function ( sMsgId, arrArg, sPopId, sCallback)
{
    var objApp = nexacro.getApplication();
	var sLang = nexacro.getEnvironmentVariable("gvLang");
	var sMsg;
	var oArg;
	
	if(objApp.gdsMessage.findRow("msgId", sMsgId) < 0)
		sMsg = sMsgId;		//return false;
	else
	{
		if(sLang == "ko")
			sMsg = objApp.gdsMessage.lookup("msgId", sMsgId, "msg");
		else if(sLang == "en")
			sMsg = objApp.gdsMessage.lookup("msgId", sMsgId, "engMsg");
		else
			sMsg = objApp.gdsMessage.lookup("msgId", sMsgId, "msg");  //default
	}
	
	if( this.gfnIsNull(sMsg) ) sMsg = "확인";
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\n/g, String.fromCharCode(10));
	sMsg = pForm.gfnConvertMessage(sMsg, arrArg);
	
	var sMsgType = objApp.gdsMessage.lookup("msgId", sMsgId, "msgType");
	
	if( this.gfnIsNull(sPopId) ) sPopId = sMsgId.replace(/[.,'"\s]/g, "");
	
	// add context
	var sMsgUrl = nexacro.getEnvironment().services["svcurl"].url;
	
	switch(sMsgType) {
	case "A":
		sMsgUrl = "cmm::cmmAlert.xfdl";
		break;
	case "C":
		sMsgUrl = "cmm::cmmConfirm.xfdl";
		if(this.gfnIsNull(sCallback)) trace("callback함수를 지정하지 않았습니다");
		break;
	default:
		sMsgUrl = "cmm::cmmAlert.xfdl";
		break;
	}
		
	if(sMsgType == "C")
		oArg = {paramContents:sMsg, trueFunc:sCallback.trueFunc, falseFunc:sCallback.falseFunc};
	else
		oArg = {paramContents:sMsg};
	
	var oOption = {};	

	this.gfnOpenPopup( sPopId,sMsgUrl,oArg,sCallback,oOption);
};

/**
 * @class 메세지 치환
 * @param {String} msg - 메세지	
 * @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfnConvertMessage = function(msg, values) {
	if(values)
		return msg.replace(/\{(\d+)\}/g, function() {
			return values[arguments[1]];
		});
	else
		return msg;
};
