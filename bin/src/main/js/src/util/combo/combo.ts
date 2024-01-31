import { isEmpty } from "@/util/string";
import { postData } from "@/util/ajax";

type ComboType = "A" | "C" | "";

type CommonCodeOption = {
    /**
     * 시스템 ID
     */
    sysId?: string;
    /**
     * 모듈 ID
     */
    moduleId: string;
    /**
     * 코드 헤더
     */
    headerCode: string;
    /**
     * 콤보 유형
     * "A"로 선택 시 맨 앞에 '전체' 항목을,
     * "C"로 선택 시 맨 앞에 '선택' 항목을 추가한다.
     */
    type?: ComboType;
};

/**
 * 맨 앞에서부터 시스템 ID, 모듈 ID, 코드그룹 코드, 콤보 유형.
 * 시스템 ID와 콤보 유형은 생략이 가능하다.
 */
type CommonCodeOptionTuple = [string, string, string?, string?];

type CommonCodeArgs = Record<string, CommonCodeOption | CommonCodeOptionTuple>;

export type ComboItem = {
    id: string | null;
    value: string;
};

export type SelectOption = {
    value: string | null;
    content: string;
};

type ComboVO = { value: string; text: string; };

/**
 * 공통 코드 콤보박스 목록을 조회한다.
 * @param options
 */
export async function getCommonCodeCombo<T extends CommonCodeArgs>(options: T): Promise<Record<keyof T, ComboItem[]>> {
    const args = Object.entries(options).map(e => [e[0], convertOption(e[1])]);
    const result = await postData("cm/getCommonCodeCombo.do", null, Object.fromEntries(args));
    for (const key in result) {
        if (Object.hasOwn(result, key) && Array.isArray(result[key])) {
            result[key] = result[key].map(e => convertComboVO(e));
        }
    }
    return result;
}

/**
 * 시스템 ID 콤보박스 목록을 조회한다.
 * @param type
 */
export async function getSystemIdCombo(type?: ComboType): Promise<ComboItem[]> {
    const result = await postData("sm/getSystemIdCombo.do", null, { type });
    return result.dsSysIdCombo.map(e => convertComboVO(e));
}

/**
 * 모듈 ID 콤보박스 목록을 조회한다.
 * @param type
 */
export async function getModuleIdCombo(type?: ComboType, sysId?: string, distinct: boolean = false): Promise<(ComboItem & { sysId: string; })[]> {
    const result = await postData("sm/getModuleCombo.do", null, {
        type,
        sysId,
        distinct: distinct ? "Y" : "N"
    });
    return result.dsModuleCombo.map(e => convertComboVO(e));
}

export function comboTextTemplate(value: string, row: any, col: any) {
    if (col.editable !== false)
        return value;
    return col.options.find(e => e.id === value)?.value;
}

export function toSelectOptions(data: ComboItem[]): SelectOption[] {
    return data.map(e => {
        const result = { ...e } as SelectOption & ComboItem;
        result.content = e.value;
        result.value = e.id;
        return result;
    });
}

function convertOption(option: CommonCodeOption | CommonCodeOptionTuple) {
    if (Array.isArray(option)) {
        return option.join(":");
    } else {
        const array = [];
        if (!isEmpty(option.sysId)) {
            array.push(option.sysId);
        }

        array.push(option.moduleId);
        array.push(option.headerCode);

        if (!isEmpty(option.type)) {
            array.push(option.type);
        }

        return array.join(":");
    }
}

function convertComboVO(item: ComboVO): ComboItem {
    const result = item as ComboVO & ComboItem;
    result.id = result.value ?? "";
    result.value = result.text ?? "";
    return result;
}
