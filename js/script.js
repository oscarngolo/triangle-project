var triangleTracker = function(){
  var side1 = parseInt(document.getElementById("sideA").value);
  var side2 = parseInt(document.getElementById("sideB").value);
  var side3 = parseInt(document.getElementById("sideC").value);

  var result;
    if (side1 == side2 && side1 == side3 && side2 == side3) {
      result = "equilateral triangle."
      console.log(result);
      document.getElementById("output").innerHTML = result;

  }

  else if (side1 == side2 || side1 == side3 || side2 == side3) {
    result = "isosceles triangle."
    console.log(result);
  document.getElementById("output").innerHTML = result;
  }

  else if((side1 + side2) <= (side3) || (side1 + side3) <= (side2) || (side3 + side2) <= (side1)){
    result = "This is NOT a triangle."
    console.log(result);
  document.getElementById("output").innerHTML = result;
  }

  else {
    result = "scalene triangle."
    console.log(result);
  document.getElementById("output").innerHTML = result;
      }
}
