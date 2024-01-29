(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Pattern01");
            this.set_titletext("Pattern01");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,214);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">과제공고</Col><Col id=\"value\">1</Col></Row><Row><Col id=\"country\">과제기획</Col><Col id=\"value\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotice", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">2023년도 국방핵심기술 과제공모(상향식)검토 결과 안내</Col><Col id=\"date\">2022-12-01</Col></Row><Row><Col id=\"title\">2022년 국방핵심기술 과제공모(상향식) 진행현황 안내(3)</Col><Col id=\"date\">2022-10-11</Col></Row><Row><Col id=\"date\">2022-07-29</Col><Col id=\"title\">2022년 국방핵심기술 과제공모(상향식) 진행 현황 안내(2)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataroom", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">&quot;빅데이터기반 미래국방 신기술 예측&quot; 책자 발간</Col><Col id=\"date\">2023-02-27</Col></Row><Row><Col id=\"title\">국기연, &quot;국방활용가능 민간보유기술&quot; 책자 발간</Col><Col id=\"date\">2023-02-06</Col></Row><Row><Col id=\"date\">2023-01-27</Col><Col id=\"title\">국기연, 미래 신기술 군수품에 적극 도입 (장비,물자류 연구...</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static34","0","0","180",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","180",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("W 180");
            obj.set_visible("false");
            obj.set_background("antiquewhite");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","180","32","500",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_url("pts::PTS_0000M_02.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","740","0","485",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","80",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_grd_bdmList");
            obj.set_binddataset("dsNotice");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"401\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\"/></Rows><Band id=\"body\"><Cell text=\"bind:title\" textAlign=\"left\" color=\"#001010\" padding=\"0px 10px 0px 0px\"/><Cell col=\"1\" text=\"bind:date\" color=\"#a7a7a7\"/></Band></Format></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","76","80",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_cssclass("portal_sta_bdTitle");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_Notice",null,"28","30","30","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_btn_more");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","1255","0","485",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","57","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("자료실");
            obj.set_cssclass("portal_sta_bdTitle");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("btn_Notice",null,"28","30","30","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("portal_btn_more");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","80",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_grd_bdmList");
            obj.set_binddataset("dsDataroom");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"404\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\"/></Rows><Band id=\"body\"><Cell text=\"bind:title\" textAlign=\"left\" padding=\"0px 10px 0px 0px\"/><Cell col=\"1\" text=\"bind:date\" color=\"#a7a7a7\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pts::PTS_0000M_02.xfdl");
        };
        
        // User Script
        this.registerScript("PTS_0000M_01.xfdl", function() {

        this.Pattern01_onload = function(obj,e)
        {
        };
        this.Div01_btn_Notice_onclick = function(obj,e)
        {
        	var sMenuId = "PTS_4010M_01";
        	var url = "pts::PTS_4010M_01.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        this.Div02_btn_Notice_onclick = function(obj,e)
        {
        	var sMenuId = "PTS_3030M_01";
        	var url = "pts::PTS_3030M_01.xfdl";
        	nexacro.getApplication().goPage(sMenuId, url);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Pattern01_onload,this);
            this.Static34.addEventHandler("onclick",this.Static02_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static02_onclick,this);
            this.Div01.form.btn_Notice.addEventHandler("onclick",this.Div01_btn_Notice_onclick,this);
            this.Div02.form.btn_Notice.addEventHandler("onclick",this.Div02_btn_Notice_onclick,this);
        };
        this.loadIncludeScript("PTS_0000M_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
