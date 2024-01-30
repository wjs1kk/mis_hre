(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_TabContent");
            this.set_titletext("");
            this.set_dragscrolltype("both");
            this.set_cssclass("div_WF_Area");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsPopup", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new View("headerView","0","0","100.00%","32",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_viewdataset("viewdataset");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("labelMenuNm","10","10","120","1",null,null,"0",null,null,null,this.headerView.form);
            obj.set_taborder("0");
            obj.set_fittocontents("none");
            obj.set_flexgrow("1");
            obj.set_flexshrink("0");
            obj.set_padding("0px 0px 0px 50px");
            obj.set_font("normal 21px/normal \"Arial\"");
            obj.set_text("");
            this.headerView.addChild(obj.name, obj);

            obj = new Static("staDepthMenu3",null,"0","120","32","50",null,null,null,null,null,this.headerView.form);
            obj.set_taborder("1");
            obj.set_text("3차메뉴");
            obj.set_cssclass("btn_MDI_navi");
            obj.set_visible("false");
            obj.set_color("#555555");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            obj.set_padding("5px");
            this.headerView.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","9","32","staDepthMenu3:0",null,null,null,null,null,this.headerView.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("sta_WF_navi");
            obj.set_visible("false");
            this.headerView.addChild(obj.name, obj);

            obj = new Static("staDepthMenu2",null,"0","120","32","Static03:0",null,null,null,null,null,this.headerView.form);
            obj.set_taborder("3");
            obj.set_text("2차메뉴");
            obj.set_cssclass("btn_MDI_navi");
            obj.set_visible("false");
            obj.set_color("#555555");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            obj.set_padding("5px");
            this.headerView.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","9","32","staDepthMenu2:0",null,null,null,null,null,this.headerView.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_WF_navi");
            obj.set_visible("false");
            this.headerView.addChild(obj.name, obj);

            obj = new Static("staDepthMenu1",null,"0","120","32","Static02:0",null,null,null,null,null,this.headerView.form);
            obj.set_taborder("5");
            obj.set_text("1차메뉴");
            obj.set_cssclass("btn_MDI_navi");
            obj.set_visible("false");
            obj.set_color("#555555");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            obj.set_padding("5px");
            this.headerView.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","9","32","staDepthMenu1:0",null,null,null,null,null,this.headerView.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sta_WF_navi");
            obj.set_visible("false");
            this.headerView.addChild(obj.name, obj);

            obj = new Button("btnHome",null,"0","25","32","Static01:0",null,null,null,null,null,this.headerView.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("btn_MDI_home");
            obj.set_tooltiptext("홈");
            obj.set_padding("5px");
            obj.set_textAlign("center");
            obj.set_fittocontents("width");
            this.headerView.addChild(obj.name, obj);

            obj = new Div("contentDiv","0","32",null,null,"0","0","20",null,"20",null,this);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj.set_flexshrink("0");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Div("leftMenu","-250","0","250",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("FrameBase::Form_Left.xfdl");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenLeftMenu","0","64","18","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.headerView.form
            obj = new Layout("default","",0,0,this.headerView.form,function(p){});
            obj.set_type("default");
            this.headerView.form.addLayout(obj.name, obj);

            //-- Default Layout : this.contentDiv.form
            obj = new Layout("default","",0,0,this.contentDiv.form,function(p){});
            this.contentDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.leftMenu
            obj = new Layout("default","",0,0,this.leftMenu.form,function(p){});
            this.leftMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,720,this,function(p){});
            obj.set_type("default");
            obj.set_verticalgap("0");
            obj.set_horizontalgap("0");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::Form_Left.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Form_TabContent.xfdl","lib::common.xjs");
        this.registerScript("Form_TabContent.xfdl", function() {
        this.executeIncludeScript("lib::common.xjs"); /*include "lib::common.xjs"*/;
        this.btnHome_onclick = function(obj,e)
        {
        	/*
        	var mainFrameSet = nexacro.getApplication().mainframe.VFrameSet.MainFrameSet;
        	var tabBarFrame = nexacro.getApplication().mainframe.VFrameSet.TabBarFrame;
        	var tabBar = tabBarFrame.form.tabBar;

        	if(tabBar.tabpages.length > 0){
        		nexacro.getApplication().closeAllTab();
        	}
        	nexacro.getApplication().openHomeTab();

        	mainFrameSet.frames["home"].setFocus();
        	*/
        };
        this.btn_MDI_navi = function(obj,e)
        {
        	this.fn_popupMenuOpen(obj);
        };

        this.Form_TabContent_oninit = function(obj,e)
        {
        	var args = this.getOwnerFrame().tabArgs;
        	this.set_titletext(args.title);
        	if (!this.gfnIsEmpty(args.menuPath)) {
        		var str = args.menuPath.split(">");
        		var form = this.headerView.form;
        		for (i = 1; i <= 3; i++) {
        			form["staDepthMenu"+i].set_visible(false);
        			form["Static0"+i].set_visible(false);
        		}

        		for (i = 1; i <= str.length; i++) {
        			form["staDepthMenu" + i].set_text(str[i - 1]);
        			form["staDepthMenu" + i].set_visible(true);
        			form["Static0" + i].set_visible(true);
        		}

        		if (str.length == 2) {
        			this.headerView.form.staDepthMenu2.set_right(50);
        		}

        		if (str.length == 1) {
        			this.headerView.form.staDepthMenu1.set_right(50);
        		}
        	}

            var url = resolveUrl(args.url);
            var query = new URLSearchParams();
            if (!this.gfnIsEmpty(args.menuId)) {
                // url.searchParams.set("__menuId__", args.menuId);
                query.set("__menuId__", args.menuId);
            }

            this.contentDiv.set_url(args.url + ".js?" + query.toString());
        };

        /**
        * Function Name : fn_popupMenuOpen
        * Description   : 메뉴 팝업 열기
        * Arguments     : objBtn : 상단 대메뉴 버튼
        * Return        : none
        */
        this.fn_popupMenuOpen = function(objBtn)
        {
        	var objMenuDs = nexacro.getApplication().mainframe.VFrameSet.TopFrame.form.dsMenu;
        	var sMenuNum = objBtn.level;
        	this.dsPopup.copyData(objMenuDs,true);
        	this.dsPopup.filter("level == '"+sMenuNum+"'");

        	if(this.dsPopup.getRowCount() < 1)
        	{
        		return;
        	}

        	var nLeft = nexacro.ceil(objBtn.getOffsetWidth() /2);
        	var nTop = objBtn.getOffsetHeight() -1;

        	this.PopupMenu00.trackPopupByComponent(objBtn,nLeft,nTop,'center');
        }

        this.leftMenu_onload = function(obj,e)
        {
            var aniObj00 = new nexacro.Animation("Ani00", this);
            this.addChild("Ani00", aniObj00);
        	this.Ani00.addTarget("AniItem00", this.btnOpenLeftMenu, "left:250");
        	this.Ani00.addTarget("AniItem01", this.leftMenu, "left:0, visible: true");
            this.Ani00.setEventHandler("onbegin", this.Ani00_onbegin, this);
        	this.Ani00.setEventHandler("oncomplete", this.Ani00_oncomplete, this);
        	this.Ani00.set_duration(500);
        	this.Ani00.set_easing("easeInSine");

            var aniObj01 = new nexacro.Animation("Ani01", this);
            this.addChild("Ani01", aniObj01);
        	this.Ani01.addTarget("AniItem00", this.btnOpenLeftMenu, "left:0");
        	this.Ani01.addTarget("AniItem01", this.leftMenu, "left:-250, visible: false");
        	this.Ani01.setEventHandler("oncomplete", this.Ani01_oncomplete, this);
        	this.Ani01.set_duration(500);
        	this.Ani01.set_easing("easeInSine");
        };

        this.openLeftMenu_onclick = function(obj,e)
        {
        	if( obj.cssclass == "btn_LF_close")
        	{
        		this.Ani00.play();
        	} else {
        		this.Ani01.play();
        	}
        };

        this.Ani00_onbegin = function(obj,e)
        {
            this.leftMenu.set_boxShadow("0px 0px 4px 0px rgba(0, 0, 0, 0.4)");
        };

        this.Ani00_oncomplete = function(obj,e)
        {
        	this.btnOpenLeftMenu.set_cssclass("btn_LF_open");
        };

        this.Ani01_oncomplete = function(obj,e)
        {
        	this.btnOpenLeftMenu.set_cssclass("btn_LF_close");
            this.leftMenu.set_boxShadow("");
        };

        this.Form_TabContent_onclose = function(obj,e)
        {
        	nexacro.getApplication().mainframe.VFrameSet.set_separatesize("111,35,*,100");
        };

        function resolveUrl(url) {
            if (url.includes("::")) {
                var i = url.indexOf("::");
                var serviceName = url.substring(0, i);
                var service = nexacro.getEnvironment().services[serviceName];

                if (service != null) {
                    var serviceUrl = service.url;
                    if (!serviceUrl.endsWith("/")) {
                        serviceUrl += "/";
                    }

                    var path = url.substring(i + 2).replace(/\\/g, "/");
                    if (path.startsWith("/")) {
                        path = path.substring(1);
                    }

                    if (path.endsWith(".xfdl")) {
                        path += ".js";
                    }

                    return new URL(serviceUrl + path, document.baseURI);
                } else {
                    var path = url.replace(/\\/g, "/");
                    if (path.endsWith(".xfdl")) {
                        path += ".js";
                    }

                    return new URL(path, document.baseURI);
                }
            } else if (url.includes("://")) {
                return new URL(url);
            } else {
                var path = url.replace(/\\/g, "/");
                if (path.startsWith("/")) {
                    path = path.substring(1);
                }

                return new URL(path, document.baseURI);
            }
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.Form_TabContent_oninit,this);
            this.addEventHandler("onload",this.leftMenu_onload,this);
            this.addEventHandler("onclose",this.Form_TabContent_onclose,this);
            this.headerView.form.labelMenuNm.addEventHandler("onclick",this.headerView_labelMenuNm_onclick,this);
            this.headerView.form.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.btnOpenLeftMenu.addEventHandler("onclick",this.openLeftMenu_onclick,this);
        };
        this.loadIncludeScript("Form_TabContent.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
