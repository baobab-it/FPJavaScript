const Person = ({ name, age, job }) => {
    var _name: string = name;
    var _age: number = age;
    var _job: string = job;

    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setJob: (newJob: string) => _job = newJob,
    };
}

const me = Person({ name: "Shaun", age: 25, job: "developer" });
console.log(me.getJob());
me.setJob("senior developer");
console.log(me.getJob());