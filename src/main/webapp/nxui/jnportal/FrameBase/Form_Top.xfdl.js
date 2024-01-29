(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("KRIT 과제관리통합관리시스템");
            this.set_scrolltype("none");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,111);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNmKr\" type=\"STRING\" size=\"256\"/><Column id=\"emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"telNo\" type=\"STRING\" size=\"256\"/><Column id=\"phoneNo\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"pwExpireDt\" type=\"DATETIME\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userId\">admin</Col><Col id=\"userNmKr\">관리자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRoleCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"roleCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"1000\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"INT\" size=\"256\"/><Column id=\"menuNmPath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">M_01</Col><Col id=\"menuNm\">핵심기술</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"menuNmPath\">핵심기술</Col><Col id=\"rowNum\">0</Col><Col id=\"upperMenuId\">0</Col></Row><Row><Col id=\"menuId\">M_01_01</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuNm\">핵심기술 과제기획</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_1010M.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">핵심기술&gt;핵심기술 과제기획</Col><Col id=\"progId\">PTS_1010M</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_01_02</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuNm\">핵심기술 과제공고</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_1020M.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">핵심기술&gt;핵심기술 과제공고</Col><Col id=\"progId\">PTS_1020M</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_03</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuNm\">신청확인 / 결과조회</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_1030M.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">핵심기술&gt;신청확인 / 결과조회</Col><Col id=\"progId\">PTS_1030M</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_02</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">방산진흥</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\"/><Col id=\"level\">0</Col><Col id=\"menuNmPath\">방산진흥</Col><Col id=\"progId\"/><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">M_02_01</Col><Col id=\"upperMenuId\">M_02</Col><Col id=\"progId\">PTS_2010M</Col><Col id=\"menuNm\">과제기획</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">방산진흥&gt;과제기획</Col><Col id=\"url\">pts::PTS_2010M.xfdl</Col></Row><Row><Col id=\"menuId\">M_02_02</Col><Col id=\"upperMenuId\">M_02</Col><Col id=\"menuNm\">과제공고</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_2020M.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">방산진흥&gt;과제공고</Col><Col id=\"progId\">PTS_2020M</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_02_03</Col><Col id=\"upperMenuId\">M_02</Col><Col id=\"menuNm\">예비공고</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_2030M.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">방산진흥&gt;예비공고</Col><Col id=\"progId\">PTS_2030M</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_02_04</Col><Col id=\"upperMenuId\">M_02</Col><Col id=\"menuNm\">신청결과</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_2040M.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">방산진흥&gt;신청결과</Col><Col id=\"progId\">PTS_2040M</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_03</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">고객지원</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\"/><Col id=\"level\">0</Col><Col id=\"menuNmPath\">고객지원</Col><Col id=\"progId\"/><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_03_01</Col><Col id=\"menuNm\">시스템소개</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">1</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"url\">pts::PTS_3010M.xfdl</Col><Col id=\"rowNum\">2</Col><Col id=\"menuTy\">MENU</Col><Col id=\"menuNmPath\">고객지원&gt;시스템소개</Col><Col id=\"progId\">PTS_3010M</Col></Row><Row><Col id=\"menuId\">M_03_02</Col><Col id=\"menuNm\">이용메뉴얼</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">1</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuTy\">MENU</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">고객지원&gt;이용메뉴얼</Col><Col id=\"progId\"/><Col id=\"url\"/></Row><Row><Col id=\"menuId\">M_03_02_01</Col><Col id=\"menuNm\">이용메뉴얼_리스트</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">2</Col><Col id=\"upperMenuId\">M_03_02</Col><Col id=\"menuTy\">MENU</Col><Col id=\"url\">pts::PTS_3020M_01.xfdl</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">고객지원&gt;이용메뉴얼&gt;이용메뉴얼_리스트</Col><Col id=\"progId\">PTS_3020M_01</Col></Row><Row><Col id=\"upperMenuId\">M_03_02</Col><Col id=\"menuId\">M_03_02_02</Col><Col id=\"menuNm\">이용메뉴얼_상세</Col><Col id=\"url\">pts::PTS_3020M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">5</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">고객지원&gt;이용메뉴얼&gt;이용메뉴얼_상세</Col><Col id=\"progId\">PTS_3030M_02</Col></Row><Row><Col id=\"menuId\">M_03_03</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuNm\">자료실</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">고객지원&gt;자료실</Col><Col id=\"progId\"/></Row><Row><Col id=\"menuId\">M_03_03_01</Col><Col id=\"upperMenuId\">M_03_03</Col><Col id=\"menuNm\">자료실_리스트</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3030M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">고객지원&gt;자료실&gt;자료실_리스트</Col><Col id=\"progId\">PTS_3030M_01</Col></Row><Row><Col id=\"menuNm\">자료실_상세</Col><Col id=\"menuId\">M_03_03_02</Col><Col id=\"upperMenuId\">M_03_03</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_3030M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">고객지원&gt;자료실&gt;자료실_상세</Col><Col id=\"progId\">PTS_3030M_02</Col></Row><Row><Col id=\"menuId\">M_03_04</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuNm\">FAQ</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">고객지원&gt;FAQ</Col><Col id=\"progId\">PTS_3040M</Col><Col id=\"url\">pts::PTS_3040M.xfdl</Col></Row><Row><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuId\">M_03_05</Col><Col id=\"menuNm\">Q&amp;A</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">고객지원&gt;Q&amp;A</Col></Row><Row><Col id=\"upperMenuId\">M_03_05</Col><Col id=\"menuId\">M_03_05_01</Col><Col id=\"menuNm\">Q&amp;A_리스트</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3050M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">고객지원&gt;Q&amp;A&gt;Q&amp;A_리스트</Col><Col id=\"progId\">PTS_3050M_01</Col></Row><Row><Col id=\"menuId\">M_03_05_02</Col><Col id=\"upperMenuId\">M_03_05</Col><Col id=\"menuNm\">Q&amp;A_상세</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">고객지원&gt;Q&amp;A&gt;Q&amp;A_상세</Col><Col id=\"url\">pts::PTS_3050M_02.xfdl</Col><Col id=\"progId\">PTS_3050M_02</Col></Row><Row><Col id=\"upperMenuId\">M_03_05</Col><Col id=\"menuId\">M_03_05_03</Col><Col id=\"menuNm\">Q&amp;A_입력폼</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3050M_03.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">고객지원&gt;Q&amp;A&gt;Q&amp;A_입력폼</Col><Col id=\"progId\">PTS_3050M_03</Col></Row><Row><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuId\">M_03_06</Col><Col id=\"menuNm\">규정 및 지침</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">고객지원&gt;규정 및 지침</Col></Row><Row><Col id=\"menuId\">M_03_06_01</Col><Col id=\"upperMenuId\">M_03_06</Col><Col id=\"menuNm\">규정 및 지침_리스트</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">고객지원&gt;규정 및 지침&gt;규정 및 지침_리스트</Col><Col id=\"progId\">PTS_3060M_01</Col><Col id=\"url\">pts::PTS_3060M_01.xfdl</Col></Row><Row><Col id=\"menuId\">M_03_06_02</Col><Col id=\"upperMenuId\">M_03_06</Col><Col id=\"progId\">PTS_3060M_02</Col><Col id=\"menuNm\">규정 및 지침_상세</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">고객지원&gt;규정 및 지침&gt;규정 및 지침_상세</Col><Col id=\"url\">pts::PTS_3060M_02.xfdl</Col></Row><Row><Col id=\"menuId\">M_03_07</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"progId\"/><Col id=\"menuNm\">관련법령</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">고객지원&gt;관련법령</Col></Row><Row><Col id=\"menuId\">M_04</Col><Col id=\"upperMenuId\">0</Col><Col id=\"progId\"/><Col id=\"menuNm\">공지사항</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"url\"/><Col id=\"level\">0</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">공지사항</Col></Row><Row><Col id=\"menuId\">M_04_01</Col><Col id=\"upperMenuId\">M_04</Col><Col id=\"progId\">PTS_4010M_01</Col><Col id=\"menuNm\">공지사항_리스트</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">공지사항&gt;공지사항_리스트</Col></Row><Row><Col id=\"menuId\">M_04_02</Col><Col id=\"upperMenuId\">M_04</Col><Col id=\"progId\">PTS_4010M_02</Col><Col id=\"menuNm\">공지사항_상세</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">공지사항&gt;공지사항_상세</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col></Row><Row><Col id=\"menuId\">M_05</Col><Col id=\"upperMenuId\">0</Col><Col id=\"progId\"/><Col id=\"menuNm\">회원서비스</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\"/><Col id=\"level\">0</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">회원서비스</Col></Row><Row><Col id=\"menuId\">M_05_01</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"progId\"/><Col id=\"menuNm\">로그인</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_5010M.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">회원서비스&gt;로그인</Col></Row><Row><Col id=\"menuId\">M_05_01_01</Col><Col id=\"upperMenuId\">M_05_01</Col><Col id=\"progId\">PTS_5010M</Col><Col id=\"menuNm\">로그인</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">회원서비스&gt;로그인&gt;로그인</Col><Col id=\"url\">pts::PTS_5010M.xfdl</Col></Row><Row><Col id=\"menuId\">M_05_01_02</Col><Col id=\"upperMenuId\">M_05_01</Col><Col id=\"progId\">PTS_5010P</Col><Col id=\"menuNm\">(popup)비밀번호 변경</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_5010P.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">회원서비스&gt;로그인&gt;(popup)비밀번호 변경</Col></Row><Row><Col id=\"menuId\">M_05_02</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"menuNm\">회원가입</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3030M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">회원서비스&gt;회원가입</Col></Row><Row><Col id=\"menuId\">M_05_02_01</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"menuNm\">약관동의</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">1</Col><Col id=\"progId\">PTS_5020M_01</Col><Col id=\"url\">pts::PTS_5020M_01.xfdl</Col><Col id=\"menuNmPath\">회원서비스&gt;회원가입&gt;약관동의</Col></Row><Row><Col id=\"menuId\">M_05_02_02</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"menuNm\">본인확인</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_5020M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"progId\">PTS_5020M_02</Col><Col id=\"menuNmPath\">회원서비스&gt;회원가입&gt;본인확인</Col></Row><Row><Col id=\"menuId\">M_05_02_03</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"menuNm\">가입양식작성</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">1</Col><Col id=\"progId\">PTS_5020M_03</Col><Col id=\"url\">pts::PTS_5020M_03.xfdl</Col><Col id=\"menuNmPath\">회원서비스&gt;회원가입&gt;가입양식작성</Col></Row><Row><Col id=\"menuId\">M_05_02_04</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"menuNm\">가입완료</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_5020M_04.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"progId\">PTS_5020M_04</Col><Col id=\"menuNmPath\">회원서비스&gt;회원가입&gt;가입완료</Col></Row><Row><Col id=\"menuId\">M_05_02_05</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"menuNm\">(popup)업체/기관검색</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_5020P_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"progId\">PTS_5020P_01</Col><Col id=\"menuNmPath\">회원서비스&gt;회원가입&gt;(popup)업체/기관검색</Col></Row><Row><Col id=\"menuId\">M_05_02_06</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"menuNm\">(popup)업체/기관 신규 등록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_5020P_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"progId\">PTS_5020P_02</Col><Col id=\"menuNmPath\">회원서비스&gt;회원가입&gt;(popup)업체/기관 신규 등록</Col></Row><Row><Col id=\"menuId\">M_05_03</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"menuNm\">ID/PW찾기</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">회원서비스&gt;ID/PW찾기</Col></Row><Row><Col id=\"menuId\">M_05_03_01</Col><Col id=\"upperMenuId\">M_05_03</Col><Col id=\"menuNm\">ID/PW찾기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_5030M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"progId\">PTS_5030M</Col><Col id=\"menuNmPath\">회원서비스&gt;ID/PW찾기&gt;ID/PW찾기</Col></Row><Row><Col id=\"menuId\">M_05_03_02</Col><Col id=\"upperMenuId\">M_05_03</Col><Col id=\"menuNm\">(popup)ID찾기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_5030P_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"progId\">PTS_5030P_01</Col><Col id=\"menuNmPath\">회원서비스&gt;ID/PW찾기&gt;(popup)ID찾기</Col></Row><Row><Col id=\"menuId\">M_05_03_03</Col><Col id=\"upperMenuId\">M_05_03</Col><Col id=\"menuNm\">(popup)PW찾기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">회원서비스&gt;ID/PW찾기&gt;(popup)PW찾기</Col><Col id=\"progId\">PTS_5030P_02</Col><Col id=\"url\">pts::PTS_5030P_02.xfdl</Col></Row><Row><Col id=\"menuId\">M_06</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">마이페이지</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\"/><Col id=\"level\">0</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">마이페이지</Col></Row><Row><Col id=\"menuId\">M_06_01</Col><Col id=\"upperMenuId\">M_06</Col><Col id=\"menuNm\">회원정보</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">마이페이지&gt;회원정보</Col></Row><Row><Col id=\"menuId\">M_06_01_01</Col><Col id=\"upperMenuId\">M_06_01</Col><Col id=\"menuNm\">회원정보</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">마이페이지&gt;회원정보&gt;회원정보</Col><Col id=\"progId\">PTS_6010M</Col><Col id=\"url\">pts::PTS_6010M.xfdl</Col></Row><Row><Col id=\"menuId\">M_06_01_02</Col><Col id=\"upperMenuId\">M_06_01</Col><Col id=\"progId\">PTS_6010P</Col><Col id=\"menuNm\">(popup)회원탈퇴 신청</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">마이페이지&gt;회원정보&gt;(popup)회원탈퇴 신청</Col><Col id=\"url\">pts::PTS_6010P.xfdl</Col></Row><Row><Col id=\"menuId\">M_06_02</Col><Col id=\"upperMenuId\">M_06</Col><Col id=\"progId\"/><Col id=\"menuNm\">관심게시물</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">마이페이지&gt;관심게시물</Col></Row><Row><Col id=\"menuId\">M_06_02_01</Col><Col id=\"upperMenuId\">M_06_02</Col><Col id=\"progId\">PTS_6020U_01</Col><Col id=\"menuNm\">북마크게시물</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_6020U_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">마이페이지&gt;관심게시물&gt;북마크게시물</Col></Row><Row><Col id=\"menuId\">M_06_02_02</Col><Col id=\"upperMenuId\">M_06_02</Col><Col id=\"progId\">PTS_6020U_02</Col><Col id=\"menuNm\">관심게시물</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_6020U_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">마이페이지&gt;관심게시물&gt;관심게시물</Col></Row><Row><Col id=\"menuId\">M_06_02_03</Col><Col id=\"upperMenuId\">M_06_02</Col><Col id=\"progId\">PTS_6020U_02P</Col><Col id=\"menuNm\">(popup)관심키워드 설정</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">마이페이지&gt;관심게시물&gt;(popup)관심키워드 설정</Col><Col id=\"url\">pts::PTS_6020U_02P.xfdl</Col></Row><Row><Col id=\"menuId\">M_06_02_04</Col><Col id=\"upperMenuId\">M_06_02</Col><Col id=\"progId\">PTS_6020U_03</Col><Col id=\"menuNm\">나의 Q&amp;A</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_6020U_03.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">마이페이지&gt;관심게시물&gt;나의 Q&amp;A</Col></Row><Row><Col id=\"menuId\">M_06_03</Col><Col id=\"upperMenuId\">M_06</Col><Col id=\"progId\">PTS_6030P</Col><Col id=\"menuNm\">(popup)주요일정</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_6030P.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">마이페이지&gt;(popup)주요일정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest1", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest2", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">a</Col><Col id=\"Column1\">c</Col></Row><Row><Col id=\"Column0\">b</Col><Col id=\"Column1\">d</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOfflineMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"1000\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"INT\" size=\"256\"/><Column id=\"menuNmPath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">010000</Col><Col id=\"menuNm\">기술기획</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,000,000</Col><Col id=\"level\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col><Col id=\"rowNum\">0</Col><Col id=\"upperMenuId\">0</Col></Row><Row><Col id=\"menuId\">010100</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">Pattern01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,000,000</Col><Col id=\"url\">sam::pat_0001.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트1</Col><Col id=\"progId\">Pattern01</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">010101</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">Pattern03</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,100,000</Col><Col id=\"url\">sam::pat_0003.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트2</Col><Col id=\"progId\">Pattern03</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">010102</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">Pattern04</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,200,000</Col><Col id=\"url\">sam::pat_0004.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트3</Col><Col id=\"progId\">Pattern04</Col><Col id=\"rowNum\">3</Col></Row><Row><Col id=\"menuId\">010103</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">Pattern05</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,300,000</Col><Col id=\"url\">sam::pat_0005.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern05</Col><Col id=\"rowNum\">4</Col></Row><Row><Col id=\"menuId\">010200</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">Pattern06</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,400,000</Col><Col id=\"url\">sam::pat_0006.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern06</Col><Col id=\"rowNum\">5</Col></Row><Row><Col id=\"menuId\">010201</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">Base Components</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,500,000</Col><Col id=\"url\">sam::bas_components.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">Base Components</Col><Col id=\"progId\">BaseComponents</Col><Col id=\"rowNum\">6</Col></Row><Row><Col id=\"menuId\">010300</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">pat_popup1000</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,600,000</Col><Col id=\"url\">sam::pat_popup1000.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup1000</Col><Col id=\"progId\">pat_popup1000</Col><Col id=\"rowNum\">7</Col></Row><Row><Col id=\"menuId\">010301</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">pat_popup800</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,700,000</Col><Col id=\"url\">sam::pat_popup800.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup800</Col><Col id=\"progId\">pat_popup800</Col><Col id=\"rowNum\">8</Col></Row><Row><Col id=\"menuId\">010302</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">pat_popup600</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,800,000</Col><Col id=\"url\">sam::pat_popup600.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup600</Col><Col id=\"progId\">pat_popup600</Col><Col id=\"rowNum\">9</Col></Row><Row><Col id=\"menuId\">010303</Col><Col id=\"upperMenuId\">010000</Col><Col id=\"menuNm\">GUIDE</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,900,000</Col><Col id=\"url\">GUIDE::CompGuide02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">GUIDE</Col><Col id=\"progId\">GUIDE</Col><Col id=\"rowNum\">10</Col></Row><Row><Col id=\"menuId\">010501</Col><Col id=\"menuNm\">사업비관리</Col><Col id=\"sortOrdr\">7,000,000</Col><Col id=\"level\">0</Col><Col id=\"upperMenuId\">010500</Col></Row><Row><Col id=\"menuId\">010502</Col><Col id=\"menuNm\">성과관리</Col><Col id=\"sortOrdr\">8,000,000</Col><Col id=\"level\">0</Col><Col id=\"upperMenuId\">010500</Col></Row><Row><Col id=\"menuId\">020000</Col><Col id=\"menuNm\">관심게시물</Col><Col id=\"sortOrdr\">9,000,000</Col><Col id=\"level\">0</Col><Col id=\"upperMenuId\">0</Col></Row><Row><Col id=\"upperMenuId\">020000</Col><Col id=\"menuId\">020100</Col><Col id=\"menuNm\">북마크게시물</Col><Col id=\"url\">Mypage::bbs_bookMark.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOnlineMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"1000\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"INT\" size=\"256\"/><Column id=\"menuNmPath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">010000</Col><Col id=\"menuNm\">핵심기술기획</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col><Col id=\"rowNum\">0</Col><Col id=\"upperMenuId\">0</Col><Col id=\"indctYn\">Y</Col></Row><Row><Col id=\"upperMenuId\">010000</Col><Col id=\"menuId\">010100</Col><Col id=\"menuNm\">공모조회</Col><Col id=\"menuTy\">page</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">1</Col><Col id=\"url\">Page::p_001.xfdl</Col></Row><Row><Col id=\"menuId\">020000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">핵심기술공고</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">030000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">방산지원기획</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">3</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">040000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">방산지원공고</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">050000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">협약관리</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">060000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">수행관리</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">6</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">070000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">사업비관리</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">7</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">080000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">성과관리</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">8</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row><Row><Col id=\"menuId\">090000</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">고객지원</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">9</Col><Col id=\"level\">0</Col><Col id=\"indctYn\">Y</Col><Col id=\"rowNum\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","50","35","210",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_font("normal bold 20pt/normal \"Arial\"");
            obj.set_color("white");
            obj.set_background("url(\'theme://images/logo.png\') no-repeat left center");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,null,"20","76","140","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("님");
            obj.set_font("normal 14px/normal \"Arial\"");
            obj.set_color("RGBA(255,255,255,0.70)");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,null,"80","76","170","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("white");
            obj.set_textAlign("right");
            obj.set_font("normal 14px/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Menu("mainMenu","Static00:30","35",null,"75","260",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_captioncolumn("menuNm");
            obj.set_idcolumn("menuId");
            obj.set_levelcolumn("level");
            obj.set_userdatacolumn("rowNum");
            obj.set_fittocontents("width");
            obj.set_flexshrink("1");
            obj.set_flexgrow("1");
            obj.set_cssclass("mnu_TF_menu");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#F5F5F5");
            obj.set_tooltiptext("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static04",null,"13","1","10","228",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("bar");
            obj.set_tooltiptext("bar");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"13","1","10","137",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("bar");
            obj.set_tooltiptext("bar");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"61","24","24","50",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tooltiptext("menu");
            obj.set_cssclass("menu");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("divMenu","0","111","1920","180",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("pdiv_TF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_01","0",null,null,"30","0","0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_text("H 30");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static11","0","0",null,"30","0",null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_text("H 30");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("navTitle","0","0","420",null,null,"0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_text("핵심기술기획");
            obj.set_cssclass("sta_TF_navTitle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Div("pdivMenu","450","30",null,null,"0","30",null,null,null,null,this.divMenu.form);
            obj.set_taborder("3");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staMenuSample2","0","0","300","40",null,null,null,null,null,null,this.divMenu.form.pdivMenu.form);
            obj.set_taborder("0");
            obj.set_text("2차 메뉴명");
            obj.set_cssclass("sta_TF_navTitle2");
            obj.set_visible("false");
            this.divMenu.form.pdivMenu.addChild(obj.name, obj);

            obj = new Static("staMenuSample3","0","47","300","24",null,null,null,null,null,null,this.divMenu.form.pdivMenu.form);
            obj.set_taborder("1");
            obj.set_text("3차 메뉴명");
            obj.set_cssclass("sta_TF_navText");
            obj.set_visible("false");
            this.divMenu.form.pdivMenu.addChild(obj.name, obj);

            obj = new Static("Static28_01","300","0","40",null,null,"0",null,null,null,null,this.divMenu.form.pdivMenu.form);
            obj.set_taborder("2");
            obj.set_text("W 40");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.form.pdivMenu.addChild(obj.name, obj);

            obj = new Static("Static11_00","0","40","300","7",null,null,null,null,null,null,this.divMenu.form.pdivMenu.form);
            obj.set_taborder("3");
            obj.set_text("H 7");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.form.pdivMenu.addChild(obj.name, obj);

            obj = new Static("staMenuSample3_00","0","71","300","24",null,null,null,null,null,null,this.divMenu.form.pdivMenu.form);
            obj.set_taborder("4");
            obj.set_text("3차 메뉴명");
            obj.set_cssclass("sta_TF_navText");
            obj.set_visible("false");
            this.divMenu.form.pdivMenu.addChild(obj.name, obj);

            obj = new Static("Static11_00_00","0","95","300","25",null,null,null,null,null,null,this.divMenu.form.pdivMenu.form);
            obj.set_taborder("5");
            obj.set_text("H 25");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.form.pdivMenu.addChild(obj.name, obj);

            obj = new Static("Static28","420","0","30",null,null,"0",null,null,null,null,this.divMenu.form);
            obj.set_taborder("4");
            obj.set_text("W 30");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("staTopMenuSample","290","55","79","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("1차 메뉴명");
            obj.set_cssclass("sta_TF_navTitle1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","40","0",null,"35","40",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("divTopBtns");
            this.addChild(obj.name, obj);

            obj = new Static("staUsername","1070","16","120","35",null,null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("5");
            obj.set_textAlign("right");
            obj.set_font("normal 13px/normal \"맑은 고딕\"");
            obj.set_color("#555555");
            obj.set_visible("false");
            obj.set_usedecorate("true");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"0","56","35","417",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("4");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_menu");
            obj.set_visible("false");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnRegister",null,"0","47","35","269",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("3");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_TF_menu");
            obj.set_visible("false");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnLogin",null,"0","38","35","277",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_TF_menu");
            obj.set_visible("false");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnMyPage",null,"0","63","35","187",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("1");
            obj.set_text("마이페이지");
            obj.set_cssclass("btn_TF_menu");
            obj.set_visible("false");
            this.divTopBtn.addChild(obj.name, obj);

            obj = new Button("btnManual",null,"0","82","35","77",null,null,null,null,null,this.divTopBtn.form);
            obj.set_taborder("0");
            obj.set_text("온라인매뉴얼");
            obj.set_cssclass("btn_TF_menu");
            this.divTopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMenu.form.pdivMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form.pdivMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staMenuSample2.set_taborder("0");
                p.staMenuSample2.set_text("2차 메뉴명");
                p.staMenuSample2.set_cssclass("sta_TF_navTitle2");
                p.staMenuSample2.set_visible("false");
                p.staMenuSample2.move("0","0","300","40",null,null);

                p.staMenuSample3.set_taborder("1");
                p.staMenuSample3.set_text("3차 메뉴명");
                p.staMenuSample3.set_cssclass("sta_TF_navText");
                p.staMenuSample3.set_visible("false");
                p.staMenuSample3.move("0","47","300","24",null,null);

                p.Static28_01.set_taborder("2");
                p.Static28_01.set_text("W 40");
                p.Static28_01.set_visible("false");
                p.Static28_01.set_background("fuchsia");
                p.Static28_01.set_color("blue");
                p.Static28_01.set_textAlign("center");
                p.Static28_01.set_verticalAlign("middle");
                p.Static28_01.move("300","0","40",null,null,"0");

                p.Static11_00.set_taborder("3");
                p.Static11_00.set_text("H 7");
                p.Static11_00.set_visible("false");
                p.Static11_00.set_background("aqua");
                p.Static11_00.set_color("blue");
                p.Static11_00.set_textAlign("center");
                p.Static11_00.set_verticalAlign("middle");
                p.Static11_00.move("0","40","300","7",null,null);

                p.staMenuSample3_00.set_taborder("4");
                p.staMenuSample3_00.set_text("3차 메뉴명");
                p.staMenuSample3_00.set_cssclass("sta_TF_navText");
                p.staMenuSample3_00.set_visible("false");
                p.staMenuSample3_00.move("0","71","300","24",null,null);

                p.Static11_00_00.set_taborder("5");
                p.Static11_00_00.set_text("H 25");
                p.Static11_00_00.set_visible("false");
                p.Static11_00_00.set_background("aqua");
                p.Static11_00_00.set_color("blue");
                p.Static11_00_00.set_textAlign("center");
                p.Static11_00_00.set_verticalAlign("middle");
                p.Static11_00_00.move("0","95","300","25",null,null);
            	}
            );
            this.divMenu.form.pdivMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divMenu.form.pdivMenu.form
            obj = new Layout("screen00","",0,0,this.divMenu.form.pdivMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divMenu.form.pdivMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staUsername.set_taborder("5");
                p.staUsername.set_textAlign("right");
                p.staUsername.set_font("normal 13px/normal \"맑은 고딕\"");
                p.staUsername.set_color("#555555");
                p.staUsername.set_visible("false");
                p.staUsername.set_usedecorate("true");
                p.staUsername.move("1070","16","120","35",null,null);

                p.btnLogout.set_taborder("4");
                p.btnLogout.set_text("로그아웃");
                p.btnLogout.set_cssclass("btn_TF_menu");
                p.btnLogout.set_visible("false");
                p.btnLogout.move(null,"0","56","35","417",null);

                p.btnRegister.set_taborder("3");
                p.btnRegister.set_text("회원가입");
                p.btnRegister.set_cssclass("btn_TF_menu");
                p.btnRegister.set_visible("false");
                p.btnRegister.move(null,"0","47","35","269",null);

                p.btnLogin.set_taborder("2");
                p.btnLogin.set_text("로그인");
                p.btnLogin.set_cssclass("btn_TF_menu");
                p.btnLogin.set_visible("false");
                p.btnLogin.move(null,"0","38","35","277",null);

                p.btnMyPage.set_taborder("1");
                p.btnMyPage.set_text("마이페이지");
                p.btnMyPage.set_cssclass("btn_TF_menu");
                p.btnMyPage.set_visible("false");
                p.btnMyPage.move(null,"0","63","35","187",null);

                p.btnManual.set_taborder("0");
                p.btnManual.set_text("온라인매뉴얼");
                p.btnManual.set_cssclass("btn_TF_menu");
                p.btnManual.move(null,"0","82","35","77",null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("28");
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopBtn.form
            obj = new Layout("screen00","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("28");
            this.divTopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1920,111,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("KRIT 과제관리통합관리시스템");
                p.set_scrolltype("none");
                p.set_background("#ffffff");

                p.Static00.set_taborder("0");
                p.Static00.set_font("normal bold 20pt/normal \"Arial\"");
                p.Static00.set_color("white");
                p.Static00.set_background("url(\'theme://images/logo.png\') no-repeat left center");
                p.Static00.move("50","35","210",null,null,"0");

                p.Static01.set_taborder("1");
                p.Static01.set_text("님");
                p.Static01.set_font("normal 14px/normal \"Arial\"");
                p.Static01.set_color("RGBA(255,255,255,0.70)");
                p.Static01.move(null,null,"20","76","140","0");

                p.Static02.set_taborder("2");
                p.Static02.set_color("white");
                p.Static02.set_textAlign("right");
                p.Static02.set_font("normal 14px/normal \"Arial\"");
                p.Static02.move(null,null,"80","76","170","0");

                p.mainMenu.set_taborder("3");
                p.mainMenu.set_captioncolumn("menuNm");
                p.mainMenu.set_idcolumn("menuId");
                p.mainMenu.set_levelcolumn("level");
                p.mainMenu.set_userdatacolumn("rowNum");
                p.mainMenu.set_fittocontents("width");
                p.mainMenu.set_flexshrink("1");
                p.mainMenu.set_flexgrow("1");
                p.mainMenu.set_cssclass("mnu_TF_menu");
                p.mainMenu.set_visible("true");
                p.mainMenu.move("Static00:30","35",null,"75","260",null);

                p.Static03.set_taborder("4");
                p.Static03.set_background("#F5F5F5");
                p.Static03.set_tooltiptext("top");
                p.Static03.move("0","0",null,"35","0",null);

                p.Static04.set_taborder("5");
                p.Static04.set_cssclass("bar");
                p.Static04.set_tooltiptext("bar");
                p.Static04.move(null,"13","1","10","228",null);

                p.Static04_00.set_taborder("6");
                p.Static04_00.set_cssclass("bar");
                p.Static04_00.set_tooltiptext("bar");
                p.Static04_00.move(null,"13","1","10","137",null);

                p.btn_01.set_taborder("7");
                p.btn_01.set_tooltiptext("menu");
                p.btn_01.set_cssclass("menu");
                p.btn_01.move(null,"61","24","24","50",null);

                p.divMenu.set_visible("false");
                p.divMenu.set_text("");
                p.divMenu.set_formscrolltype("none");
                p.divMenu.set_formscrollbartype("none");
                p.divMenu.set_cssclass("pdiv_TF_Area");
                p.divMenu.move("0","111","1920","180",null,null);

                p.staTopMenuSample.set_taborder("13");
                p.staTopMenuSample.set_text("1차 메뉴명");
                p.staTopMenuSample.set_cssclass("sta_TF_navTitle1");
                p.staTopMenuSample.set_visible("false");
                p.staTopMenuSample.move("290","55","79","30",null,null);

                p.divTopBtn.set_taborder("14");
                p.divTopBtn.set_text("divTopBtns");
                p.divTopBtn.move("40","0",null,"35","40",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("screen00","",1280,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Static02","text","dsUserInfo","userNmKr");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Top.xfdl","lib::common.xjs");
        this.registerScript("Form_Top.xfdl", function() {
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        var app;
        var mainFrame;
        var rootFrameSet;
        var mainFrameSet;
        var objEnv;
        var svcUrl;
        var dataset;
        var divMenuHeight;

        this.Form_Top_onload = function(obj,e)
        {
        	app = nexacro.getApplication();
        	mainFrame = app.mainframe;
        	rootFrameSet = mainFrame.VFrameSet;
        	objEnv = nexacro.getEnvironment();
        	svcUrl = objEnv.services["svcurl"].url;

        	dataset = nexacro.getApplication().gdsMenu;
        // 	var loginYn = "Y";
        // 	if(loginYn == "Y"){
        // 		dataset = this.dsOnlineMenu;
        // 	}else{
        // 		dataset = this.dsOfflineMenu;
        // 	}

            this.fnLoadSessionInfo();

        	this.fnDrawMenu();
        	//this.gfnCreateMegaMenu(obj);
        };

        this.currentSessionInfoReceived = function (id, code, message)
        {
        	if (id == "getCurrentSessionInfo") {
                const dsUserInfo = nexacro.getApplication().gdsUserInfo;
                if (code == -1200) {
                    nexacro.getApplication().logout();
                }
                if (dsUserInfo.rowcount === 0) {
                    this.divTopBtn.form.staUsername.set_visible(false);
                    this.divTopBtn.form.btnLogout.set_visible(false);
                    this.divTopBtn.form.btnMyPage.set_visible(false);
                    this.divTopBtn.form.btnLogin.set_visible(true);
                    this.divTopBtn.form.btnRegister.set_visible(true);
                } else {
                    this.divTopBtn.form.staUsername.set_visible(true);
                    this.divTopBtn.form.btnLogout.set_visible(true);
                    this.divTopBtn.form.btnMyPage.set_visible(true);
                    this.divTopBtn.form.btnLogin.set_visible(false);
                    this.divTopBtn.form.btnRegister.set_visible(false);
                    this.divTopBtn.form.staUsername.set_text("<b v='true'>" + dsUserInfo.getColumn(0, "userNmKr") + "</b>님");
                }
        	} else if (id == "getMenu") {
        		this.fnDrawMenu();
                this.gfnCreateMegaMenu(this);
        	}
        };

        this.btnLogout_onclick = function(obj,e)
        {
            nexacro.getApplication().logout();
        };

        this.fnLoadSessionInfo = function ()
        {
        	const callback = "currentSessionInfoReceived";
        	this.transaction("getCurrentSessionInfo", svcUrl + "getCurrentSessionInfo.do", "", "gdsUserInfo=dsUserInfo gdsRoleCodeList=dsRoleCodeList", "", callback)
        	this.transaction("getMenu", svcUrl + "selectNexacroMenu.do", "", "gdsMenu=dsMenu gdsFavoriteMenu=dsFavoriteMenu gdsMessage=gdsMessage gdsCompLanguage=gdsCompLanguage", "", callback);
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        this.fnCreateMenu = function(obj, nMenuWidth)
        {
        	var i, j;
        	var nLeft = 0;
        	var nTop = 0;
        	var nWidth = 300;
        	var nHeight = 40;
        	var nSubTop = 0;
        	var nSubHeight = 24;
        	var nMaxHeight = 0;

        	var objPadding = {"x" : 40, "y" : 20};
        	var objStatic;
        	var objDiv = this.divMenu.form;
        	var objComps = objDiv.pdivMenu.form.components;
        	var nLength;
        	var nCount;
        	var nSubCount;

        	var sMenuCd;
        	var sMenuNm;
        	var sMenuLvl;
        	var sMENU_ID = obj.name/*.substr(5,obj.name.length-1)*/;

        	dataset.set_enableevent(false);
        	this.dsSubMenu.set_enableevent(false);
        	dataset.filter('upperMenuId=="'+sMENU_ID+'"&&level!="0"');
        	this.dsSubMenu.copyData(dataset, true);
        	var datas = this.dsSubMenu.getCount();
        	dataset.filter("");

        	nLength = objComps.length;

        	for(i=nLength-1;i>=0;i--)
        	{
        		objDiv.pdivMenu.removeChild(objComps[i].id);
        	}
        	objDiv.components.navTitle.set_text(obj.text);

        	if(datas == "0") return;
        	this.dsSubMenu.filter("level==1");
        	nCount = this.dsSubMenu.rowcount;
        	//nLeft = nLeft + objPadding.x;
        	//nTop = nTop + objPadding.y;

        	for(i=0;i<nCount;i++)
        	{
        		var url = this.dsSubMenu.getColumn(i, "url");
        		sMenuId = this.dsSubMenu.getColumn(i, "menuId");
        		sMenuNm = this.dsSubMenu.getColumn(i, "menuNm");
        // 		if(!this.gfnIsEmpty(url)){
        // 			nHeight = nSubHeight;
        // 		}

        		objStatic = new Static(/*"sta_"+*/sMenuId, nLeft, nTop, nWidth, nHeight, null, null);
        		objDiv.pdivMenu.addChild(objStatic.id, objStatic);
        		objStatic.show();
        		objStatic.set_text(sMenuNm);
        		dataset.filter("upperMenuId=='"+sMenuId+"'");
        		//S
        		objStatic.set_cssclass("sta_TF_navTitle2");
        		objStatic.addEventHandler("onclick", this.Static_onclick, this);

        		nSubCount = dataset.rowcount;
        		nSubLeft = nLeft + objPadding.x;
        		nSubTop = nTop + nHeight + objPadding.y;
        		for(j=0;j<nSubCount;j++)
        		{
        			if(j==0){
        				nSubTop = nSubTop - objPadding.y + 7;
        			}
        			sMenuCd = dataset.getColumn(j, "menuId");
        			sMenuNm = dataset.getColumn(j, "munuNm");

        			objStatic = new Static(/*"st_"+*/sMenuCd, nLeft, nSubTop, nWidth, nSubHeight, null, null);
        			objDiv.pdivMenu.addChild(objStatic.id, objStatic);
        			objStatic.show();
        			objStatic.set_text(dataset.getColumn(j, "menuNm"));
        			objStatic.menuId = dataset.getColumn(j, "menuId");
        			objStatic.set_cssclass("sta_TF_navText");
        			objStatic.addEventHandler("onclick", this.Static_onclick, this);

        			nSubTop = nSubTop + nSubHeight;
        		}
        		if(nSubTop > nMaxHeight)nMaxHeight = nSubTop;
        		nLeft = nLeft + nWidth + objPadding.x;
        		if(nLeft+nWidth + objPadding.x>nMenuWidth)
        		{
        			nLeft = 0;
        			nTop = nMaxHeight + objPadding.y;
        		}
        		//E
        // 		if(this.gfnIsEmpty(url)){
        // 			objStatic.set_cssclass("sta_TF_navTitle2");
        //
        // 			nSubCount = dataset.rowcount;
        // 			nSubLeft = nLeft + objPadding.x;
        // 			nSubTop = nTop + nHeight + objPadding.y;
        // 			for(j=0;j<nSubCount;j++)
        // 			{
        // 				if(j==0){
        // 					nSubTop = nSubTop - objPadding.y + 7;
        // 				}
        // 				sMenuCd = dataset.getColumn(j, "menuId");
        // 				sMenuNm = dataset.getColumn(j, "munuNm");
        //
        // 				objStatic = new Static(/*"st_"+*/sMenuCd, nLeft, nSubTop, nWidth, nSubHeight, null, null);
        // 				objDiv.pdivMenu.addChild(objStatic.id, objStatic);
        // 				objStatic.show();
        // 				objStatic.set_text(dataset.getColumn(j, "menuNm"));
        // 				objStatic.menuId = dataset.getColumn(j, "menuId");
        // 				objStatic.set_cssclass("sta_TF_navText");
        // 				objStatic.addEventHandler("onclick", this.Static_onclick, this);
        //
        // 				nSubTop = nSubTop + nSubHeight;
        // 			}
        // 			if(nSubTop > nMaxHeight)nMaxHeight = nSubTop;
        // 			nLeft = nLeft + nWidth + objPadding.x;
        // 			if(nLeft+nWidth + objPadding.x>nMenuWidth)
        // 			{
        // 				nLeft = 0;
        // 				nTop = nMaxHeight + objPadding.y;
        // 			}
        // 		}else{
        // 			objStatic.set_cssclass("sta_TF_navText");
        // 			objStatic.addEventHandler("onclick", this.Static_onclick, this);
        //
        // 			nTop = nTop + nHeight;
        // 			nMaxHeight = nTop;
        // 		}

        		dataset.filter("");
        	}

        	objDiv.pdivMenu.setOffsetWidth(nMenuWidth);
        	objDiv.pdivMenu.setOffsetHeight(nMaxHeight);

        	this.dsSubMenu.set_enableevent(true);
        	dataset.set_enableevent(true);
        }

        /**
         * fnDrawMenu : 팝업div의 메뉴버튼을 생성해준다.
         * @return : N/A
         * @example :
         */
        this.fnDrawMenu = function()
        {
        	//if(dataset.rowcount < 1) return;
        	//화면 사이즈
        	var nScreenSize = this.getOffsetWidth();

        	//1.레벨0이 세로 한줄
        	var columnCnt = dataset.getCaseCount("level=='0'");
        	var dsCnt = dataset.rowcount;
        	var menuId = "";
        	//동적으로 Static을 구한다.
        	var objStatic;
        	var objNmBytes = 0;
        	var nLeft = this.mainMenu.getOffsetLeft()
        	var nTop = 55;
        	var nHeight = 30;
        	var nGap = 50;
        	var nWidth = 0;
        	var prevWidth = 0;

            for (var i = (this.components.length - 1); i >= 0; i--) {
                const comp = this.components[i];
                if (comp.cssclass === "sta_TF_navTitle1") {
                    this.removeChild(comp);
                    comp.destroy();
                }
            }

        	for(var i = 0 ; i < dsCnt ; i++)
        	{
        		if(dataset.getColumn(i,"level") == '0')//대메뉴
        		{
        			objId = /*"sta" + */dataset.getColumn(i, "menuId");
        			objNmBytes = this.fnCount(dataset.getColumn(i, "menuNm"));
        			nWidth = objNmBytes;
        			// objId = "L_" + objId;
        			if(i != "0")
        			{
        				nLeft = nLeft + prevWidth + nGap;
        			}
        			prevWidth = nWidth;
        			objStatic = this.components[objId];

        			//버튼생성
        			objStatic = new Static(objId, nLeft, nTop, nWidth, nHeight);
        			objStatic.set_text(dataset.getColumn(i, "menuNm"));
        			objStatic.set_cssclass("sta_TF_navTitle1");
        			//objStatic.set_cssclass(this.staTopMenuSample.cssclass);
        			if(this.gfnIsEmpty(dataset.getColumn(i, "url"))){
        				objStatic.addEventHandler("onclick",this.staTopMenuSample_onclick, this);
        				objStatic.addEventHandler("onmouseenter",this.staTopMenuSample_onmouseenter, this);
        				objStatic.addEventHandler("onmouseleave",this.staTopMenuSample_onmouseleave, this);
        				objStatic.addEventHandler("onmousemove",this.staTopMenuSample_onmousemove, this);
        			}else{
        				objStatic.addEventHandler("onclick",this.Static_onclick, this);
        			}

        			this.addChild(objId, objStatic);
        			objStatic.show();
        		}
        	}
        }

        this.fnCount = function(str) {
        	var bytes = 0;
            for (var i=0, n=str.length; i < n; i++) {
                 var oneChar = escape(str.charAt(i));
                 if ( oneChar.length == 1 ) {
        			 bytes += 9.5;
                 } else if (oneChar.indexOf("%u") != -1) {
                     bytes += 16;
                 } else if (oneChar.indexOf("%") != -1) {
                     bytes += ((oneChar.length/3) + 4);
                 }
            }

            return bytes;
        }

        this.sta_TF_navText_onclick = function(obj,e)
        {
        	var url = dataset.getColumn(e.userdata, "url");
        	var menuId = dataset.getColumn(e.userdata, "menuId");
        	var title = dataset.getColumn(e.userdata, "menuNm");
        	var menuPath = dataset.getColumn(e.userdata, "menuNmPath");

        	nexacro.getApplication().openNewTab(menuId, title, url, {}, menuPath, menuId);
        };

        this.Static_onclick = function(obj,e)
        {
        	var sMenuId = obj.id.toString();
        	var nRow = dataset.findRow("menuId",sMenuId);
        	var url = dataset.getColumn(nRow, "url");
        	var menuId = dataset.getColumn(nRow, "menuId");
        	var title = dataset.getColumn(nRow, "menuNm");
        	var menuPath = dataset.getColumn(nRow, "menuNmPath");
        	this.divMenu.closePopup();

        	nexacro.getApplication().openNewTab(menuId, title, url, {}, menuPath, menuId);
        }
        this.staTopMenuSample_onclick = function(obj,e)
        {
        	var nWidth = this.getOffsetWidth();
        	this.fnOpenTopMenu(obj);

        	var menu = this.divMenu.form.pdivMenu;
        	var height = menu.getOffsetHeight() + 70;
        	if(height < 180) height = 180;
        	divMenuHeight = height;
        	this.divMenu.closePopup();
        	this.divMenu.trackPopupByComponent(this,0,112,nWidth,divMenuHeight);
        };
        this.fnOpenTopMenu = function(obj)
        {
        	var nMenuWidth = this.getOffsetWidth() - 420;
        	this.fnCreateMenu(obj, nMenuWidth);
        }
        this.btn_login_onclick = function(obj,e)
        {
        	var sMenuId = "login";
        	var url = "pts::mif/MIF_3010M.xfdl";
        	app.goPage(sMenuId, url);
        };

        this.btn_10_onclick = function(obj,e)
        {
        	var sMenuId = "termsAgree";
        	var url = "pts::mif/MIF_1010M.xfdl";
        	app.goPage(sMenuId, url);
        };

        this.btn_mypage_onclick = function(obj,e)
        {
        	var sMenuId = "myPage";
        	//var url = "Mypage::my_myInfo.xfdl";
        	var url = "pts::mif/MIF_2000M.xfdl";
        	app.goPage(sMenuId, url);
        };

        this.btn_11_onclick = function(obj,e)
        {

        };

        this.btnClosePopup_onclick = function(obj,e)
        {
        	this.gfnCloseMegaMenu();
        };

        this.menu_onclick = function(obj,e)
        {
        	this.gfnOpenMegaMenu(this);
        };

        this.staTopMenuSample_onmouseenter = function(obj,e)
        {
        	this.fnOpenTopMenu(obj);
        	//trace(divMenuHeight);
        	//팝업이 열려있을때는 동작안함
        };

        this.Static00_onclick = function(obj,e)
        {
        	nexacro.getApplication().openHomeTab();
        };

        this.btn_00_00_00_onclick = function(obj,e)
        {
        	var sMenuId = "myPotal";
        	//var url = "Mypage::my_myInfo.xfdl";
        	var url = "pts::PTS_6000M.xfdl";
        	app.goPage(sMenuId, url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.addEventHandler("onmousemove",this.Form_Top_onmove,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.mainMenu.addEventHandler("onmenuclick",this.mainMenu_onmenuclick,this);
            this.btn_01.addEventHandler("onclick",this.menu_onclick,this);
            this.divMenu.form.pdivMenu.form.staMenuSample3.addEventHandler("onclick",this.sta_TF_navText_onclick,this);
            this.divMenu.form.pdivMenu.form.staMenuSample3_00.addEventHandler("onclick",this.sta_TF_navText_onclick,this);
            this.staTopMenuSample.addEventHandler("onclick",this.staTopMenuSample_onclick,this);
            this.staTopMenuSample.addEventHandler("onmouseenter",this.staTopMenuSample_onmouseenter,this);
            this.divTopBtn.form.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
            this.divTopBtn.form.btnRegister.addEventHandler("onclick",this.btn_10_onclick,this);
            this.divTopBtn.form.btnLogin.addEventHandler("onclick",this.btn_login_onclick,this);
            this.divTopBtn.form.btnMyPage.addEventHandler("onclick",this.btn_mypage_onclick,this);
            this.divTopBtn.form.btnManual.addEventHandler("onclick",this.btn_00_00_00_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
