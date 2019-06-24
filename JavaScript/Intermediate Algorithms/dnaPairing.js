function pairElement(str) {
  // Object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  // Split string into array of characters
  var arr = str.split("");
  // Sap character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

pairElement("GCG");
