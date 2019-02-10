var arr = [
    [1,2], [3,4], [5,6]
  ];
var sum = 1;
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(sum *= arr[i][j]);
    }
  }