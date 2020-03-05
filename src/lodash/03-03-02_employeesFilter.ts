// Learning Functional Programming with Javascript
import _filter from "lodash-es/filter";

interface employee {
    name: string;
    salary: number;
}

const employees: employee[] = [
  { name: "John",  salary: 50000  },
  { name: "Susan", salary: 60000  },
  { name: "Greg",  salary: 100000 },
  { name: "Mary",  salary: 120000 }
];

// Imperative
const dueForARaiseImp: employee[] = [];

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i];
  if (employee.salary < 70000) {
    dueForARaiseImp.push(employee);
  }
}

// FP declarative
const dueForARaiseFP: employee[] = _filter(employees, (employee: employee) => employee.salary < 70000);

console.log(dueForARaiseFP);
