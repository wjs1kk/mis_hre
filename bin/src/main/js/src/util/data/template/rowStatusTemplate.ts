export function rowStatusTemplate() {
    return function(value: string) {
        switch (value) {
            case "inserted":
                return "I";
            case "updated":
                return "U";
            case "deleted":
                return "D";
            default:
                return "";
        }
    }
}