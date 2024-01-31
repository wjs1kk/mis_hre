import type { IColumn, IRow, IValidationResult, IValidator, LengthUnit } from "../types";
import { createDefaultResult, getByteCount, getMessage, toLength } from "./common";


export class StringMaxLengthValidator implements IValidator {

    readonly #maxLength: number;
    readonly #unit: LengthUnit;

    constructor(maxLength: number, unit: LengthUnit = "byte") {
        this.#maxLength = toLength(maxLength);
        this.#unit = unit;
    }

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        const str = value == null ? "" : String(value);
        const length = (this.#unit === "char") ? str.length : getByteCount(str);

        if (length > this.#maxLength) {
            result.passed = false;
            result.message = getMessage("String.MaxLength", null, col.name, this.#maxLength);
        }

        return result;
    }
}
