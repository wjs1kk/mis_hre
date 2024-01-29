export function isEmpty(value: string) {
    return value == null || value === "";
}

export function isBlank(value: string) {
    if (isEmpty(value)) {
        return true;
    }

    return /^\s+$/.test(value);
}

export function byteCountOf(string: string, type: "utf8" | "utf16" | "euckr" = "utf8") {
    const s = String(string);

    switch (type) {
        case "utf16":
            return getUtf16ByteCount(s);
        case "euckr":
            return getEucKrByteCount(s);
        case "utf8":
        default:
            return getUtf8ByteCount(s);
    }
}

function getUtf8ByteCount(string: string) {
    const len = string.length;
    let n = 0;
    let increment = 1;
    for (let i = 0; i < len; i += increment) {
        const codepoint = string.codePointAt(i);
        increment = (codepoint > 0xFFFF) ? 2 : 1;

        if (codepoint <= 0x7f) {
            n += 1;
        } else if (codepoint <= 0x7ff) {
            n += 2;
        } else if (codepoint <= 0xffff) {
            n += 3;
        } else if (codepoint <= 0x1fffff) {
            n += 4;
        } else if (codepoint <= 0x3ffffff) {
            n += 5;
        } else if (codepoint <= 0x7fffffff) {
            n += 6;
        }
    }

    return n;
}

function getUtf16ByteCount(string: string) {
    const len = string.length;
    let n = 0;
    let increment = 1;

    for (let i = 0; i < len; i += increment) {
        const codepoint = string.codePointAt(i);
        increment = (codepoint > 0xFFFF) ? 2 : 1;

        n += (codepoint > 0xFFFF) ? 4 : 2;
    }

    return n;
}

function getEucKrByteCount(string: string) {
    const len = string.length;
    let n = 0;

    for (let i = 0; i < len; i++) {
        const charCode = string.charCodeAt(i);
        n += (charCode <= 0x7f) ? 1 : 2;
    }

    return n;
}
