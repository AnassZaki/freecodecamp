function bouncer(arr) {
    let newArr = [];
    // Don't show a false ID to this bouncer.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== Boolean) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(bouncer([false, null, 0, NaN, "KHobza", undefined, ""]));
