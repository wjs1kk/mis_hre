import { DateTime } from "luxon";

/**
 * 날짜를 지정한 형식을 사용하여 문자열로 변환한다.
 *
 * @param date 포맷할 {@link Date}
 * @param pattern 날짜 형식(예: yyyy-MM-dd)
 * @param [locale=navigator.language] 날짜 포맷에 사용할 언어 및 지역 코드
 *
 * @returns 날짜 문자열
 */
export function formatDate(date: Date, pattern: string, locale?: string) {
    return DateTime.fromJSDate(date).toFormat(pattern, {
        locale: locale ?? navigator.language
    });
}

/**
 * 날짜 문자열을 지정한 형식을 사용하여 {@link Date} 객체로 변환한다.
 *
 * @param dateString 날짜 문자열
 * @param pattern 날짜 형식
 * @param [locale=navigator.language] 날짜 포맷에 사용할 언어 및 지역 코드
 *
 * @returns 변환된 {@link Date} 객체
 */
export function parseDate(dateString: string, pattern: string, locale?: string) {
    return DateTime.fromFormat(dateString, pattern, {
        locale: locale ?? navigator.language
    }).toJSDate();
}
