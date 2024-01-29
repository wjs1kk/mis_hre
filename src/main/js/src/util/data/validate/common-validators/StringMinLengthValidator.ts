import type { IColumn, IRow, IValidationResult, IValidator, LengthUnit } from "../types";
import { createDefaultResult, getByteCount, getMessage, toLength } from "./common";

export class StringMinLengthValidator implements IValidator {

    readonly #minLength: number;
    readonly #unit: LengthUnit;

    constructor(minLength: number, unit: LengthUnit = "byte") {
        this.#minLength = toLength(minLength);
        this.#unit = unit;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        const str = value == null ? "" : String(value);
        const length = (this.#unit === "char") ? str.length : getByteCount(str);

        if (length < this.#minLength) {
            result.passed = false;
            result.message = getMessage("String.MinLength", null, col.name, this.#minLength);
        }

        return result;
    }
}
