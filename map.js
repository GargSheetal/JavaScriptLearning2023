// Map has key:value pairs to store data. Keys should be unique
// Map is a class in JS

let map = new Map();
map.set("Navin", "Java");
map.set("Kiran", "Python");
map.set("Chirag", "JavaScript");
map.set("Navin", "Blockchain"); // map will have only 3 pairs with the value of Navin getting updated to Blockchain

console.log(map.has("Navin")); // true
console.log(map.get("Kiran")); // Python
console.log(map.keys()); // { 'Navin', 'Kiran', 'Chirag' }

// printing all the values of map - using for of loop
for (let [k, v] of map) {
    console.log(k, " : ", v);
}

// how to use foreach loop with map
// here value is mentioned first as foreach loop takes value first and then its index which is key in maps
map.forEach((v, k) => console.log(k, " : ", v));

