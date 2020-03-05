import { Option, fromNullable, none, some } from "fp-ts/lib/Option";
import { Either, tryCatch } from "fp-ts/lib/Either";
import { IO } from "fp-ts/lib/IO";

/**
 * Іноді ви змушені взаємодіяти з кодом, не написаним у функціональному стилі, давайте подивимося, як з цим боротися
 */

/**
 * Обгортка
 * Випадок використання: API, яке може вийти з ладу чи повернути особливе значення
 * Приклад: Array.prototype.findIndex
 * Рішення: Option
 */

function findIndex<A>(
    as: Array<A>,
    predicate: (a: A) => boolean
): Option<number> {
    const index = as.findIndex(predicate);
    return index === -1 ? none : some(index);
}

/**
 * undefined і null
 * Випадок використання: API, яке може вийти з ладу чи повернути undefined ( чи null) значення
 * Приклад: Array.prototype.find
 * Рішення: Option, fromNullable
 */

function find<A>(as: Array<A>, predicate: (a: A) => boolean): Option<A> {
    return fromNullable(as.find(predicate));
}

/**
 * Винятки
 * Випадок використання: API може викинути виключення
 * Приклад: JSON.parse
 * Рішення: Either, tryCatch
 */

function parse(s: string): Either<Error, unknown> {
    return tryCatch(
        () => JSON.parse(s),
        reason => new Error(String(reason))
    );
}

/**
 * Випадкові значення
 * Випадок використання: API, яке повертає непередбачуванні значення
 * Приклад: Math.random
 * Рішення: IO
 */

const random: IO<number> = () => Math.random();

/**
 * Синхронний побічний ефект
 * Випадок використання: API, яке читає чи записує до глобального стану
 * Приклад: localStorage.getItem
 * Рішення: IO
 */

function getItem(key: string): IO<Option<string>> {
    return () => fromNullable(localStorage.getItem(key));
}

/**
 * Випадок використання: API, яке читає чи записує до глобального стану і може викинути виняток
 * Приклад: readFileSync
 * Рішення: IOEither, tryCatch
 */

// import * as fs from "fs";
// import { IOEither, tryCatch } from "fp-ts/lib/IOEither";

// function readFileSync(path: string): IOEither<Error, string> {
//     return tryCatch(() => fs.readFileSync(path, "utf8"), reason => new Error(String(reason)));
// }

/**
 * Асинхронний побічний ефект
 * Випадок використання: API, яке виконує асинхронні розрахунки
 * Приклад: читання з загального вводу
 * Рішення: Task
 */

import { createInterface } from "readline";
import { Task } from "fp-ts/lib/Task";

const read: Task<string> = () =>
    new Promise<string>(resolve => {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("", answer => {
            rl.close();
            resolve(answer);
        });
    });

/**
 * Асинхронний побічний ефект
 * Випадок використання: API, яке виконує асинхронні розрахунки і може бути відихлене
 * Приклад: fetch
 * Рішення: TaskEither, tryCatch
 */

import { TaskEither, tryCatch as TEtryCatch } from "fp-ts/lib/TaskEither";

function get(url: string): TaskEither<Error, string> {
    return TEtryCatch(
        () => fetch(url).then(res => res.text()),
        reason => new Error(String(reason))
    );
}
