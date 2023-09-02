"use strict";
//------------------------------------------------------------------------------------------------------------
//  1 - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse using functions.
//-----------------------------------------------------------------------------------------------------------
function tempCToF(tempCelsius, tempFahrenheit) {
    var cToF = tempCelsius * (9 / 5) + 32;
    var fToC = tempFahrenheit - 32 * (5 / 9);
    console.log(cToF, fToC);
}
tempCToF(36, 96);
//--------------------------------------------------------------------
//  2 - Write a program that calculates the percentage using functions.
//-----------------------------------------------------------------------
function percentageCal(totalMarks, obtainedMarks) {
    var numberPer = (obtainedMarks / totalMarks) * 100;
    console.log("Number Percentage is ;", numberPer);
    return numberPer;
}
percentageCal(850, 535);
//-----------------------------------------------------------------------------------------------------------------
//  3 - Write a program that converts given number of days in to weeks and days 
//such as 17 days = 2 weeks and 3 days using functions.
//------------------------------------------------------------------------------------------------
function daysConvertIntoWeeks(nDays) {
    let nWeeks = Math.floor(nDays / 7);
    let ndays = nDays % 7;
    let result = `${nWeeks} weeks and ${ndays} days`;
    console.log("result", result);
    return result;
}
daysConvertIntoWeeks(23);
//-------------------------------------------------------------------------------------------------------------
//  4 - Write a program that calculates the discount for a product based on its price. 
//If the price is above $100, apply a 10% discount;
// otherwise, apply a 5 % discount using functions.
//-----------------------------------------------------------------------------------------------------------------
function disCal(orignalPrice) {
    if (orignalPrice > 100) {
        let result1 = orignalPrice + orignalPrice * 10 / 100;
        console.log("You have get 10% Discount on the Ogirinal price =", result1);
        return result1;
    }
    else {
        let result2 = orignalPrice + orignalPrice * 5 / 100;
        console.log("You have get 5% Discount =", result2);
        return result2;
    }
}
disCal(150);
//------------------------------------------------------------------------------------------------
//  5 - Create a program that determines the category of a user-provided age. 
//If the age is between 0 and 12, print "Child."
// If it's between 13 and 19, print "Teenager." Otherwise, print "Adult" using functions.
//-----------------------------------------------------------------------------------
function ageDetermine(age) {
    if (age > 0 && age < 13) {
        console.log(`Child`);
    }
    else if (age > 13 && age < 19) {
        console.log(`Teenager`);
    }
    else
        console.log(`Adult`);
}
ageDetermine(18);
//--------------------------------------------------------------------
//  6 - Write a program that takes temperature and check it. 
//If it is cold then suggest the user to wear warm clothes and so on
// according to the weather using functions.
//---------------------------------------------------------------------
function tempCheck(outSideTemp1) {
    if (outSideTemp1 > 0 && outSideTemp1 < 10) {
        console.log(`Today is Too Cold Weather, Wear Warm Clothes`);
    }
    else if (outSideTemp1 > 10 && outSideTemp1 < 20) {
        console.log(`Today is Cold Weather, Wear clothes accordingly`);
    }
    else if (outSideTemp1 > 20 && outSideTemp1 < 30) {
        console.log(`Today is little Hot Weather, Wear Normal clothes`);
    }
    else
        console.log(`Today is Too Hot Weahter, Wear light clothes`);
}
tempCheck(22);
//--------------------------------------------------------------------
//  7 - Write a program that checks if the given number is  divisible 
//by 3 or 5 or both or not divisible by anyone show output accordingly using functions.
//--------------------------------------------------------------------------------------------------
function checkGivenNumDivisibility(num1) {
    if (num1 % 3 == 0) {
        console.log(`The given number is divisible by 3`, num1);
    }
    else {
        console.log(`The given number is Not divisible by 3`, num1);
    }
    if (num1 % 5 == 0) {
        console.log(`The given number is divisible by 5`, num1);
    }
    else {
        console.log(`The given number is Not divisible by 5`, num1);
    }
    if (num1 % 3 == 0 && num1 % 5 == 0) {
        console.log(`The given number is divisible by 3 & 5`, num1);
    }
    else {
        console.log(`The given number is Not divisible by 3 & 5`, num1);
    }
    return num1;
}
checkGivenNumDivisibility(30);
//--------------------------------------------------------------------
//  8 - Write a program that checks if the given year is leap year or not using functions.
//------------------------------------------------------------------------------
function checkLeapYear(givenYear) {
    if (givenYear % 4 == 0) {
        console.log(`The Given Year is a Leap Year.`, givenYear);
    }
    else {
        console.log(`The Given Year is Not a Leap Year.`, givenYear);
    }
    return givenYear;
}
checkLeapYear(2016);
//--------------------------------------------------------------------
//  9 - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements
// to print the corresponding day's name using functions.
//--------------------------------------------------------------------------------------
function dayOfWeek(dayNo) {
    console.log("Ask the user for a number (1-7); Input No is =", dayNo);
    if (dayNo == 1) {
        console.log("Monday");
    }
    else if (dayNo == 2) {
        console.log("Tuesday");
    }
    else if (dayNo == 3) {
        console.log("Wednesday");
    }
    else if (dayNo == 4) {
        console.log("Thursday");
    }
    else if (dayNo == 5) {
        console.log("Friday");
    }
    else if (dayNo == 6) {
        console.log("Saturday");
    }
    else if (dayNo == 7) {
        console.log("Sunday");
    }
    else {
        console.log("Given number is not valid.");
    }
    return dayNo;
}
dayOfWeek(3);
//--------------------------------------------------------------------
// 10 - Write a program that takes the number of units consumed by a user 
//if it is greater than 100 then add 10% tax if greater than 200
// then add 15 % of tax so on up to if greater than 500 then add 25 % of tax, 
//Where the tax amount will be calculated by the amount of bill using functions.
//----------------------------------------------------------------------------------------
function currentBill(billAmount) {
    console.log("Your Current Bill Amount is = ", billAmount);
    if (billAmount > 0 && billAmount < 100) {
        var addTax = billAmount * 10 / 100;
        console.log(`Your total bill is after add 10% Tax ${billAmount + addTax}`);
    }
    else if (billAmount > 100 && billAmount < 200) {
        var addTax = billAmount * 15 / 100;
        console.log(`Your total bill is after add 15% Tax ${billAmount + addTax}`);
    }
    else if (billAmount > 100 && billAmount < 200) {
        var addTax = billAmount * 20 / 100;
        console.log(`Your total bill is after add 15% Tax ${billAmount + addTax}`);
    }
    else {
        var addTax = billAmount * 25 / 100;
        console.log(`Your total bill is after add 15% Tax ${billAmount + addTax}`);
    }
    return billAmount;
}
currentBill(500);
