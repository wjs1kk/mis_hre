import { IEventSystem } from "../../../ts-common/events";
import { View } from "../../../ts-common/view";
import { IRadioButtonConfig } from "../types";
export declare enum RadioButtonEvents {
    change = "change"
}
export declare class RadioButton extends View {
    config: IRadioButtonConfig;
    events: IEventSystem<RadioButtonEvents>;
    protected _handlers: any;
    private _propsItem;
    private _props;
    constructor(container: HTMLElement | string, config?: {});
    destructor(): void;
    setProperties(propertyConfig: any): void;
    getProperties(): {};
    getValue(): string | void;
    setValue(checked: boolean): void;
    focus(): void;
    disable(): void;
    enable(): void;
    isDisabled(): boolean;
    clear(): void;
    validate(): boolean;
    clearValidate(): void;
    private _draw;
}