//specify the range of a string
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
console.log(quoteSample.match(myRegex)); 

//matching a character that occured one or more times.
let difficultSpelling = "Mississippi";
let myRegex1 = /s+/gi; 
console.log(difficultSpelling.match(myRegex1));

// criminal hunt 
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /c+/gi; 

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);