/**
 * IO Monad class
 * Author: Luis Atencio
 */

const isFunction = (obj: any) =>
    !!(obj && obj.constructor && obj.call && obj.apply);

export default class IO<T> {
    private effect: () => T;

    constructor(effect: () => T) {
        if (!isFunction(effect)) {
            throw "Використання IO: вимагається зазначення функції";
        }
        this.effect = effect;
    }

    static of<T>(a: T) {
        return new IO(() => a);
    }

    static from<T>(fn: () => T) {
        return new IO<T>(fn);
    }

    map<U>(fn: (arg: T) => U) {
        return new IO(() => fn(this.effect()));
    }

    chain<U>(fn: (arg: T) => U) {
        return fn(this.effect());
    }

    run() {
        return this.effect();
    }
}
