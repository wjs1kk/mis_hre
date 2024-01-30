import { formatDate, parseDate } from "@/util/date";
import { isEmpty } from "@/util/string";

type Row = Record<string, any>;

/**
 * 데이터 셋 각 항목의 값을 변환한다.
 */
class Converter<T extends Row | Row[], E = T extends Row[] ? T[number] : T, K extends keyof E = keyof E> {

    private _dataset: T;
    private _chain: {
        property: K;
        convert(value: any): any;
    }[] = [];

    constructor(dataset: T) {
        this._dataset = dataset;
    }

    /**
     * 데이터를 변환한다. 원본 데이터는 건드리지 않는다.
     *
     * @returns 변환된 데이터
     */
    convert() {
        if (Array.isArray(this._dataset)) {
            return this._dataset.map(e => this._convertItem(e));
        } else {
            return this._convertItem(this._dataset as unknown as E);
        }
    }

    private _convertItem(item: E): E {
        const copy: E = { ...item };

        for (const c of this._chain) {
            const value: E[K] = copy[c.property];
            copy[c.property] = c.convert(value);
        }

        return copy;
    }

    /**
     * 날짜 포맷 변환을 설정한다.
     *
     * @param column 속성명
     * @param from 원래의 날짜 포맷
     * @param to 새 날짜 포맷
     * @param locale 날짜 포맷에 사용할 언어 또는 지역
     *
     * @returns 이 변환기 자신을 반환한다
     */
    dateFormat(column: K, from: string, to: string, locale = navigator.language): this {
        this._chain.push({
            property: column,
            convert(value: any) {
                if (column == null || isEmpty(value))
                    return null;

                const date = (value instanceof Date) ? value : parseDate(value, from, locale);
                return isEmpty(to) ? date : formatDate(date, to, locale);
            }
        });

        return this;
    }

    /**
     * 체크박스 값 변환을 설정한다.
     *
     * @param column 변환할 속성명
     * @param from 기존의 체크박스 값의 배열, 체크되지 않았을 때의 값이 먼저 온다.
     * @param to 새 체크박스 값의 배열. 앞과 마찬가지로 체크되지 않았을 때의 값이 먼저 온다.
     *
     * @returns 이 변환기 자신을 반환한다.
     */
    checkbox<T, U>(column: K, from: [T, T], to: [U, U]): this {
        this._chain.push({
            property: column,
            convert(value: any): U {
                const index = from.indexOf(value);
                return (index < 0) ? value : to[index];
            }
        });

        return this;
    }
}

export function datasetConverter<T extends Record<string, unknown>>(dataset: T): Converter<T, T>;
export function datasetConverter<T extends Record<string, unknown>[]>(dataset: T[]): Converter<T[], T>;

export function datasetConverter(dataset: Record<string, any> | Record<string, any>[]) {
    return new Converter(dataset) as any;
}
