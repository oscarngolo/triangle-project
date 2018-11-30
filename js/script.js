var triangleTracker = function(){
  var side1 = parseInt(document.getElementById("sideA").value);
  var side2 = parseInt(document.getElementByid("sideB").value);
  var side3 = parseInt(document.getElementById("sideC").value);

  var output= document.getElementByname(output);

  if (side1 === side2 || side1 === side3 || side2 === side3) {
    output.textContent = "isosceles triangle";
  } else if (side1 === side2 && side1 === side3 && side2 === side3) {
    output.textContent = "equilateral triangle";
  } else if (side1 !== side2 || side1 !== side3 || side2 !== side3) {
    output.textContent = "scalene triangle";
  } else {
    output.textContent = "NOT a triangle";
  }
}
