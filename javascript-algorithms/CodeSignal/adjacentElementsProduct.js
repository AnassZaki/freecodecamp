function adjacentElementsProduct(inputArray) {

    let max = -Infinity;
    for (let i = 0; i < inputArray.length - 1; i++) {
        let product = inputArray[i] * inputArray[i + 1];
        if (product > max) {
            max = product;
        }
    }
    return max;
}
