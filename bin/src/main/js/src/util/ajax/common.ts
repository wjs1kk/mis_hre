import type { AxiosResponse } from "axios";

export function isSuccessfulResponse<T>(response: AxiosResponse<T>): boolean {
    const status = response.status;
    if (status >= 400) {
        return false;
    }

    if ("errorCode" in (response.data as any)) {
        return (response.data as any).errorCode >= 0;
    }

    return true;
}
