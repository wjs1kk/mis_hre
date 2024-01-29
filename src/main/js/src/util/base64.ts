const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const lookup = new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}

export function encodeBase64(buf: null | undefined): null;

/**
 * 이진 데이터를 Base64로 인코딩힌다.
 *
 * @param buf Base64 인코딩을 할 이진 데이터
 *
 * @returns Base64 문자열
 */
export function encodeBase64(buf: ArrayBuffer | ArrayBufferView): string;
export function encodeBase64(buf: ArrayBuffer | ArrayBufferView | null | undefined): string | null {
    if (buf == null) {
        return null;
    }

    const bytes = new Uint8Array((buf instanceof ArrayBuffer) ? buf : buf.buffer);
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;

    let a: number;
    let b: number;
    let c: number;
    let d: number;
    let chunk: number;
    let result = "";

    for (let i = 0; i < mainLength; i += 3) {
        chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        a = (chunk & 0xfc0000) >> 18;   // 0x3f << 16
        b = (chunk & 0x3f000) >> 12;    // 0x3f << 12
        c = (chunk & 0xfc0) >> 6;       // 0x3f << 6
        d = chunk & 0x3f;               // 마지막 2비트

        result += chars[a] + chars[b] + chars[c] + chars[d];
    }

    if (byteRemainder === 1) {
        chunk = bytes[mainLength];
        a = (chunk & 0xfc) >> 2;     // 0x3f << 2
        b = (chunk & 0x3) << 4;
        result += chars[a] + chars[b] + "==";
    } else if (byteRemainder === 2) {
        chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
        a = (chunk & 0xfc00) >> 10;     // 0x3f << 10
        b = (chunk & 0x3f0) >> 4;       // 0x3f << 4
        c = (chunk & 0xf) << 2;         // 마지막 4비트
        result += chars[a] + chars[b] + chars[c] + "=";
    }

    return result;
}

export function decodeBase64(buf: null | undefined): null;

/**
 * Base64 문자열을 이진 데이터로 디코딩한다.
 *
 * @param buf Base64 문자열
 *
 * @returns 변환된 이진 데이터를 담고 있는 {@link ArrayBuffer}
 */
export function decodeBase64(buf: string): ArrayBuffer;
export function decodeBase64(base64: string | null | undefined): ArrayBuffer | null {
    if (base64 == null) {
        return null;
    }

    let bufferLength = base64.length * 0.75;
    const len = base64.length;
    let i: number;
    let p = 0;
    let encoded1: number;
    let encoded2: number;
    let encoded3: number;
    let encoded4: number;

    if (base64.endsWith("=")) {
        bufferLength--;
        if (base64[base64.length - 2] === "=") {
            bufferLength--;
        }
    }

    const arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];

        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
}
