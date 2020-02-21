(function() {
    const add = (x: number, y: number) => x + y;
    const subtract = (x: number, y: number) => x - y;

    const combine2and3: (arg: (x: number, y: number) => number) => number = func => func(2, 3);

    combine2and3(add); // -> 2 + 3
    combine2and3((x: number, y: number) => x + y);
    combine2and3(subtract); // -> 2 - 3

    combine2and3(Math.max) // -> 3
})();