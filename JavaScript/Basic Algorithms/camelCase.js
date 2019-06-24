function capitalize(str) {
    let firstStr = str.toLowerCase();
    let arr = firstStr.split(" ");
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i].replace(arr[i][0], arr[i][0].toUpperCase()) + " ";
    }
    return newStr;
}
console.log(capitalize('KhOIbZa o batata o zitoune'))