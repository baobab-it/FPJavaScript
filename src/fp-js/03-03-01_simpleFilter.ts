// Learning Functional Programming with Javascript
import _filter from "lodash-es/filter";

const numbers = [1, 2, 3, 4, 5];

// Imperative
const evensFromNumbersImp: number[] = [];

for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  if (element % 2 === 0) {
    evensFromNumbersImp.push(element);
  }
}

console.log(evensFromNumbersImp);

// FP declarative
const evensFromNumbersFP: number[] = _filter(numbers, (element: number) => element % 2 === 0);

console.log(evensFromNumbersFP);
