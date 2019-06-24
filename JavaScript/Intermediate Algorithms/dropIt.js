function drop(arr, func) {

    // Iterating over the elements of the array
    for (let i = 0; i < arr.length; i++) {

        // if the first element passes the functioniality test, stop.
        if (func(arr[0])) {
            break;

            // if not, remove that element         
        } else {
            arr.shift();
        }
    }
    return arr;
}
console.log(drop([3, 4], (n) => n > 2))

// Method #2
function dropElements(arr, func) {

    // While the array is not empty AND the first element passing the function test is false
    while (arr.length > 0 && !func(arr[0])) {

        // remove the first element until the func test is true then returns the array.
        arr.shift();
    }
    return arr;
}
console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));