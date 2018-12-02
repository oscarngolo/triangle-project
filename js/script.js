var triangleTracker = function(){
  var side1 = parseInt(document.getElementById("sideA").value);
  var side2 = parseInt(document.getElementById("sideB").value);
  var side3 = parseInt(document.getElementById("sideC").value);

  if (side1 == side2 && side1 == side3 && side2 == side3) {

    prompt("The type of a triangle is?","equilateral triangle.");

  }

  else if (side1 == side2 || side1 == side3 || side2 == side3) {

    prompt("The type of a triangle is?", "isosceles triangle.");

  }

  else if((side1 + side2) <= (side3) || (side1 + side3) <= (side2) || (side3 + side2) <= (side1)){

    prompt("The type of a triangle is?", "scalene triangle.");

  }

  else {

    prompt("The type of a triangle is?", "NOT a triangle.");

  }
}
