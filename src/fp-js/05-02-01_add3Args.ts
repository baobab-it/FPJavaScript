// FP function with two arguments
(function () {
    const add = (x: number, y: number) => x + y;

    function partiallyApply(func: (...args: number[]) => number, x: number) {
        return function(y: number) {
            return func(x, y);
        }
    }

    const addTo5 = partiallyApply(add, 5);

    console.log(addTo5(2));

    // FP function with three arguments
    const add3 = (x: number, y: number, z: number) => x + y + z;

    function partiallyApply2(func: (...args: number[]) => number, x: number) {
        return function(y: number, z: number) {
            return func(x, y, z);
        }
    }

    var add5 = partiallyApply2(add3, 5);

    console.log(add5(2, 3));
    console.log(add3(5, 2, 3));

    // FP function with three arguments improved

    function partiallyApply3(func: (...args: number[]) => number, x: number, y: number) {
        return function(z: number) {
            return func(x, y, z);
        }
    }

    var add5and2 = partiallyApply3(add, 5, 2);

    console.log(add5and2(3));
    console.log(add3(5, 2, 3));
})();