import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { throwIfNull } from "../util";
import { createDefaultResult, getMessage } from "./common";


export class MaxValueValidator implements IValidator {

    readonly #maxValue: number;

    constructor(maxValue: number) {
        throwIfNull(maxValue, "Maximum value");
        this.#maxValue = maxValue;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        const numericValue = Number(value);
        if (Number.isNaN(numericValue)) {
            result.passed = false;
            result.message = getMessage("Numeric.NotANumber", null, col.name);
        } else if (numericValue < this.#maxValue) {
            result.passed = false;
            result.message = getMessage("Numeric.MaxValue", null, col.name, this.#maxValue);
        }

        return result;
    }
}
