function gcd(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

function gcdPlus(arr) {
    let len, a, b;
    len = arr.length;
    if (!len) {
        return null;
    }
    a = arr[0];
    for (let i = 1; i < len; i++) {
        b = arr[i];
        a = gcd(a, b);
    }
    return a;
}

function lcm(a, b) {
    let n = a * b / gcd(a, b);
    return n;
}

function nInRange(arr) {
    arr.sort((a,b) => b - a);
    let arr1 = [];
    for (let i = arr[0]; i >= arr[1]; i--) {
       arr1.push(i);
    }
    return arr1;
}

function smallestCommons(arr) {
    let nums = nInRange(arr);
    let a, b;
    a = nums[0];
    for (let i = 1; i < nums.length; i++) {
        b = nums[i];
        a = lcm(a, b);
    }
    return a;
}
console.log(smallestCommons([1, 5]));
