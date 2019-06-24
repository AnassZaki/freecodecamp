function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins

    return str = str.replace(/[^\w\s]|_/g, "-")
        .replace(/\s+/g, "-")
        .replace(/(?=[A-Z])/g, '-')
        .toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));