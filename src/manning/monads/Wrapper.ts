export class Wrapper<T> {
    constructor(private value: T) {}

    static of<T>(a: T) {
        return new Wrapper(a);
    }

    map<U>(f: (arg: T) => U) {
        return Wrapper.of(f(this.value));
    }

    join(): Wrapper<T> {
        if (!(this.value instanceof Wrapper)) {
            return this;
        }
        return this.value.join();
    }

    toString() {
        return `Wrapper (${this.value})`;
    }
}
