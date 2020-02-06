/**
 * Derived type Student from Person
 * Author: Luis Atencio
 */
import Person from "./Person";
import Address from "./Address";

export default class Student extends Person {
    private school: string;

    constructor(
        ssn: string,
        firstname: string,
        lastname: string,
        school: string,
        birthYear: number = null,
        address: Address = null
    ) {
        super(ssn, firstname, lastname, birthYear, address);
        this.school = school;
    }

    public getSchool() {
        return this.school;
    }
}
