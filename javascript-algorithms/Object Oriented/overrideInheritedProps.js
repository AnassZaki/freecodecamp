function Bird() {}

Bird.prototype.fly = function () { 
    return "I am flying!";
};

function Penguin() {}

/* Inherit methods by cloning the supertype: 
ChildObject.prototype = Object.create(ParentObject.prototype); */ 
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird."
};

let penguin = new Penguin();
console.log(penguin.fly());

/* 1. penguin => Is fly() defined here? No.
2. Penguin => Is fly() defined here? => Yes. Execute it and stop searching.
3. Bird => fly() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level. */