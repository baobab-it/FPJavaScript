/**
 * Person object
 * Domain model object for LMS use cases covered in the book
 * Author: Luis Atencio
 */
import Address from "Address";

export default class Person {
    private ssn: string;
    private firstname: string;
    private lastname: string;
    private birthYear: number;
    private address: Address;

    constructor(
        ssn: string,
        firstname: string,
        lastname: string,
        birthYear: number = null,
        address: Address = null
    ) {
        this.ssn = ssn;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthYear = birthYear;
        this.address = address;
    }

    public getSsn() {
        return this.ssn;
    }

    public getFirstName() {
        return this.firstname;
    }

    public setFirstName(firstname: string): Person {
        this.firstname = firstname;
        return this;
    }

    public getLastName() {
        return this.lastname;
    }

    public getBirthYear() {
        return this.birthYear;
    }

    public getAddress() {
        return this.address;
    }

    public getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
