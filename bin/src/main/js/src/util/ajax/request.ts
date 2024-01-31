import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { isSuccessfulResponse } from "@/util/ajax/common";
import { AjaxError } from "@/util/ajax/error";
import { isEmpty } from "@/util/string";
import { useGlobalUiState } from "@/stores/ui";
import { getActivePinia } from "pinia";
import { showAlert } from "../popup";

type RequestData = Record<string, any> | FormData;
type RequestParam = Record<string, any> | URLSearchParams;

export async function request<R>(url: string, method: "get" | "post" | "put" | "delete" | "patch", params?: RequestParam, data?: RequestData): Promise<R> {
    const uiState = (getActivePinia() != null) ? useGlobalUiState() : null;

    if (url.startsWith("/"))
        url = url.substring(1);

    if (isEmpty(method)) {
        method = "get";
    }

    const config: AxiosRequestConfig = {
        responseType: "json"
    };

    if (data != null) {
        if (data instanceof FormData) {
            config.headers = {
                "Content-Type": "multipart/form-data"
            };
        } else if (data instanceof URLSearchParams) {
            config.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
        } else if (typeof data === "object") {
            config.headers = {
                "Content-Type": "application/json"
            };
            data = convertRowCheck(data);
        }
    } else {
        data = {};
    }

    applyParams(params, data);

    let result: AxiosResponse<R, any>;

    uiState?.pushThrobber();
    try {
        switch (method.toLowerCase()) {
            case "post":
                result = await axios.post(url, data, config);
                break;
            case "put":
                result = await axios.put(url, data, config);
                break;
            case "delete":
                result = await axios.delete(url, config);
                break;
            case "patch":
                result = await axios.patch(url, data, config);
                break;
            case "head":
                config.params = data;
                result = await axios.head(url, config);
                break;
            case "options":
                config.params = data;
                result = await axios.options(url, config);
                break;
            case "get":
            default:
                config.params = data;
                result = await axios.get(url, config);
                break;
        }

        if (isSuccessfulResponse(result)) {
            return result.data;
        } else {
            throw new AjaxError(result.status, result.statusText, result.data);
        }
    } catch (e) {
        showErrorMessage(e);
        throw e;
    } finally {
        uiState?.popThrobber();
    }
}

function applyParams(params: RequestParam, data: Record<string, any> | URLSearchParams | FormData) {
    if (params != null) {
        let p = {};
        if (params instanceof URLSearchParams) {
            params.forEach((value, key) => {
                p[key] = value;
            });
        } else {
            p = params;
        }

        if (data instanceof FormData) {
            data.set("__params__", JSON.stringify(p));
        } else if (data instanceof URLSearchParams) {
            data.set("__params__", JSON.stringify(p));
        } else {
            data.__params__ = p;
        }
    }
}

export async function getData<R = any>(url: string, param?: RequestParam): Promise<R> {
    return await request(url, "get", param);
}

export async function postData<R = any>(url: string, data?: RequestData, param?: RequestParam): Promise<R> {
    return await request(url, "post", param ?? {}, data);
}

function convertRowCheck(data: any) {
    if (Array.isArray(data)) {
        return data.map(e => ({ ...e, rowCheck: e.rowCheck ? 1 : 0 }));
    } else {
        const entries = Object.entries(data)
            .map(e => {
                if (Array.isArray(e[1])) {
                    e[1] = convertArrayRowCheck(e[1]);
                } else {
                    e[1] = convertItemRowCheck(e[1]);
                }
                return e;
            });
        return Object.fromEntries(entries);
    }
}

function convertArrayRowCheck(data: any[]) {
    if (data.length > 0 && (typeof data[0] === "object")) {
        return data.map(e => convertItemRowCheck(e));
    } else {
        return data;
    }
}

function convertItemRowCheck(data: any) {
    return { ...data, rowCheck: data.rowCheck ? 1 : 0 };
}

function showErrorMessage(e: any) {
    let message: string = null;
    if (e.response) {
        message = e.response.data?.errorMessage;
    } else if (e.data) {
        message = e.data?.errorMessage;
    }

    showAlert(message ?? "오류가 발생하였습니다.");
}
