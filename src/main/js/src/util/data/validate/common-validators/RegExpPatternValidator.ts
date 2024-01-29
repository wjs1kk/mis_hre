import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { createDefaultResult, getMessage } from "./common";

export class RegExpPatternValidator implements IValidator {

    readonly #pattern: RegExp;

    constructor(pattern: string | RegExp, flags?: string) {
        this.#pattern = new RegExp(pattern, flags);
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);

        if (!this.#pattern.test(String(value))) {
            result.value = false;
            result.message = getMessage("RegExp.NotMatched", null, col.name);
        }

        return result;
    }
}
