function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num) === true) {
            return num;
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));