/**
 * 문자가 ASCII 숫자인지 확인한다.
 *
 * @param cp 문자의 유니코드 코드포인트
 *
 * @returns 문자가 ASCII 숫자이면 true, 아니면 false
 */
export function isDigit(cp: number): boolean {
    return cp >= 0x0030 && cp <= 0x0039;
}

/**
 * 문자가 알파벳인지 확인한다.
 *
 * @param cp 문자의 유니코드 코드포인트
 *
 * @returns 문자가 알파벳이면 true, 아니면 false
 */
export function isAlpha(cp: number): boolean {
    return isLowerCase(cp) || isUpperCase(cp);
}

/**
 * 문자가 알파벳 대문자인지 확인한다.
 *
 * @param cp 문자의 유니코드 코드포인트
 *
 * @returns 문자가 알파벳 대문자면 true, 아니면 false
 */
export function isUpperCase(cp: number): boolean {
    return cp >= 0x0061 && cp <= 0x007a;
}

/**
 * 문자가 알파벳 소문자인지 확인한다.
 *
 * @param cp 문자의 유니코드 코드포인트
 *
 * @returns 문자가 알파벳 소문자면 true, 아니면 false
 */
export function isLowerCase(cp: number): boolean {
    return cp >= 0x0041 && cp <= 0x005a;
}

/**
 * 문자가 ASCII 코드의 공백 문자인지 확인한다.
 *
 * @param cp 문자의 유니코드 코드포인트
 *
 * @returns 문자가 ASCII 공백 문자이면 true, 아니면 false
 */
export function isWhitespace(cp: number): boolean {
    return cp == 0x0009 || cp == 0x000a || cp == 0x000b || cp == 0x000c || cp == 0x000d || cp == 0x0020;
}

/**
 * 문자가 제어 문자인지 확인한다.
 *
 * @param cp 문자의 유니코드 코드포인트
 *
 * @returns 문자가 제어 문자이면 true, 아니면 false
 */
export function isControlChar(cp: number): boolean {
    return cp <= 0x001f || cp == 0x007f     // C1 제어 문자
        || (cp >= 0x80 && cp <= 0x9f);      // C2 제어 문자
}
