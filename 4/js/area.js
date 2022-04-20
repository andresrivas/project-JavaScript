//ACTIVITY 4
//Write a JavaScript program to find the area of a triangle 
//where lengths of the three of its sides are 5, 6, 7.

// We make the declaration of variables
var side1 = 5; 
document.write("Side1  " + side1+ "<br>");
var side2 = 6; 
document.write("Side2  " + side2+"<br>");
var side3 = 7; 
document.write("Side3  " + side3+ "<br><br>");
var s = (side1 + side2 + side3)/2;

//we use the function Math.sqrt to solve the area formula
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
document.write("the area of a triangle  "+ area);