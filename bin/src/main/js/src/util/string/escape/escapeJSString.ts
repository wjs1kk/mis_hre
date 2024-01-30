import { toLength } from "@/util";

export function escapeJSString(string: string) {
    return string.replace(/[\0\b\f\n\r\t\v'"\\]/g, e => {
        switch (e) {
            case "\0":
                return "\\0";
            case "\b":
                return "\\b";
            case "\f":
                return "\\f";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\t":
                return "\\t";
            case "\v":
                return "\\v";
            case "'":
                return "\\'";
            case "\"":
                return "\\\"";
            case "\\":
                return "\\\\";
            default:
                return e;
        }
    });
}

export function unescapeJSString(string: string) {
    return string.replace(/\\(?:[0-7]{1,3}|x[\da-fA-F]{0,2}|u(?:[\da-fA-F]{0,4}|\{[\da-fA-F]*\})|.)/g, e => {
        console.debug(e);
        const prefix = e.substring(1, 2);
        switch (prefix) {
            case "b":
                return "\b";
            case "f":
                return "\f";
            case "n":
                return "\n";
            case "r":
                return "\r";
            case "t":
                return "\t";
            case "v":
                return "\v";
            case "x":
                checkLength(e.substring(2), 2, "Invalid Unicode escape sequence");
                return String.fromCharCode(parseInt(e.substring(2), 16));
            case "u":
                if (e[2] == "{") {
                    const cp = parseInt(e.substring(3, e.length - 1), 16);
                    if (isNaN(cp) || cp > 0x10ffff) {
                        throw new Error("Invalid unicode escape sequence");
                    }
                    return String.fromCodePoint(cp);
                } else {
                    const charCode = e.substring(2);
                    checkLength(e.substring(2), 4, "Invalid Unicode escape sequence");
                    return String.fromCharCode(parseInt(charCode, 16));
                }
            default:
                if (e[1] >= '0' && e[1] <= '7') {
                    let charCode = parseInt(e.substring(1), 8);
                    let rest = "";
                    if (charCode > 0x7f) {
                        charCode = parseInt(e.substring(1, 3));
                        rest = e.substring(3);
                    }
                    return [String.fromCharCode(charCode), rest].join("");
                } else {
                    return e.substring(1);
                }
        }
    });
}

function checkLength(string: string, number: number, message: string) {
    if (string.length < toLength(number)) {
        throw new Error(message);
    }
}
