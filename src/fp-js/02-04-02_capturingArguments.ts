// Learning Functional Programming with Javascript
// OOP
function createCounterImp() {
  var count = 0;

  return {
    increment: function() {
      count = count + 1;
    },

    currentValue: function() {
      return count;
    }
  }
}
// FP version
function createCounterFP(count: number) {
  return {
    increment: function() {
      count = count + 1;
    },
    currentValue: function() {
      return count;
    }
  }
}

let counterStartingAt5 = createCounterFP(5);

let counterStartingAtMinus2 = createCounterFP(-2);
