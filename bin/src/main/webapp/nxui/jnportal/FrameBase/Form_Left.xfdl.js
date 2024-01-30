(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("FormLeft");
            this.set_titletext("New Form");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"1000\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"INT\" size=\"256\"/><Column id=\"menuNmPath\" type=\"STRING\" size=\"256\"/><Column id=\"FAV_CHECK\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">TOP</Col><Col id=\"menuNm\">기술기획</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,000,000</Col><Col id=\"level\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col><Col id=\"rowNum\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern01</Col><Col id=\"upperMenuId\">Pattern01</Col><Col id=\"menuNm\">Pattern01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,000,000</Col><Col id=\"url\">sam::pat_0001.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트1</Col><Col id=\"progId\">Pattern01</Col><Col id=\"rowNum\">1</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern03</Col><Col id=\"upperMenuId\">Pattern03</Col><Col id=\"menuNm\">Pattern03</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,100,000</Col><Col id=\"url\">sam::pat_0003.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트2</Col><Col id=\"progId\">Pattern03</Col><Col id=\"rowNum\">2</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern04</Col><Col id=\"upperMenuId\">Pattern04</Col><Col id=\"menuNm\">Pattern04</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,200,000</Col><Col id=\"url\">sam::pat_0004.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트3</Col><Col id=\"progId\">Pattern04</Col><Col id=\"rowNum\">3</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern05</Col><Col id=\"upperMenuId\">Pattern05</Col><Col id=\"menuNm\">Pattern05</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,300,000</Col><Col id=\"url\">sam::pat_0005.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern05</Col><Col id=\"rowNum\">4</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern06</Col><Col id=\"upperMenuId\">Pattern06</Col><Col id=\"menuNm\">Pattern06</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,400,000</Col><Col id=\"url\">sam::pat_0006.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern06</Col><Col id=\"rowNum\">5</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Base Components</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">Base Components</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,500,000</Col><Col id=\"url\">sam::bas_components.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">Base Components</Col><Col id=\"progId\">BaseComponents</Col><Col id=\"rowNum\">6</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">pat_popup1000</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">pat_popup1000</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,600,000</Col><Col id=\"url\">sam::pat_popup1000.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup1000</Col><Col id=\"progId\">pat_popup1000</Col><Col id=\"rowNum\">7</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">pat_popup800</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">pat_popup800</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,700,000</Col><Col id=\"url\">sam::pat_popup800.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup800</Col><Col id=\"progId\">pat_popup800</Col><Col id=\"rowNum\">8</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">pat_popup600</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">pat_popup600</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,800,000</Col><Col id=\"url\">sam::pat_popup600.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup600</Col><Col id=\"progId\">pat_popup600</Col><Col id=\"rowNum\">9</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">GUIDE</Col><Col id=\"upperMenuId\">GUIDE</Col><Col id=\"menuNm\">GUIDE</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,900,000</Col><Col id=\"url\">GUIDE::CompGuide02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">GUIDE</Col><Col id=\"progId\">GUIDE</Col><Col id=\"rowNum\">10</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">핵심기술공고</Col><Col id=\"sortOrdr\">2,000,000</Col><Col id=\"menuNm\">기획공고</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">11</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">방산진흥공모</Col><Col id=\"menuNm\">방산진흥공모</Col><Col id=\"sortOrdr\">3,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">1</Col></Row><Row><Col id=\"menuId\">방산진흥공고</Col><Col id=\"menuNm\">방산진흥공고</Col><Col id=\"sortOrdr\">4,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">협약관리</Col><Col id=\"menuNm\">협약관리</Col><Col id=\"sortOrdr\">5,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">수행관리</Col><Col id=\"menuNm\">수행관리</Col><Col id=\"sortOrdr\">6,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">사업비관리</Col><Col id=\"menuNm\">사업비관리</Col><Col id=\"sortOrdr\">7,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">성과관리</Col><Col id=\"menuNm\">성과관리</Col><Col id=\"sortOrdr\">8,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">이용안내</Col><Col id=\"menuNm\">이용안내</Col><Col id=\"sortOrdr\">9,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFavMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"menuId\" type=\"STRING\" size=\"256\"/><Column id=\"upperMenuId\" type=\"STRING\" size=\"256\"/><Column id=\"progId\" type=\"STRING\" size=\"256\"/><Column id=\"menuNm\" type=\"STRING\" size=\"256\"/><Column id=\"menuTy\" type=\"STRING\" size=\"256\"/><Column id=\"sortOrdr\" type=\"INT\" size=\"256\"/><Column id=\"url\" type=\"STRING\" size=\"1000\"/><Column id=\"level\" type=\"INT\" size=\"256\"/><Column id=\"indctYn\" type=\"STRING\" size=\"256\"/><Column id=\"rowNum\" type=\"INT\" size=\"256\"/><Column id=\"menuNmPath\" type=\"STRING\" size=\"256\"/><Column id=\"FAV_CHECK\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menuId\">TOP</Col><Col id=\"menuNm\">기술기획</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,000,000</Col><Col id=\"level\">0</Col><Col id=\"menuNmPath\">TOP_TEST</Col><Col id=\"rowNum\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern01</Col><Col id=\"upperMenuId\">Pattern01</Col><Col id=\"menuNm\">Pattern01</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,000,000</Col><Col id=\"url\">sam::pat_0001.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트1</Col><Col id=\"progId\">Pattern01</Col><Col id=\"rowNum\">1</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern03</Col><Col id=\"upperMenuId\">Pattern03</Col><Col id=\"menuNm\">Pattern03</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,100,000</Col><Col id=\"url\">sam::pat_0003.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트2</Col><Col id=\"progId\">Pattern03</Col><Col id=\"rowNum\">2</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern04</Col><Col id=\"upperMenuId\">Pattern04</Col><Col id=\"menuNm\">Pattern04</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,200,000</Col><Col id=\"url\">sam::pat_0004.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트3</Col><Col id=\"progId\">Pattern04</Col><Col id=\"rowNum\">3</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern05</Col><Col id=\"upperMenuId\">Pattern05</Col><Col id=\"menuNm\">Pattern05</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,300,000</Col><Col id=\"url\">sam::pat_0005.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern05</Col><Col id=\"rowNum\">4</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Pattern06</Col><Col id=\"upperMenuId\">Pattern06</Col><Col id=\"menuNm\">Pattern06</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,400,000</Col><Col id=\"url\">sam::pat_0006.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">테스트 테스트4</Col><Col id=\"progId\">Pattern06</Col><Col id=\"rowNum\">5</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">Base Components</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">Base Components</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,500,000</Col><Col id=\"url\">sam::bas_components.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">Base Components</Col><Col id=\"progId\">BaseComponents</Col><Col id=\"rowNum\">6</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">pat_popup1000</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">pat_popup1000</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,600,000</Col><Col id=\"url\">sam::pat_popup1000.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup1000</Col><Col id=\"progId\">pat_popup1000</Col><Col id=\"rowNum\">7</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">pat_popup800</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">pat_popup800</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,700,000</Col><Col id=\"url\">sam::pat_popup800.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup800</Col><Col id=\"progId\">pat_popup800</Col><Col id=\"rowNum\">8</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">pat_popup600</Col><Col id=\"upperMenuId\">TEST</Col><Col id=\"menuNm\">pat_popup600</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,800,000</Col><Col id=\"url\">sam::pat_popup600.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">pat_popup600</Col><Col id=\"progId\">pat_popup600</Col><Col id=\"rowNum\">9</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">GUIDE</Col><Col id=\"upperMenuId\">GUIDE</Col><Col id=\"menuNm\">GUIDE</Col><Col id=\"menuTy\">GROUP</Col><Col id=\"sortOrdr\">1,900,000</Col><Col id=\"url\">GUIDE::CompGuide02.xfdl</Col><Col id=\"level\">1</Col><Col id=\"menuNmPath\">GUIDE</Col><Col id=\"progId\">GUIDE</Col><Col id=\"rowNum\">10</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">핵심기술공고</Col><Col id=\"sortOrdr\">2,000,000</Col><Col id=\"menuNm\">기획공고</Col><Col id=\"level\">0</Col><Col id=\"rowNum\">11</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">방산진흥공모</Col><Col id=\"menuNm\">방산진흥공모</Col><Col id=\"sortOrdr\">3,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">1</Col></Row><Row><Col id=\"menuId\">방산진흥공고</Col><Col id=\"menuNm\">방산진흥공고</Col><Col id=\"sortOrdr\">4,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">협약관리</Col><Col id=\"menuNm\">협약관리</Col><Col id=\"sortOrdr\">5,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">수행관리</Col><Col id=\"menuNm\">수행관리</Col><Col id=\"sortOrdr\">6,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">사업비관리</Col><Col id=\"menuNm\">사업비관리</Col><Col id=\"sortOrdr\">7,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">성과관리</Col><Col id=\"menuNm\">성과관리</Col><Col id=\"sortOrdr\">8,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row><Row><Col id=\"menuId\">이용안내</Col><Col id=\"menuNm\">이용안내</Col><Col id=\"sortOrdr\">9,000,000</Col><Col id=\"level\">0</Col><Col id=\"FAV_CHECK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnMenuAll","0","0","50.00%","48",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전체메뉴");
            obj.set_enable("true");
            obj.set_cssclass("btn_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuFav","50%","0","50.00%","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("즐겨찾기");
            obj.set_cssclass("btn_LF_favorite");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,"250","150",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LF_img1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFav","20","48",null,null,"20","150",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("gdsFavoriteMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseimage("false");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"240\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:menuNmPath\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" tooltiptext=\"bind:menuNmPath\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLeft","20","48",null,null,"20","150",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_autofittype("col");
            obj.set_scrollbartype("autoindicator");
            obj.set_treeinitstatus("collapse,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("false");
            obj.set_binddataset("gdsMenu");
            obj.set_treeusebutton("no");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"36\"/></Columns><Rows><Row size=\"57\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"전체메뉴\"/></Band><Band id=\"body\"><Cell text=\"bind:menuNm\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\" cssclass=\"expr:dataset.parent.fnSetGridCssClass(comp, level, currow,null)\" tooltiptext=\"bind:menuNm\"/><Cell col=\"1\" displaytype=\"imagecontrol\" expr=\"menuTy == &apos;PAGE&apos; ? (favoriteYn == &apos;Y&apos; ? &apos;theme://images/img_LF_favorite_active.png&apos; : &apos;theme://images/img_LF_favorite.png&apos;)  : &apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",250,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {

        this.resultMsg = null;
        this.menuId = null;
        this.favoriteYn = null;

        this.fnSetFavorite = function (menuId, set) {
            this.gfnTransaction("setFavorite", "cmn/favorite/setFavoriteMenu.do", "", "", "menuId=" + menuId + " setFavorite=" + set, "fnCallback");
        }

        this.fnCallback = function (svcId, errorCode, errorMsg)
        {
            if (svcId == "setFavorite" && this.resultMsg == "success") {
                const dataset = nexacro.getApplication().gdsMenu;
                const index = dataset.findRow("menuId", this.menuId);
                dataset.setColumn(index, "favoriteYn", this.favoriteYn);
                this.grdLeft.redrawExprCell();
            }
        };

        /**************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        **************************************************************************/
        /**
         * @description btnMenuFav onclick event : 즐겨찾기 버튼 클릭
         */
        this.btnMenuFav_onclick = function(obj,e)
        {
        	this.grdFav.set_visible(true);
        	this.grdLeft.set_visible(false);

        	this.btnMenuAll.set_enable(true);
        	this.btnMenuFav.set_enable(false);
            nexacro.getApplication().fnReloadFavoriteMenu();
        };

        /**
         * @description btnMenuAll onclick event : 전체메뉴 버튼 클릭
         */
        this.btnMenuAll_onclick = function(obj,e)
        {
        	this.grdFav.set_visible(false);
        	this.grdLeft.set_visible(true);

        	this.btnMenuAll.set_enable(false);
        	this.btnMenuFav.set_enable(true);
        };

        /**
         * @description grdLeft oncellclick event : Tree 메뉴 클릭 이벤트
         */
        this.grdLeft_oncellclick = function(obj,e)
        {
        	var sFavCheck =0;
        	var objDs = obj.getBindDataset();
        	//Tree Row Index 가져오기
        	var nTreeRow = obj.getTreeRow(e.row)

        	//현재 트리 상태 가져오기
        	var sStatus = obj.getTreeStatus(nTreeRow);

            if (objDs.getColumn(e.row, "menuTy") === "PAGE") {
                const url = objDs.getColumn(e.row, "url");
                const menuId = objDs.getColumn(e.row, "menuId");
                const title = objDs.getColumn(e.row, "menuNm");
                const menuPath = objDs.getColumn(e.row, "menuNmPath");
                const favoriteYn = objDs.getColumn(e.row, "favoriteYn");

                if (e.col == 1) {
                    this.fnSetFavorite(menuId, (favoriteYn == "Y" ? "N" : "Y"))
                } else {
                    this.parent.parent.Ani01.play();
                    nexacro.getApplication().openNewTab(menuId, title, url, {}, menuPath, menuId);
                }
            }

        	//접기상태일 경우
        	if (sStatus == "0")
        	{
        		//펼치기 상태로 변경
        		obj.setTreeStatus(nTreeRow, 1);
        	}
        	//펼치기 상태로 변경
        	else if (sStatus=="1")
        	{
        		//접기 상태로 변경
        		obj.setTreeStatus(nTreeRow, 0);
        	}
        };

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/

        /**
        * @description 		: Depth별 CSSCLASS를 적용하기 위한 expr용 함수
        * @param objGrid	: 그리드 컴포넌트
        * @param nLevel     : 현재 Row의 Tree Level
        * @param nRow       : 현재 Row Index
        * @return 			: 없음
        */
        this.fnSetGridCssClass = function(objGrid, nLevel, nRow, fav)
        {
        	//Tree Row Index 가져오기
        	var nTreeRow = objGrid.getTreeRow(nRow)

        	//현재 트리 상태 가져오기
        	var sStatus = objGrid.getTreeStatus(nTreeRow);

        	var sCssClass = "";
        	var selected = "";

        	if(fav == "N")
        	{
        		selected += "_fav";
        	}
        	else if(fav == "Y")
        	{
        		selected += "_fav_S";
        	}
        	//접기 상태일 경우 접기상태 표시를 위한 CSSCLASS 적용
        	if(sStatus=="0")
        	{
        		sCssClass = "treeCellCollapse";
        	}
        	//펼치기 상태일 경우 펼치기 상태 표시를 위한 CSSCLASS 적용
        	else if(sStatus=="1")
        	{
        		sCssClass = "treeCellExpand";
        	}

        	if(sStatus!="2")sCssClass +=", ";

        	//Tree Level 0을 표현하기 위한 CSSCLASS 적용
        	if(nLevel==0)
        	{
        		sCssClass += "cellTreeLevel0" + selected;
        	}
        	//Tree Level 1을 표현하기 위한 CSSCLASS 적용
        	else if(nLevel==1)
        	{
        		sCssClass += "cellTreeLevel1" + selected;
        	}
        	//Tree Level 2을 표현하기 위한 CSSCLASS 적용
        	else if(nLevel==2)
        	{
        		sCssClass += "cellTreeLevel2" + selected;
        	}

        	//설정될 CSSCLASS 리스트 정보를 리턴
        	return sCssClass;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnMenuAll.addEventHandler("onclick",this.btnMenuAll_onclick,this);
            this.btnMenuFav.addEventHandler("onclick",this.btnMenuFav_onclick,this);
            this.grdFav.addEventHandler("oncellclick",this.grdLeft_oncellclick,this);
            this.grdLeft.addEventHandler("oncellclick",this.grdLeft_oncellclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
