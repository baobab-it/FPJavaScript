// Learning Functional Programming with Javascript
// Chapter 03, Video 04, Exercise 01 **SOLUTION**
var _ = require("lodash");

const numbers = [ 3, 5, 7, 9, 11, 13 ];

const arrayContainsEven = _.some(numbers, function(element) {
  return element % 2 === 0;
});

const arrayIsAllEven = _.every(numbers, function(element) {
  return element % 2 === 0;
});

console.log("Array contains even?: " + arrayContainsEven);
console.log("Array is all even?: " + arrayIsAllEven);
