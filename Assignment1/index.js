"use strict";
//-------------------------------------------------------------------------
//Eexercise 1:  Write a program that calculates the area of a rectangle.
//---------------------------------------------------------------------------
var length = 10; // variable declearation
var width = 20; // variable decleration
var areaOfRectangle = length * width; // Area=L*W
console.log("Area of Rectangle Sqft =", areaOfRectangle); // Output=200
//-----------------------------------------------------------------------------------
//Exercise 2: Write a program that takes input and calculates the volume of a cube.
//------------------------------------------------------------------------------------
var sideLength = 5;
var cubeSurfaceArea = 6 * sideLength * sideLength; // Cube Formula : A= 6A^2
console.log("Volume of a Cube (cft) =", cubeSurfaceArea); // Output=150cft
//------------------------------------------------------------------------------------------
//Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
//------------------------------------------------------------------------------------------
var n1 = 0;
if (n1 > 0) {
    console.log("Given Number is Positive :", n1);
}
if (n1 < 0) {
    console.log("Given Number is Negative :", n1);
}
if (n1 == 0) {
    console.log("Given Number is Zero", n1);
}
else
    console.log("");
//--------------------------------------------------------------------------
//Exercise 4:   Write a program that checks if a given number is even or odd.
//-----------------------------------------------------------------------------
var n1 = 10;
if (n1 % 2 == 0) {
    console.log("The Given Number is Even");
}
else
    console.log("The Given Number is Odd");
//-----------------------------------------------------------------------------------------------
//Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
//----------------------------------------------------------------------------------------------------
var age = 22;
if (age > 0 && age < 18) {
    console.log("You are not eligible for Vote");
}
else
    console.log("You are Eligible for Vote");
//-------------------------------------------------------------------------------------------------------------------------
//Exercise 6:  Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
//-------------------------------------------------------------------------------------------------------------------------
var resultOfMathExpression = ((10 + 5) * 3 - 2 / (4 % 3) - 7);
console.log(resultOfMathExpression);
