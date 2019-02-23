function largestOfFour(arr) {
    let arrmax = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
        }
        arrmax.push(max);
    }
    return arrmax;
}

console.log(largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));