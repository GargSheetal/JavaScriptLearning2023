// declaring a function
function greet() {
    console.log("Good Day");
}

// calling the function 
greet();


// returning a value from a function - use return statement

function add() {
    return 2 + 2;
}

let result = add();
console.log(result);

// passing argument to a function
function greet(user) {
    return `Hello ${user} !!`;
}

let user = 'Sheetal';
let str = greet(user);
console.log(str);


// function expression - an anonymous function is assigned to the variable sum which then can act as a function.
let sum = function (num1, num2) {
    return num1 + num2;
}

let res = sum(5, 4);
console.log(res);

// functions with default values = function take default value if an argument for it is not passed upon function calling
// if a value is passed then default value is not taken.

sum = function (num1, num2, num3 = 6) {
    return num1 + num2 + num3;
}

res = sum(5, 4); // taking default value for num3
console.log(res);

res = sum(5, 4, 10);
console.log(res);

// variables declared outside the function are called global variables
// variables declared inside the function are called local variables




