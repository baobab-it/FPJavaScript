const createMultiplier = (y: number) => (x: number) => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

double(3);
