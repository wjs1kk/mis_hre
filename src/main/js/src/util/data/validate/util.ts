export function throwIfNull(value: unknown, name: string) {
    if (value == null) {
        throw new Error(`${name} is null.`);
    }
}

export function throwIfEmpty(value: unknown, name: string) {
    if (value == null || value === "") {
        throw new Error(`${name} is null.`);
    }
}
