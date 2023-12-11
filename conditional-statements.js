// if else
let num1 = 6
let num2 = 9
let num3 = 7

if (num1 > num2) {
    console.log("num1 is greater!")
}
else {
    console.log("num2 is greater!")
    console.log("yee!!")
}
console.log("byee !!")

// if elseif else

if (num1 > num2 && num1 > num3) {
    console.log("num1 is greatest")
}
else if (num2 > num3)
    console.log("num2 is greatest")
else
    console.log("num3 is greatest")

console.log("---------------------");

// if a number is even or odd

let num = 8
let result
if (num % 2 === 0) {
    console.log("num is even");
}
else {
    console.log("num is odd");
}
num % 2 === 0 ? console.log("num is even") : console.log("num is odd")

if (num % 2 === 0)
    result = "Even"
else
    result = "Odd"

console.log(result);

// ternary operator - ?:
result = num % 2 === 0 ? "Even" : "Odd"
console.log(result);

// switch statement

/*
Monday = 7 am
tue-thurs = 4 am
fri = 8 am
sat-sun = 9 am
*/

let day = "Anyday"

switch (day) {
    case "Monday":
        console.log("7am"); break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4am"); break;
    case "Friday":
        console.log("8am"); break;
    case "Saturday":
    case "Sunday":
        console.log("9am"); break;
    default:
        console.log("Sleep through")
}