import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { throwIfNull } from "../util";
import { createDefaultResult, getMessage } from "./common";

export class MinValueValidator implements IValidator {

    readonly #minValue: number;

    constructor(minValue: number) {
        throwIfNull(minValue, "Minimum value");
        this.#minValue = minValue;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        const numericValue = Number(value);
        if (Number.isNaN(numericValue)) {
            result.passed = false;
            result.message = getMessage("Numeric.NotANumber", null, col.name);
        } else if (numericValue < this.#minValue) {
            result.passed = false;
            result.message = getMessage("Numeric.MinValue", null, col.name, this.#minValue);
        }

        return result;
    }
}
