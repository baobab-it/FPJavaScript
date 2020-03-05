// Learning Functional Programming with Javascript
// OOP
const myCounter = {
  count: 0,
  increment: function() {
    this.count += 1;
  },
  currentValue: function(): number {
    return this.count;
  }
}

console.log(myCounter.currentValue());

myCounter.increment();
myCounter.increment();

console.log(myCounter.currentValue());

myCounter.count = 999; // uh oh!

console.log(myCounter.currentValue());

// FP version

function createCounter() {
  var count = 0;
  return {
    increment: function() {
      count += 1;
    },
    currentValue: function() {
      return count;
    }
  }
}

const myCounterFP = createCounter();

console.log(myCounter.currentValue());

myCounter.increment();
myCounter.increment();

console.log(myCounter.currentValue());

console.log(myCounter.currentValue());