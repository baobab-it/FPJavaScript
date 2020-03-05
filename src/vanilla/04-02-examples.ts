(function(){
    const add = (x: number, y: number, z: number) => x + y + z;

    const addPartial = (x:number) =>
        (y: number) => 
            (z: number) => add(x, y, z);

    const sum = addPartial(5)(6)(7);

    console.log(sum);
})();