/**
 * Address object
 * Domain model object for LMS use cases covered in the book
 * Author: Luis Atencio
 */
export default class Address {
    /**
     * Construct a new address object
     * @param country Country code (required)
     * @param state State code
     * @param city City name
     * @param zip Zip code value object instance
     * @param street Street name
     *
     */
    public country: string;
    public state: string;
    public city: string;
    public zip: string;
    public street: string;

    constructor(
        country: string,
        state: string = null,
        city: string = null,
        zip: string = null,
        street: string = null
    ) {
        this.country = country;
        this.state = state;
        this.city = city;
        this.zip = zip;
        this.street = street;
    }

    public getStreet() {
        return this.street;
    }

    public getCity() {
        return this.city;
    }

    public getState() {
        return this.state;
    }

    public getZip() {
        return this.zip;
    }

    public getCountry() {
        return this.country;
    }

    public setCountry(country: string): Address {
        this.country = country;
        return this;
    }
}
