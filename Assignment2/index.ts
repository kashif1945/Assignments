//---------------------------------------------------------------------------------------
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
//---------------------------------------------------------------------------------------

//The formula to convert Celsius to Fahrenheit is given by: °F = °C × (9/5) + 32.

var cToF:number=36;
var cToFResult=(cToF*(9/5)+32);
console.log("converted Celsius to Fahrenheit is given result :", cToFResult);

//Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.

var FToC:number=36;
var FToCResult=(FToC-32*(5/9));
console.log("converted Fahrenheit to Celsius is given result :", FToCResult);

//------------------------------------------------
//Write a program that calculates the percentage.
//------------------------------------------------

var obtainMarks:number=575;
var totalMarks:number=850;
var resultPercentage:number= obtainMarks/totalMarks*100;
console.log("Percentage is :", resultPercentage);

//-----------------------------------------------------------------------------------------------------------
//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
//--------------------------------------------------------------------------------------------------------------

let nDays:number= 35;
let nWeeks:number= Math.floor(nDays/7); // function is used to round down the value
let rDays:number= nDays%7;
console.log( `${nDays} Total Days: ${nWeeks} weeks & days ${rDays}`);

//-----------------------------------------------------------------------------------
// Write a program that calculates the  on its discount for a product basedprice.
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
//-----------------------------------------------------------------------------------

var productPrice: number = 90;
if (productPrice > 100) {
    var discountPrice1: number = productPrice - productPrice * (10 / 100);
    console.log(`10% Discounted Price is :  ${discountPrice1}`);
}
else {
    var discountPrice2: number = productPrice - productPrice * (5 / 100);
    console.log(` 5% Discounted Price is  ${discountPrice2}`);
}

/*----------------------------------------------------------------------------
5 - Create a program that determines the category of a user-provided age.
If the age is between 0 and 12, print "Child."
If it's between 13 and 19, print "Teenager."
Otherwise, print "Adult."
----------------------------------------------------------------------------*/

var age: number = 15;
if (age >= 0 && age <= 12) {
    console.log(`Child`);
} else if (age >= 13 && age <= 19) {
    console.log(`Teenager`);
} else {
    console.log(`Adult`);
}

/*------------------------------------------------------------------------------------------
6 - Write a program that takes temperature and check it.
If it is cold then suggest the user to wear warm clothes and so on according to the weather.
--------------------------------------------------------------------------------------------*/

var tempCheck1: number = 18;
if (tempCheck1 >= 0 && tempCheck1 <= 20) {
    console.log(`its Cold Temperature, Please Wear a warm clothes`);
}
else {
    console.log(`its Normal Temperature, Please wear a normal clothes`);
}


/*------------------------------------------------------------------------------------
7 - Write a program that checks if the given number is  divisible by 3 or 5 
OR both or not divisible by anyone show output accordingly.
------------------------------------------------------------------------------------*/
                        
var givenNumber: number = 11;
if (givenNumber % 3 == 0) {
    console.log(`${givenNumber} is divisible by 3`);
}
else {
    console.log(`${givenNumber} is not divisible by 3`);
}
if (givenNumber % 5 == 0) {
    console.log(`${givenNumber} is divisible by 5`);
}
else {
    console.log(`${givenNumber} is not divisible by 5`);
}
if (givenNumber % 3 == 0 && givenNumber % 5 == 0) {
    console.log(`${givenNumber} is divisible by 3 & 5`);
} else {
    console.log(`${givenNumber} is Not divisible on by 3 & 5`);
}


//----------------------------------------------------------------------
// 8 - Write a program that checks if the given year is leap year or not.
//-----------------------------------------------------------------------                        

//To check if a year is a leap year, divide the year by 4. 
//If it is fully divisible by 4, it is a leap year. For example, the year 2016 is divisible 4

var givenYear: number = 2018;

if (givenYear % 4 == 0) {
    console.log(`${givenYear} is a leap year.`);
} else {
    console.log(`${givenYear} is Not a leap year.`);
}

/*--------------------------------------------------------------------------------------------------
9 - Develop a program that determines the day of the week. 
Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
---------------------------------------------------------------------------------------------------*/

var dayOfWeek: number = 6;
console.log("Plz Enter the Number b/m 1-7 to know the Specific Day Name.", dayOfWeek);
if (dayOfWeek == 1) {
    console.log("the Day is Monday");
} else if (dayOfWeek == 2) {
    console.log("The Day is Tuesday");
} else if (dayOfWeek == 3) {
    console.log("The Day is Wednesday");
} else if (dayOfWeek == 4) {
    console.log("The Day is Thursday");
} else if (dayOfWeek == 5) {
    console.log("The Day is Friday");
} else if (dayOfWeek == 6) {
    console.log("The Day is Saturday");
} else if (dayOfWeek == 7) {
    console.log("The Day is Sunday");
} else {
    console.log("Wrong Number");
}

//---------------------------------------------------------------------------------------------------------
/*- Write a program that takes the number of units consumed by a user 
if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to 
if greater than 500 then add 25% of tax 
Where the tax amount will be calculated by the amount of bill.*/
//------------------------------------------------------------------------------------------------------------

var billAmount: number = 300;
console.log("Your Current Bill Amount is = ", billAmount);
if (billAmount >0 && billAmount < 100) {
var addTax:number = billAmount*10/100; 
    console.log(`Your total bill is after add 10% Tax ${billAmount + addTax}`);
} else if (billAmount> 100 && billAmount < 200) {
    var addTax:number = billAmount*15/100; 
    console.log(`Your total bill is after add 15% Tax ${billAmount + addTax}`);
} else if (billAmount> 100 && billAmount < 200) {
    var addTax:number = billAmount*20/100; 
    console.log(`Your total bill is after add 15% Tax ${billAmount + addTax}`);
} else {
    var addTax:number = billAmount*25/100; 
    console.log(`Your total bill is after add 15% Tax ${billAmount + addTax}`);
}
