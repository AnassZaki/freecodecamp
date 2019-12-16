// modify the array as you want
const arrayOfRealNumbers = [1.45, 5, 2574, 3, -96, 6, 7, -12];

// creates a function that has multiple functions within it
const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr
    .filter((number) => number > 0 && number % parseInt(number) === 0)
    .map((number) => Math.pow(number, 2))
    
  return squaredIntegers; 
};
// prints the squared integers
const squaredIntegers = squareList(arrayOfRealNumbers);
console.log(squaredIntegers); 