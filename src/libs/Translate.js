import locales from "../configs/locales";
import configs from "../configs/application";

export function _(text) {
    if (!locales.hasOwnProperty(text)) {
        return text;
    }
    return locales[text][configs.language];
}

