import locales from "src/configs/locales";
import configs from "src/configs/application";

export function _(text) {
    if (!locales.hasOwnProperty(text)) {
        return text;
    }
    return locales[text][configs.language];
}

