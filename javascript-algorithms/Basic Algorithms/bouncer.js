function bouncer(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer(['batata', NaN, "", false, 98]))