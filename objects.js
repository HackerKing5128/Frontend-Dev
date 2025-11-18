// create a JS object via new Object()
console.log("Creating a object via new Object():");

const person = new Object();
person.firstName = "Kazuto";
person.lastName = "Kirigaya";
person.age = 17;

console.log(person);

// create 3 car objects via constructor
console.log("\nCreating car objects via constructor:");

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Toyota", "Supra", 2020);
const car2 = new Car("Honda", "Civic", 2019);
const car3 = new Car("Ford", "Mustang", 1969);

console.log(car1);
console.log(car2);
console.log(car3);