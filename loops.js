// while, do while, for loop

// while loop
let i = 1 // initialization
while (i <= 5) { // condition
    console.log(i, "while loop");
    i++; // increment
}

i = 5
while (i > 0) {
    console.log(i, "while loop");
    i--;
}

// do while
let j = 1
do {
    console.log(j, "do while");
    j++;
} while (j <= 5)


// for loop
for (let x = 1; x <= 5; x++) {
    console.log(x, "for loop");
}

// nested loop
for (i = 1; i <= 5; i++) {
    console.log(i, " - outer for loop");
    for (j = 1; j <= 5; j++) {
        console.log(j, "inner for loop");
    }
}
console.log("----------------------------");

// print all the digits in a number - use while loop
let num = 123456
while (num > 0) {
    console.log(num % 10);
    num = parseInt(num / 10);
}