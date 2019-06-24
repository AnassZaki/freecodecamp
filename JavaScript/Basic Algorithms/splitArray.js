function split(arr, size) {

    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }
    return newArr;
}
console.log(split([1, 2, 3, 4], 1));