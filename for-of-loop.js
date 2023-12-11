let nums = [];
nums[0] = 5;
nums[99] = 9;

// to print an array a for of loop is better
// all the values of nums will be assigned to n one by one
for (let n of nums) {
    console.log(n);
}

// can also use for in loop which fetches the key of the values
for (let key in nums) {
    console.log(nums[key]);  // prints the values of the key 
}