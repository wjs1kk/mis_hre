export class AjaxError extends Error {

    private readonly _status: number;
    private readonly _statusText: string;
    private readonly _data: any;

    constructor(status: number, statusText: string, data: any, options?: ErrorOptions) {
        super(statusText, options);

        if ("captureStackTrace" in Error) {
            (Error.captureStackTrace as (target: object, ctor: Function) => void)(this, AjaxError);
        }

        this._status = status;
        this._statusText = statusText;
        this._data = data;
    }

    get status(): number {
        return this._status;
    }

    get statusText(): string {
        return this._statusText;
    }

    get data(): any {
        return this._data;
    }
}
