(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_5020M_01");
            this.set_titletext("약관동의");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"data\">동의</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"data\">동의하지않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","180","0",null,"191","180",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"125","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_frmTitle");
            obj.set_text("회원가입");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep1_S");
            obj.set_text("약관동의");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","Static01:0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep1_S_step2");
            obj.set_text("본인확인");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","Static02:0","Static00:0","390","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep3");
            obj.set_text("가입양식작성");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","Static03:0","Static00:0",null,"66","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinStep4");
            obj.set_text("가입완료");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static34","0","0","180",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","180",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","180","191",null,"802","180",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new CheckBox("Chk01","0","40",null,"24","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("국방기술진흥연구소 과제관리시스템의 이용약관, 개인정보 수집에 모두 동의합니다.");
            obj.set_cssclass("portal_chk_joinAll");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","Chk01:0",null,"39","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("* 개인정보 제공자가 동의한 내용외 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다. ");
            obj.set_cssclass("portal_sta_joinInfo");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","Static00:10","500","62",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("이용약관");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","0","Static10:0",null,"227","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_value("제1조 목적 \n이 약관은 국방기술품질원(이하 “기품원”이라 합니다)이 제공하는 모든 서비스(이하 “서비스”라 합니다)의 이용조건 및 절차에 관한 사항과 기타 필요한 사항을 준수하고 규정함을 목적으로 합니다. \n\n제2조 이용약관의 효력과 변경 \n① 이 약관의 내용은 서비스 화면에 게시하거나 기타 방법으로 이용자에게 공지함으로써 효력을 발생합니다. \n② 사이트 운영상 약관의 변경사유가 발생할 경우 기품원은 약관을 변경할 수 있으며, 변경된 약관은 전항과 같은 방법으로 공지함으로써 효력을 발생합니다.\n\n제3조 약관 외 준칙 \n이 약관에 명시되지 않은 사항이 국방부군사보안훈령, 국방전력발전업무훈령, 방위사업관리규정, 방위사업청 훈령, 개인정보보호법, 개인정보보호법시행령, 개인정보보호법시행규칙 등 관계법령에 규정되어 있는 경우 그 규정에 따라 적용할 수 있습니다.\n\n 제4조 서비스 이용계약의 성립 \n이용계약은 이용자의 신청에 대한 기품원의 승인과 이용자의 약관 내용에 대한 동의로 성립됩니다.\n\n 제5조 이용신청 대상\n이용신청 대상은 방위사업청훈령 167호 무기체계 핵심부품 국산화 개발지원사업 운영규정에 의해 다음과 같이 대상으로 합니다. \n    가. 정부기관\n    나. 출연기관\n    다. 산․학․연  \n    라. 기타 업무관계자\n\n 제6조 이용신청\n회원에 가입하고자 하는 이용자는 온라인으로 다음 사항을 가입신청 양식에 기록하여 신청합니다.  \n    가. 기본정보(로그인 ID, 이름, 비밀번호, 성별, 전화번호, 핸드폰 번호, 이메일 주소, 주소)\n    나. 소속사업체정보(회사명, 부서, 직위, 기관유형, 팩스번호, 주소)\n    다. 공인인증서 등록\n    라. 기관정보(사업자번호, 업체명, 주소, 업체설립일, 홈페이지, 전화번호, 팩스번호, 주요생산품, 기관유형, \n          종업원수, 법인번호, 업체규모, 대표자명, 대표자이메일)\n    마. 조직아이디\n    바. 직위명\n    사. 사번\n\n 제7조 사용자 개인정보의 변경\n회원은 이용 신청시 기재한 사항이 변경되었을 경우, 온라인으로 수정을 해야 합니다. \n\n 제8조 서비스 이용제한\n기품원은 다음에 해당하는 이용신청자에 대하여 회원가입을 승인하지 않으며, 승인 후에도 다음 사항을 위반시 회원가입 승인을 취소할 수 있습니다. 또한 기품원은 회원가입 후 장기간 미사용 사용자에 대해서는 국방부 군사보안훈령 제118조에 의해 접속을 차단할 수 있습니다. \n    가. 다른 사람의 명의를 사용하여 신청하였을 때 \n    나. 이용계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때 \n    다. 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때 \n    라. 본 사이트를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우 \n    마. 만 14세미만의 미성년자는 회원 가입을 제한합니다. \n    바. 기타 약관에서 정한 신청요건이 미비 되었을 때 \n\n 제9조 (서비스의 중지)\n 이용자가 본 약관의 내용에 위배되는 행동을 한 경우, 임의로 서비스 사용을 제한 및 중지할 수 있습니다. \n\n 제10조 (서비스의 변경 및 해지)\n     가. 귀하가 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않으며, 회원이 본 서비스에 게재한 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 관하여는 책임을 지지 않습니다. \n     나. 서비스 이용과 관련하여 가입자에게 발생한 손해 중 가입자의 고의, 과실에 의한 손해에 대하여 책임을 부담하지 아니합니다. \n\n 제11조 (게시물의 저작권)\n     가. 귀하가 게시한 게시물의 내용에 대한 권리는 귀하에게 있습니다. \n     나. 게시된 내용을 사전 통지 없이 편집, 이동할 수 있는 권리를 보유하며, 게시판운영원칙에 따라 사전 통지 없이 삭제할 수 있습니다. \n     다. 귀하의 게시물이 타인의 저작권을 침해함으로써 발생하는 민, 형사상의 책임은 전적으로 귀하가 부담 하여야 합니다. \n\n 제12조 기품원의 의무 \n기품원은 회원의 개인정보를 본인의 승낙 없이 제 3자에게 누설하지 않습니다. \n단, 국방부군사보안훈령, 개인정보보호법 등 법률 규정에 의한 국가기관의 요구, 정보통신윤리위원회의 요청, 범죄 수사상의 목적 또는 기타 관계법령의 절차에 따른 요청이 있는 경우에는 예외입니다. \n\n 제13조 회원의 의무\n① 회원은 이 약관에서 규정하는 안내를 준수해야 합니다. \n② 회원은 기품원이 별도로 공지하는 이용제한 사항이나 서비스 공지사항을 준수해야 합니다. \n③ 회원은 서비스를 이용할 때 다음의 행위를 하지 않아야 합니다. \n    가. 다른 회원의 ID를 부정하게 사용하는 행위 \n    나. 기술원의 저작권 및 타인의 저작권을 침해하는 행위 \n    다. 공공질서 및 미풍양속에 위반되는 내용의 정보, 문장, 도형 등을 타인에게 유포하는 행위 \n    라. 범죄와 결부된다고 객관적으로 판단되는 행위 \n    마. 기타 관계법령에 위배되는 행위 \n④ 회원은 서비스의 이용권한을 타인에게 양도, 증여할 수 없습니다. \n⑤ 회원은 아이디(ID)와 비밀번호 관리에 대해 다음과 같은 의무를 가집니다. \n    가. 실명이나 실제 정보를 입력하지 않은 회원은 법적인 보호를 받을 수 없습니다. \n    나. 아이디(ID)와 비밀번호에 관한 모든 관리책임은 회원에게 있습니다. 관리 소홀이나 부정사용에 의해 발생하는 모든 결과는 회원에게 책임이 있습니다. \n    다. 자신의 아이디(ID)가 부정하게 사용된 경우 회원은 반드시 그 사실을 기품원에 통보해야 합니다.\n\n 제14조 회원의 게시물\n기품원은 회원이 등록하는 게시물의 내용이 다음에 해당한다고 판단되는 경우, 사전통지 없이 삭제할 수 있습니다. \n    가. 범죄적 행위에 결부된다고 인정되는 내용일 경우 \n    나. 공공질서 및 미풍양속에 위반되는 내용인 경우 \n    다. 제3자를 비방해 명예를 손상시키는 내용인 경우 \n    라. 기타 관계법령과 기술원에서 정한 규정에 위배되는 경우 \n\n 제15조 (손해배상)\n  본 사이트에 무료 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 고의로 행한 범죄행위를 제외하고 이에 대하여 책임을 부담하지 아니합니다. \n\n 제16조 (면책조항)\n    가. 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.\n    나. 기간통신 사업자가 전기통신 서비스를 중지하거나 정상적으로 제공하지 아니하여 손해가 발생한 경우 책임이 면제됩니다.\n    다. 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다.\n    라. 이용자의 컴퓨터 오류에 의해 손해가 발생한 경우, 또는 회원이 신상정보 및 전자우편 주소를 부실하게 기재하여 손해가 발생한 경우 책임을 지지 않습니다.\n     마. 서비스에 표출된 어떠한 의견이나 정보에 대해 확신이나 대표할 의무가 없으며 회원이나 제3자에 의해 표출된 의견을 승인하거나 반대하거나 수정하지 않습니다.\n  어떠한 경우라도 귀하가 서비스에 담긴 정보에 의존해 얻은 이득이나 입은 손해에 대해 책임이 없습니다. \n    바. 회원간 또는 회원과 제3자간에 서비스를 매개로 하여 물품거래 혹은 금전적 거래 등과 관련하여 어떠한 책임도 부담하지 아니하고, 회원이 서비스의 이용과 관련하여 기대하는 이익에 관하여 책임을 부담하지 않습니다. \n    사. 귀하가 서비스를 이용하여 기대하는 손익이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않으며, 회원이 본 서비스에 게재한 정보, 자료, 사실의 신뢰도 등 내용에 관하여는 책임을 지지 않습니다.\n    아. 서비스 이용과 관련하여 귀하에게 발생한 손해 중 귀하의 고의, 과실에 의한 손해에 대하여 책임을 부담하지 아니합니다. \n    자. 본 사이트가 제공한 서비스가 아닌 가입자 또는 기타 유관기관이 제공하는 서비스의 내용상의 정확성, 완전성 및 질에 대하여 보장하지 않습니다.\n\n  제17조 (재판관할)\n 본 사이트와 이용자 간에 발생한 서비스 이용에 관한 분쟁에 대하여는 대한민국 법을 적용하며, 본 분쟁으로 인한 소는 대한민국의 법원에 제기합니다.\n\n  제18조 (다른 행정규칙의 적용)\n핵심부품 국산화 개발지원 사업과 연계되는 부품국산화 관련 사항 중 이 약관에 명시되지 않은 사항은 “국가 연구개발사업의 관리 등에 관한 규정”, “방위사업관리규정”, “국방전력발전업무훈령”, “무기체계 양산단계의 부품국산화 지침”, “무기체계 핵심부품 국산화개발 지원사업 운영규정” 에서 정하는 바에 따른다.\n\n  제19조 (재검토기한)\n『훈령․예규 등의 발령 및 관리에 관한 규정』(대통령 훈령 제248호)에 따라 이 훈령 발령 후의 법령이나 현실여건의 변화 등을 검토하여 폐지, 개정 등의 조치를 하여야 하는 기간은 무기체계 핵심부품 국산화개발 지원사업 운영규정 개정시점으로 한다.\n\n 부 칙 \n(시행일) 이 약관은 2013년 4월 1일부터 적용됩니다. 2013년 1월 1일부터 시행되던 종전의 약관은 본 약관으로 대체합니다.\n\t\t");
            obj.set_cssclass("portal_txt_join");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","0","TextArea01:10","305","36",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("horizontal");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_cssclass("portal_rdo");
            obj.set_text("동의");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static11","0","Radio00:14","478","62",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("개인정보 수집·이용에 대한 안내(개인정보 취급방침)");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_joinTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","0","Static11:0",null,"227","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_value("1. 수집·이용하는 개인정보의 항목\n     가. 필수항목(일반회원)\n          기본정보(로그인 ID, 이름, 비밀번호, 성별, 전화번호, 핸드폰 번호, 이메일 주소, 주소), \n          소속사업체정보(회사명, 부서, 직위, 기관유형, 팩스번호, 주소),\n          공인인증서 등록, 기관정보(사업자번호, 업체명, 주소, 업체설립일, 홈페이지, 전화번호, 팩스번호, 주요생산품, \n          기관유형, 종업원수, 법인번호, 업체규모, 대표자명, 대표자이메일)\n     나. 필수항목(기품원회원)\n          사용자아이디, 사용자이름, 비밀번호, 조직아이다, 직위명, 사번, 성별구분코드, \n          집전화번호, 사무실전화번호, 팩스번호, 핸드폰번호, 이메일주소, 우편번호, 주소, 상세주소\n     다. 선택항목\n          (없음)    \n    \n 2. 개인정보의 수집·이용 목적\n     가. 부품 국산화 통합정보관리스템을 이용하여 업무를 수행하는 사용자 정보의 관리  \n     나. 부품 국산화 통합정보관리스템 과제공모/과제신청/전자협약/진도관리(일반회원)\n     다. 부품 국산화 통합정보관리스템 과제공모/업체평가(기품원회원)  \n     라. 보유근거\n          1) 방위사업법 제31조(국방과학기술정보의 관리)\n          2) 과학기술기본법 제26조(과학기술지식·정보 등의 관리·유통) 등\n          3) 방위사업법 시행령 제35조(국방과학기술정보의 관리를 위한 업무 등)\n          4) 방위사업관리규정 제650조(국방과학기술정보관리) \n\n 3. 개인정보의 보유 및 이용기간\n 핵심부품 국산화개발 과제관리시스템은 회원 탈퇴 등으로 개인정보의 수집·이용 목적이 달성된 후 해당 정보를 파기하는 것을 원칙으로 합니다. 다만, 기품원 내부방침 및 관련 규정에 의해 개인정보를 보존할 필요가 있는 경우 일정기간 동안 보존하며, 그 보존기간은 아래와 같습니다.\n     가. 개인 탈회회원 신상정보에 관한 기록: 준영구\n     나. 기타 개별적으로 이용자의 동의를 받는 경우: 해지가 처리된 시점까지\n \n 4. 동의를 거부할 권리가 있으며, 동의 거부에 따른 불이익은 없음. \n    다만, 핵심부품 국산화개발 과제관리시스템 서비스 대상에서 제외됩니다.\t\t\n\t\t");
            obj.set_cssclass("portal_txt_join");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio01","0","TextArea02:10","305","36",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("horizontal");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_cssclass("portal_rdo");
            obj.set_text("동의");
            obj.set_value("Y");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06_00_00_00_00","0","100","50","10",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("H 10");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","895","Div01:83",null,"45","895",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("다음");
            obj.set_cssclass("portal_btn");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","740","Button02:0","584","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PTS_5020M_01.xfdl", function() {

        this.Button02_onclick = function(obj,e)
        {
        	var sMenuId = "identification";
        	var url = "pts::PTS_5020M_02.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static00.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static03.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Static04.addEventHandler("onclick",this.Static_onclick,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div01.form.Chk01.addEventHandler("onclick",this.chk_pass_onclick,this);
            this.Div01.form.Chk01.addEventHandler("onchanged",this.chk_pass_onchanged,this);
            this.Div01.form.Static10.addEventHandler("onclick",this.Static_onclick,this);
            this.Div01.form.TextArea01.addEventHandler("onchanged",this.Div01_TextArea01_onchanged,this);
            this.Div01.form.Static11.addEventHandler("onclick",this.Static_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("PTS_5020M_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
