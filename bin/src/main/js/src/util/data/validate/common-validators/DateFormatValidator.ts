import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { throwIfEmpty } from "../util";
import { createDefaultResult, getMessage } from "./common";
import { DateTime } from "luxon";

export class DateFormatValidator implements IValidator {

    #pattern: string;
    #locale: string;

    constructor(pattern: string, locale: string = navigator.language) {
        throwIfEmpty(pattern, "Date pattern");

        this.#pattern = pattern;
        this.#locale = locale;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);

        try {
            DateTime.fromFormat(String(value), this.#pattern, {
                locale: this.#locale
            });
        } catch (error) {
            result.passed = false;
            result.message = getMessage("DateTime.format", null, col.name);
        }

        return result;
    }
}
