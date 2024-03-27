class Person {
    constructor(name,gender){
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResident(person){
        this.residents.push(person);
    }
}

class House {
    apartments = [];
    maxApartmentNumber;

    constructor(maxApartmentNumber){
        this.maxApartmentNumber = maxApartmentNumber;
    }

    addApartment(apartment){
        if(this.apartments.length < this.maxApartmentNumber){
            this.apartments.push(apartment);
        }else {
            console.log('The maximum number of apartments in the building has already been reached.')
        }
    }
}


const person1 = new Person('Daniel','Male');
const person2 = new Person('Jessica','Female');
const person3 = new Person('Ann','Female');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const house = new House(3);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

console.log(house.apartments);