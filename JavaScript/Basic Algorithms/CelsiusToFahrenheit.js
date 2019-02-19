function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
}
function convertToC(fahrenheit) {
    let celsius;
    celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
function convertToK(celsius) {
    let kelvinInC;
    kelvinInC = celsius + 273.15;
    return kelvinInC;
}
console.log(convertToC(34));
console.log(convertToF(56));
console.log(convertToK(13));
