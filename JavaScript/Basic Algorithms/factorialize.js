function factorialize(num) {
    let fct = 1;
    for (let i = 2; i <= num; i++) {
        fct = fct * i;
    }
    return fct;
}
console.log(factorialize(10));