// Learning Functional Programming with Javascript
(function () {
    function ifElse(condition: boolean, func1: () => any, func2: any): void {
        if (condition) {
            func1();
        } else {
            func2();
        }
    }

    const x = 1;

    ifElse(x === 1, () => console.log("x is 1"), () => console.log("x is not 1"));
})();