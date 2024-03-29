﻿/**
*  컨설팅 표준화
*  @FileName      Transaction.js
*  @Creator       parkmg
*  @CreateDate 	  2023.01.20
*  @Desction      서비스 호출 및 콜백처리
************** 소스 수정 이력 ***********************************************
*  date          Modifier    Description
*******************************************************************************
*  2023.01.20    parkmg 	 Template 적용
*******************************************************************************/

var pForm = nexacro.Form.prototype;

/**
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
 * @param {String} strSvcId - 서비스 ID
 * @param {String} strSvcUrl - 서비스 호출 URL 
 * @param {String} [inData]	- input Dataset list("입력ID=DataSet ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [outData] - output Dataset list("DataSet ID=출력ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [strArg]	- 서비스 호출 URL 
 * @param {String} [callBackFnc] - 콜백 함수명
 * @param {Boolean} [isAsync] - 비동기통신 여부 
 * @return N/A
 * @example
 * var strSvcUrl = "transactionSaveTest.do";
 * var inData    = "dsList=dsList:U";
 * var outData   = "dsList=dsList";
 * var strArg    = "";
 * this.gfnTransaction("save", strSvcUrl, inData, outData, strArg, "fnCallback", true);
 */ 
pForm.gfnTransaction = function(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync)
{
	var objEnv = nexacro.getEnvironment();
	
	if (this.gfnIsNull(strSvcId) || this.gfnIsNull(strSvcUrl))
	{
		trace("Error : gfnTransaction() 함수의 인자값이 부족합니다.");
		return false;
	}
	
	// fnCallback 함수 기본값 설정
	if (this.gfnIsNull(callBackFnc)) callBackFnc = "fnCallback";
	
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();

	// Async
	if ((isAsync != true) && (isAsync != false)) isAsync = true;	
	// 1. Service ID  And callBackFnc Merge
	var strMergeSvcID = strSvcId + "|" + callBackFnc + "|" + isAsync + "|" + sStartDate + "|" + nStartTime;
	
	// 2. strServiceUrl
	var strServiceUrl = objEnv.services["svcurl"].url + strSvcUrl;
	
	// 5. strArg
	var args = this.gfnIsNull(strArg) ? "" : strArg;
    
    var menuId;
    var frame = this.getOwnerFrame();
    if (frame != null && Object.prototype.hasOwnProperty.call(frame, "tabArgs")) {
        menuId = frame.tabArgs.menuId;
    } else {
        menuId = this._menuId;
    }
    
    if (!Eco.isEmpty(menuId)) {
        args += " __menuId__=" + menuId;
    }
	
	this.callbackMsg = ""; // 서버에서 받을 Variable정의
	
	// json
	var nDataType = 3;
	
	// set dataset
	inData = this.gfnDatasetconf(inData);
	outData = this.gfnDatasetconf(outData);
	
	this.transaction( strMergeSvcID                 	        //1.strMergeSvcID
					, strServiceUrl                 			//2.strServiceUrl
					, inData                      				//3.inDataSet
					, outData                     				//4.outDataSet
					, args                     			        //5.args
					, "gfnCallback"				    		    //6.strCallbackFunc
					, isAsync                     				//7.bAsync
					, nDataType                     			//0.nDataType : 0(XML 타입), 1(Binary 타입),  2(SSV 타입) ,  3(JSON 타입) ---> HTML5에서는 Binary 타입은 지원안함
					, false);                    				//0.bCompress ( default : false ) 
};

/**
 * @class 공통 Callback 함수 <br>
 * 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
 * @param {String} svcID - 서비스 ID
 * @param {Number} errorCode - 에러코드(정상 0, 에러 음수값)
 * @param {String} [errorMsg] - 에러메시지
 * @return N/A
 */
pForm.gfnCallback = function(svcID,errorCode,errorMsg)
{
	var arrSvcID = svcID.split("|");
	
	// 에러 공통 처리
	if(errorCode != 0)
	{
		switch(errorCode)
		{
			case -1:  // check exception 
				// nRunMode 1: 로컬, 2: 운영
				if(nexacro.getEnvironmentVariable("gvRunMode") == "1"){
					alert(errorMsg);
				}else if(nexacro.getEnvironmentVariable("gvRunMode") == "2"){
					this.gfnAlert("CM_MSG_SERVER_ERROR");  // 서버 오류입니다.\n관리자에게 문의하세요.
				}
				break;
			case -2:  // uncheck exception : Business Ex
				this.gfnAlert(errorMsg);
				break;
			case -2463215:
				//@todo : 임의 에러코드  처리
				//return false;
				break;
            case -1200: // 세션 타임아웃
                this.gfnAlert(errorMsg);
                window.setTimeout(() => {
                    nexacro.getApplication().logout();
                }, 0);
                return;
            default:
                break;
		}
	}

	// 서비스 실행결과 출력
	var sStartDate = arrSvcID[3];
	var nStartTime = arrSvcID[4];
	
	var objDate = new Date();
	var sEndDate = objDate.getYear()
					+"-"+String(objDate.getMonth()).padLeft(2, '0')
					+"-"+String(objDate.getDate()).padLeft(2, '0')
					+" "+String(objDate.getHours()).padLeft(2, '0')
					+":"+String(objDate.getMinutes()).padLeft(2, '0')
					+":"+String(objDate.getSeconds()).padLeft(2, '0')
					+" "+objDate.getMilliseconds();
	var nElapseTime = (objDate.getTime() - nStartTime)/1000;
	
	var sMsg = "";
	
	if (errorCode == 0)
	{
		sMsg = "gfnCallback : SvcID>>"+arrSvcID[0] + ",  errorCode>>"+errorCode + ", errorMsg>>"+errorMsg + ", isAsync>>" + arrSvcID[2] + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
		trace(sMsg);
	}
	else {
		sMsg = "gfnCallback : SvcID>>"+arrSvcID[0] + ",  errorCode>>"+errorCode + ", isAsync>>" + arrSvcID[2] + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
		sMsg += "\n==================== errorMsg =======================\n"+errorMsg+"\n==================================================";
		trace(sMsg);
		return;
	}

	// 화면의 callBack 함수 실행
	if(!this.gfnIsNull(arrSvcID[1]))
	{
		this.lookupFunc(arrSvcID[1]).call(arrSvcID[0], errorCode, errorMsg);
	}
};

/**
* dataset 재설정
* @param {dataset} 재설정할 데이타셋
* @return 
* @example
* @memberOf Transaction
*/
pForm.gfnDatasetconf = function(datasets)
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
};

/**
* server locale change
* @param {String} language - ko | en
* @return 
* @example
* @memberOf Transaction
*/
pForm.gfnChangServerLang = function(pLang)
{
	var objEnv = nexacro.getEnvironment();
	var svcUrl = objEnv.services["svcurl"].url;
	var xmlhttp = new XMLHttpRequest();
	var url = svcUrl + "dummy.do?language=" + pLang;
	
	xmlhttp.onreadystatechange = function() {
		delete xmlhttp;
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
	xmlhttp.send();
};