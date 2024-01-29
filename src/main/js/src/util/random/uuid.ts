import { lpad } from "@/util/string/pad";

/**
 * 임의의 UUID v4 문자열을 생성한다.
 *
 * @returns 임의의 UUID 문자열
 */
export function randomUuid() {
    const arr = new Uint16Array(8);
    crypto.getRandomValues(arr);
    arr[3] = (4 << 12) | (arr[3] & 0x0fff);
    return `${hex(arr[0])}${hex(arr[1])}-${hex(arr[2])}-${hex(arr[3])}-${hex(arr[4])}-${hex(arr[5])}${hex(arr[6])}${hex(arr[7])}`;
}

function hex(value: number) {
    return lpad(value.toString(16), 4, '0');
}
