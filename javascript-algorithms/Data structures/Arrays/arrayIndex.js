function quickCheck(arr, elem) {

    if (arr.indexOf(elem) >= 0) {
        return true;
    }
    return false;
}

// test different cases:
console.log(quickCheck(['potatoes', 'bread', 'shallots'], 'bread'));