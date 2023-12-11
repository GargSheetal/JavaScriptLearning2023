// foreach function - takes each value from the array and can perforn an action on them
// foreach can take value, index and the array as it is

let nums = [1, 2, 3, 4, 5, 6];

nums.forEach(n => console.log(n));
nums.forEach((n, i, nums) => console.log(n, i, nums));


// print even number
nums.forEach(n => {
    if (n % 2 === 0) {
        console.log(n);
    }
})

// above logic is better when we use filter() function. filter() allows any allow only if its true
nums.filter(n => n % 2 === 0)
    .forEach(n => console.log(n));

// map() function takes a value and perform operation on it to return a new value
// print even values ny doubling their values
nums.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .forEach(n => console.log(n));


// reduce() - will perform an operation on the values and reduce them to a single value
// print even values ny doubling their values and adding the final result

let result = nums.filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b);

console.log(result);