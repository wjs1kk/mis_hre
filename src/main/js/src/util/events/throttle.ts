import type { ThrottleCallback } from "./types";

export function throttle<TArgs extends any[]>(delay: number, callback: ThrottleCallback<TArgs>, thisObj?: any): ThrottleCallback<TArgs> {
    let throttled = false;
    return function (this: any, ...args: TArgs) {
        if (!throttled) {
            throttled = true;

            const that = thisObj ?? this;
            callback.apply(that, args);

            setTimeout(() => {
                throttled = false;
            }, delay);
        }
    };
}
