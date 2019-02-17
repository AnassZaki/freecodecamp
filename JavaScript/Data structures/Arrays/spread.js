// function able to copy arrays! Cool right ?
function copyMachine(array, num) {
    'use strict';
  let newArr = [];
  while (num >= 1) {
    newArr.push([...array]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 6));