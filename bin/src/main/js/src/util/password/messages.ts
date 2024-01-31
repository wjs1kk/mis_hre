import MessageFormat from "@messageformat/core";
import { throwIfNull } from "../data/validate";
import en from "./messages-en.json";
import ko from "./messages-ko.json";
import postposition from "cox-postposition";

const message = { en, ko };

export function getMessage(id: string, locale?: string | null | undefined, ...args: unknown[]) {
    throwIfNull(id, "Message ID");

    if (locale == null)
        locale = navigator.language;

    const loc = new Intl.Locale(locale);
    const lang = loc.language;

    if (!Object.hasOwn(message, lang))
        return "";

    const formatString = message[lang][id];
    if (formatString == null)
        return "";
    const mf = new MessageFormat(locale).compile(formatString);

    const m = mf(args);
    return (lang === "ko") ? postposition.parse(m) : m;
}
