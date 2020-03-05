// Learning Functional Programming with Javascript
import _map from "lodash-es/map";

const numbers = [1, 2, 3, 4, 5];

// Imperative
const numbersCubedImp:number[] = [];

for(let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  numbersCubedImp.push(element * element * element);
}
console.log(numbersCubedImp);

// FP declarative
const numbersCubedFP: number[] = _map(numbers, (element: number) => element * element * element);

console.log(numbersCubedFP);
