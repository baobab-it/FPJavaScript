/**
 * ES6 versions of Either monad used in FP in JS
 * Author: Luis Atencio
 */

export default class Either {
    protected _value: any;

    constructor(value: any) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    static left(a: any) {
        return new Left(a);
    }

    static right(a: any) {
        return new Right(a);
    }

    static fromNullable(val: any) {
        return val !== null && val !== undefined
            ? Either.right(val)
            : Either.left(val);
    }

    static of(a: any) {
        return Either.right(a);
    }
}

export class Left extends Either {
    map(_) {
        return this; // noop
    }

    get value() {
        throw new TypeError("Can't extract the value of a Left(a).");
    }

    getOrElse(other: any) {
        return other;
    }

    orElse(f: (arg: any) => any) {
        return f(this._value);
    }

    chain(f: any) {
        return this;
    }

    getOrElseThrow(a: string) {
        throw new Error(a);
    }

    filter(f: any) {
        return this;
    }

    get isRight() {
        return false;
    }

    get isLeft() {
        return true;
    }

    toString() {
        return `Either.Left(${this._value})`;
    }
}

export class Right extends Either {
    map(f: (arg: any) => any) {
        return Either.of(f(this._value));
    }

    getOrElse(other: any) {
        return this._value;
    }

    orElse() {
        return this;
    }

    chain(f: (arg: any) => any) {
        return f(this._value);
    }

    getOrElseThrow(_: any) {
        return this._value;
    }

    filter(f: (arg: any) => any) {
        return Either.fromNullable(f(this._value) ? this._value : null);
    }

    get isRight() {
        return true;
    }

    get isLeft() {
        return false;
    }

    toString() {
        return `Either.Right(${this._value})`;
    }
}
