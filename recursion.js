// recursion is a concept where a function calls itself

let num = 1;
function show() {
    console.log("Hi! ", num);
    num++;
    if (num <= 20)
        show();
}

show();

// recursion with factorial
// find the factorial of 5 - 5!

function fact(n) {
    if (n == 0)
        return 1;
    else
        return n * fact(n - 1)
}

let number = 5;
let result = fact(number);

console.log(result);
