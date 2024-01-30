/**
 * 주어진 값 `value`를 범위 [`from`, `to`] 이내가 되도록 자른다.
 *
 * @param value 주어진 범위 내로 자르고자 하는 숫자값
 * @param from 범위의 시작
 * @param to 범위의 끝
 *
 * @returns `value`가 범위 내인 경우 `value`를 그대로 반환하고, 범위를 초과한 경우 `to`, 범위 미만일 경우 `from`을 반환한다.
 */
export function clamp(value: number, from: number, to: number) {
    return Math.min(Math.max(value, from), to);
}
