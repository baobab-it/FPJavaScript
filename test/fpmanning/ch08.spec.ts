// Author: Luis Atencio Book: Functional Programming in JavaScript
import Student from "../../src/manning/models/Student";
import Address from "../../src/manning/models/Address";
import IO from "../../src/manning/monads/IO";

"use strict";

describe("Частина 8", () => {
    // Допоміжна функція заповнювач для імітації викликів AJAX
    const getJSON = function(fakeUrl: string): Promise<Student[] | number[]> {
        console.log(`Вибірка даних з URL: "${fakeUrl}`);
        return new Promise((resolve, reject) => {
            // Заповнюємо дані студентів
            if (fakeUrl.indexOf("students") >= 0) {
                const s1 = new Student(
                    "111-11-1111",
                    "Haskell",
                    "Curry",
                    "Princeton",
                    1900,
                    new Address("US")
                );
                const s2 = new Student(
                    "222-22-2222",
                    "Barkley",
                    "Rosser",
                    "Princeton",
                    1907,
                    new Address("Greece")
                );
                const s3 = new Student(
                    "333-33-3333",
                    "John",
                    "von Neumann",
                    "Princeton",
                    1903,
                    new Address("Hungary")
                );
                const s4 = new Student(
                    "444-44-4444",
                    "Alonzo",
                    "Church",
                    "Princeton",
                    1903,
                    new Address("US")
                );

                resolve([s2, s3, s4, s1]);
            } else {
                // Заповнюємо оцінки для кожного студента
                resolve([80, 70, 20, 40, 99, 100]);
            }
        });
    };

    it("Генератор 1", () => {
        function* addGenerator() {
            let i = 0;
            while (true) {
                i += yield i;
            }
        }
        let adder = addGenerator();
        expect(adder.next().value).toEqual(0);
        expect(adder.next(5).value).toEqual(5);
    });

    it("Генератор 2", () => {
        function* range(start: number, finish: number) {
            for (let i = start; i < finish; i++) {
                yield i;
            }
        }

        let r = range(0, Number.POSITIVE_INFINITY);
        expect(r.next().value).toEqual(0);
        expect(r.next().value).toEqual(1);
        expect(r.next().value).toEqual(2);
    });

    it("Генератор 3", () => {
        function range(start: number, end: number) {
            return {
                [Symbol.iterator]() {
                    return this;
                },

                next() {
                    if (start < end) {
                        return { value: start++, done: false };
                    }
                    return { done: true, value: end };
                }
            };
        }

        let res = [];
        for (let num of range(0, 5)) {
            console.log(num);
            res.push(num);
        }
        expect(res).toEqual([0, 1, 2, 3, 4]);
    });

    it("Вибірка даних студента з асинхронного виклику", () => {
        const fork = (join, func1, func2) => (val: number) =>
            join(func1(val), func2(val));

        const csv: (arg: any[]) => string = arr => arr.join(",");

        getJSON("/students")
            // //.then(R.tap(() => console.log("Приховуємо спіннер"))) // <- емулуюємо спіннер, що приховується на сайті
            // .then(filter(s => s.address.country === "US"))
            //     .then(R.sortBy(R.prop("_ssn")))
            //     .then(
            //         R.map(student => {
            //             return getJSON("/grades?ssn=" + student.ssn)
            //                 .then(
            //                     R.compose(
            //                         Math.ceil,
            //                         fork(R.divide, R.sum, R.length)
            //                     )
            //                 )
            //                 .then(grade =>
            //                     IO.of(R.merge({ _grade: grade }, student))
            //                         //.map(console.log)
            //                         .map(
            //                             R.props([
            //                                 "_ssn",
            //                                 "_firstname",
            //                                 "_lastname",
            //                                 "_grade"
            //                             ])
            //                         )
            //                         .map(csv)
            //                         .map(console.log)
            //                         .run()
            //                 ); // <- Другуємо результат до консолі
            //         })
            //     )
            .catch(error => {
                console.log("Виникла помилка: " + error.message);
            });
        expect(); // коли запускаємо цей код результат виводимо через монаду IO, тому нічого не потрібно очікувати
    });
});
