(function() {
    const double = (x: number) => x * 2;
    const subtractOne = (x: number) => x - 1;
    const triple = (x: number) => x * 3;
    const add5 = (x: number) => x + 5;

    const myNumber = 42;

    const doubled = double(myNumber);
    const minusOne = subtractOne(doubled);
    // ...

    const functionsArray: ((x: number) => number)[] = [
        double,
        subtractOne,
        triple,
        add5,
        Math.sqrt,
    ];

    var number = 42;

    functionsArray.forEach(func => number = func(number));

    console.log(number);
})();