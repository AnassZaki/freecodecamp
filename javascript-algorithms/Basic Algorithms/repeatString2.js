// pretty basic algorithm no need for complications
// loops method
function repeat(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}
console.log(repeat('khobza', 2));