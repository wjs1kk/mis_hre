import type { IColumn, IColumnInfoProvider } from "./types";
import type { IGrid } from "lib/suite_trial/codebase/types/ts-grid";

export class GridColumnInfoProvider implements IColumnInfoProvider {

    readonly #grid: IGrid;

    constructor(grid: IGrid) {
        this.#grid = grid;
    }

    getColumn(id: string | number): IColumn {
        if (this.#grid == null) {
            return {
                id,
                name: ""
            };
        }

        const col = this.#grid.getColumn(id);
        const result: IColumn = { ...col, name: "" };
        const headers = col.header;
        if (headers != null && headers.length > 0) {
            const last = headers[headers.length - 1];
            result.name = col.htmlEnable ? getInnerText(last.text) : last.text;
        }

        return result;
    }

}

function getInnerText(html: string) {
    const template = document.createElement("template");
    template.innerHTML = html;
    return template.content.textContent;
}
