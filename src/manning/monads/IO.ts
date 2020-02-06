/**
 * IO Monad class
 * Author: Luis Atencio
 */
import isFunction from "lodash-es/isFunction";

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

    map(fn: (arg: any) => any) {
        return new IO(() => fn(this.effect()));
    }

    chain(fn: (arg: T) => any) {
        return fn(this.effect());
    }

    run() {
        return this.effect();
    }
}
