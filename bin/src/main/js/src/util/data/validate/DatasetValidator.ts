import { PropertyValidator } from "./PropertyValidator";
import type { IRow } from "./types";
import { throwIfNull } from "./util";

export class DatasetValidator {

    readonly #validators: Record<string, PropertyValidator> = Object.create(null);
    #iterable: Iterable<IRow> | undefined;

    constructor(validators: Record<string, PropertyValidator>) {
        this.#validators = validators;
    }

    setData(iterable: Iterable<IRow>) {
        this.#iterable = iterable;
    }

    validate() {
        throwIfNull(this.#iterable, "Data");

        for (const row of this.#iterable) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            for (const [_, validator] of Object.entries(this.#validators)) {
                const result = validator.validate(row);
                if (!result.passed) {
                    return result;
                }
            }
        }

        return { passed: true };
    }
}
