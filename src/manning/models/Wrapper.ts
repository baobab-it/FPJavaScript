class Wrapper<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }
    // map :: (A -> B) -> A -> B
    map<U>(f: (arg: T, ...args: any[]) => U): U {
        return f(this.value);
    }

    // fmap :: (A -> B) -> Wrapper[A] -> Wrapper[B]
    fmap<U>(f: <U>(arg: T, ...args: any[]) => U): Wrapper<U> {
        return new Wrapper<U>(f(this.value));
    }

    toString() {
        return `Wrapper (${this.value})`;
    }
}

// wrap :: A -> Wrapper(A)
const wrap: <K>(val: K) => Wrapper<K> = val => new Wrapper(val);

export default { wrap, Wrapper };
