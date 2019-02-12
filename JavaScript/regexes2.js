// username checker firsrt version 
let username = "JackOfAllTrades";
let userCheck = /[A-Za-z]|$\d/gi;
let result = userCheck.test(username);

// username checker second version
let username1 = "JackOfAllTrades";
let userCheck1 = /^[a-z]{2,}|\d$/i;
let result1 = userCheck1.test(username1);

// range characters
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/i;
let result2 = ohRegex.test(ohStr);

// password checker 
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2,})/i;
let result3 = pwRegex.test(sampleWord);

// capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result4 = reRegex.test(repeatNum);

// replace whitespaces
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result5 = hello.replace(wsRegex, '');
console.log(result5, result3);