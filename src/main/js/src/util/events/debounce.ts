import type { ThrottleCallback } from "./types";

export function debounce<TArgs extends any[]>(delay: number, callback: ThrottleCallback<TArgs>, thisObj?: any): ThrottleCallback<TArgs> {
    let id: number | null = null;

    return function (this: any, ...args: TArgs) {
        const that = thisObj ?? this;

        if (id != null) {
            clearTimeout(id);
            id = null;
        }

        id = setTimeout(function () {
            callback.apply(that, args);
            id = null;
        }, delay);
    };
}
