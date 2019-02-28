function getIndex(arr, num) {
    arr.sort(function(a, b) {
        return a - b;
    })
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] >= num) {
            return a;
        }
    }
}
console.log(getIndex([4, 2, 3, 1], 2.5));