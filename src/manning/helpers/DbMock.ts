// Author: Luis Atencio
import Person from "../models/Person";

type CollectinPerson = {
    [key: string]: Person;
};

export type Db = {
    find(ssn: string): Person;
};

var students: CollectinPerson = {
    "444-44-4444": new Person("444-44-4444", "Alonzo", "Church"),
    "444444444": new Person("444-44-4444", "Alonzo", "Church")
};

// Helper objects
export default {
    find: (ssn: string): Person => students[ssn]
};
