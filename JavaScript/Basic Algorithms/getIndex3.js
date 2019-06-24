function getIndex(arr, num) {
    arr.push(num);
    arr.sort(function(a, b) { return a - b })
    return arr.indexOf(num); 
}
console.log(getIndex([3, 4, 2, 1], 3.5));