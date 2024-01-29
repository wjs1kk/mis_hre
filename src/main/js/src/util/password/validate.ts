import type { IColumn, IRow, IValidationResult, IValidator } from "../data/validate/types";
import { isControlChar, isDigit, isLowerCase, isUpperCase, isWhitespace } from "../string/char";
import { getMessage } from "./messages";

type AllowedCharacterCategory = "lower" | "upper" | "digit" | "symbol";

const categoryMap: Record<AllowedCharacterCategory, (cp: number) => boolean> = {
    lower(codepoint) {
        return isLowerCase(codepoint);
    },
    upper(codepoint) {
        return isUpperCase(codepoint);
    },
    digit(codepoint) {
        return isDigit(codepoint);
    },
    symbol(codepoint) {
        return (codepoint >= 0x0021 && codepoint <= 0x002f)     // !"#$%^'()*+,-./
            || (codepoint >= 0x003a && codepoint <= 0x0040)     // :;<=>?@
            || (codepoint >= 0x005B && codepoint <= 0x0060)     // [\]^_`
            || (codepoint >= 0x007b && codepoint <= 0x007e);    // {|}~
    }
};

const categoryNameMap = {
    lower: "Password.Category.LowerCase",
    upper: "Password.Category.UpperCase",
    digit: "Password.Category.Digit",
    symbol: "Password.Category.Symbol"
};

/**
 * 비밀번호의 포함 문자 규칙을 준수하는지 확인한다.
 */
export class PasswordValidator implements IValidator {

    readonly #allowed: AllowedCharacterCategory[] = [];
    readonly #required: AllowedCharacterCategory[] = [];

    constructor(allowed: AllowedCharacterCategory[], required: AllowedCharacterCategory[]) {
        this.#allowed.push(...allowed);
        this.#required.push(...required);
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const string = String(value);

        const count = this.#createCount();

        let advance = 1;
        const length = string.length;

        const set = new Set([...this.#allowed, ...this.#required]);

        for (let i = 0; i < length; i += advance) {
            const cp = string.codePointAt(i);
            advance = cp > 0xffff ? 2 : 1;

            let allowed = false;

            for (const category of set) {
                const b = categoryMap[category](cp);
                if (b) {
                    count[category]++;
                    allowed = true;
                }
            }

            if (!allowed) {
                const result = getCharacterCategoryError(cp);
                result.row = row;
                result.col = col;
                result.value = value;
                return result;
            }
        }

        const lack = this.#required.some(n => count[n] == 0);
        if (lack) {
            const names = this.#required.map(e => getMessage(categoryNameMap[e]));
            const last = names.pop();
            const str = [names.join(", "), getMessage("Password.And"), last];
            return {
                passed: false,
                message: getMessage("Password.Required", null, [str.join("")]),
                col,
                row,
                value
            };
        }

        return {
            passed: true
        };
    }

    #createCount(): { [key in AllowedCharacterCategory]?: number } {
        const count = {};
        this.#allowed.forEach(e => count[e] = 0);
        this.#required.forEach(e => count[e] = 0);

        return count;
    }
}

function getCharacterCategoryError(cp: number) {
    const result: IValidationResult = {
        passed: false
    };

    if (isWhitespace(cp)) {
        result.message = getMessage("Password.InvalidChar.Whitespace");
    } else if (isControlChar(cp)) {
        result.message = getMessage("Password.InvalidChar.Control");
    } else {
        result.message = getMessage("Password.InvalidChar", null, String.fromCodePoint(cp));
    }

    return result;
}

/**
 * 비밀번호의 포함 문자 규칙을 준수하는지 확인한다.
 *
 * @param password 입력받은 비밀번호
 * @param allowed 비밀번호에 허용할 문자 유형
 * @param required 비밀번호에 반드시 포함되어야 하는 문자 유형
 *
 * @returns 비밀번호가 규칙에 맞으면 true, 아니면 false
 */
export function validatePassword(password: string,
    allowed: AllowedCharacterCategory[],
    required: AllowedCharacterCategory[]) {

    const validator = new PasswordValidator(allowed, required);
    return validator.validate(password, {}, { id: "", name: "" });
}
