(function () {
    function myFunction(arg1, arg2) {
        // function body
    }

    const myOtherFunction = function(arg1, arg2) {
        // function body
    }

    const add = (x: number, y: number) => x + y;

    // const double = function(number) {
    //     return number * 2;
    // }

    const double = (number: number) => number * 2;


    const sayHello = () => console.log("Hello");

    const getPersonData = () => ({
        name: "John Doe",
        age: 34,
        job: "programmer",
    });

    const myArrowFunction = (arg1, arg2) => ({
        name: "John Doe",
    });
})();