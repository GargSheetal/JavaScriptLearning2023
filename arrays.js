let values = [5, 7, 8]; // declaring an array

// new values can be added using push function or using index
// push appends a new element at the end of the aaray
values.push(9);
// values.push(3, 3) // can add multiple values
values[4] = 4;
console.log(values); // 5, 7, 8, 9, 4

// fetching values from a specific index location
console.log(values[2]) // 8

// pop() removes the last element from the array
console.log(values.pop()); // 4 

// shift() - pushes all the elements to the left side and removes the first element
console.log(values.shift());  // 5
console.log(values);    //7,8,9

// unshift() - moves all the elements to the right side and adds a new element to the start of the array
console.log(values.unshift(2));  // 4(new length of the array)
console.log(values);    //2,7,8,9

console.log("------------ splice ------------");

// splice() - used to removes values from the array from a particular index. 
// giving only index number - it will remove all values from that index number
values = [2, 5, 7, 8, 9]
console.log(values.splice(2));  // removes 7,8,9
console.log(values);  // 2,5


// if we provide how many elements to remove, it will remove only those number of elements. 
// first number is the index value and 2nd number is the number of elements to be removed
values = [2, 5, 7, 8, 9]
console.log(values.splice(2, 1));  // 7  
console.log(values);  // 2,5,8,9

// splice can also add values - mention the values to be added after the index and no. of values to be removed
values = [2, 5, 7, 8, 9]
console.log(values.splice(2, 2, 11, 12));  // 7,8  
console.log(values);  // 2,5,11,12,9

let data = ['Navin', 4, { name: 'Navin', tech: 'JS' }, function () { console.log("Hello World!"); }];

console.log(data);
data[3]();