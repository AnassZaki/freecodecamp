function steamrollArray(arr) {
    let newArr = [];

    // Go through each element of the array  
    arr.forEach(function (value) { 

        // if any element in the array is an array merge it with the main one
        if (Array.isArray(value)) {
            newArr = newArr.concat(steamrollArray(value))
        } else {

            // if it's not an array then just push it to the main array
            newArr.push(value);
        }
    });
    return newArr; // returns falttened array
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));