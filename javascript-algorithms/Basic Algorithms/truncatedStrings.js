function truncate(str, num) {
    let newStr = str.substr(0, num);
    if (newStr === str) {
        return newStr;
    } 
    return newStr + "...";
}
console.log(truncate("I really don't want us to be like this anymore", "I really don't want us to be like this anymore".length));