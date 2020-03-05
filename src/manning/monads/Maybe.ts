/**
 * Custom Maybe Monad used in FP in JS book written in ES6
 * Author: Luis Atencio
 */

export class Maybe<T> {
    static just<T>(a: T) {
        return new Just<T>(a);
    }
    static nothing<T>(): Nothing<T> {
        return new Nothing();
    }
    static fromNullable<T>(a: T): Just<T> | Nothing<T> {
        return a !== null ? Maybe.just(a) : Maybe.nothing();
    }
    static of<T>(a: T) {
        return Maybe.just(a);
    }
    get isNothing() {
        return false;
    }
    get isJust() {
        return false;
    }
}

// Derived class Just -> Presence of a value
export class Just<T> extends Maybe<T> {
    protected _value: T;

    constructor(value: T) {
        super();
        this._value = value;
    }

    get value(): T {
        return this._value;
    }

    map(f: (arg: T) => any) {
        return Maybe.fromNullable(f(this._value));
    }

    chain(f: (arg: T) => any) {
        return f(this._value);
    }

    getOrElse() {
        return this._value;
    }

    filter(f: (arg: T) => any) {
        return Maybe.fromNullable(f(this._value) ? this._value : null);
    }

    get isJust() {
        return true;
    }

    toString() {
        return `Maybe.Just(${this._value})`;
    }
}

// Derived class Empty -> Abscense of a value
export class Nothing<T> extends Maybe<T> {
    map(f: (arg: T) => any) {
        return this;
    }

    chain(f: (arg: T) => any) {
        return this;
    }

    get value() {
        throw new TypeError("Can't extract the value of a Nothing.");
    }

    getOrElse(other) {
        return other;
    }

    filter() {
        return this.value;
    }

    get isNothing() {
        return true;
    }

    toString() {
        return "Maybe.Nothing";
    }
}
