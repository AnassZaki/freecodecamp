function checkPalindrome(str) {
    // Create an empty string that will host the new created string
    var input = "";

    // for loop that will iterate over the string characters 
    for(var i = str.length - 1; i >= 0; i--){
        // assigns each last character to the string
        input += str[i];
    }
    
    if (input === reverseString) {
        return true;
    } else {
        return false;
    }
}
