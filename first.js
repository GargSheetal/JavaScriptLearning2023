console.log("Hello World !!")

// Variables - let, const
let num = 4
console.log(num)

num = 9
console.log(num)

let username = 'Sheetal'    // string
console.log(username)

// const - its value cannot be changed
let radius = 5
const pi = 3.14

let area
area = pi * radius * radius
console.log(area)


// DATA TYPES - primitive and Object
// Primitive - number, String, boolean, null, undefined, symbol, BigInt
// floating point - decimal representation
// typeof - its an operartor to find the type of variable

let num1 = 7
console.log(typeof num1)    // number
console.log(typeof username)    // string
num1 = 7 / 0
console.log(num1) // infinity

num1 = -7 / 0
console.log(num1) // -infinity

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MAX_VALUE * 10) // infinity

// BigInt - number must be declared with n at the end. Ex   54675765786n - Can be added with BigInt numbers only
num1 = 45467576576862551n
console.log(num1)
console.log(num1 + 2n)

// Exponential
num1 = 1.5e12  // 1.5 * 10 to the power 12
console.log(num1)

// String
let user = "Sheetal Garg"
console.log(user)

// use of escape caharacter(\)  i.e. backslash. Escape character changes the meaning of the special character
/* 
\n - new line
\t - tab   
\v - vertical tab  
\b - backspace   
*/

user = "Sheetal Garg \"Gupta\""
console.log(user)

user = "Sheet\tal \nGarg"
console.log(user)

user = "Sheetal Gaa\brg" // removes the extra character - 'a'
console.log(user) // giving some error - check

// boolean -  true or false
let bool = 5 > 6
console.log(bool) // false
bool = 5 < 6
console.log(bool) // true
console.log(typeof bool) // boolean

// look into null and undefined
let user1 = null
console.log(user1) // null
console.log(typeof user1) // object. However null is not an object

let user2
console.log(user2) // undefined
console.log(typeof user2) // undefined

// Type conversion - explicit conversion
let num2 = 6
console.log(num2, typeof num2) // 6 number
num2 = String(6)
console.log(num2, typeof num2) // 6 string 

let num3 = "123"
console.log(num3, typeof num3) // 123 string
num3 = Number("123")
console.log(num3, typeof num3) // 123 number

console.log("------------------------")

// type coercion - number + string > string | String - number > number 
let num4 = 8
console.log(num4, typeof num4) // 8 number
num4 = num4 + ""
console.log(num4, typeof num4) // 8 string - number + string > string

num4 = num4 - 2
console.log(num4, typeof num4) // 6 number > String - number > number

console.log("------------------------")

// Boolean - 0 is false and 1 is true (or any other number other than 0 is true)

num4 = !num4 // num4 was true. ! operator made it false
console.log(num4, typeof num4)  // false boolean
console.log(Boolean(7))         // true - means it is truthy value
console.log(Boolean(0))         // false - its a falsy value
console.log(Boolean(null))      // false - its a falsy value
console.log(Boolean(undefined)) // false - its a falsy value
console.log(Boolean("Sheetal")) // true - its a truthy value
console.log(Boolean(""))        // false - its a falsy value








