// Learning Functional Programming with Javascript
import reduce from "lodash-es/reduce";

interface goods {
    name: string;
    price: number;
}
const shoppingList = [
  { name: "Eggs",    price: 4.99 },
  { name: "Milk",    price: 3.99 },
  { name: "Bananas", price: 2.79 },
  { name: "Beer",    price: 6.99 }
]

const totalCost = reduce(shoppingList, (acc: number, item: goods) => acc + item.price, 0);

console.log(totalCost);
