import { isEmpty } from "@/util/string/common";
import { toLength } from "../common";

export function lpad(text: string, length: number, fill: string): string {
    return pad(text, length, fill, "l");
}

export function rpad(text: string, length: number, fill: string): string {
    return pad(text, length, fill, "r");
}

function pad(text: string, length: number, fill: string, direction: "l" | "r") {
    const fillText = isEmpty(fill) ? " " : String(fill);

    const targetLength = toLength(length);
    const padLength = toLength(targetLength - text.length);

    if (padLength <= 0) {
        return text;
    }

    const padded = [];

    if (direction === "r") {
        padded.push(text);
    }

    for (let i = 0; i < padLength; i++) {
        padded.push(fillText[i % fillText.length]);
    }

    if (direction === "l") {
        padded.push(text);
    }

    return padded.join("");
}
