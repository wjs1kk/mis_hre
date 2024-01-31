import { DatasetValidatorBuilder } from "./DatasetValidatorBuilder";
import { PropertyConfigurer } from "./PropertyConfigurer";
import type { IValidatorRegistry } from "./ValidatorRegistry";
import type { IColumnInfoProvider, IRow, ValidatorConfigList } from "./types";
import type { IDataCollection } from "lib/suite_trial/codebase/types/ts-data";
import type { IGrid } from "lib/suite_trial/codebase/types/ts-grid";
import { GridColumnInfoProvider } from "./GridColumnInfoProvider";
import { isEmpty } from "@/util/string";
import { showAlert } from "@/util/popup";

type PropertyConfigurerCallback = (column: PropertyConfigurer) => void;

class DataCollectionIterable implements Iterable<IRow> {

    readonly #dataCollection: IDataCollection;

    constructor(dataCollection: IDataCollection) {
        this.#dataCollection = dataCollection;
    }

    *[Symbol.iterator](): Iterator<IRow> {
        const count = this.#dataCollection.getLength();

        for (let i = 0; i < count; i++) {
            const item = this.#dataCollection.getItem(this.#dataCollection.getId(i));
            if (isEmpty(item.rowStatus) || item.rowStatus === "deleted" || !item.rowCheck) {
                continue;
            }

            yield item;
        }
    }
}

class DatasetValidatorBuilderWrapper {
    readonly #dataset: Iterable<IRow>;
    readonly #builder: DatasetValidatorBuilder;

    constructor(dataset: IGrid | IDataCollection | any[], index?: number) {
        this.#builder = new DatasetValidatorBuilder();

        if ("data" in dataset) {
            this.#dataset = this.#createIterable(dataset.data, index);
            this.#builder.columnInfoProvider = new GridColumnInfoProvider(dataset);
        } else if (Array.isArray(dataset)) {
            this.#dataset = dataset;
        } else {
            this.#dataset = this.#createIterable(dataset, index);
        }
    }

    get columnInfoProvider(): IColumnInfoProvider {
        return this.#builder.columnInfoProvider;
    }

    set columnInfoProvider(provider: IColumnInfoProvider) {
        this.setColumnInfoProvider(provider);
    }

    get validatorProvider(): IValidatorRegistry {
        return this.#builder.validatorProvider;
    }

    set validatorProvider(provider: IValidatorRegistry) {
        this.setValidatorProvider(provider);
    }

    grid(grid: IGrid) {
        this.#builder.setColumnInfoProvider(new GridColumnInfoProvider(grid));
        return this;
    }

    setColumnInfoProvider(provider: IColumnInfoProvider): this {
        this.#builder.setColumnInfoProvider(provider);
        return this;
    }

    setValidatorProvider(provider: IValidatorRegistry): this {
        this.#builder.setValidatorProvider(provider);
        return this;
    }

    column(id: string, config: PropertyConfigurerCallback): this;
    column(id: string, name: string, config: PropertyConfigurerCallback): this;
    column(id: string, config: ValidatorConfigList): this;
    column(id: string, name: string, config: ValidatorConfigList): this;
    column(
        id: string,
        arg1: string | PropertyConfigurerCallback | ValidatorConfigList,
        arg2?: PropertyConfigurerCallback | ValidatorConfigList): this {

        this.#builder.column(id, arg1 as any, arg2 as any);
        return this;
    }

    validate() {
        const validator = this.#builder.build();
        validator.setData(this.#dataset);
        const result = validator.validate();

        if (!result.passed) {
            showAlert(result.message);
        }

        return result.passed;
    }

    #createIterable(data: IDataCollection, index: number | undefined) {
        if (index != null) {
            return [data.getItem(data.getId(index))];
        } else {
            return new DataCollectionIterable(data);
        }
    }
}

export function validator(dataset: IGrid | IDataCollection | any[], index?: number) {
    return new DatasetValidatorBuilderWrapper(dataset, index);
}
