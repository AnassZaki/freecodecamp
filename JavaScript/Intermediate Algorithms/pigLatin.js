function makePigLatin(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
        arr[0] + 'ay'
    }
    return arr;
}
console.log(makePigLatin("batata"));