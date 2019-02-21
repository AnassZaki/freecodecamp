function findLength(str) {
    // spliting the string to words seperated by a whitespace 
    // storing them in an array
    let arr = str.split(" ");
    let longest = 0;
    
    // iterating over the words 
    for (let i = 0; i < arr.length; i++) {

        // if a word's length is higher than longest word
        if (longest < arr[i].length) {

            // the length of that word is the longest 
            longest = arr[i].length;
        }
    }
    return longest;
}
console.log(findLength('Batata zitoune khobz'));
