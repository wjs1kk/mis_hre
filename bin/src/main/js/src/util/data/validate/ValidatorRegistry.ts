import type { IValidator, IValidatorContstructor } from "./types";
import { throwIfNull } from "./util";

export interface IValidatorRegistry {
    createValidator(name: string, ...args: any[]): IValidator;
}

export class ValidatorRegistry implements IValidatorRegistry {

    #validatorConstructorMap: { [name: string]: IValidatorContstructor; } = Object.create(null);

    createValidator(name: string, ...args: any[]): IValidator {
        if (!Object.hasOwn(this.#validatorConstructorMap, name)) {
            throw new Error(`Validator ${name} does not found.`);
        }

        return new this.#validatorConstructorMap[name](...args);
    }

    register(name: string, constructor: IValidatorContstructor) {
        throwIfNull(name, "name");
        throwIfNull(constructor, "constructor");
        this.#validatorConstructorMap[name] = constructor;
    }

    unregister(name: string) {
        throwIfNull(name, "name");
        delete this.#validatorConstructorMap[name];
    }
}
