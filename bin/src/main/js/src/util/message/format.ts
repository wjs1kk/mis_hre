import MessageFormat from "@messageformat/core";

/**
 * 문자열을 포맷한다.
 *
 * @param message 포맷할 문자열
 * @param args 문자열의 자리 표시자에 들어갈 값의 목록
 *
 * @returns 포맷된 문자열
 */
export function format(message: string, ...args: unknown[]) {
    return new MessageFormat(getCurrentLocales()).compile(message)(args);
}

function getCurrentLocales() {
    if (navigator.languages)
        return Array.from(navigator.languages);
    return [navigator.language];
}
