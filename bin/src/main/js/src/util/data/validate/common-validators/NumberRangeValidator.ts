import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { throwIfEmpty } from "../util";
import { createDefaultResult, getMessage } from "./common";


export class NumberRangeValidator implements IValidator {

    readonly #maxValueColumn: string;
    readonly #rangeName: string;

    constructor(maxValueColumn: string, rangeName: string) {
        throwIfEmpty(maxValueColumn, "Column ID of max value");
        this.#maxValueColumn = maxValueColumn;
        this.#rangeName = rangeName;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        const from = value == null ? null : Number(value);
        const to = row[this.#maxValueColumn] == null ? null : Number(row[this.#maxValueColumn]);

        if (from != null && to != null && from > to) {
            result.passed = false;
            result.message = getMessage((this.#rangeName != null && this.#rangeName !== "") ? "Number.InvalidRange" : "Number.InvalidRange.WithoutRangeName", null, this.#rangeName);
        }

        return result;
    }
}
