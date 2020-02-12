// Learning Functional Programming with Javascript
import filter from "lodash-es/filter";
import map from "lodash-es/map";
import reduce from "lodash-es/reduce";

interface employee {
    name: string;
    salary: number;
    age: number;
    gender: "M" | "F";
};

const employees = [
  { name: "John",   salary: 60000,  age: 27, gender: "M" },
  { name: "Mary",   salary: 110000, age: 50, gender: "F" },
  { name: "Susan",  salary: 50000,  age: 21, gender: "F" },
  { name: "Greg",   salary: 100000, age: 45, gender: "M" },
  { name: "Jerry",  salary: 90000,  age: 39, gender: "M" },
  { name: "Barb",   salary: 95000,  age: 36, gender: "F" }
];

const males = filter(employees, (employee: employee) => employee.gender === "M");
const maleAges = map(males, (male: employee) => male.age);
const maleAgeTotal = reduce(maleAges, (acc: number, age: number) => acc + age);
const maleAgeAverage = maleAgeTotal / males.length;

console.log("Average male age: " + maleAgeAverage);

const females = filter(employees, (employee: employee) => employee.gender === "F");
const femaleAges = map(females, (female: employee) => female.age);
const femaleAgeTotal = reduce(femaleAges, (acc: number, age: number) => acc + age);
const femaleAgeAverage = femaleAgeTotal / females.length

console.log("Average female age: " + femaleAgeAverage)
