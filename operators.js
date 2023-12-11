// arithematic operators > +, -, /, *, %, ++, --, **(power of)

let num1 = 8
let num2 = 2
let result = num1 + num2
console.log(result) // 10

result = num1 - num2
console.log(result) // 6

result = num1 * num2
console.log(result) // 16

result = num1 / num2
console.log(result) // 4

result = num1 % num2
console.log(result) // 0

let num = 4
let result1 = num++ // post increment - first value of num is assigned to result1 and then it will be incremented. So the result is 4
console.log(result1, num) // 4 5

let num3 = 4
result1 = ++num3 // pre increment - first value of num3 is incremented and then it is assigned to result1
console.log(result1, num3) // 5 5

// ** - used as power
let num4 = 4
result1 = num4 ** 3
console.log(result1) // 64 > 4 * 4 * 4

console.log("-------------------")

// Relational operators - > < >= <= == ===

// let x = 4
// let y = 5
// let data = x > y
// console.log(data) // false

// let x = 4
// let y = 5
// let data = x < y
// console.log(data) // true

// let x = 5
// let y = 5
// let data = x <= y
// console.log(data) // true

// let x = "5"
// let y = 5
// let data = x <= y 
// console.log(data) // true - but x is string, so when verifying equality always use === 

let x = "5"
let y = 5
let data = x === y
console.log(data) // false - strict equality
// when we use == it only checks the data not the type. When we use === it checks the data as well as the type


// LOGICAL OPERATORS - && || !
