function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    constructor: Dog, // define the constructor property
    numLegs: 4,
    eat: function () {
        console.log('munch munch munch');
    },
    describe: function () {
        console.log("My name is " + Dog.name);
    }
};

let shiba = new Dog("Yu"); // shiba inherits its prototype from the Dog constructor function 

Dog.prototype.isPrototypeOf(shiba); // returns true

Object.prototype.isPrototypeOf(Dog.prototype); // returns true