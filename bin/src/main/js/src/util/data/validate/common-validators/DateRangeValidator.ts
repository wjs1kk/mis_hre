import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { throwIfEmpty } from "../util";
import { createDefaultResult, getMessage } from "./common";
import { DateTime } from "luxon";


export class DateRangeValidator implements IValidator {

    #toColumn: string;
    #pattern: string;
    #locale: string;
    #rangeName: string;

    constructor(toColumn: string, pattern: string, rangeName: string, locale: string = navigator.language) {
        throwIfEmpty(toColumn, "Column ID of end date");
        throwIfEmpty(pattern, "Date pattern");

        this.#toColumn = toColumn;
        this.#pattern = pattern;
        this.#locale = locale;
        this.#rangeName = rangeName;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        let from: Date | null;
        let to: Date | null;

        try {
            from = (value == null) ? null : DateTime.fromFormat(String(value), this.#pattern, { locale: this.#locale }).toJSDate();
        } catch (e) {
            result.passed = false;
            result.message = getMessage("DateTime.format", null, this.#rangeName);
            return result;
        }

        try {
            to = (value == null) ? null : DateTime.fromFormat(String(row[this.#toColumn]), this.#pattern, { locale: this.#locale }).toJSDate();
        } catch (e) {
            result.passed = false;
            result.message = getMessage("DateTime.format", null, this.#rangeName);
            return result;
        }

        if (from != null && to != null && from > to) {
            result.passed = false;
            result.message = getMessage((this.#rangeName == null || this.#rangeName === "") ? "DateTime.InvalidRange.WithoutRangeName" : "DateTime.InvalidRange", null, this.#rangeName);
        }

        return result;
    }
}
