// "Never give up and good luck will find you."
// -- khobza
// let a = 0, b = 0;
function confirm(str, target) {
    // iterate over the container array
    for (let i = str.length - 1, j = target.length - 1; i >= 0 && j >= 0; i--, j--) {
        if (str[i] !== target[j]) {
            return false;
        }
    }
    return true;
}
console.log(confirm("Open sesame", "game")); // false
console.log(confirm("Open sesame", "same")); // true