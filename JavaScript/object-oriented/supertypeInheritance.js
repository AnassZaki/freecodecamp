function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat,
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear,
};

function Animal() {}

// Supertype or parent prototype
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("munch munch munch");
    }
};

//let shiba = Object.create(Animal.prototype);
//shiba.eat();

function Dog() { }

// subtype or child prototype is Dog
Dog.prototype = Object.create(Animal.prototype);

let shiba = new Dog();
shiba.eat(); 