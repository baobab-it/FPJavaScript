// Learning Functional Programming with Javascript
const numbers = [1, 2, 3, 4, 5];
const numbersCubed = [];

for(let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  numbersCubed.push(element * element * element);
}
