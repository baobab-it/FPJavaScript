const countUp = (x: number, max: number) => {
    if (x > max) return;
    console.log(x);
    countUp(x + 1, max);
};

countUp(0, 10);