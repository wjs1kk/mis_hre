import MessageFormat from "@messageformat/core";
import postposition from "cox-postposition";
import message from "./messages";
import type { IColumn, IRow, IValidationResult } from "../types";
import { throwIfNull } from "../util";

export function createDefaultResult(value: unknown, row: IRow, col: IColumn): IValidationResult {
    return {
        passed: true,
        row: row,
        col: col,
        value: value
    };
}


export function getMessage(id: string, locale: string | null | undefined, ...args: unknown[]) {
    throwIfNull(id, "Message ID");

    if (locale == null)
        locale = navigator.language;

    const loc = new Intl.Locale(locale);
    const lang = loc.language;

    if (!Object.hasOwn(message, lang))
        return "";

    const formatString = message[lang][id];
    if (formatString == null)
        return "";
    const mf = new MessageFormat(locale).compile(formatString);

    const m = mf(args);
    return (lang === "ko") ? postposition.parse(m) : m;
}

/**
 * ECMAScript spec의 §7.1.5 ToIntegerOrInfinity 연산을 나타낸다.
 *
 * 임의의 값을 정수 또는 무한대의 값으로 변환한다.
 *
 * @param value 임의의 값
 *
 * @returns 정수롭 변환된 값, 또는 무한대
 *
 * @see https://tc39.es/ecma262/#sec-tointegerorinfinity
 */
export function toIntegerOrInfinity(value: unknown) {
    const number = Number(value);

    if (Number.isNaN(number) || number == 0)
        return 0;
    else if (number == Number.POSITIVE_INFINITY)
        return Number.POSITIVE_INFINITY;
    else if (number == Number.NEGATIVE_INFINITY)
        return Number.NEGATIVE_INFINITY;
    else
        return Math.sign(number) * Math.floor(Math.abs(number));
}

/**
 * ECMAScript spec의 §7.1.20 ToLength 연산을 나타낸다.
 *
 * 임의의 값을 배열 인덱스 값으로 사용 가능한 볌위의 정수로 변환한다.
 *
 * @param value 임의의 값
 *
 * @returns 정수롭 변환된 값, 또는 무한대
 *
 * @see https://tc39.es/ecma262/#sec-tolength
 */
export function toLength(value: unknown) {
    const len = toIntegerOrInfinity(value);
    return (len < 0) ? 0 : Math.min(len, Number.MAX_SAFE_INTEGER);
}

/**
 * 지정한 문자열의 바이트 수를 계산한다.
 *
 * @param string 바이트 수를 계산할 문자열
 * @param encoding 바이트 수 계산에 사용할 인코딩
 *
 * @returns 지정한 인코딩에 따른 문자열 바이트 수
 */
export function getByteCount(string: string, encoding: "utf8" | "utf16" | "euckr" = "utf8"): number {
    switch (encoding) {
        case "utf16":
            return getUtf16ByteCount(string);
        case "euckr":
            return getEucKrByteCount(string);
        case "utf8":
        default:
            return getUtf8ByteCount(string);
    }
}

function getUtf8ByteCount(string: string) {
    let n = 0;
    const cnt = string.length;
    let increment = 1;

    for (let i = 0; i < cnt; i += increment) {
        const codePoint = string.codePointAt(i)!;
        increment = (codePoint <= 0xFFFF) ? 1 : 2;

        if (codePoint <= 0x7f) {
            n += 1;
        } else if (codePoint <= 0x7ff) {
            n += 2;
        } else if (codePoint <= 0xffff) {
            n += 3;
        } else {
            n += 4;
        }
    }

    return n;
}

function getUtf16ByteCount(string: string) {
    return string.length;
}

function getEucKrByteCount(string: string) {
    let n = 0;
    const cnt = string.length;

    for (let i = 0; i < cnt; i++) {
        const code = string.charCodeAt(i);
        if (code <= 0x7f) {
            n += 1;
        } else {
            n += 2;
        }
    }

    return n;
}
