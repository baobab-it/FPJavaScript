const divide = (x: number, y: number) => x / y;

const secondArgumentIsntZero: (arg: (x: number, y: number)=> number) => (...args: number[]) => number = 
            func => (x: number, y: number) => {
        if (y === 0) {
            console.log("Error: dividing by zero");
            return null;
        }
        return func(x, y);
    }

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(5, 3));

