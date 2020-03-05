// Learning Functional Programming with Javascript
(function () {
    const callWith2Arguments = (arg1: number, arg2: number, func: (arg1: number, arg2: number) => number) => func(arg1, arg2);

    const add = (x: number, y: number) => x + y;
    const subtract = (x: number, y: number) => x - y;

    callWith2Arguments(1, 2, add);
    callWith2Arguments(9, 4, subtract);
    callWith2Arguments(2, 4, (x, y) => x * x + y * y);
})();