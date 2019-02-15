function manipulate(arr) {

    // add an element to the beginning of the array
    arr.unshift("potatoes");

    // push an element to the end of the array
    arr.push("bread");

    // remove an element from the beginning of the array
    arr.shift();

    // remove an element from the end of the array
    arr.pop();

    return arr;
}

console.log(manipulate(["best", "meal"]));