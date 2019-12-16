function confirmEnding(str, target) {
    return str.substr(-target.length) === target;
}    
console.log(confirmEnding("batata", "gata")); 
console.log(confirmEnding("batata", "tata")); 