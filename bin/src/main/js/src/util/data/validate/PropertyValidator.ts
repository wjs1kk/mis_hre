import type { IRow, IColumn, IValidator, IValidationResult } from "./types";


export class PropertyValidator {

    readonly col: Readonly<IColumn>;
    readonly #chain: IValidator[] = [];

    constructor(col: IColumn, validators: IValidator[]) {
        this.col = { ...col };
        this.#chain = validators;
    }

    validate(row: IRow): IValidationResult {
        for (const item of this.#chain) {
            const result = item.validate(row[this.col.id], row, this.col);
            if (!result.passed) {
                return result;
            }
        }

        return { passed: true };
    }
}
