/**
f * @fileoverview 프로젝트 utility 공통함수
 */
if ( !JsNamespace.exist("Ex.util")  )
{
	/**
	 * @namespace
	 * @name Ex.util
	 * @author 
	 * @memberof! <global>	
	 */
	JsNamespace.declare("Ex.util",{



		 /**
		 * 공백으로치환 
		 * @param {string} strArg 체크할  파리미터명
		 * @return {string} 공백으로 치환값
		 * @example
		 *    trace(Eco.isEmpty("")); (output) ""
		 * @memberOf Ex.util
		 */		
		replaceEmpty : function(strArg)
		{
			if( Eco.isNull(strArg) || Eco.isUndefined(strArg)) return "";
			else
			return strArg;
		},
		
		/**
		* 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
		* @param {object} oForm form
		* @param {string} sDsNm 데이터셋명
		* @return {string} dataset
		* @example
		* @memberOf Ex.util
		*/   
		createDs : function(oForm,sDsNm)
		{
		   
			//var oDs = Ex.util._getDataset(sDsNm);
			var oDs =Eco.XComp.lookup(oForm,sDsNm);
			 trace(Eco.XComp);
		    // 
		     if(Eco.isEmpty(oDs))
		     {
		         oDs = new Dataset;
		         oDs.name = sDsNm;
		      
		         oForm.addChild(sDsNm, oDs);
		     }
		     else
		    {
		    	 oDs.clearData();
		    	 
		    }	 
		    
		     
		     return oDs;
		},
		
		/**
		* 해당 데이터셋명으로 검색하여 데이터셋찾아서 리턴 없으면 -1을 반환
		* @param {string} sDsNm 데이터셋명
		* @return {string} dataset
		* @example
		* @memberOf Ex.util
		*/  
		_getDataset : function(sDsNm)
		{
		
			return Eco.XComp.query(this.ffobj, "typeOf == 'Dataset' && prop[name] == '"+sDsNm+"'")[0];
		},
		

		

		/**
		*  데이터셋 페이징처리 부분 체크
		* @param {string} sOutDs outputDataset
		* @return {string} return outputdataset
		* @example
		* @memberOf Ex.util
		*/ 
		_searchPageDatasetCheck : function(sOutDs)
		{	
			
			if(Eco.isEmpty(sOutDs))
		    {
		        return sOutDs;
		    }
		    
		    var aOutDsList = sOutDs.split(" ");
		    var aOutDsInfo = "";
		    var sPageDsSpare = "";
		    var sOutDataset = "";
		    var oOutDataset;
		    var oPageDs;
		    var oPageDsSpare;
		    var oPageDsTarget;
		    var nPage = (Eco.isEmpty(application.gds_pageInfo.getColumn(0,"CURR_PAGE"))) ? 1 : parseInt(application.gds_pageInfo.getColumn(0,"CURR_PAGE"));
	
		    
		    var sAppendDataset = (nPage > 1) ? "Y" : "N";
		    var rtnVal = new Array(2);
		   
		    for(var i=0; i<aOutDsList.length; i++)
		    {
		        aOutDsInfo = aOutDsList[i].split("=");
		        oOutDataset = Ex.util._getDataset(aOutDsInfo[0]);
		  
				if(sAppendDataset == "Y")
				{        
					sPageDsSpare = aOutDsInfo[0]+"_Spare";
					oPageDsSpare = Ex.util._getDataset(sPageDsSpare); 
					oPageDsTarget = Ex.util._getDataset(aOutDsInfo[0]); 
				
					if(Eco.isEmpty(oPageDsSpare))
					{
						oPageDsSpare = new Dataset;
		                oPageDsSpare.loadXML(oPageDsTarget.saveXML());
		                oPageDsSpare.name = sPageDsSpare;
		                oPageDsSpare.useclientlayout = true;
						this.ffobj.addChild(sPageDsSpare,oPageDsSpare);
					}                

					if(sOutDataset.length == 0)
					{
					   sOutDataset = sPageDsSpare+"="+aOutDsInfo[1];
					}
					else
					{
					   sOutDataset += " "+sPageDsSpare+"="+aOutDsInfo[1];
					}			
				}
				else
				{
					if(sOutDataset.length == 0)
					{
					   sOutDataset = aOutDsInfo[0]+"="+aOutDsInfo[1];
					}
					else
					{
					   sOutDataset += " "+aOutDsInfo[0]+"="+aOutDsInfo[1];
					}					
				}
		    }

		    return sOutDataset;
		},
		

		
		/**
		* dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
		* @param {object} ObjDs dataset
		* @param {string} strIdCol 키칼럼
		* @param {string} strId 키값
		* @param {string} strSubCol 서브키칼럼
		* @param {string} strSubId 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/  
		findData : function (ObjDs, strIdCol, strId, strSubCol, strSubId)
		{
		
			if (Eco.isEmpty(strSubCol)) 
			{
				return ObjDs.findRow(strIdCol, strId.toString());
			}
		
			return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
		},
		
		/**
		* dataset object에서 키에 해당되는 Row를 찾아서 이동
		* @param {object} ObjDs dataset
		* @param {string} strIdCol 키칼럼
		* @param {string} strId 키값
		* @param {string} newRow  이동할 Row,
		* @param {string} strSubCol 서브키칼럼
		* @param {string} strSubId 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/   
		moveData : function (ObjDs, strIdCol, strId, newRow, strSubCol, strSubId)
		{
			var curRow = Ex.util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			ObjDs.moveRow(curRow, newRow);
		},
		
		/**
		* dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
		* @param {object} ObjDs dataset
		* @param {string} strIdCol 키칼럼
		* @param {string} strId 키값
		* @param {string} valCol 변경할 칼럼
		* @param {string} newVal 변경값
		* @param {string} strSubCol 서브키칼럼
		* @param {string} strSubId 서브 키값
		* @return N/A
		* @example
		* @memberOf Ex.util
		*/   
		editData : function (ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId)
		{
			var curRow = Ex.util.findData(ObjDs, strIdCol, strId, strSubCol, strSubId);
			return ObjDs.setColumn(curRow, valCol, newVal);
		},
		
		
		/**
		* dataSet의 Row 중에서 변경된 내용이 있는지 여부를  판단하는 함수
		* @param {object} objDs DataSet
		* @return {boolen} true = 변경 된 데이터가 존재 , false = 변경 된 데이터가 없음
		* @example
		* @memberOf Ex.util
		*/  
		isUpdated : function (objDs)
		{
			if (objDs.getDeletedRowCount() > 0) 
			{
				return true;
			}
			
			if (objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT) ||(this.getRowType(rowidx)==Dataset.ROWTYPE_DELETE)") > -1) 
			{
				return true;
			}
			return false;
		},
		
		
		/**
		* 해당 PC의 오늘 날짜(korea)를 가져온다.
		* @return {string} 오늘날짜
		* @example
		* @memberOf Ex.util
		*/  
		getToday : function ()
		{
			var strToday = "";
			var objDate = new Date();

			var strToday = objDate.getFullYear() + "";
			strToday += Eco.string.getRightStr("0" + (objDate.getMonth() + 1), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getDate(), 2);

			return strToday;
		},
		
		/**
		* 날짜 형식을 korea 형태를  English 형식으로 변환
	    * @param {string} value yyyymmdd
		* @return {string} yyyymmdd 형태 날짜를 mmddyyyy로 변경처리
		* @example
		* @memberOf Ex.util
		*/  
		replaceDateEng : function(value)
		{
			var stringWrapper = new String(value);
		
			if( stringWrapper.toString().length !== 8 ) return;
		   //영문달력인지 체크하는 함수
			var iMonth  = Math.floor(stringWrapper.slice(4,6), 10);
			var iDate   = Math.floor(stringWrapper.slice(6), 10);
		 
		 
			if( iMonth < 1 || iMonth > 12 ) return;
				
			if( iDate < 1 ) return;
			
			strToday = stringWrapper.slice(4,6);
			strToday += stringWrapper.slice(6);			
			strToday += stringWrapper.slice(0,4);
		
			return strToday;
			
		},

		
		/**
		* 해당 PC의 오늘 날짜+시간를 가져온다.
		* @return {string} 오늘날짜 + 시간
		* @example
		* @memberOf Ex.util
		*/  
		getTodayTime : function ()
		{
			var strToday = "";
			var objDate = new Date();

			var strToday = objDate.getFullYear() + "";
			strToday += Eco.string.getRightStr("0" + (objDate.getMonth() + 1), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getDate(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getHours(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getMinutes(), 2);
			strToday += Eco.string.getRightStr("0" + objDate.getSeconds(), 2);

			return strToday;
		},
		
		/**
		* Font Object 생성 반환.
		* @param {object} obj 컴포넌트
		* @param {number} iFontSize 폰트사이즈
		* @param {string} sFontName 폰트명
		* @param {string} sType 타입(bold,italic,underline,strikeout,antialias )
		* @return {object} Font Object
		* @example
		* @memberOf Ex.util
		*/ 
		getObjFont : function (obj,iFontSize, sFontName, sType)
		{
		    var objFont = obj.currentstyle.font;
		    sType = (Eco.isEmpty(sType)) ? "normal" : sType;
		    objFont.set_size(iFontSize);
		    objFont.set_face(sFontName);
		    objFont.set_type(sType);
//		 	var strFont = sFontName + "," + iFontSize;
//		 	if (bBold == true) 
//		 	{
//		 		strFont += ",bold";
//		 	}
		 	return objFont;
		},
		
		/**
		* 인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
		* @param {string} p_name 설정할 파리미터명
		* @param {string} p_value 설정할 값
		* @return {string} String
		* @example
		*     paramStr += gfn_SetParam("sql_xml", "gspl_sql_common");
		* @memberOf Ex.util
		*/
		setParam : function (p_name, p_value)
		{			
		   
			return p_name + "="+this.replaceEmpty(p_value)+ "&nbsp;";
		},
		
		/**
		* 데이터셋을 json 을 요소로 하는 array 로 변환한다.
		* @param {dataset} dsTarget 대상 데이터셋
		* @return {array} array
		* @memberOf Ex.util
		*/		
		getJsonFromDataset : function(dsTarget)
		{
			var arrData = [];
			var jsonItem = {};
			var dsTemp = new Dataset();
			dsTemp.copyData(dsTarget);
			for(var i=0; i < dsTarget.rowcount ; i++)
			{
				dsTemp.copyRow(0,dsTarget,i);
				jsonItem = {};
				Eco.object.fromDataset(jsonItem, dsTemp, "horz");
				//trace(JSON.stringify(jsonItem));
				arrData.push(jsonItem);
			}
			//trace(arrData.toString());
			return arrData;

		},
		/**
		* 데이터셋을 json 을 요소로 하는 2차원 array 로 변환한다.(클립리포트용)
		* @param {dataset} dsTarget 대상 데이터셋
		* @return {array} array
		* @memberOf Ex.util
		*/		
		getJsonFromDatasetForReport : function(dsTarget)
		{
			var arrData = [];
			var arrRec = [];
			var jsonItem = {};
			var dsTemp = new Dataset();
			dsTemp.copyData(dsTarget);
			for(var i=0; i < dsTarget.rowcount ; i++)
			{
				arrRec = [];
				for(var j=0; j < dsTarget.getColCount() ; j++)
				{
					jsonItem = {};
					jsonItem.param  = dsTarget.getColID(j);
					jsonItem.value  = dsTarget.getColumn(i,j);
					arrRec.push(jsonItem);
				}
				
				arrData.push(arrRec);
			}
//			trace(arrData.toString());
			return arrData;

		},
		
		/**
		* array 형태의 json 데이터를 데이터셋에 저장한다
		* @param {array} arrJson    json 데이터
		* @param {dataset} dsTarget 데이터셋
		* @return N/A
		* @memberOf Ex.util
		*/				
		getDatasetFromJson : function(arrJson,dsTarget)
		{
			for(var i=0; i< arrJson.length; i++)
			{
				var nRow = dsTarget.addRow();
				for(var j=0; j < dsTarget.getColCount() ; j++)
				{
					dsTarget.setColumn(nRow,dsTarget.getColID(j),arrJson[i][dsTarget.getColID(j)]);
				}
			}
		
		}


	});

}