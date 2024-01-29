import dhx from "dhx-suite-package";
import { isEmpty } from "@/util/string";

type Id = string | number;

/**
 * 행 상태를 자동으로 설정하는 DataCollection
 */
export class DataCollectionEx extends dhx.TreeGridCollection {

    /**
     * 새 행을 추가한다. 추가한 행의 상태는 "inserted"로 설정된다.
     * @param newItem 새로 추가하는 행의 데이터
     * @param index 새 행을 추가할 위치. 지정하지 않으면 맨 마지막에 추가된다.
     * @return 새로 추가된 행의 ID
     */
    add(newItem: Record<string, any>, index?: number, parent?: Id): Id;

    /**
     * 새 행을 추가한다. 추가한 행의 상태는 "inserted"로 설정된다.
     * @param newItem 새로 추가하는 행의 목록
     * @param index 새 행을 추가할 위치. 지정하지 않으면 맨 마지막에 추가된다.
     * @return 새로 추가된 행의 ID 목록
     */
    add(newItem: Record<string, any>[], index?: number, parent?: Id): Id[];
    add(newItem: Record<string, any> | Record<string, any>[], index?: number, parent?: Id): Id | Id[] {
        if (Array.isArray(newItem)) {
            for (const item of newItem) {
                if (isEmpty(item.rowStatus)) {
                    item.rowStatus = "inserted";
                }

                if (item.rowCheck == null) {
                    item.rowCheck = 1;
                }
            }
        } else {
            if (isEmpty(newItem.rowStatus)) {
                newItem.rowStatus = "inserted";
            }

            if (newItem.rowCheck == null) {
                newItem.rowCheck = 1;
            }
        }
        return super.add(newItem, index, parent);
    }

    /**
     * 행의 내용을 변경한다. 변경된 행의 상태는 "updated"로 변경된다.
     *
     * @param id 변경할 행의 ID
     * @param newItem 변경될 행 내용
     * @param silent true로 설정 시 이벤트를 발생시키지 않고 변경한다.
     */
    update(id: Id, newItem: Record<string, any>, silent?: boolean): void {
        const oldItem = this.getItem(id);

        if (!silent && (oldItem.rowStatus === "updated" || isEmpty(oldItem.rowStatus)) && hasDiff(oldItem, newItem)) {
            newItem.rowStatus = "updated";
            newItem.rowCheck = 1;
        }

        super.update(id, newItem, silent);
    }

    /**
     * 행의 상태를 삭제 상태로 변경한다.
     * 행의 상태가 "deleted"로 변경되며, 만약 새로 추가된 행의 경우에는 상태 변경 없이 바로 삭제된다.
     *
     * @param id 삭제할 행의 ID
     * @param immediate true로 설정 시, 행 상태를 업데이트하는 대신 바로 목록에서 삭제한다.
     */
    remove(id: Id | Id[], immediate: boolean = false): void {
        if (!immediate) {
            if (Array.isArray(id)) {
                for (const i of id) {
                    this.remove(i);
                }
            } else {
                const row = this.getItem(id);
                if (row.rowStatus === "inserted") {
                    super.remove(id);
                } else if (row.rowStatus === "deleted") {
                    return;
                }

                const newItem = { ...row, rowStatus: "deleted", rowCheck: 1 };
                this.update(id, newItem);
            }
        } else {
            super.remove(id);
        }
    }

    /**
     * 행의 변경 내용을 처음 상태로 되돌린다.
     *
     * @param id 내용을 처음 상태로 되돌릴 행의 ID
     */
    restore(id: Id | Id[]): void {
        if (Array.isArray(id)) {
            for (const i of id) {
                this.restore(i);
            }
        } else {
            const row = this.getItem(id);

            if (row.rowStatus === "insert") {
                this.remove(id);
                return;
            }

            const initialData = this.getInitialData();
            const initialRow = initialData.find(e => e.id == id);
            super.update(id, { ...initialRow });
        }
    }

    /**
     * 지정한 열의 체크박스가 선택된 행의 목록을 조회한다.
     *
     * @param colId 선택 여부를 확인할 열의 ID
     */
    getCheckedRows(colId: string): Record<string, any>[] {
        return this.findAll(item => !!item[colId]); // 체크 상태가 truthy인 값만 가져온다.
    }

    /**
     * 지정한 열의 체크박스가 선택되어있는 행의 ID 목록을 가져온다.
     * @param colId 선택 여부를 확인할 열의 ID
     */
    getCheckedRowIds(colId: string): Id[] {
        return this.getCheckedRows(colId).map(e => e.id);
    }

    setCheckedAll(colId: string, checked: boolean): void {
        this.forEach(item => {
            this.update(item.id, { rowCheck: checked });
        });
    }
}

/**
 * 두 항목의 내용이 다른지 확인한다.
 * @param oldItem
 * @param newItem
 */
function hasDiff(oldItem, newItem) {
    const keys = new Set([...Object.keys(newItem)]);
    for (const key of keys) {
        if (key === "rowStatus" || key === "rowCheck" || key.startsWith("$")) {
            continue;
        }

        const oldValue = oldItem[key] ?? "";
        const newValue = newItem[key] ?? "";

        if (oldValue != newValue) {
            return true;
        }
    }

    return false;
}
