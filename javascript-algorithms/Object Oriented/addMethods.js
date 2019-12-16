function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype) // Inherits the eat method
Dog.prototype.constructor = Dog; // sets the constructor's prototype to Dog

// bark() and count() methods as an own property for Dog
Dog.prototype.bark = function () {
    console.log('Woof!')
}
Dog.prototype.count = function () {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

let beagle = new Dog();

beagle.count();
beagle.eat();
beagle.bark();