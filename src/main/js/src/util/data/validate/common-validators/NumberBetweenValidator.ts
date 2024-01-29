import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { createDefaultResult, getMessage } from "./common";


export class NumberBetweenValidator implements IValidator {

    readonly #minValue: number | null;
    readonly #maxValue: number | null;

    constructor(minValue: number | null, maxValue: number | null) {
        if (minValue == null && maxValue == null) {
            throw new Error(`Both minValue and maxValue cannot be null.`);
        }

        if (minValue != null && maxValue != null && minValue > maxValue) {
            throw new Error(`minValue is greater than maxValue.`);
        }

        this.#minValue = minValue;
        this.#maxValue = maxValue;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        const numericValue = Number(value);
        if (Number.isNaN(numericValue)) {
            result.passed = false;
            result.message = getMessage("Numeric.NotANumber", null, col.name);
        }

        if (this.#minValue == null && numericValue > this.#maxValue) {
            result.passed = false;
            result.message = getMessage("Numeric.MaxValue", null, col.name, this.#maxValue);
        } else if (this.#maxValue == null && numericValue < this.#minValue) {
            result.passed = false;
            result.message = getMessage("Numeric.MinValue", null, col.name, this.#maxValue);
        } else if (numericValue < this.#minValue || numericValue > this.#maxValue) {
            result.passed = false;
            result.message = getMessage("Numeric.NotBetween", null, col.name, this.#minValue, this.#maxValue);
        }

        return result;
    }
}
