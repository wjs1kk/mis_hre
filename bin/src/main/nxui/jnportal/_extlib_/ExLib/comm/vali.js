/**
 * @fileoverview 프로젝트 validation 공통함수 
 */
 
if ( !JsNamespace.exist("Ex.vali")  )
{
	/**
	 * @namespace
	 * @name Ex.vali
	 * @author
	 * @memberof!  <global>
	 */
	 
	 
	 
	JsNamespace.declare("Ex.vali",{

		/**
		 * validaition 메인 호출 공통 함수
		 * @param {object} oForm form
		 * @return {boolen} true false
		 * @example	
		 * @memberOf Ex.vali
		 */

		validateComps : function (oForm)
		{
		  
			var is_check = true;
			var strForm = "";
            var oComp =[];
			
			   //validation 할 컴퍼넌트 가져오는 함수
			    oComp = Eco.XComp.query(oForm,"prop[_check] != '' && prop[_msg] != '' && isVisual==true && isEnable==true && typeOf != 'Static'");
			  
			    for(var p=0;p<oComp.length;p++)
			    {
					oComp[p]._taborderForSort = nexacro.toNumber(oComp[p].taborder);
					//trace(oComp[p].name + ":" + oComp[p].taborder);
			    }

			    var oCompSorted = Eco.array.sortOn(oComp, "_taborderForSort");
			    
			    for(var p=0;p<oCompSorted.length;p++)
			    {
					trace(oCompSorted[p].name + ":" +  oCompSorted[p].taborder);
			    }
			    for(var p=0;p<oCompSorted.length;p++)
			    {
			       if(this.validateAComp(oForm,oCompSorted[p],true) == false) 
 					{
						oCompSorted[p].setFocus();						
						is_check = false;
						return false;
 					}
			    }
 			
 			
			return is_check;
		},
		
		/**
		 * 컴포넌트 검색 validation 수행
		 * @param {object} oForm form
		 * @param {object} component 해당 컴포넌트
		 * @param {boolen} isOption _check 옵션 여부
		 * @return {boolen} focus 여부
		 * @example	
		 * @memberOf Ex.vali
		 */
		validateAComp : function (oForm,component,isOption)
		{

			var id = component.name;
			

			var type = component;
			var style_class = Ex.util.replaceEmpty(component.cssclass);
			var strCheck = Ex.util.replaceEmpty(component._check);   // 필수입력 property			
			var readonly = Ex.util.replaceEmpty(component.readonly);
			var strOption = Eco.isEmpty(isOption) ?  false : true;
			
			if (readonly == "true" || readonly == true) 
			{
				return true;
			}
				
			
			if (Eco.XComp.typeOf(type) =="Edit"
				|| Eco.XComp.typeOf(type) == "MaskEdit"
				 || Eco.XComp.typeOf(type) == "TextArea"
				 || Eco.XComp.typeOf(type) == "Combo"
				 || Eco.XComp.typeOf(type) == "CheckBox"
				 || Eco.XComp.typeOf(type) == "Radio"
				 || Eco.XComp.typeOf(type) == "Calendar")
			{			
			

					if(component.hasOwnProperty("_check") && !Eco.isUndefined(component._check)) 
					{
						var res = this._validateComponent(component,oForm,strOption);
						if(strOption == false && res == false)
						{
							component.setFocus();
						}
						
						return res;
							
						
					}
			}

			// 그리드에서는 row 단위로 값이 있는지 여부를 판별해서 메세지를 한번에 띄운다.
			// 검색조건 검사시에는 그리드가 대상이 아니다.
			if (component.hasOwnProperty("_check") && Eco.XComp.typeOf(type) == "Grid"  && !Eco.isUndefined(component._check)) 
			{
					
				return this.validateGrid(oForm,component);
			}


			return true;
		},

		/**
		 * 해당 컴포넌트의 값이 유효한지 여부를 검증한다.
		 * @param {object} componenet 해당 컴포넌트
		 * @return {boolen}boolean 유효성검사를 통과하면 true / 실패하면 false
		 * @example	
		 * @memberOf Ex.vali
		 */
		_validateComponent : function (component,oForm)
		{
			
			var id = component.name;
			var type = component;
			var value = String(Ex.util.replaceEmpty(component.value)).trim();
			var strCheck = String(Ex.util.replaceEmpty(component._check)).toUpperCase().trim();
			var chkMsg =  String(Ex.util.replaceEmpty(component._msg)).trim();
			var strMsg =  "";
        
			var nRow =nexacro.getApplication().gds_lang.findRowExpr("PGM_ID=='"+oForm.pgmId+"' && ITEM_ID=='"+chkMsg+"'");

			if(nRow < 0){
				nRow =nexacro.getApplication().gds_lang.findRowExpr(" PGM_ID=='COM' && ITEM_ID=='"+chkMsg+"'");
			}
			
			if (nRow >= 0){
				strMsg =nexacro.getApplication().gds_lang.getColumn(nRow, sLang);
			}
			
			if(this.checkValue(value,strCheck,strMsg)==false){
				return false;
			}
			
			return true;
		},
		
		checkValue : function(value,strCheck,strMsg,sLang,logicType) 
		{	
			// 1.strCheck 조건을 체크하자.
			var isNumCheck = false;
			var iMin = -1;
			var iMax = -1;
			var iFixLength = -1;
			var iMinLength = -1;
			var iMaxLength = -1;
			var isZeroCheck = false;
			var bEmpty = false;
			var isRegExpCheck = false;
			var objRegExp;
			var arr = strCheck.split("|");
			var component="";
            var pForm = nexacro.Form.prototype;
			
			for (var i = 0; i < arr.length; i++) 
			{
				var aReq = String(arr[i]).split(":");
				var sCheckGubun = aReq[0];
				
				if (sCheckGubun == "MIN") {
					iMin = nexacro.toNumber(aReq[1]);
				}
				if (sCheckGubun == "MAX") {
					iMax = nexacro.toNumber(aReq[1]);
				}
				if (sCheckGubun == "FIX_LEN") {
					iFixLength = nexacro.toNumber(aReq[1]);
				}
				if (Eco.string.startsWith(sCheckGubun,"MIN_LEN")) {
					sCheckGubun = Ex.vali._getStringType(component,sCheckGubun);
					if(Eco.isEmpty(sCheckGubun))
				    {
				       return;
				    }
				    
					iMinLength = nexacro.toNumber(aReq[1]);
					
				}
				if (Eco.string.startsWith(sCheckGubun,"MAX_LEN")) {
					
					sCheckGubun = Ex.vali._getStringType(component,sCheckGubun);
					
					if(Eco.isEmpty(sCheckGubun))
				    {
				       return;
				    }
				    
					iMaxLength = nexacro.toNumber(aReq[1]);
				}
				if (sCheckGubun == "NUM") {
					isNumCheck = true;
				}
				if (sCheckGubun == "ZERO") {
					isZeroCheck = true;
				}
				
				if (sCheckGubun == "NULL") { 
					bEmpty = true;
				}
			}
            // 1. 필수 체크
            if(bEmpty == true && Eco.isEmpty(value)) {  
				if(Eco.isEmpty(logicType)){
					if (sLang=="KOR") {
                        pForm.gfnAlert("{0}은(는) 필수 항목입니다.", [strMsg]);
					} else if(sLang=="ENG") {
                        pForm.gfnAlert("{0} : You must insert this item.", [strMsg]);
					}
				}else if(logicType=="search"){
					if (sLang=="KOR") {
                        pForm.gfnAlert("{0}을(를) 입력한 후 조회해 주세요.", [strMsg]);
					} else if(sLang=="ENG") {
                        pForm.gfnAlert("{0} : Please enter it after input.", [strMsg]);
					}
				}
				return false;
                           
            }
         
            // 2. 정규식 포맷 체크
            if(isRegExpCheck == true && !objRegExp.test(value))
            {
            	if (sLang=="KOR") {
                    pForm.gfnAlert("{0}은(는) 포맷 오류입니다.", [strMsg]);
				} else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : Format Error.", [strMsg]);
				}
				return false;
                           
            }

			// 3. 최소길이 체크
			if (iMinLength > 0 && Eco.string.getLength(value,sCheckGubun) < iMinLength) 
			{
            	if(sLang=="KOR"){
                    pForm.gfnAlert("{0}은(는) {1}Byte 이상이어야 합니다.", [strMsg, iMinLength]);
				}else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : This item must be at least {1} characters.", [strMsg, iMinLength]);
				}			
				
				return false;
			}
	
			// 4. 최대길이 체크
			if (iMaxLength > 0 && Eco.string.getLength(value,sCheckGubun) > iMaxLength) 
			{
            	if(sLang=="KOR"){
                    pForm.gfnAlert("{0}은(는) {1}Byte 이하이어야 합니다.", [strMsg, iMaxLength]);
				}else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : This item cannot exceed {1} characters.", [strMsg, iMaxLength]);
				}	
				return false;
			}

			// 5. 숫자값인지 여부
			if (isNumCheck && !Eco.isNumber(value) && !nexacro.isNumeric(value)) 
			{
            	if(sLang=="KOR"){
                    pForm.gfnAlert("{0}은(는) 숫자가 아닙니다.", [strMsg]);
				}else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : This is not a number.", [strMsg]);
				}			
				
				return false;
			}

			// 6. 최소값 체크
			if (iMin > 0 && iMin > parseInt(value, 10)) 
			{
            	if(sLang=="KOR"){
                    pForm.gfnAlert("{0}은(는) {1}보다 작아야 합니다.", [strMsg, iMin]);
				}else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : Must be less than {1}.", [strMsg, iMin]);
				}			
				return false;
			}
			
			// 7. 최대값 체크
			if (iMax > 0 && iMax < parseInt(value, 10)) 
			{
            	if(sLang=="KOR"){
                    pForm.gfnAlert("{0}은(는) {1}보다 커야 합니다.", [strMsg, iMax]);
				}else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : Must be greater than {1}.", [strMsg, iMax]);
				}			
				return false;
			}

			// 8. 숫자값일때 '0'
			if (isZeroCheck && (parseInt(value, 10) == 0)) 
			{
            	if(sLang=="KOR"){
                    pForm.gfnAlert("{0}은(는) 0 이 아닙니다.", [strMsg]);
				}else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : This is not zero.", [strMsg]);
				}			
				
				return false;
			}
			
			// 9. fix값 체크
			if (iFixLength > 0 && Eco.string.getLength(value,sCheckGubun) != iFixLength) 
			{
            	if(sLang=="KOR"){
                    pForm.gfnAlert("{0}은(는) {1}자이어야 합니다.", [strMsg, iFixLength]);
				}else if(sLang=="ENG"){
                    pForm.gfnAlert("{0} : This item must be {1} characters.", [strMsg, iFixLength]);
				}			
				return false;
			}

            return true;
		},
	
	      /**
		 * validation length 문자열의 단위 return
		 * @param {object}  oComp component
		 * @param {string} str 문자열 type
		 * @return {string} "utf16" - 한문자당 1의 값으로 합산함(default).
				            "utf8"  - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.
				            "ascii" - 한문자당 영문 1, 한글 2의 값으로 합산함.
		 * @example	
		 * @memberOf Ex.vali
		 */
	    _getStringType : function(oComp,str)
	    {
	        var res = "";
	     
	        if(Eco.string.endsWith(str,"UTF8"))
			{
			  res = "utf8";
			  
			}
			else if(Eco.string.endsWith(str,"UTF16"))
			{
			  res = "utf16";
			}
			else if(Eco.string.endsWith(str,"ASCII"))
			{
			  res = "ascii";
			}
			else
			{
			   //Eco.Logger.error({message:"UnKnown _check lengthtype...._check'"+oComp._check+"'",elapsed: true,stack:true});
			   res ="utf8";
			
			}
			
			return res;
	    },
	    
		 /**
		 * 그리드의 유효성 검사를 체크한다
		 * @param {object} oForm 폼
		 * @param {object} component 그리드 컴퍼넌트
		 * @return {boolean} 체크 결과
		 * @example	
		 * @memberOf Ex.vali
		 */
		validateGrid : function (oForm,component)
		{
	
			if (Eco.isEmpty(component.binddataset) || Eco.isEmpty(component._check)) 
			{
				return true;
			}
		
			//var ds = (Eco.isEmpty(isForm) ? pThis.all["this." + component.binddataset] : eval(isForm + "." + component.binddataset));
			//var ds =  pThis.all[component.binddataset]
			var ds = Eco.XComp.lookup(oForm,component.binddataset);
			var sRequired = component._check;
			
			var chkMsg =  String(Ex.util.replaceEmpty(component._msg)).trim();
			var strMsg =  "";

			var aRequired = String(sRequired).split("^");
			var aMsg = String(chkMsg).split("^");
			
			for (var iRow = 0; iRow < ds.rowcount; iRow++) 
			{
				var iRowType = ds.getRowType(iRow);
				if (iRowType == 8) 
				{
					continue;
				}

				for (var j = 0; j < aRequired.length; j++) 
				{
					var strCheck = aRequired[j];
					if(aMsg[j]!=""){
						var nRow =application.gds_lang.findRowExpr("PGM_ID=='"+oForm.pgmId+"' && ITEM_ID=='"+aMsg[j]+"'");
						if (nRow >= 0){
							strMsg =application.gds_lang.getColumn(nRow, sLang);
						}
					}
					
					// 1.strCheck 조건을 체크하자.
					var isNumCheck = false;
					var iMin = -1;
					var iMax = -1;
					var iFixLength = -1;
					var iMinLength = -1;
					var iMaxLength = -1;
					var isZeroCheck = false;
					var isRegExpCheck = false;
					var bEmpty = false;
					var objRegExp;					
					var arr = String(strCheck).split("|");
					var sColNm = arr[0];

					for (var i = 1; i < arr.length; i++) 
					{
						var aReq = String(arr[i]).split(":");
						var sCheckGubun = aReq[0];
						
						if (sCheckGubun == "MIN") 
						{
							iMin = nexacro.toNumber(aReq[1]);
						}
						if (sCheckGubun == "MAX") 
						{
							iMax = nexacro.toNumber(aReq[1]);
						}
						
						if (sCheckGubun == "FIX_LEN") 
						{
							iFixLength = nexacro.toNumber(aReq[1]);
						}
						if (Eco.string.startsWith(sCheckGubun,"MIN_LEN")) 
						{
							
							sCheckGubun = Ex.vali._getStringType(component,sCheckGubun);
						
							if(Eco.isEmpty(sCheckGubun))
							{
							   return;
							}
							
							iMinLength = nexacro.toNumber(aReq[1]);
						}
						if (Eco.string.startsWith(sCheckGubun,"MAX_LEN")) 
						{
					
						    sCheckGubun = Ex.vali._getStringType(component,sCheckGubun);
						
							if(Eco.isEmpty(sCheckGubun))
							{
							   return;
							}
							
							iMaxLength = nexacro.toNumber(aReq[1]);
						}
						if (sCheckGubun == "NUM") 
						{
							isNumCheck = true;
						}
						if (sCheckGubun == "ZERO") 
						{
							isZeroCheck = true;
						}
						if (sCheckGubun == "NULL") 
						{
							bEmpty = true;
						}						
					}

					var iCellIdx = component.getBindCellIndex("body", sColNm);
					var iColSize = component.getFormatColSize(iCellIdx);

					if (iColSize < 1) 
					{
						continue;
					}
					// colSize==0  
					//edittype체크
					var sEditType = component.getCellProperty("Body", iCellIdx, "edittype");
					if (Eco.isEmpty(sEditType) || sEditType == "none" || sEditType == "readonly") 
					{
						continue;
					}

					var value = String(Ex.util.replaceEmpty(ds.getColumn(iRow, sColNm))).trim();
					if(strMsg==""){
						strMsg = component.getCellText(-1,iCellIdx).replace(String.fromCharCode(13), '').replace(String.fromCharCode(10), '');
					}
					
					// 1.필수값 체크
					if(bEmpty == true && Eco.isEmpty(value))
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는)  필수 항목입니다",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : You must insert this item.",[strMsg]);				
						}					
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 2. 정규식 포맷 체크
					if(isRegExpCheck == true && !objRegExp.test(value))
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) 포맷 오류입니다",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : Format Error.",[strMsg]);				
						}
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
								   
					}
            
					// 3. 최소길이 체크
					else if (iMinLength > 0 && Eco.string.getLength(value,sCheckGubun) < iMinLength) 
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) "+iMinLength+"자 이상이어야 합니다.",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : This item must be at least  "+iMinLength+" characters.",[strMsg]);				
						}	
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 4. 최대길이 체크
					else if (iMaxLength > 0 && Eco.string.getLength(value,sCheckGubun) > iMaxLength) 
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) "+iMaxLength+"자이하 이어야 합니다.",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : This item cannot exceed "+iMaxLength+" characters.",[strMsg]);				
						}
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 5. 숫자값인지 여부
					else if (isNumCheck && !Eco.isNumber(value) && !nexacro.isNumeric(value)) 
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) 숫자가 아닙니다",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : This is not a number.",[strMsg]);				
						}			
				
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 6. 최소값 체크
					if (iMin > 0 && iMin > parseInt(value, 10)) 
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) 최소값 오류입니다",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : This is the minimum value error.",[strMsg]);				
						}	
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 7. 최대값 체크
					if (iMax > 0 && iMax < parseInt(value, 10)) 
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) 최대값 오류입니다",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : This is the maximum value error.",[strMsg]);				
						}
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}

					// 8. 숫자값일때 '0'
					if (isZeroCheck && (parseInt(value, 10) == 0)) 
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) 0 이 아닙니다",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : This is not zero.",[strMsg]);				
						}			
				
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}
					
					// 9. fix값일때
					if (iFixLength > 0 && Eco.string.getLength(value,sCheckGubun) != iFixLength) 
					{
						if(sLang=="KOR"){
							Ex.core.showMsg("@은(는) "+iFixLength+"자이어야 합니다.",[strMsg]);
						}else if(sLang=="ENG"){
							Ex.core.showMsg("@ : This item must be "+iFixLength+" characters.",[strMsg]);				
						}	
						Ex.vali.grd_ShwEditor(component, ds, iCellIdx, iRow);
						return false;
					}
				}
			}
			return true;
		},
		
		
		 /**
		 * validation 그리드 해당 cell position focus
		 * @param {object} component 그리드 컴퍼넌트
		 * @param {object} ds dataset
		 * @param {number} iCellIdx Cell index
		 * @param {number} iRow row index
		 * @return 
		 * @example	
		 * @memberOf Ex.vali
		 */
		grd_ShwEditor : function (component,ds,iCellIdx,iRow)
		{
			ds.set_rowposition(iRow);
			component.setCellPos(iCellIdx);
			component.showEditor(true);
		},
		
			
		/**
		 * 주민 등록번호 확인
		 * @param {string} rsrno 주민등록번호 13자리
		 */
		isRsrNo : function(rsrno)
		{
			var juminNo = rsrno.replace("-", "");
			juminNo = juminNo.trim();
			
			if (!nexacro.isNumeric(juminNo) || juminNo.length != 13)
			{
				return false;
			}
			
			var juminChkDgt = [2,3,4,5,6,7,8,9,2,3,4,5];
			var fNum = new Number();
			var lNum = new Number();
			var iSum = new Number();
			var yy, lnumf;
			
			fNum = juminNo.substr(0, 6).toString();
			lNum = juminNo.substr(6).toString();
			lnumf = lNum.substr(0,1);
			
			if (lnumf == '1' ||  lnumf == '2' ||  lnumf == '5' ||  lnumf == '6')
			{
				yy  = '19';
			}
			else if (lnumf == '3' ||  lnumf == '4' ||  lnumf == '7' ||  lnumf == '8') 
			{
				yy  = '20';
			}
			else if (lnumf == '9' ||  lnumf == '0') 
			{
				yy  = '18';
			}
			else
			{
				return false;
			}
			
			if(!Eco.isStringDate(yy + fNum))
			{
				return false;
			}
			
			var bForeignerYN = "N";
			if (lNum.substr(0,1) == '5' || lNum.substr(0,1) == '6' || lNum.substr(0,1) == '7' ||  lNum.substr(0,1) == '8')
			{
				bForeignerYN = "Y";
			}
			
			for (var ix = 0; ix < 12 ; ix++)
			{
				iSum += (parseInt(juminNo.substr(ix, 1)) * juminChkDgt[ix]);
			}
			
			iSum = 11 - (iSum%11);
			iSum = iSum % 10;
			
			if(bForeignerYN == "Y") 
			{
				iSum += 2;
			}
			
			if (iSum != (parseInt(juminNo.substr(12, 1))))
			{
				return false;
			}
			
			return true;
		},

		/**
		 * 사업자 등록번호 확인
		 * @param {string} compRegNo 사업자번호
		 */
		isCompRegNo : function(compRegNo)
		{
			var compNo = compRegNo.replace("-", "");
			compNo = compNo.trim();
			
			var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
			var i, Sum=0, c2, remander;

			if (compNo.length != 10) 
			{
				return false;
			}
		 
			for (i = 0; i <= 7; i++) 
			{
				Sum += checkID[i] * compNo.charAt(i);
			}
			
			c2 = "0" + (checkID[8] * compNo.charAt(8));
			c2 = c2.substring(c2.length - 2, c2.length);

			Sum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));
			remander = (10 - (Sum % 10)) % 10 ;

			if (Math.floor(compNo.charAt(9)) != remander) 
			{
				return false;
			}
			
			return true;
		},

		/**
		 * 법인 등록번호 확인
		 * @param {string} corpRegNo 법인등록번호
		 */
		isCorpRegNo : function(corpRegNo)
		{
			var corpNo = corpRegNo.replace("-", "");
			corpNo = corpNo.trim();
			
			var checkID = new Array(1,2,1,2,1,2,1,2,1,2,1,2);
			var i, Sum=0, c2, remander;

			if (corpNo.length != 13) 
			{
				return false 
			}

			for (var i = 0; i < 12; i++) 
			{
				Sum += checkID[i] * corpNo.charAt(i);
			}
			
			if ((10 - (Sum%10))%10 != corpNo.charAt(12))
			{
				return false;
			}
			else
			{
				return true;
			}
		},
		
		/**
		 * 주민번호로 성별을 Return 한다.
		 * @param {string} rsrno 주민등록번호 13자리
		 */
		getSex : function(rsrno)
		{
			if (!this.isRsrNo(rsrno))
			{
				return false;
			}
			
			var vSexGb = rsrno.substr(6,1);

			if (vSexGb == '1' || vSexGb == '3' || vSexGb == '5' || vSexGb == '7') 
			{
				return "M";	// 남자
			} 
			else if (vSexGb == '2' || vSexGb == '4' || vSexGb == '6' || vSexGb == '8') 
			{
				return "W";	// 여자
			} 
			else 
			{
				return "X"; 
			}
		},		

		/**
		 * 주민번호 뒷 첫번째 자리로 년대를 return 한다
		 * @param {string} rsrno 주민등록번호 13자리
		 */
		getBirthYear : function(rsrno)
		{
			if (!this.isRsrNo(rsrno))
			{
				return false;
			}
			
			// ## 주민등록은 100년 단위로 갱신 
			// 식별번호 9 : 1800년도부터 1899년에 태어난 남성
			// 식별번호 0 : 1800년도부터 1899년에 태어난 여성	
			// 식별번호 1 : 1900년도부터 1999년에 태어난 남성
			// 식별번호 2 : 1900년도부터 1999년에 태어난 여성	
			// 식별번호 3 : 2000년도부터 2099년에 태어난 남성
			// 식별번호 4 : 2000년도부터 2099년에 태어난 여성	
			// 식별번호 5 : 1900년도부터 1999년에 외국에서 태어난 남성 (귀화/체류/이중국적 남성)
			// 식별번호 6 : 1900년도부터 1999년에 외국에서 태어난 여성 (귀화/체류/이중국적 여성)	
			// 식별번호 7 : 2000년도부터 2099년에 외국에서 태어난 남성 (귀화/체류/이중국적 남성)
			// 식별번호 8 : 2000년도부터 2099년에 외국에서 태어난 여성 (귀화/체류/이중국적 여성)
			
			var lNum = rsrno.substr(6,1);

			if (lNum == '1' ||  lNum == '2' ||  lNum == '5' ||  lNum == '6')
			{
				yy  = '19';
			}
			else if (lNum == '3' ||  lNum == '4' ||  lNum == '7' ||  lNum == '8') 
			{
				yy  = '20';
			}
			else if (lNum == '9' ||  lNum == '0') 
			{
				yy  = '18';
			}
			
			return yy;
		},

		/**
		 * 생년월일 또는 주민 번호로 법적연령-만나이를 구한다.
		 * @param {string} rsrno 주민등록번호 13자리
		 */
		getAge : function(birth, date)
		{
			var year;
			var month;
			var day;

			if (birth.length == 13)
			{
				if (!this.isRsrNo(birth))
				{
					return false;
				}
				
				var vBefor = this.getBirthYear(birth);
				if (vBefor == false)
				{
					return false;
				}
				
				birth = vBefor + birth;
				year = parseInt(birth.substr(0,4),10);
				month = parseInt(birth.substr(4,2),10);
				day =   parseInt(birth.substr(6,2),10);
			}
			else if (birth.length == 8)
			{
				year = parseInt(birth.substr(0,4),10);
				month = parseInt(birth.substr(4,2),10);
				day =   parseInt(birth.substr(6,2),10);

				if (!Eco.isStringDate(birth))
				{
					return false;
				}
			}
			else
			{
				return false;
			}

			if (!Eco.isStringDate(date))
			{
				return false;
			}

			var dateYear = parseInt(date.substr(0,4),10);
			var dateMonth = parseInt(date.substr(4,2),10);
			var dateDay = parseInt(date.substr(6,2),10);
			var age = dateYear - year;

			if (month > dateMonth) 
			{
				age = age - 1;
			} 
			else if (month == dateMonth) 
			{
				if (day > dateDay) 
				{
					age = age - 1;
				}
			}

			if (age < 0) 
			{
				age = 0;
			}

			return age;
		},

		/**
		 * 이메일 주소 체크
		 * @param {string} email 이메일 value
		 */
		isEmail : function(email)
		{
			if (Eco.isEmpty(email)) 
			{
				return false;
			}

			var match = email.match(/^(\".*\"|[A-Za-z0-9_-]([A-Za-z0-9_-]|[\+\.])*)@(\[\d{1,3}(\.\d{1,3}){3}]|[A-Za-z0-9][A-Za-z0-9_-]*(\.[A-Za-z0-9][A-Za-z0-9_-]*)+)$/);
			
			if(match == null) 
			{
				return false;
			} 
			else 
			{
				return true;
			}
		},

		/**
		 * 특수문자가 있는지 체크 
		 * 영자, 한글, 숫자, 간격 문자 이외의 문자로 임의 지정
		 * @param {string} value 체크 value
		 */
		checkSpecialChar : function(value)
		{
			if (Eco.isEmpty(value)) 
			{
				return false;
			}
			
			//var pattern = new RegExp('[^-가-힣a-zA-Z0-9./ ,.:;!&()]');
			var pattern = new RegExp('[^-가-힣a-zA-Z0-9 ]');
			if (pattern.exec(value) != null) 
			{
				return false;
			}

			return true;
		}			
		
		
	});
}

