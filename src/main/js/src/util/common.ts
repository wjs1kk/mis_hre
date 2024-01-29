
/**
 * 인자로 넘긴 값 중 맨 처음 나오는 null이 아닌 값을 확인한다.
 * 모든 인자가 null이면 반환값은 undefined이다.
 *
 * @param args
 * @returns 인자 목록에서 맨 처음 나오는 null이 아닌 값.
 */
export function coalesce<T extends unknown[]>(...args: [...T]): any {
    return args.find(e => e != null && e !== "");
}

/**
 * 두 값을 비교하여 같으면 null을, 다르면 앞의 값을 반환한다.
 *
 * @param arg0
 * @param arg1
 *
 * @returns 두 값이 같으면 null을, 다르면 arg0의 값을 반환한다.
 */
export function nullIf<T>(arg0: T, arg1: T): T {
    // null 및 undefined에 대해서는 strict 비교를 하지 않는다.
    if (arg0 == null && arg1 == null)
        return null;

    return arg0 === arg1 ? null : arg0;
}

/**
 * 임의의 값을 유효한 길이 값으로 변환한다.
 * @param value 임의의 값
 * @returns
 */
export function toLength(value: unknown) {
    const len = toIntegerOrInfinity(value);
    return (len <= 0) ? 0 : len;
}

/**
 * 임의의 값을 유효한 정수 또는 무한대로 변환한다.
 * @param value 임의의 값
 * @returns
 */
export function toIntegerOrInfinity(value: unknown): number {
    const n = Number(value);

    if (Number.isNaN(n) || n == 0) {
        return 0;
    }

    if (n == Number.NEGATIVE_INFINITY) {
        return Number.NEGATIVE_INFINITY;
    }

    if (n == Number.POSITIVE_INFINITY) {
        return Number.POSITIVE_INFINITY;
    }

    return Math.sign(n) * Math.floor(Math.abs(n));
}
