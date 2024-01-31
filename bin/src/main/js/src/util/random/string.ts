/**
 * 영문 대문자와 소문자, 숫자를 사용하여 임의의 문자열을 생성한다.
 *
 * @param length 생성할 문자열의 길이
 *
 * @returns 지정한 길이의 임의의 문자열
 */
export function randomString(length: number) {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
