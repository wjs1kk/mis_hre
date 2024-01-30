import type { IColumn, IRow, IValidationResult, IValidator, LengthUnit } from "../types";
import { createDefaultResult, getByteCount, getMessage, toLength } from "./common";


export class StringLengthBetweenValidator implements IValidator {

    readonly #minLength: number | null;
    readonly #maxLength: number | null;
    readonly #unit: LengthUnit;

    constructor(minLength: number | null, maxLength: number | null, unit: LengthUnit = "byte") {
        this.#minLength = minLength == null ? null : toLength(minLength);
        this.#maxLength = maxLength == null ? null : toLength(maxLength);
        if (minLength == null && maxLength == null) {
            throw new Error(`Both minLength and maxLength cannot be null.`);
        }
        this.#unit = unit;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        const str = value == null ? "" : String(value);
        const length = (this.#unit === "char") ? str.length : getByteCount(str);

        if (this.#minLength != null && this.#maxLength == null && length < this.#minLength) {
            result.passed = false;
            result.message = getMessage("String.MinLength", null, col.name, this.#minLength, this.#unit);
        } else if (this.#maxLength != null && this.#minLength == null && length > this.#maxLength) {
            result.passed = false;
            result.message = getMessage("String.MaxLength", null, col.name, this.#maxLength, this.#unit);
        } else if (this.#minLength != null && this.#maxLength != null && (length < this.#minLength || length > this.#maxLength)) {
            result.passed = false;
            result.message = getMessage("String.LengthNotBetween", null, col.name, this.#minLength, this.#maxLength, this.#unit);
        }

        return result;
    }
}
