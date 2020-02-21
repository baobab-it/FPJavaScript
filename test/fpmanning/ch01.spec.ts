// Author: Luis Atencio Book: Functional Programming in JavaScript

import _compose from "lodash-es/flowRight";
import _identity from "lodash-es/identity";
import _curry from "lodash-es/curry";
// import _chain from "lodash-es/chain";
import _mapValues from "lodash-es/mapValues";
import _filter from "lodash-es/filter";
import _map from "lodash-es/map";
import _mean from "lodash-es/mean";
import _property from "lodash-es/property";

import Person from "../../src/manning/models/Person";
import { Db } from "../../src/manning/helpers/DbMock";
import db from "../../src/manning/helpers/DbMock";

"use strict";

const identity: (str: string) => string = _identity;

describe("Частина 1", () => {
    it("Приклад 1.1 Функціональний printMessage", () => {
        // Замість вставки в DOM повідомлення виводиться в console. Проте механізм той самийж
        const printToConsole: (str: string) => string = str => {
            //console.log(str);
            return str;
        };
        const toUpperCase: (str: string) => string = str => str.toUpperCase();

        const printMessage: (str: string) => string = _compose(
            printToConsole,
            toUpperCase,
            identity
        );
        expect(printMessage("Hello World")).toEqual("HELLO WORLD");
    });

    it("Приклад 1.2 Розширення printMessage", function() {
        // Замість вставки в DOM повідомлення виводиться в console. Проте механізм той самийж
        const printToConsole: (str: string) => string = str => {
            //console.log(str);
            return str;
        };
        const toUpperCase: (str: string) => string = str => str.toUpperCase();

        const repeat: (times: number) => (str: string) => string = times => {
            return function(str: string = ""): string {
                let tokens = [];
                for (let i = 0; i < times; i++) {
                    tokens.push(str);
                }
                return tokens.join(" ");
            };
        };

        const printMessage: (str: string) => string = _compose(
            printToConsole,
            repeat(3),
            toUpperCase,
            identity
        );

        expect(printMessage("Hello World")).toEqual(
            "HELLO WORLD HELLO WORLD HELLO WORLD"
        );
    });

    it("Приклад 1.3 Імперативна функція showStudent з побічним ефектом", () => {
        function showStudent(ssn: string): string {
            // The book uses a mock storage object
            let student: Person = db.find(ssn);
            if (student !== null) {
                let studentInfo = `<p>${student.getSsn()},${student.getFirstName()},${student.getLastName()}</p>`;
                return studentInfo;
            } else {
                throw new Error("Студентів немає");
            }
        }

        expect(showStudent("444-44-4444")).toEqual(
            "<p>444-44-4444,Alonzo,Church</p>"
        );
    });

    it("Приклад 1.4 Декомпозиція програми showStudent", () => {
        const find: (db: Db) => (id: string) => Person = _curry(
            (db: Db, id: string): Person => {
                // The book uses a mock storage object
                let obj: Person = db.find(id);
                if (obj === null) {
                    throw new Error("Об'єкт не знайдено!");
                }
                return obj;
            }
        );

        const csv: (student: Person) => string = student => {
            return `${student.getSsn()}, ${student.getFirstName()}, ${student.getLastName()}`;
        };

        const append: (
            arg: (str: string) => void
        ) => (info: string) => string = _curry(
            (source: (str: string) => void, info: string): string => {
                source(info);
                return info;
            }
        );

        const showStudent: (str: string) => string = _compose(
            append(console.log),
            csv,
            find(db)
        );

        expect(showStudent("444-44-4444")).toEqual(
            "444-44-4444, Alonzo, Church"
        );
    });

    it("Приклад 1.5 Програмування з ланцюжковою функцією (замість неї використовуємо flow, чи кор. метод chain)", () => {
        // ! НЕ ВИКОРИСТОВУВАТИ chain

        ////////////////////////////////////////////////////////////////////////////////
        // Варіант використання можна побудувати власний ланцюжок функцій, що включає //
        // функції, які використовуються:                                             //
        // https://github.com/lodash/lodash/issues/3298#issuecomment-341685354        //
        ////////////////////////////////////////////////////////////////////////////////
        // import map from "lodash-es/map";
        // import filter from "lodash-es/filter";
        // import mapValues from "lodash-es/mapValues";
        // import toPairs from "lodash-es/toPairs";
        // import orderBy from "lodash-es/orderBy";
        // import groupBy from "lodash-es/groupBy";
        // import sortBy from "lodash-es/sortBy";

        // // прото додаємо функції lodash, які ви хочете підтримувати
        // const chainableFunctions = {
        //     map,
        //     filter,
        //     toPairs,
        //     orderBy,
        //     groupBy,
        //     sortBy,
        // };
        // export const chain = (input) => {
        //     let value = input;
        //     const wrapper = {
        //     ...mapValues(
        //         chainableFunctions,
        //         (f) => (...args) => {
        //         // lodash завжди вставляє ввід як перший аргумент
        //         value = f(value, ...args);
        //         return wrapper;
        //         },
        //     ),
        //     value: () => value,
        //     };
        //     return wrapper;
        // };

        // Ви потім можете використовувати ваш користувацький ланцюжок як оригінальний.
        // Якщо ви використовуєте TypeScript, ви можете перевикористовувати типи з @types/lodash:

        // export const chain = <T>(input: T) => {
        //     let value: any = input;
        //     const wrapper = {
        //     ...mapValues(
        //         chainableFunctions,
        //         (f: any) => (...args: any[]) => {
        //         // lodash always puts input as the first argument
        //         value = f(value, ...args);
        //         return wrapper;
        //         },
        //     ),
        //     value: () => value,
        //     };
        //     return wrapper as _.LoDashExplicitWrapper<T>;
        // };

        // масив з даними студентами
        const enrollments = [
            { enrolled: 3, grade: 90 },
            { enrolled: 1, grade: 100 },
            { enrolled: 1, grade: 87 }
        ];

        const chainableFunctions = {
            _filter,
            _map,
            _mean
        };

        const chain = <T>(input: T) => {
            let value: any = input;
            const wrapper = {
                ..._mapValues(
                    chainableFunctions,
                    (f: any) => (...args: any[]) => {
                        // lodash always puts input as the first argument
                        value = f(value, ...args);
                        return wrapper;
                    }
                ),
                value: () => value
            };
            return wrapper;
        };

        const result: number = chain(enrollments)
            ._filter(student => student.enrolled > 1)
            ._map(_property("grade"))
            ._mean()
            .value();

        // НЕ СПРАЦЮЄ В LODASH-ES
        // const result = _chain(enrollments).filter(obj => obj.enrolled > 1).map(_property("grade")).mean().value();
        expect(result).toEqual(90);
    });
});
