import { DatasetValidator } from "./DatasetValidator";
import { PropertyValidator } from "./PropertyValidator";
import { DefaultValidatorRegistry } from "./DefaultValidatorRegistry";
import { PropertyConfigurer } from "./PropertyConfigurer";
import type { IValidatorRegistry } from "./ValidatorRegistry";
import type { IColumnInfoProvider, ValidatorConfigList } from "./types";
import { throwIfNull } from "./util";

type PropertyConfigurerCallback = ((column: PropertyConfigurer) => void);


export class DatasetValidatorBuilder {

    readonly #validators: Record<string, PropertyConfigurer> = Object.create(null);
    #columnInfoProvider: IColumnInfoProvider | undefined;
    #validatorProvider: IValidatorRegistry;

    constructor() {
        this.#validatorProvider = new DefaultValidatorRegistry();
    }

    get columnInfoProvider(): IColumnInfoProvider {
        return this.#columnInfoProvider;
    }

    set columnInfoProvider(provider: IColumnInfoProvider) {
        this.#columnInfoProvider = provider;
    }

    get validatorProvider(): IValidatorRegistry {
        return this.#validatorProvider;
    }

    set validatorProvider(provider: IValidatorRegistry) {
        this.#validatorProvider = provider;
    }

    setColumnInfoProvider(provider: IColumnInfoProvider): this {
        this.#columnInfoProvider = provider;
        return this;
    }

    setValidatorProvider(provider: IValidatorRegistry): this {
        this.#validatorProvider = provider;
        return this;
    }

    column(id: string, config: PropertyConfigurerCallback): this;
    column(id: string, name: string, config: PropertyConfigurerCallback): this;
    column(id: string, config: ValidatorConfigList): this;
    column(id: string, name: string, config: ValidatorConfigList): this;
    column(id: string, arg1: string | PropertyConfigurerCallback | ValidatorConfigList, arg2?: PropertyConfigurerCallback | ValidatorConfigList): this {
        const name = (arg2 == null) ? null : arg1 as string;
        const configOrCallback = arg2 ?? arg1 as (PropertyConfigurerCallback | ValidatorConfigList);

        if (typeof configOrCallback === "function") {
            const configurer = new PropertyConfigurer(id, name, []);
            configOrCallback(configurer);
            this.#validators[id] = configurer;
        } else if (Array.isArray(configOrCallback)) {
            this.#validators[id] = new PropertyConfigurer(id, name, configOrCallback);
        }

        return this;
    }

    build(): DatasetValidator {
        throwIfNull(this.#validatorProvider, "Validator provider");

        const columns = Object.create(null);
        for (const key in this.#validators) {
            if (!Object.hasOwn(this.#validators, key))
                continue;
            const entry = this.#validators[key];
            let col = this.#columnInfoProvider?.getColumn(key);
            const validators = [];

            if (col == null) {
                col = { id: key, name: key };
            }

            if (entry.name != null) {
                col.name = entry.name;
            }

            for (const item of entry.validators) {
                const validator = this.#validatorProvider.createValidator(...(item as [string, ...any[]]));
                validators.push(validator);
            }

            columns[key] = new PropertyValidator(col, validators);
        }

        return new DatasetValidator(columns);
    }
}
