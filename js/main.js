class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    personInfo(){
        console.log(`${this.name} ${this.age}`);
    }
}

class Car {
    constructor(mark,model,year,lisencePlate){
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.lisencePlate = lisencePlate;
        this.owner = null;
    }

    assignOwner(person){
        if(person.age > 18){
            this.owner = person;
        }
    }

    carInfo(){
        console.log(`Car : ${this.mark} ${this.model} ${this.year} ${this.lisencePlate}`)
        if(this.owner){
            console.log(`Owner Information:`);
            this.owner.personInfo();
        }else {
            console.log(`No owner assigned yet.`);
        }
    }
}

const person1 = new Person('Daniel',22);
const person2 = new Person('Julia',19);
const person3 = new Person('Mike',17);

const bmw_car = new Car('BMW','M5 F90',2024,'THEKILLER');
const mercedes_car = new Car('Mercedes','S class 550',2022,7777);
const porsche_car = new Car('Porsche','Taycan','2019',8979);

bmw_car.assignOwner(person1);
mercedes_car.assignOwner(person2);
porsche_car.assignOwner(person3);

bmw_car.carInfo();
mercedes_car.carInfo();
porsche_car.carInfo();
