function nextInLine(arr, item) {

    // pushes a number to the end of the array
    arr.push(item);

    // removes the first element of the array
    var shifted = arr.shift([0]);
    return shifted;
}

// Test Setup
var testArr = ["batata", 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));