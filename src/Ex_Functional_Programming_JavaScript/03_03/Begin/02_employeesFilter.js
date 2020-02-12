// Learning Functional Programming with Javascript
// Chapter 03, Video 03, Exercise 02

const employees = [
  { name: "John",  salary: 50000  },
  { name: "Susan", salary: 60000  },
  { name: "Greg",  salary: 100000 },
  { name: "Mary",  salary: 120000 }
];

const dueForARaise = [ ];

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i]
  if (employee.salary < 70000) {
    dueForARaise.push(employee);
  }
}
