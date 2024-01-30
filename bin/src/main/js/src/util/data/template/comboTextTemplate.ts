import type { ComboItem } from "@/util/combo";

export function comboTextTemplate(options?: ComboItem[]) {
    return function (value: string, row: any, col: any) {
        const items = options ?? col.options ?? [];
        if (col.editable !== false || items.length === 0) {
            return value;
        } else {
            return col.options.find(e => e.id === value)?.value;
        }
    }
}