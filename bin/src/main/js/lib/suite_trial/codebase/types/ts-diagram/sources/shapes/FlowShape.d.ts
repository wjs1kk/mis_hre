import { IItemConfig } from "../types";
import { BaseShape } from "./Base";
export declare const extraLines: {
    database: (width: any, _height: any, part: any, config: any) => any;
    internal: (width: any, height: any, part: any, config: any) => any;
    offline: (width: any, height: any, part: any, config: any) => any;
    subroutine: (width: any, height: any, part: any, config: any) => any;
    or: (width: any, height: any, _part: any, config: any) => any;
    junction: (width: any, height: any, _part: any, config: any) => any;
    roll: (width: any, height: any, _part: any, config: any) => any;
};
declare function display(width: any, height: any): string;
declare function circle(width: any, height: any): string;
declare function triangle(width: any, height: any): string;
declare function document(width: any, height: any): string;
declare function data(width: any, height: any, part: any): string;
declare function database(width: any, height: any, part: any): string;
declare function delay(width: any, height: any): string;
declare function output(width: any, height: any, part: any): string;
declare function page(width: any, height: any): string;
declare function input(width: any, height: any): string;
declare function operation(width: any, height: any): string;
declare function punchcard(width: any, height: any): string;
declare function comment(width: any, height: any): string;
declare function storage(width: any, height: any): string;
declare function extract(width: any, height: any): string;
declare function decision(width: any, height: any): string;
declare function collate(width: any, height: any): string;
declare function keyring(width: any, height: any, part: any): string;
declare function start(width: any, height: any): string;
declare function rectangle(width: any, height: any): string;
declare function tape(width: any, height: any): string;
declare function preparation(width: any, height: any): string;
declare function endpoint(width: any, height: any): string;
export declare const renders: {
    circle: typeof circle;
    rectangle: typeof rectangle;
    triangle: typeof triangle;
    start: typeof start;
    end: typeof start;
    process: typeof rectangle;
    output: typeof output;
    decision: typeof decision;
    display: typeof display;
    document: typeof document;
    data: typeof data;
    database: typeof database;
    internal: typeof rectangle;
    offline: typeof storage;
    delay: typeof delay;
    page: typeof page;
    input: typeof input;
    operation: typeof operation;
    punchcard: typeof punchcard;
    subroutine: typeof rectangle;
    comment: typeof comment;
    storage: typeof storage;
    extract: typeof extract;
    collate: typeof collate;
    or: typeof circle;
    junction: typeof circle;
    keyring: typeof keyring;
    tape: typeof tape;
    preparation: typeof preparation;
    endpoint: typeof endpoint;
    roll: typeof circle;
};
export declare class FlowShape extends BaseShape {
    config: IItemConfig;
    getMetaInfo(): ({
        id: string;
        type: string;
        label: string;
        hint: string;
        value: string;
    } | {
        id: string;
        label: string;
        type: string;
        hint?: undefined;
        value?: undefined;
    })[];
    toSVG(): any;
    protected setDefaults(obj: IItemConfig): IItemConfig;
    private _shapeLine;
    private _getPoints;
    private _getExtraLines;
    private _getText;
}
export {};