(function() {
    interface Employee {
        name: string;
        salary: number;
    }

    const employees: Employee[] = [
        {
            name: "Jane Doe",
            salary: 90000
        },
        {
            name: "Donald Jones",
            salary: 65000
        },
        {
            name: "Donna Appleseed",
            salary: 1500000
        },
        {
            name: "John Smith",
            salary: 250000
        }
    ];

    const makesMoreThanOneMillion = (employee: Employee) =>
        employee.salary > 1000000;

    const result = employees.some(makesMoreThanOneMillion);

    const formValues = ["Shaun", "Wassell", "Maine", "developer"];

    const isNotEmpty = (string: string) => !!string;

    const allFieldsFilled = formValues.every(isNotEmpty);

    console.log(allFieldsFilled);
})();
