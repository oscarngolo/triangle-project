var triangleTracker = function(){
  var side1 = parseFloat(document.getElementById("sideA").value)
  var side2 = parseFloat(document.getElementById("sideB").value)
  var side3 = parseFloat(document.getElementById("sideC").value)

  if (side1 === side2 && side1 === side3 && side2 === side3) {
    alert("equilateral triangle");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    alert("isosceles triangle");
  } else if(side1 !== side2 || side2 !== side3 || side1 !== side3){
    alert("scalene triangle");
  } else {
    alert("NOT a triangle");
  }
}
