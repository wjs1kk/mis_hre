(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PTS_3010M");
            this.set_titletext("시스템 소개");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,4040);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","180","0",null,"4040","180",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Title","0","0",null,"127","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("시스템소개");
            obj.set_enable("true");
            obj.set_cssclass("portal_sta_pTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","Title:50",null,"141","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("국방기술진흥연구소 과제관리시스템을 통해\r\r\n<b v=\'true\'>핵심기술사업 및 방산지원사업 과제진행에 필요한 프로세스를 체계적으로 관리합니다.\r</b>");
            obj.set_usedecorate("true");
            obj.set_cssclass("portal_system_top");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","0","Static00:53",null,"655","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("portal_img_banner");
            obj.set_image("url(\'theme://images/portal/portal_system_type.png\')");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","0","178","130","139",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_image("url(\'theme://images/portal/portal_system_topbg1.png\')");
            obj.set_cssclass("portal_img_banner");
            this.Div00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01_00",null,"177","345","139","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_image("url(\'theme://images/portal/portal_system_topbg2.png\')");
            obj.set_cssclass("portal_img_banner");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","ImageViewer00:84","357","74",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("핵심기술사업개요");
            obj.set_cssclass("portalTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","Static02:10","172","63",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("사업설명");
            obj.set_cssclass("portalTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","0","Static02_00:10",null,"118","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("미래 핵심전력 무기체계의 국내개발 또는 생산에 필요한 고도 첨단기술로서 선진 외국에서 旣 개발되어도 기술이전을 회피하거나\r\r\n국가안보차원에서 반드시 확보가 요구되는 기술을 개발하는 사업");
            obj.set_cssclass("portal_systemBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","Static03:10","229","63",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("주요사업 현황");
            obj.set_cssclass("portalTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_00","0","Static02_00_00:10",null,"118","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("핵심기술사업은 사업형태 및 기술수준에 따라 기초연구, 응용연구/시험개발, 무기체계 패키지형 핵심기술, 국제공동연구로 분류");
            obj.set_cssclass("portal_systemBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static03_00:37",null,"559","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            obj.set_border("2px solid #353541,0px none,0px none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20%","55",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("portal_system_headFirst");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20%","0","40%","55",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("사업목적");
            obj.set_cssclass("portal_system_head");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","60.00%","0","10%","55",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("과제당 총예산");
            obj.set_cssclass("portal_system_head");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","70%","0","10%","55",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("규모");
            obj.set_cssclass("portal_system_head");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","80%","0","10%","55",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("사업기간");
            obj.set_cssclass("portal_system_head");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","90%","0","10%","55",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("연구단계");
            obj.set_cssclass("portal_system_headLast");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","55","10.00%","220",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("기초연구");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","10.00%","55","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("개별기초");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","10.00%","129","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("특화 연구실");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","10.00%","202","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("특화 연구센터");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","20%","55","40.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("신개념 무기체계 개발에 활용 가능한 미래 원천기술 확보를 위해 대학 등에서 연구하는 사업");
            obj.set_cssclass("portal_system_bodyL");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","20.00%","202","40.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("핵심기술 확보를 위한 기반을 구축하고, 우수인력의 국방 연구개발 참여 유도를 위해 특정기술의 중점적 연구를 지원하는 사업");
            obj.set_cssclass("portal_system_bodyL");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","60.00%","55","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("1개 과제");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00","60.00%","129","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("3~5개 과제");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","60.00%","202","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("15~20개 과제");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","70.00%","55","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("1.5~3억");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00","70.00%","129","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("30~50억");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","70.00%","202","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_text("120~180억 내외");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","80.00%","55","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("3년 내외");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00","80.00%","129","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("3년, 6년");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","80.00%","202","10.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("6년, 9년");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00","90.00%","55","10.00%","220",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("21");
            obj.set_text("기초단계\r\n");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01","20.00%","129","40.00%","73",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("미래 핵심기술 분야에 필요한 기초연구분야 5개 내외의 과제로 구성하여 연구실 단위로 집단 연구하는 사업");
            obj.set_cssclass("portal_system_bodyL");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_02","10.00%","275","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("응용연구\r\n/시험개발");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","20.00%","275","40.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("무기체계 전력화 시기에 부합하도록 체계개발에 요구되는 핵심기술을 사전에 개발하기 위해 단위 과제별로 개발하는 사업");
            obj.set_cssclass("portal_system_bodyL");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_01","20.00%","423","40.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("25");
            obj.set_text("국내의 연구개발주체와 국외의 연구개발주체가 공동의 연구개발목표를 위하여 개발비를 공동으로 부담하여 수행하는 사업");
            obj.set_cssclass("portal_system_bodyL");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01","60.00%","275","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("1개 과제");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_01","60.00%","349","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("27");
            obj.set_text("3~5개 과제");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_01","60.00%","423","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("1개 과제");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01","70.00%","275","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("29");
            obj.set_text("50억~200억 내외");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_01","70.00%","423","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("30");
            obj.set_text("50억 내외");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_01","80.00%","275","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("3-5년");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_00_00","80.00%","349","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("3-5년");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00","80.00%","423","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("3-5년");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","90.00%","275","10.00%","222",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("응용연구\r\n/시험개발\r\n");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_01_00","20.00%","349","40.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("핵심기술의 무기체계 연계성 향상 및 산〮학〮연 국가 R&D역량을 적극 활용하기 위해 무기체계 연구개발 이전에 필요한 핵심기술들을 묶음(패키지)으로 개발하는 사업");
            obj.set_cssclass("portal_system_bodyL");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","275","10.00%","222",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("핵심기술개발");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_01","10.00%","423","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("37");
            obj.set_text("국제공동\r\n연구개발");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01","10.00%","349","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("무기체계\r\n패키지형");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_01_00_00_01","70.00%","349","10.00%","74",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("300~500억 내외");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","Div00:0","480","74",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("방산육성 및 수출경쟁력 강화 사업 개요");
            obj.set_cssclass("portalTitle01");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","0","Static02_01:10","172","63",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("사업설명");
            obj.set_cssclass("portalTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_01","0","Static02_00_01:10",null,"118","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("국방기술진흥연구소 방산진흥본부에서는 방위산업 육성 및 발전을 효율적으로 지원하기 위하여 아래와 같은 업무 수행\r\n\r* 근거 : 「방위산업 발전 및 지원에 관한 법률」제18조 (방위산업발전의 지원 등)");
            obj.set_cssclass("portal_systemBg");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","0","Static03_01:10","229","63",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("주요사업 현황");
            obj.set_cssclass("portalTitle02");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Static02_00_00_00:10",null,"1480","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("Div00");
            obj.set_border("2px solid #353541,0px none,0px none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","10%","55",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("portal_system_headFirst");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","10.00%","0","39%","55",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("사업목적");
            obj.set_cssclass("portal_system_head");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","49%","0","17%","55",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("대상업체");
            obj.set_cssclass("portal_system_head");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","66%","0","17%","55",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("3");
            obj.set_text("지원대상(내용)");
            obj.set_cssclass("portal_system_head");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","83.00%","0","17%","55",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("4");
            obj.set_text("예상지원기간 및 규모");
            obj.set_cssclass("portal_system_headLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:0","10.00%","1107",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("방산육성\r\n지원분야");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","10%","Static00_00:0","19.5%","331",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("부품 국산화 사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","29.5%","Static00_00:0","19.5%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("7");
            obj.set_text("핵심부품 국산화");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00","49%","Static00_00_00_00:0","17%","148",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("중소기업(필요시 중견/대기업 가능)");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00","66%","Static00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("9");
            obj.set_text("국내 무기체계에 적용되는 국외도입 핵심부품 개발");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00","83.00%","Static00_00_00_00_00:0","17%","148",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("10");
            obj.set_text("최대 5년,\r\n100억원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01","29.5%","Static01_00_01:0","19.5%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("수출연계 국산화");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01","66%","Static01_00_01_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("수출 가능성이 있는 무기체계에 적용되는 국외도입 부품 개발");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00","29.5%","Static01_00_01_01:0","19.5%","91",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("13");
            obj.set_text("전략부품 국산화");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00","49%","Static01_00_01_00:0","17%","183",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("대/중견/중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00","66%","Static01_00_01_00_00_01:0","17%","91",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("15");
            obj.set_text("다체계 적용 가능 및 개발 시 기술 경제적 파급 효과가 큰 전략 부품 개발");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00","83.00%","Static01_00_01_00_00_00:0","17%","91",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("16");
            obj.set_text("최대5년,\r\n총사업비 최대 500억 미만의 과제비를 기업 유형별 차등지원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00","29.5%","Static01_00_01_01_00:0","19.5%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("일반부품 국산화");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00","66%","Static01_00_01_00_00_01_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("군 운용유지상 국산화가 불가피한 수입품목이나 수업대체효과가 기대되는 부품");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00","83.00%","Static01_00_01_00_00_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("19");
            obj.set_text("업체자체투자");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","10%","Static01_00:0","19.5%","166",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("24");
            obj.set_text("국방 벤처지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00","29.5%","Static01_00_01_01_00_00:0","19.5%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("혁신기술 지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00","49%","Static01_00_01_00_01_00:0","17%","166",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("21");
            obj.set_text("중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00","66%","Static01_00_01_00_00_01_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("22");
            obj.set_text("중소벤처기업의 독자적 기술개발 역량강화를 위해 군,체계업체 필요 기술개발");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00","83.00%","Static01_00_01_00_00_00_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("최대 3년, 20억원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00_00","29.5%","Static01_00_01_01_00_00_00:0","19.5%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("25");
            obj.set_text("국방벤처 지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("중소벤처기업 방산 참여 기회 제공 및 민간 아이디어의 국방적용");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00","83.00%","Static01_00_01_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("27");
            obj.set_text("최대 2년간, 3억원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00:0","19.5%","166",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("32");
            obj.set_text("부처 연계형 부품개발 사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00_00_00","29.5%","Static01_00_01_01_00_00_00_00:0","19.5%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("28");
            obj.set_text("구매 조건부");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("29");
            obj.set_text("중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("30");
            obj.set_text("해외도입 부품 중 소요가 확실하게 기대되는 양산/운영유지 단계의 부품");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("31");
            obj.set_text("최대 3년, 5억원 지원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00_00_00_00","29.5%","Static01_00_01_01_00_00_00_00_00:0","19.5%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("33");
            obj.set_text("산자부 협력");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("34");
            obj.set_text("대/중견/중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("35");
            obj.set_text("기술적 난이도가 높고 개발 시\r\n산업적 파급효과가 큰 기술부품");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("36");
            obj.set_text("개발비 지원 한도없음");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00_00_00:0","39%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("40");
            obj.set_text("글로벌 방산 강소기업 육성사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("37");
            obj.set_text("중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("38");
            obj.set_text("무기체계 적용가능한 제품/부품/기술");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("39");
            obj.set_text("최대 3년, 30억원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00_00_00_00_00:0","39%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("44");
            obj.set_text("방산혁신클러스터사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("41");
            obj.set_text("경남도/창원시 소재 중소〮벤처기업, 대학산학협력단");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("42");
            obj.set_text("기술적 난이도가 높고 개발 시 산업적 파급효과가 큰 기술부품");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("43");
            obj.set_text("상시");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00_00_00_00_00_00:0","39%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("48");
            obj.set_text("방산 중소기업 컨설팅 지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("45");
            obj.set_text("중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("46");
            obj.set_text("기업의 컨설팅 수요(기술, 경영, 법률, 행정)에 따라 맞춤형 지원");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("47");
            obj.set_text("컨설팅비의 75%지원(기업당 3,000만원 한도, 기업무담금 25%)");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00_00_00_00_00_00_00_00","29.5%","Static01_00_00_00_00_00_00_00_00_00_00_00:0","19.5%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("49");
            obj.set_text("계약학과 지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("50");
            obj.set_text("고등교육법 제2조에 따른 대학");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("51");
            obj.set_text("계약학과 운영비 및 학생등록금 지원");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("52");
            obj.set_text("3.9억원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00_00_00_00_00_00_00:0","19.5%","222",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("53");
            obj.set_text("방위산업\r\n전문인력양성사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00_00_00_00_00_00_00_00_00","29.5%","Static01_00_01_01_00_00_00_00_00_00_00_00_00_00:0","19.5%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("54");
            obj.set_text("전문인력 양성사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("55");
            obj.set_text("정부출연기관, 대학 등");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("56");
            obj.set_text("교육운영 관련 제반경비 및 참여학생 교육수당 지원");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("57");
            obj.set_text("6.4억원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_01_00_00_00_00_00_00_00_00_00_00_00_00","29.5%","Static01_00_01_01_00_00_00_00_00_00_00_00_00_00_00:0","19.5%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("58");
            obj.set_text("산학연계 맞춤형\r\n지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("59");
            obj.set_text("특성화고(마이스터고 포함)");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("60");
            obj.set_text("교육운영 관련 제반경비 및 채용확약");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("61");
            obj.set_text("2.25억원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00_00_00_00_00_00_00_00:0","39%","91",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("65");
            obj.set_text("무기체계 개조개발지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","91",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("62");
            obj.set_text("대/중견/중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","91",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("63");
            obj.set_text("수출가능성 있는 무기체계 또는 구성품");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","91",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("64");
            obj.set_text("최대 5년, 총사업비 최대 500억 미만의 과제비를 기업 유형별 차등지원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00_00_00_00_00_00","0","Static01:0","10.00%","257",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("66");
            obj.set_text("수출 경쟁력\r\n강화\r\n지원 분야");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","39%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("70");
            obj.set_text("유망수출품목 발굴 지원사업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("67");
            obj.set_text("중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("68");
            obj.set_text("방산분야 단위 완제품, 구성품, 부품, 소프트웨어 등을 연구개발 또는 생산하는 기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","92",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("69");
            obj.set_text("매년, 최대 3,000만원");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","10%","Static01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","39%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("74");
            obj.set_text("수출용 민간개발장비 성능시험 지원");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","49%","Static01_00_01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("71");
            obj.set_text("대/중견/중소기업");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","66%","Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("72");
            obj.set_text("민간업체가 수출을 목적으로 개발한 무기체계 등 또는 구성품");
            obj.set_cssclass("portal_system_body");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00","83%","Static01_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00:0","17%","74",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("73");
            obj.set_text("상시");
            obj.set_cssclass("portal_system_bodyLast");
            this.Div00.form.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00.form,function(p){});
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,4040,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Combo00_00","value","Dataset00","key");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Title.addEventHandler("onclick",this.Static_onclick,this);
            this.Div00.form.Div00.form.Static01_00_01_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00.form.Static01_00_01_00_00_01.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
            this.Div00.form.Div00_00.form.Static01_00_01_00_00_01_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00.addEventHandler("onclick",this.Div00_Div00_Static01_00_01_00_00_onclick,this);
        };
        this.loadIncludeScript("PTS_3010M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
