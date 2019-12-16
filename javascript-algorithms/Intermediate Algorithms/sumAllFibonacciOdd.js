function sumFibs(num) {
    let sol = [0, 1];
    for (let i = 2; i <= num; i++) {
        sol.push(sol[i - 1] + sol[i - 2]);
    }
    return sol.filter((n) => n % 2 !== 0 && n <= num).reduce((a, b) => a + b);
}
console.log(sumFibs(10));