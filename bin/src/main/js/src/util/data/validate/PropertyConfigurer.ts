import type { ValidatorConfigList } from "./types";

export class PropertyConfigurer {

    readonly col: string;
    readonly name: string | null;
    readonly #chain: [string, ...any[]][];

    constructor(col: string, name: string | null, chain: ValidatorConfigList) {
        this.col = col;
        this.name = name;
        this.#chain = chain;
    }

    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: "min", minValue: number): this;
    validator(name: string, ...args: any[]): this {
        this.#chain.push([name, ...args]);
        return this;
    }

    min(minValue: number): this {
        return this.validator("min", minValue);
    }

    get validators(): ValidatorConfigList {
        return this.#chain;
    }
}
