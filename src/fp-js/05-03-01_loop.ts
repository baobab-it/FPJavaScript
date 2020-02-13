// Learning Functional Programming with Javascript
function loop(i: number) {
  console.log("i is " + i);
  if (i < 10) {
    loop(i + 1);
  }
}

loop(0);
