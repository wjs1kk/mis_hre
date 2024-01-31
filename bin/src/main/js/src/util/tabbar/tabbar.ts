import type dhx from "dhx-suite-package";

export function findCellIndex(tabbar: dhx.Tabbar, id: string) {
    let i = 0;
    while (tabbar.getId(i)) {
        const tabId = tabbar.getId(i);
        if (tabId === id)
            return i;

        i++;
    }
}
