(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Menu");
            this.set_titletext("New Form");
            this.set_background("url(\'theme://images/megaMenu_bg.png\') repeat left top #f5f5f5");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,235);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLv2Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLv3Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLv1Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"1000\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"INT\" size=\"256\"/><Column id=\"menuNmPath\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">M_01</Col><Col id=\"menuNm\">메뉴000000001</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col><Col id=\"rowNum\">0</Col><Col id=\"upperMenuId\">0</Col></Row><Row><Col id=\"menuId\">M_01_01</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuNm\">화면그룹01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트1</Col><Col id=\"progId\">Pattern01</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_01_01_01</Col><Col id=\"upperMenuId\">M_01_01</Col><Col id=\"menuNm\">핵심기술 과제기획</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_1010M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern05</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_01_02</Col><Col id=\"upperMenuId\">M_01_01</Col><Col id=\"menuNm\">핵심기술 과제공고</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_1020M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern06</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_01_03</Col><Col id=\"upperMenuId\">M_01_01</Col><Col id=\"menuNm\">신청확인 / 결과조회</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_1030M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"menuNmPath\">Base Components</Col><Col id=\"progId\">BaseComponents</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_02</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"progId\">Pattern03</Col><Col id=\"menuNm\">화면그룹02</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트2</Col></Row><Row><Col id=\"menuId\">M_01_02_01</Col><Col id=\"upperMenuId\">M_01_02</Col><Col id=\"menuNm\">이용매뉴얼/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3020M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"menuNmPath\">pat_popup1000</Col><Col id=\"progId\">pat_popup1000</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_02_02</Col><Col id=\"upperMenuId\">M_01_02</Col><Col id=\"menuNm\">이용매뉴얼/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3020M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"menuNmPath\">pat_popup800</Col><Col id=\"progId\">pat_popup800</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_03</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuNm\">화면그룹03</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트3</Col><Col id=\"progId\">Pattern04</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_01_03_01</Col><Col id=\"upperMenuId\">M_01_03</Col><Col id=\"menuNm\">자료실/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3030M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"menuNmPath\">GUIDE</Col><Col id=\"progId\">GUIDE</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_03_02</Col><Col id=\"menuNm\">자료실/상세보기</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">2</Col><Col id=\"upperMenuId\">M_01_03</Col><Col id=\"url\">pts::PTS_3030M_02.xfdl</Col><Col id=\"rowNum\">2</Col><Col id=\"menuTy\">MENU</Col></Row><Row><Col id=\"menuId\">M_01_04</Col><Col id=\"menuNm\">화면그룹04</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">1</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_01_04_01</Col><Col id=\"menuNm\">FAQ</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">2</Col><Col id=\"upperMenuId\">M_01_04</Col><Col id=\"menuTy\">MENU</Col><Col id=\"url\">pts::PTS_3040M.xfdl</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuId\">M_01_05</Col><Col id=\"menuNm\">화면그룹05</Col><Col id=\"url\"/><Col id=\"level\">1</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_01_05_01</Col><Col id=\"upperMenuId\">M_01_05</Col><Col id=\"menuNm\">Q&amp;A/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3050M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_05_02</Col><Col id=\"upperMenuId\">M_01_05</Col><Col id=\"menuNm\">Q&amp;A/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3050M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuNm\">Q&amp;A/입력폼</Col><Col id=\"menuId\">M_01_05_03</Col><Col id=\"upperMenuId\">M_01_05</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_3050M_03.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_01_06</Col><Col id=\"upperMenuId\">M_01</Col><Col id=\"menuNm\">화면그룹06</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"upperMenuId\">M_01_06</Col><Col id=\"menuId\">M_01_06_01</Col><Col id=\"menuNm\">규정 및 지침/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3060M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"upperMenuId\">M_01_06</Col><Col id=\"menuId\">M_01_06_02</Col><Col id=\"menuNm\">규정 및 지침/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3060M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_02</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">메뉴000000002</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col></Row><Row><Col id=\"upperMenuId\">M_02</Col><Col id=\"menuId\">M_02_01</Col><Col id=\"menuNm\">공지사항/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"upperMenuId\">M_02</Col><Col id=\"menuId\">M_02_02</Col><Col id=\"menuNm\">공지사항/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_03</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">메뉴000000003</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col></Row><Row><Col id=\"menuId\">M_03_01</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"progId\">Pattern01</Col><Col id=\"menuNm\">화면그룹01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트1</Col></Row><Row><Col id=\"menuId\">M_03_01_01</Col><Col id=\"upperMenuId\">M_03_01</Col><Col id=\"progId\">Pattern05</Col><Col id=\"menuNm\">핵심기술 과제기획</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_1010M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col></Row><Row><Col id=\"menuId\">M_03_01_02</Col><Col id=\"upperMenuId\">M_03_01</Col><Col id=\"progId\">Pattern06</Col><Col id=\"menuNm\">핵심기술 과제공고</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_1020M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col></Row><Row><Col id=\"menuId\">M_03_01_03</Col><Col id=\"upperMenuId\">M_03_01</Col><Col id=\"progId\">BaseComponents</Col><Col id=\"menuNm\">신청확인 / 결과조회</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_1030M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">Base Components</Col></Row><Row><Col id=\"menuId\">M_03_02</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"progId\">Pattern03</Col><Col id=\"menuNm\">화면그룹02</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트2</Col></Row><Row><Col id=\"menuId\">M_03_02_01</Col><Col id=\"upperMenuId\">M_03_02</Col><Col id=\"progId\">pat_popup1000</Col><Col id=\"menuNm\">이용매뉴얼/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3020M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">pat_popup1000</Col></Row><Row><Col id=\"menuId\">M_03_02_02</Col><Col id=\"upperMenuId\">M_03_02</Col><Col id=\"progId\">pat_popup800</Col><Col id=\"menuNm\">이용매뉴얼/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3020M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">pat_popup800</Col></Row><Row><Col id=\"menuId\">M_03_03</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"progId\">Pattern04</Col><Col id=\"menuNm\">화면그룹03</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">3</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트3</Col></Row><Row><Col id=\"menuId\">M_03_03_01</Col><Col id=\"upperMenuId\">M_03_03</Col><Col id=\"progId\">GUIDE</Col><Col id=\"menuNm\">자료실/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3030M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">GUIDE</Col></Row><Row><Col id=\"menuId\">M_03_03_02</Col><Col id=\"upperMenuId\">M_03_03</Col><Col id=\"menuNm\">자료실/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3030M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_03_04</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuNm\">화면그룹04</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_03_04_01</Col><Col id=\"upperMenuId\">M_03_04</Col><Col id=\"menuNm\">FAQ</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3040M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_03_05</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuNm\">화면그룹05</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_03_05_01</Col><Col id=\"upperMenuId\">M_03_05</Col><Col id=\"menuNm\">Q&amp;A/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3050M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_03_05_02</Col><Col id=\"upperMenuId\">M_03_05</Col><Col id=\"menuNm\">Q&amp;A/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3050M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_03_05_03</Col><Col id=\"upperMenuId\">M_03_05</Col><Col id=\"menuNm\">Q&amp;A/입력폼</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_3050M_03.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_03_06</Col><Col id=\"upperMenuId\">M_03</Col><Col id=\"menuNm\">화면그룹06</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_03_06_01</Col><Col id=\"upperMenuId\">M_03_06</Col><Col id=\"menuNm\">규정 및 지침/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3060M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_03_06_02</Col><Col id=\"upperMenuId\">M_03_06</Col><Col id=\"menuNm\">규정 및 지침/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3060M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_04</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">메뉴000000004</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col></Row><Row><Col id=\"menuId\">M_04_01</Col><Col id=\"upperMenuId\">M_04</Col><Col id=\"menuNm\">공지사항/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_04_02</Col><Col id=\"upperMenuId\">M_04</Col><Col id=\"menuNm\">공지사항/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_05</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">메뉴000000005</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col></Row><Row><Col id=\"menuId\">M_05_01</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"progId\">Pattern01</Col><Col id=\"menuNm\">화면그룹01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트1</Col></Row><Row><Col id=\"menuId\">M_05_01_01</Col><Col id=\"upperMenuId\">M_05_01</Col><Col id=\"progId\">Pattern05</Col><Col id=\"menuNm\">핵심기술 과제기획</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_1010M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col></Row><Row><Col id=\"menuId\">M_05_01_02</Col><Col id=\"upperMenuId\">M_05_01</Col><Col id=\"progId\">Pattern06</Col><Col id=\"menuNm\">핵심기술 과제공고</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_1020M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col></Row><Row><Col id=\"menuId\">M_05_01_03</Col><Col id=\"upperMenuId\">M_05_01</Col><Col id=\"progId\">BaseComponents</Col><Col id=\"menuNm\">신청확인 / 결과조회</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_1030M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">Base Components</Col></Row><Row><Col id=\"menuId\">M_05_02</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"progId\">Pattern03</Col><Col id=\"menuNm\">화면그룹02</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트2</Col></Row><Row><Col id=\"menuId\">M_05_02_01</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"progId\">pat_popup1000</Col><Col id=\"menuNm\">이용매뉴얼/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3020M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">pat_popup1000</Col></Row><Row><Col id=\"menuId\">M_05_02_02</Col><Col id=\"upperMenuId\">M_05_02</Col><Col id=\"progId\">pat_popup800</Col><Col id=\"menuNm\">이용매뉴얼/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3020M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">pat_popup800</Col></Row><Row><Col id=\"menuId\">M_05_03</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"progId\">Pattern04</Col><Col id=\"menuNm\">화면그룹03</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">3</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트3</Col></Row><Row><Col id=\"menuId\">M_05_03_01</Col><Col id=\"upperMenuId\">M_05_03</Col><Col id=\"progId\">GUIDE</Col><Col id=\"menuNm\">자료실/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3030M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">GUIDE</Col></Row><Row><Col id=\"menuId\">M_05_03_02</Col><Col id=\"upperMenuId\">M_05_03</Col><Col id=\"menuNm\">자료실/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3030M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_05_04</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"menuNm\">화면그룹04</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_05_04_01</Col><Col id=\"upperMenuId\">M_05_04</Col><Col id=\"menuNm\">FAQ</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3040M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_05_05</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"menuNm\">화면그룹05</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_05_05_01</Col><Col id=\"upperMenuId\">M_05_05</Col><Col id=\"menuNm\">Q&amp;A/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3050M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_05_05_02</Col><Col id=\"upperMenuId\">M_05_05</Col><Col id=\"menuNm\">Q&amp;A/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3050M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_05_05_03</Col><Col id=\"upperMenuId\">M_05_05</Col><Col id=\"menuNm\">Q&amp;A/입력폼</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_3050M_03.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_05_06</Col><Col id=\"upperMenuId\">M_05</Col><Col id=\"menuNm\">화면그룹06</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_05_06_01</Col><Col id=\"upperMenuId\">M_05_06</Col><Col id=\"menuNm\">규정 및 지침/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3060M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_05_06_02</Col><Col id=\"upperMenuId\">M_05_06</Col><Col id=\"menuNm\">규정 및 지침/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3060M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_06</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">메뉴000000006</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col></Row><Row><Col id=\"menuId\">M_06_01</Col><Col id=\"upperMenuId\">M_06</Col><Col id=\"menuNm\">공지사항/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_06_02</Col><Col id=\"upperMenuId\">M_06</Col><Col id=\"menuNm\">공지사항/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_07</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">메뉴000000007</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col></Row><Row><Col id=\"menuId\">M_07_01</Col><Col id=\"upperMenuId\">M_07</Col><Col id=\"progId\">Pattern01</Col><Col id=\"menuNm\">화면그룹01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트1</Col></Row><Row><Col id=\"menuId\">M_07_01_01</Col><Col id=\"upperMenuId\">M_07_01</Col><Col id=\"progId\">Pattern05</Col><Col id=\"menuNm\">핵심기술 과제기획</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_1010M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col></Row><Row><Col id=\"menuId\">M_07_01_02</Col><Col id=\"upperMenuId\">M_07_01</Col><Col id=\"progId\">Pattern06</Col><Col id=\"menuNm\">핵심기술 과제공고</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_1020M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">테스트 테스트4</Col></Row><Row><Col id=\"menuId\">M_07_01_03</Col><Col id=\"upperMenuId\">M_07_01</Col><Col id=\"progId\">BaseComponents</Col><Col id=\"menuNm\">신청확인 / 결과조회</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_1030M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">Base Components</Col></Row><Row><Col id=\"menuId\">M_07_02</Col><Col id=\"upperMenuId\">M_07</Col><Col id=\"progId\">Pattern03</Col><Col id=\"menuNm\">화면그룹02</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">2</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트2</Col></Row><Row><Col id=\"menuId\">M_07_02_01</Col><Col id=\"upperMenuId\">M_07_02</Col><Col id=\"progId\">pat_popup1000</Col><Col id=\"menuNm\">이용매뉴얼/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3020M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">pat_popup1000</Col></Row><Row><Col id=\"menuId\">M_07_02_02</Col><Col id=\"upperMenuId\">M_07_02</Col><Col id=\"progId\">pat_popup800</Col><Col id=\"menuNm\">이용매뉴얼/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3020M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">pat_popup800</Col></Row><Row><Col id=\"menuId\">M_07_03</Col><Col id=\"upperMenuId\">M_07</Col><Col id=\"progId\">Pattern04</Col><Col id=\"menuNm\">화면그룹03</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">3</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col><Col id=\"menuNmPath\">테스트 테스트3</Col></Row><Row><Col id=\"menuId\">M_07_03_01</Col><Col id=\"upperMenuId\">M_07_03</Col><Col id=\"progId\">GUIDE</Col><Col id=\"menuNm\">자료실/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3030M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col><Col id=\"menuNmPath\">GUIDE</Col></Row><Row><Col id=\"menuId\">M_07_03_02</Col><Col id=\"upperMenuId\">M_07_03</Col><Col id=\"menuNm\">자료실/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3030M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_07_04</Col><Col id=\"upperMenuId\">M_07</Col><Col id=\"menuNm\">화면그룹04</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">4</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_07_04_01</Col><Col id=\"upperMenuId\">M_07_04</Col><Col id=\"menuNm\">FAQ</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3040M.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_07_05</Col><Col id=\"upperMenuId\">M_07</Col><Col id=\"menuNm\">화면그룹05</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_07_05_01</Col><Col id=\"upperMenuId\">M_07_05</Col><Col id=\"menuNm\">Q&amp;A/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3050M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_07_05_02</Col><Col id=\"upperMenuId\">M_07_05</Col><Col id=\"menuNm\">Q&amp;A/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3050M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_07_05_03</Col><Col id=\"upperMenuId\">M_07_05</Col><Col id=\"menuNm\">Q&amp;A/입력폼</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_3050M_03.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_07_06</Col><Col id=\"upperMenuId\">M_07</Col><Col id=\"menuNm\">화면그룹06</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">5</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_07_06_01</Col><Col id=\"upperMenuId\">M_07_06</Col><Col id=\"menuNm\">규정 및 지침/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_3060M_01.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_07_06_02</Col><Col id=\"upperMenuId\">M_07_06</Col><Col id=\"menuNm\">규정 및 지침/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_3060M_02.xfdl</Col><Col id=\"level\">2</Col><Col id=\"rowNum\">2</Col></Row><Row><Col id=\"menuId\">M_08</Col><Col id=\"upperMenuId\">0</Col><Col id=\"menuNm\">메뉴000000008</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col></Row><Row><Col id=\"menuId\">M_08_01</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">1</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_08_02</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">2</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_08_03</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">3</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_08_04</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">4</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_08_05</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">5</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_08_06</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">6</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_08_07</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/목록</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">7</Col><Col id=\"url\">pts::PTS_4010M_01.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row><Row><Col id=\"menuId\">M_08_08</Col><Col id=\"upperMenuId\">M_08</Col><Col id=\"menuNm\">공지사항/상세보기</Col><Col id=\"menuTy\">MENU</Col><Col id=\"sortOrdr\">8</Col><Col id=\"url\">pts::PTS_4010M_02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"rowNum\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static28","0","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static28_00","1870","0","50",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 50");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11_01","0","200",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("H 37");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("H 30");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_color("blue");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("megaMenu","50","30",null,null,"50","37",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("megaTitle1","0","0","280","46",null,null,null,null,null,null,this.megaMenu.form);
            obj.set_taborder("0");
            obj.set_text("1차 메뉴명");
            obj.set_cssclass("megaTitle1");
            obj.set_visible("false");
            this.megaMenu.addChild(obj.name, obj);

            obj = new Static("megaTitle2","0","46","280","30",null,null,null,null,null,null,this.megaMenu.form);
            obj.set_taborder("1");
            obj.set_text("2차 메뉴명");
            obj.set_cssclass("megaTitle2");
            obj.set_visible("false");
            this.megaMenu.addChild(obj.name, obj);

            obj = new Static("megaTitle3","0","76","280","20",null,null,null,null,null,null,this.megaMenu.form);
            obj.set_taborder("2");
            obj.set_text("3차 메뉴명");
            obj.set_cssclass("megaTitle3");
            obj.set_visible("false");
            this.megaMenu.addChild(obj.name, obj);

            obj = new Button("btnClosePopup",null,"30","50","50","50",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn_00");
            obj.set_cssclass("megaClose");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.megaMenu.form
            obj = new Layout("default","",0,0,this.megaMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.megaTitle1.set_taborder("0");
                p.megaTitle1.set_text("1차 메뉴명");
                p.megaTitle1.set_cssclass("megaTitle1");
                p.megaTitle1.set_visible("false");
                p.megaTitle1.move("0","0","280","46",null,null);

                p.megaTitle2.set_taborder("1");
                p.megaTitle2.set_text("2차 메뉴명");
                p.megaTitle2.set_cssclass("megaTitle2");
                p.megaTitle2.set_visible("false");
                p.megaTitle2.move("0","46","280","30",null,null);

                p.megaTitle3.set_taborder("2");
                p.megaTitle3.set_text("3차 메뉴명");
                p.megaTitle3.set_cssclass("megaTitle3");
                p.megaTitle3.set_visible("false");
                p.megaTitle3.move("0","76","280","20",null,null);
            	}
            );
            this.megaMenu.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.megaMenu.form
            obj = new Layout("screen00","",0,0,this.megaMenu.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.megaMenu.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1920,235,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_MegaMenu.xfdl","lib::common.xjs");
        this.registerScript("Form_MegaMenu.xfdl", function() {
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 팝업의 메뉴들을 동적으로 생성해준다.
        */
        var dataset;
        var objApp = nexacro.getApplication().mainframe.VFrameSet.TopFrame.form;
        var objDiv = objApp.pdivMegaMenu;
        this.form_onload = function(obj,e)
        {
        	dataset = nexacro.getApplication().gdsMenu;
        	var nWidth = this.getOffsetWidth();
        	this.dsMenu.copyData(dataset,true);
        	this.fnDrawMenu();
        };
        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * fnDrawMenu : 팝업div의 메뉴버튼을 생성해준다.
         * @return : N/A
         * @example :
         */
        this.fnDrawMenu = function()
        {
        	var i, j, k;
        	var nMenuWidth = this.getOffsetWidth();
        	var nLv1Left = 0;
        	var nLv1Top = 0;
        	var nLv1Width = 367;
        	var nLv1Height = 46;
        	var nLv2Top = 0;
        	var nLv2Height = 30;
        	var nLv3Top = 0;
        	var nLv3Height = 20;
        	var nMaxHeight = 0;

        	var objPadding = {"x" : 0, "y" : 25};
        	var objStatic;
        	var objComps = this.megaMenu.form.components;
        	var nLength;
        	var nLv1Count;
        	var nLv2Count;
        	var nLv3Count;

        	var sMenuLv1Nm;
        	var sMenuLvlId;
        	var sMenuLv2Nm;
        	var sMenuLv2Id;
        	var sMenuLv3Nm;
        	var sMenuLv3Id;

        	dataset.set_enableevent(false);
        	this.dsLv1Menu.set_enableevent(false);
         	this.dsLv2Menu.set_enableevent(false);
        	this.dsLv3Menu.set_enableevent(false);
        	dataset.filter('level=="0"');
        	this.dsLv1Menu.copyData(dataset, true);
        	var datas = this.dsLv1Menu.getCount();
        	dataset.filter("");
        	nLength = objComps.length;
        	for(i=nLength-1;i>=0;i--)
        	{
        		this.megaMenu.removeChild(objComps[i].id);
        	}

        	if(datas == "0") return;
        	this.dsLv1Menu.filter("level==0");
        	nLv1Count = this.dsLv1Menu.rowcount;

        	for(i=0;i<nLv1Count;i++)
        	{
        		sMenuLv1Id = this.dsLv1Menu.getColumn(i, "menuId");
        		sMenuLv1Nm = this.dsLv1Menu.getColumn(i, "menuNm");

        		objStatic = new Static(/*"mega_"+*/sMenuLv1Id, nLv1Left, nLv1Top, nLv1Width, nLv1Height, null, null);
        		this.megaMenu.addChild(objStatic.id, objStatic);
        		objStatic.show();
        		objStatic.set_text(sMenuLv1Nm);
        		objStatic.set_cssclass("megaTitle1");
        		objStatic.addEventHandler("onclick", this.static_megamenu_onclick, this);

        		dataset.filter("upperMenuId=='"+sMenuLv1Id+"'&&level=='1'");
         		this.dsLv2Menu.copyData(dataset, true);

        		nLv2Count = this.dsLv2Menu.rowcount;
         		dataset.filter("");
        		nLv2Top = nLv1Top + nLv1Height;
         		for(j=0;j<nLv2Count;j++)
         		{
         			sMenuLv2Id = this.dsLv2Menu.getColumn(j, "menuId");
         			sMenuLv2Nm = this.dsLv2Menu.getColumn(j, "menuNm");

         			objStatic = new Static(/*"mega2_"+*/sMenuLv2Id, nLv1Left, nLv2Top, nLv1Width, nLv2Height, null, null);
         			this.megaMenu.addChild(objStatic.id, objStatic);
         			objStatic.show();
         			objStatic.menuId = sMenuLv2Id;

        			var url = this.dsLv2Menu.getColumn(j, "url");
        			if(this.gfnIsEmpty(url)){
        				objStatic.set_text(sMenuLv2Nm);
        				objStatic.set_cssclass("megaTitle2");
        			}else{
        				objStatic.set_text("- " + sMenuLv2Nm);
        				objStatic.set_cssclass("megaTitle3");
        				objStatic.addEventHandler("onclick", this.static_megamenu_onclick, this);
        			}

        			dataset.filter("upperMenuId=='"+sMenuLv2Id+"'&&level=='2'");
        			this.dsLv3Menu.copyData(dataset, true);
        			nLv3Count = this.dsLv3Menu.rowcount;
        			dataset.filter("");
        			nLv3Count = this.dsLv3Menu.rowcount;
        			nLv3Top = nLv2Top + nLv2Height;
         			for(k=0;k<nLv3Count;k++)
         			{
         				sMenuLv3Id = this.dsLv3Menu.getColumn(k, "menuId");
         				sMenuLv3Nm = this.dsLv3Menu.getColumn(k, "menuNm");

         				objStatic = new Static(/*"mega_"+*/sMenuLv3Id, nLv1Left, nLv3Top, nLv1Width, nLv3Height, null, null);
         				this.megaMenu.addChild(objStatic.id, objStatic);
         				objStatic.show();
         				objStatic.set_text("- " + sMenuLv3Nm);
         				objStatic.menuId = sMenuLv3Id;
         				objStatic.set_cssclass("megaTitle3");
         				objStatic.addEventHandler("onclick", this.static_megamenu_onclick, this);

         				nLv3Top = nLv3Top + nLv3Height;
        				if(k == (nLv3Count -1)) nLv3Top = nLv3Top + 5;
         			}
         			nLv2Top = nLv3Top;
         		}
        		if(nLv3Top > nMaxHeight)nMaxHeight = nLv3Top;

        		nLv1Left = nLv1Left + nLv1Width + objPadding.x;

        		if(nLv1Left+nLv1Width + objPadding.x>nMenuWidth)
        		{
        			nLv1Left = 0;
        			nLv1Top = nMaxHeight + objPadding.y;
        		}

        		dataset.filter("");
        	}

        	this.megaMenu.setOffsetWidth(nMenuWidth);
        	this.megaMenu.setOffsetHeight(nMaxHeight + 37);
        	this.dsSubMenu.set_enableevent(true);
        	dataset.set_enableevent(true);

        };

        /**
         * @description 메뉴버튼 클릭 : 해당 메뉴를 Open해준다.
        */
        this.btnMenu_onclick = function(obj,e)
        {
        	var menuId = String(obj.name).replace("sta","");
        	var type = "Mega";

        	if(this.gfnCloseMegaMenu())
        	{
        		this.gfnOpenMegaMenu(menuId, type);
        	}
        };

        /**
         * @description 메가메뉴를 닫아준다.
        */
        this.btnClosePopup_onclick = function(obj,e)
        {
        	this.gfnCloseMegaMenu();
        };

        this.static_megamenu_onclick = function(obj,e)
        {
        	//var sMenuId = obj.id.toString().split('_')[1];
        	var sMenuId = obj.id.toString();
        	var nRow = dataset.findRow("menuId",sMenuId);
        	var url = dataset.getColumn(nRow, "url");
        	var menuId = dataset.getColumn(nRow, "menuId");
        	var title = dataset.getColumn(nRow, "menuNm");
        	var menuPath = dataset.getColumn(nRow, "menuNmPath");
        	if(url) {
        		if(objApp.pdivMegaMenu.closePopup()){
        			nexacro.getApplication().openNewTab(menuId, title, url, {}, menuPath, menuId);
        		}
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static11_01.addEventHandler("onclick",this.megaMenu_Static11_01_onclick,this);
            this.megaMenu.form.megaTitle2.addEventHandler("onclick",this.sta_TF_navText_onclick,this);
            this.megaMenu.form.megaTitle3.addEventHandler("onclick",this.sta_TF_navText_onclick,this);
            this.btnClosePopup.addEventHandler("onclick",this.btnClosePopup_onclick,this);
        };
        this.loadIncludeScript("Form_MegaMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
