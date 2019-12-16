function sumAll(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let newArr = [];
    for (let i = min; i <= max; i++) {
        newArr.push(i);
    }
    return newArr;
}

console.log(sumAll([5, 10]));