import type { ICol, IRow } from "lib/suite_trial/codebase/types/ts-grid";

export function editOnSingleClick(this: dhx.Grid, row: IRow, col: ICol) {
    const editable = (this.config.editable && col.editable !== false) || col.editable;

    if (editable && col.editorType !== "select" && col.type !== "boolean" && col.editorType !== "checkbox") {
        this.editCell(row.id, col.id);
    }
}
