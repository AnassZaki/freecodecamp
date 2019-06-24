function seekAndDestroy(arr) {
    let args = [].slice.call(arguments);
    return arr.filter((x) => !args.includes(x));
}
console.log(seekAndDestroy([1, 2, 3, 1, 2], 1, 2));