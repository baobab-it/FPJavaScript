// Learning Functional Programming with Javascript
// Imperative
function printMessageNTimesImp(n: number, message: string) {
  if (n != null && typeof n === "number") {
    if (message != null && typeof message === "string") {
      for (let i = 0; i < n; i++) {
          console.log(message);
        }
    }
  }
}

function getNthLetterImp(n: number, string: string): string | void {
  if (n != null && typeof n === "number") {
    if (string != null && typeof string === "string") {
      return string.charAt(n);
    }
  }
}

function getSubstringOfLengthImp(n: number, string: string): string | void {
  if (n != null && typeof n === "number") {
    if (string != null && typeof string === "string") {
      return string.substring(0, n);
    }
  }
}

printMessageNTimesImp(4, "Banana"); // prints "Banana Banana Banana Banana"
getNthLetterImp(2, "Javascript"); // "v"
getSubstringOfLengthImp(5, "Hello and welcome"); // "Hello"

// FP safe version
function doIfSafe(n: number, message: string, func: (arg1: number, arg2: string) => string | void): string | void {
  if (n != null && typeof n === "number") {
    if (message != null && typeof message === "string") {
      return func(n, message);
    }
  }
}

function printMessageNTimes(n: number, message: string): void {
    for (let i = 0; i < n; i++) {
        console.log(message);
    }
}

function getNthLetter(n: number, string: string) {
  return string.charAt(n);
}

function getSubstringOfLength(n: number, string: string) {
  return string.substring(0, n);
}

doIfSafe(4, "Banana", printMessageNTimes); // prints "Banana Banana Banana Banana"
doIfSafe(2, "Javascript", getNthLetter); // "v"
doIfSafe(5, "Hello and welcome", getSubstringOfLength); // "Hello

// FP improve safe version
function createSafeVersion(func: (arg1: number, arg2: string) => string | void) {
  return function(n: number, message: string) {
    if (n != null && typeof n === "number") {
      if (message != null && typeof message === "string") {
        return func(n, message);
      }
    }
  }
}

const printMessageNTimesSafe = createSafeVersion(printMessageNTimes);
const getNthLetterSafe = createSafeVersion(getNthLetter);
const getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength);

printMessageNTimesSafe(4, "Banana"); // prints "Banana Banana Banana Banana"
getNthLetterSafe(2, "Javascript"); // "v"
getSubstringOfLengthSafe(5, "Hello and welcome"); // "Hello"
//getNthLetterSafe("two", "Javascript");
