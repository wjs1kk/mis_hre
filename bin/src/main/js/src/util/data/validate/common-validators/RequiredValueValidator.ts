import type { IColumn, IRow, IValidationResult, IValidator } from "../types";
import { createDefaultResult, getMessage } from "./common";

export class RequiredValueValidator implements IValidator {

    validate(value: unknown, row: IRow, col: IColumn): IValidationResult {
        const result = createDefaultResult(value, row, col);
        if (value == null || value == "") {
            result.passed = false;
            result.message = getMessage("Required", null, col.name);
        }

        return result;
    }
}
