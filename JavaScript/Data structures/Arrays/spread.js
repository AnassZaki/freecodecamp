// function able to copy arrays! Cool right ?
function copyMachine(arr, num) {
    'use strict';
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 6));