import { isEmpty } from "../string";

export function rowStatusCombo() {
    return [
        { id: "inserted", value: "I" },
        { id: "updated", value: "U" },
        { id: "deleted", value: "D" },
    ];
}

export function rowStatusTemplate(value: "inserted" | "updated" | "deleted") {
    switch (value) {
        case "inserted":
            return "I";
        case "updated":
            return "U";
        case "deleted":
            return "D";
        default:
            return "";
    }
}

/**
 * 항목의 관리용 내부 상태(행 선택, 행 상태, 그리드에서 내부적으로 관리하기 위해 사용하는 속성 등)를 제거한 객체를 반환한다.
 * 원본은 수정되지 않는다.
 * @param row 관리용 내부 상태를 제거할 항목
 * @returns 관리용 내부 상태가 제거된 항목
 */
export function removeInternalStatus(row: Record<string, any>): Record<string, any> {
    const entries = Object.entries(row)
        .filter(e => !String(e[0]).startsWith("$") && e[0] !== "rowCheck" && e[0] !== "rowStatus");

    return Object.fromEntries(entries);
}

type TreeNode<T extends string, U extends string> = {
    [key in T]: string;
} & {
        [key in U]?: string | null | undefined;
    } & Record<string, any>;

type TreeItem<T extends string, U extends string, V extends string> = {
    [key in V]: TreeItem<T, U, V>[];
} & TreeNode<T, U> & Record<string, any>;

/**
 * 리스트를 트리 구조로 변환한다.
 *
 * @param data 트리로 변환할 리스트
 * @param id 트리의 키 속성
 * @param parentId 트리의 부모 키 속성
 * @param childrenId 자식 노드 목록 속성
 *
 * @returns 트리로 변환된 리스트
 */
export function makeTree<T extends string, U extends string, V extends string>(data: TreeNode<T, U>[], id: T, parentId: U, childrenId: V): TreeItem<T, U, V>[] {
    const list: TreeItem<T, U, V>[] = new Array(data.length);
    const root: TreeItem<T, U, V>[] = [];
    const map = Object.create(null);

    for (let i = 0; i < data.length; i++) {
        const item: TreeItem<T, U, V> = { ...data[i], [childrenId]: [] as TreeItem<T, U, V>[] } as TreeItem<T, U, V>;
        map[item[id]] = i;
        list[i] = item;
    }

    for (const node of list) {
        if (!isEmpty(node[parentId])) {
            list[map[node[parentId]]][childrenId].push(node);
        } else {
            root.push(node);
        }
    }

    return root;
}
