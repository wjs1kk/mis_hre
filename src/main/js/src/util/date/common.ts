import { Optional } from "../Optional";
import { parseDate } from "./format";
import type { DateOrString } from "./types";

/**
 * 주어진 날짜의 ISO 주차 번호를 계산한다.
 *
 * @param date 주차 번호를 계산할 날짜
 * @returns 주어진 날짜의 주차 번호
 * @see https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php
 */
export function getWeekNumber(date: Date): number {
    // Date 객체를 복제한다.
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    // 주어진 날짜와 가장 가까운 목요일로 맞춘다.
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // 연도의 첫 날을 찾는다.
    const yearStart = new Date(Date.UTC(date.getFullYear(), 0, 1));

    // 1월 1일부터 같은 주 목요일까지의 일 수를 7로 나눈다.
    return Math.ceil((((d.valueOf() - yearStart.valueOf()) / 86400000) + 1) / 7);
}

/**
 * 두 날짜를 비교한다.
 *
 * @param left 날짜 문자열 또는 {@link Date} 객체
 * @param right 날짜 문자열 또는 {@link Date} 객체
 * @param pattern 날짜 문자열 사용 시, 날짜 문자열의 형식
 *
 * @returns left가 right보다 빠르면 음수, 늦으면 양수, 같으면 0
 */
export function compare(left: DateOrString, right: DateOrString, pattern?: string): 0 | 1 | -1 {
    const a = (left instanceof Date) ? left : parseDate(left, pattern ?? "yyyy-MM-dd");
    const b = (right instanceof Date) ? right : parseDate(right, pattern ?? "yyyy-MM-dd");

    if (a.valueOf() < b.valueOf())
        return -1;
    else if (a.valueOf() > b.valueOf())
        return 1;
    else
        return 0;
}

/**
 * 날짜가 범위 내에 있는지 확인한다.
 *
 * @param date 범위 내인지 확인할 날짜
 * @param start 범위의 시작 날짜
 * @param end 볌위의 끝 날짜(미포함)
 * @param pattern 문자열 사용 시, 날짜의 형식
 *
 * @returns 날짜가 지정한 범위 내면 true를 반환한다.
 */
export function checkDateInRange(date: DateOrString, start: DateOrString | null, end: DateOrString | null, pattern?: string): boolean {
    const a = Optional.ofNullable(start)
        .map(e => (e instanceof Date) ? e : parseDate(e, pattern ?? "yyyy-MM-dd"))
        .orElse(null);
    const b = Optional.ofNullable(end)
        .map(e => (e instanceof Date) ? e : parseDate(e, pattern ?? "yyyy-MM-dd"))
        .orElse(null);

    ensureRangeIsValid(a, b);

    const c = (date instanceof Date) ? date : parseDate(date, pattern ?? "yyyy-MM-dd");

    if (a == null) {
        return c.getTime() < b.getTime();
    } else if (b == null) {
        return c.getTime() >= a.getTime();
    } else {
        return c.getTime() >= a.getTime() && c.getTime() < b.getTime();
    }
}

/**
 * 날짜의 범위가 올바른지 확인한다.
 *
 * @param start 범위의 시작
 * @param end 범위의 끝(미포함)
 * @param pattern 문자열 사용 시, 날짜의 형식
 *
 * @returns 범위가 올바르면 true
 */
export function checkIsValidDateRange(start: DateOrString | null, end: DateOrString | null, pattern?: string): boolean {
    const a = Optional.ofNullable(start)
        .map(e => (e instanceof Date) ? e : parseDate(e, pattern ?? "yyyy-MM-dd"))
        .orElse(null);
    const b = Optional.ofNullable(end)
        .map(e => (e instanceof Date) ? e : parseDate(e, pattern ?? "yyyy-MM-dd"))
        .orElse(null);

    try {
        ensureRangeIsValid(a, b);
        return true;
    } catch (e) {
        return false;
    }
}

function ensureRangeIsValid(start: Date, end: Date) {
    if (start != null && end != null && start.valueOf() >= end.valueOf()) {
        throw new Error(`Invalid date range [${start}, ${end}). The end of range is earlier than the start.`);
    } else if (start == null && end == null) {
        throw new Error("Both the start and end of the range cannot be null.");
    }
}
