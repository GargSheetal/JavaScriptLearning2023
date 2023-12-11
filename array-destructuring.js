let values = [1, 2, 3, 4];

// i want assign these values to a,b,c,d
[a, b, c, d] = values;

console.log(d);

// if you want t o skip some values just add another comma and leave the place empty
[a, b, , d] = values;
console.log(d);

// you can aslo swap values
let x = 3;
let y = 4;
[x, y] = [y, x]
console.log(x, y);


// destructuring string array
// ... operator - means rest of the element. Stores rest of the element in a new array 

let str = "I will cook something good today";
// converting this string into an array using the split function
let words = str.split(" ");

console.log(words);

let [i, j, , ...k] = words;  // destructing words array into another array 
console.log(k); // something, good, today