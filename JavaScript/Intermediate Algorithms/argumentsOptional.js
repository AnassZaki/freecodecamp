function sumArgs(a, b) {
// only if valid number provided
  if (Number.isFinite(a)) {
    // the exclamation mark before the parameter indicate that if b is not provided 
    if (!b) {
            // return a function that expects one argument 
      return function(c) {
        if (Number.isFinite(c)) {
          return a + c;// returns the sum 
        }
      };
    }
    else if (Number.isFinite(b)) {
      return a + b;
    }
  }
  // returns undefined by default
}
console.log(sumArgs(2));