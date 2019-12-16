function makeClass() {
    "use strict";
    /* Fruit lets you create a fruit object, 
    with a property name, to be passed to constructor.*/
    class Fruit {
      constructor(name){
        this.name = name;
      }
    }
    
    return Fruit;
  }
  const Fruit = makeClass();
  const orange = new Fruit('orange');
  const apple = new Fruit('apple');
  const peach = new Fruit('peach');
  const banana = new Fruit('banana');
  console.log(orange.name, apple.name); 