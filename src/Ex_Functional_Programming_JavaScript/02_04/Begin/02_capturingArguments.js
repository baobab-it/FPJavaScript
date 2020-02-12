// Learning Functional Programming with Javascript
function createCounter() {
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
