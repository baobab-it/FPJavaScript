// Learning Functional Programming with Javascript
const numbers = [ 2, 4, 6, 8, 10, 12 ];

let arrayContainsEven = false;

for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i];
  if (element % 2 === 0) {
    arrayContainsEven = true;
  }
}

let arrayIsAllEven = true;

for (let i = 0; i < numbers.length; i++) {
  let element = numbers[i]
  if (!(element % 2 === 0)) {
    arrayIsAllEven = false;
  }
}
