// Author: Luis Atencio Book: Functional Programming in JavaScript

import Student from "../../src/manning/models/Student";
import Address from "../../src/manning/models/Address";
import ValueObjects from "../../src/manning/models/value_objects";
import deepFreeze from "../../src/manning/helpers/Objects";

"use strict";

describe("Частина 2", () => {
    const zipCode = ValueObjects.zipCode;
    const coordinate = ValueObjects.coordinate;

    it("Робота з незмінними значення об'єктів", () => {
        let princetonZip = zipCode("08544", "3345");
        expect(princetonZip.toString()).toEqual("08544-3345");

        let greenwich = coordinate(51.4778, 0.0015);
        expect(greenwich.toString()).toEqual("(51.4778,0.0015)");

        let newCoord = greenwich.translate(10, 10).toString();
        expect(newCoord.toString()).toEqual("(61.4778,10.0015)");
    });

    it("Глубока заморозка об'єкту", () => {
        let address: Address = new Address("US");
        let student: Student = new Student(
            "444-44-4444",
            "Joe",
            "Smith",
            "Harvard",
            1960,
            address
        );
        let frozenStudent: Student = deepFreeze(student);

        expect(() => {
            frozenStudent.setFirstName("Emmet"); // Виняток: Не призначається тільки для читання тільки властивості 'firstname' об'єкту '#<Student>'
        }).toThrowError(TypeError);

        expect(() => {
            frozenStudent.getAddress().setCountry("Canada"); // Виняток: Не призначається тільки  для читання  тільки властивості 'country' об'єкту '#<Address>'
        }).toThrowError(TypeError);
    });

    it("Протилежний результат", () => {
        function negate(func: (args?: any | any[]) => any) {
            return function() {
                return !func.apply(null, arguments);
            };
        }

        function isNull(val: any): boolean {
            return val === null;
        }

        let isNotNull: (args?: any) => boolean = negate(isNull);

        expect(isNotNull(null)).toBe(false); // => false
        expect(isNotNull({})).toBe(true); // => true
    });

    // it("Незмінні сеттери", () => {
    //     // thanks to feedback from ChernikovP
    //     class Address {
    //         constructor(street) {
    //             this.street = street;
    //         }
    //     }

    //     class Person {
    //         constructor(name, address) {
    //             this.name = name;
    //             this.address = address;
    //         }
    //     }

    //     const person = new Person("John Doe", new Address("100 Main Street"));

    //     const streetLens = R.lens(
    //         R.path(["address", "street"]),
    //         R.assocPath(["address", "street"])
    //     );

    //     const newPerson = R.set(streetLens, "200 Broadway Street", person);

    //     expect(person instanceof Person).toBe(true); // true
    //     expect(newPerson instanceof Person).toBe(false); // false
    //     expect(newPerson instanceof Object).toBe(true); // true
    // });

    // it("Лінзи", () => {
    //     let z = zipCode("08544", "1234");
    //     let address = new Address("US", "NJ", "Princeton", z, "Alexander St.");
    //     let student = new Student(
    //         "444-44-4444",
    //         "Joe",
    //         "Smith",
    //         "Princeton University",
    //         1960,
    //         address
    //     );

    //     let zipPath = ["address", "zip"];
    //     var zipLens = R.lensPath(zipPath);
    //     expect(R.view(zipLens, student)).toEqual(z);

    //     let beverlyHills = zipCode("90210", "5678");
    //     let newStudent = R.set(zipLens, beverlyHills, student);
    //     expect(R.view(zipLens, newStudent).code()).toEqual(beverlyHills.code());
    //     expect(R.view(zipLens, student)).toEqual(z);
    //     expect(newStudent).not.toEqual(student);
    // });
});
