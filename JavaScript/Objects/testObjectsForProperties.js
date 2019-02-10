// make an object of any sort
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {

// don't touch my function >:(
    if (myObj.hasOwnProperty(checkProp) == true) {
      return myObj[checkProp];
    } else {
      return "Not Found";
    }
  }
  
  // Test your code by modifying these values
  checkObj("gift");

  