/**
 * XML 특수 문자를 XML 엔티티로 이스케이프한다. 대상 문자는 '<', '>', '&', '"', '\'' 다섯 가지이다.
 *
 * @param source 원본 문자열
 *
 * @returns XML 특수 문자를 이스케이프한 문자열
 */
export function escapeXml(source: string): string {
    return (source ?? "").replaceAll(/[<>&'"]/g, c => {
        switch (c) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
            case "'":
                return "&apos;";
            default:
                return c;
        }
    });
}

export function unescapeXml(source: string): string {
    return (source ?? "").replaceAll(/&amp;|&lt;|&gt;|&quot;|&apos;/g, c => {
        switch (c) {
            case "&amp;":
                return "&";
            case "&lt;":
                return "<";
            case "&gt;":
                return ">";
            case "&quot;":
                return "\"";
            case "&apos;":
                return "'";
            default:
                return c;
        }
    });
}
