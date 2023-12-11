// Set is a collection of values which are unique. Do not accept duplicate values. Do not have indexes of the
// values and maintains the order of insertion. Sets were introduced in ES6 version of JavaScript
// Set is a class in JS so can be created with a new keyword

let str = new Set("bookkeeper");
console.log(str);

let nums = new Set();
nums.add(3);
nums.add(7);
nums.add(3);
nums.add('Navin');
nums.add('Pravin');
nums.add('Shashi');

nums.forEach(values => console.log(values));

// can check the presence of any value with the has() method
console.log(nums.has('Navin'));
