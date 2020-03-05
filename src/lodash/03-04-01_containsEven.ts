// Learning Functional Programming with Javascript
import _some from "lodash-es/some";
import _every from "lodash-es/every";

const numbersEven = [2, 4, 6, 8, 10, 12];

let arrayContainsEven = false;

for (let i = 0; i < numbersEven.length; i++) {
  let element = numbersEven[i];
  if (element % 2 === 0) {
    arrayContainsEven = true;
  }
}

let arrayIsAllEven = true;

for (let i = 0; i < numbersEven.length; i++) {
  let element = numbersEven[i]
  if (!(element % 2 === 0)) {
    arrayIsAllEven = false;
  }
}

console.log("Array contains even?: " + arrayContainsEven);
console.log("Array is all even?: " + arrayIsAllEven);

// FP declarative
const numbersOdd = [3, 5, 7, 9, 11, 13];

const arrayContainsEvenFP = _some(numbersOdd, (element: number) => element % 2 === 0);
const arrayIsAllEvenFP = _every(numbersOdd, (element: number) => element % 2 === 0);

console.log("Array contains even?: " + arrayContainsEvenFP);
console.log("Array is all even?: " + arrayIsAllEvenFP);
