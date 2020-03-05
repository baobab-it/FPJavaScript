import { Eq, getStructEq } from "fp-ts/lib/Eq";
import { getEq } from "fp-ts/lib/Array";
import { contramap } from "fp-ts/lib/Eq";

/**
 * В FP-TS типи класів кодуються як інтерфейси TypeScript
 *
 * Клас типу `Eq` містить типи для порівняння рівності і зазначається наступним чином:


 interface Eq<A> {
   // повертає `true`, якщо `x` ріуний `y`
   readonly equals: (x: A, y: A) => boolean
 }

 * Декларацію можна прочитати як тип `A` належить класу типу `Eq`, якщо його функція іменується `equal`
 */

// А як щодо екземплярів?

// Програміст може зробити будь-який тип `A` членом даного класу типу` C`, використовуючи декларацію екземпляра, яка визначає реалізацію всіх членів `C` для конкретного типу` A`.

// У fp-ts екземпляри кодуються як статичні словники.

// Як приклад, ось екземпляр `Eq` для типу `number`

const eqNumber: Eq<number> = {
    equals: (x, y) => x === y
};

// Програмість потім може визначити функцію `elem` (яка визначає, чи є елемент у масиві) наступним чином

function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
    return (a, as) => as.some(item => E.equals(item, a));
}

elem(eqNumber)(1, [1, 2, 3]); // true
elem(eqNumber)(4, [1, 2, 3]); // false

// Давайте напишемо якийсь екземпляр `Eq` з більш складним типом

type Point = {
    x: number;
    y: number;
};

const eqPoint: Eq<Point> = {
    equals: (p1, p2) => p1.x === p2.x && p1.y === p2.y
};

// Ми можемо навіть спробувати оптимізувати рівність перевіркою першого посилання на рівність

const eqPoint2: Eq<Point> = {
    equals: (p1, p2) => p1 === p2 || (p1.x === p2.x && p1.y === p2.y)
};

// Це, головним чином, котельня. Хороша новина полягає в тому, що ми можемо створити екземпляр `Eq` для структури типу `Point`, якщо ми можемо надати екземпляр `Eq` для кожного поля.

// Модуль `fp-ts/lib/Eq` експортує комбінатор `getStructEq`:

const eqPoint3: Eq<Point> = getStructEq({
    x: eqNumber,
    y: eqNumber
});

// Ми можемо продовжити і подавати `getStructEq` із тільки що визначеним екземпляром

type Vector = {
    from: Point;
    to: Point;
};

const eqVector: Eq<Vector> = getStructEq({
    from: eqPoint,
    to: eqPoint
});

// `getStructEq` це не тільки комбінатор, цей комбінатор, що дозволяє одержати екзмпляр `Eq` для масивів

const eqArrayOfPoints: Eq<Array<Point>> = getEq(eqPoint);

// Нарешті, ще одним корисний способіб побудови екземпляра `Eq` є комбінатор `contramap`: якщо дано екземпляр `Eq` для` A` та функцію від `B` до `A`, ми можемо отримати екземпляр `Eq` для `B`

type User = {
    userId: number;
    name: string;
};

// два користувачі рівні, якщо їх поля `userId` рівні
const eqUser = contramap((user: User) => user.userId)(eqNumber);

eqUser.equals(
    { userId: 1, name: "Giulio" },
    { userId: 1, name: "Giulio Canti" }
); // true
eqUser.equals({ userId: 1, name: "Giulio" }, { userId: 2, name: "Giulio" }); // false
