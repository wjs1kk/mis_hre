export type MenuItem = {
    menuId: string;
    upperMenuId: string;
    progId: string;
    menuNm: string;
    menuTy: string;
    sortOrdr: string;
    url: string;
    level: number;
    rowNum: number;
    indctYn: string;
    mainUrl: string;
    menuNmPath: string;
    items?: MenuItem[];
};
