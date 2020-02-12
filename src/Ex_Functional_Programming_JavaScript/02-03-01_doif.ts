// Learning Functional Programming with Javascript
const x = 1;

if (x === 1) {
  sayXis1();
}

//if (x === "Bananas") {
//  sayXisBananas();
//}

if (x < 10 && x > 0) {
  sayXisBetween0And10();
}

function sayXis1() { console.log("x is equal to 1") }

function sayXisBananas() { console.log("x is equal to 'Bananas'") }

function sayXisBetween0And10() { console.log("x is between 0 and 10") }

/////////////////////////////////////////////////////////////////////////////

function doIf(condition: boolean, func: () => any) {
  if(condition) {
    func();
  }
}

const x2 = 1;

doIf(x2 === 1, () => console.log("x is equal to 1"));
//doIf(x2 === "Bananas", () => console.log("x is equal to 'Bananas'"));
doIf(x2 < 10 && x2 > 0, () => console.log("x is between 0 and 10"));
