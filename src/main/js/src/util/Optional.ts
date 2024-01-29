export class Optional<T> {

    private static EMPTY = new Optional<any>(null);

    private _value: T;

    private constructor(value: T) {
        this._value = value;
    }

    static of<T>(value: T): Optional<T> {
        if (value == null) {
            throw new Error("value is null.");
        }

        return new Optional(value);
    }

    static ofNullable<T>(value: T): Optional<T> {
        return (value == null) ? Optional.empty : new Optional(value);
    }

    static get empty() {
        return this.EMPTY;
    }

    get(): T {
        if (!this.isPresent) {
            throw new Error("No value present");
        } else {
            return this._value;
        }
    }

    get isPresent(): boolean {
        return this._value != null;
    }

    get isEmpty(): boolean {
        return this._value == null;
    }

    ifPresent(consumer: Consumer<T>): void {
        if (this.isPresent) {
            consumer(this._value);
        }
    }

    filter(predicate: Predicate<T>): this {
        if (this.isPresent || !predicate(this._value))
            return <this>(Optional.empty);
        else
            return this;
    }

    map<U>(mapper: (input: T) => U): Optional<U> {
        if (!this.isPresent)
            return Optional.empty;
        else
            return new Optional(mapper(this._value));
    }

    or(supplier: Supplier<T>): Optional<T> {
        if (this.isPresent)
            return this;
        else
            return Optional.of(supplier());
    }

    orElse(other: T): T {
        if (this.isPresent)
            return this._value;
        else
            return other;
    }

    orElseGet(supplier: Supplier<T>): T {
        if (this.isPresent)
            return this._value;
        else
            return supplier();
    }

    orElseThrow(supplier?: Supplier<Error>): T {
        if (this.isPresent)
            return this._value;
        else if (supplier != null)
            throw supplier();
        else
            throw new Error("No value present");
    }
}
