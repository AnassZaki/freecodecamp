function convertToBinary(str) {

    // making an array of the binary values
    let arr = str.split(" ");

    // this array will contain the converted binary values
    let newArr = [];

    // take each element in first array transform it into ASCII and into a string 
    // then push it to the second array
    arr.forEach(element => {
        newArr.push(String.fromCharCode(parseInt(element, 2)));
    });

    return newArr.join(""); // return a string with converted values
}
console.log(convertToBinary("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))

/* Another method
function convertToBinary(str) {
    return String.fromCharCode(...str.split(" ").map((char) => parseInt(char, 2)));
} */