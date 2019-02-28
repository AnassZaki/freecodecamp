function check(array) {
    let test = array[1].toLowerCase();
    let target = array[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) 
        return false;
    }
    return true;
}
console.log(check(['hello', 'hej']));