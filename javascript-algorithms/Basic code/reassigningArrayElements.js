const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    "use strict";

    const [a, b, ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    "use strict"; // do not change this line

    // change code below this line
    return function half({ max, min }) {
        // use function argument destructuring
        return (stats.max + stats.min) / 2.0;
    };
    // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015