export type LengthUnit = "char" | "byte";


export interface IValidationResult {
    passed: boolean;
    message?: string;
    row?: IRow;
    col?: IColumn;
    value?: unknown;
};

export interface IRow {
    id?: string | number;
    [key: string]: unknown;
}

export interface IColumn {
    id: string | number;
    name: string;
};

export interface IValidatorContstructor {
    new(...args: any[]): IValidator;
    readonly prototype: IValidator;
}

export interface IValidator {
    validate(value: unknown, row: IRow, col: IColumn): IValidationResult;
}

export interface IColumnInfoProvider {
    getColumn(id: string): IColumn;
}

export interface IDatasetIterator {
    readonly hasNext: boolean;
    next(): IRow;
}

type GenericValidatorConfig = [string, ...any[]];
type RequiredValidatorConfig = ["required"];
type MinMaxValidatorConfig = ["min" | "max", number];
type NumberBetweenValidatorConfig = ["between", number | null, number | null];
type NumberRangeValidatorConfig = ["range", string, string];
type RegExpValidatorConfig = ["regExp", string | RegExp, string?];
type DateFormatValidatorConfig = ["dateFormat", string, string?];
type DateRangeValidatorConfig = ["dateRange", string, string, string, string?];
type StringLengthMinMaxValidatorConfig = ["minLength" | "maxLength", number, LengthUnit?];
type StringLengthBetweenValidatorConfig = ["lengthBetween", number | null, number | null, LengthUnit?];
type ValidatorConfig = GenericValidatorConfig
    | RequiredValidatorConfig
    | MinMaxValidatorConfig
    | NumberBetweenValidatorConfig
    | NumberRangeValidatorConfig
    | RegExpValidatorConfig
    | DateFormatValidatorConfig
    | DateRangeValidatorConfig
    | StringLengthMinMaxValidatorConfig
    | StringLengthBetweenValidatorConfig;
export type ValidatorConfigList = ValidatorConfig[];
