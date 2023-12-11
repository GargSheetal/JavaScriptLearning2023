let input = 'company'

// here car is an object
let car = {
    company: 'Honda',
    color: 'red',
    fuel: 'petrol',
    'model num': 12345
}

console.log(car.company); // Honda
console.log(car.color);     // red
console.log(car['model num']); // 12345  - use square brackets when property name is more than one word
console.log(car[input]); // Honda  - use square brackets when property is provided as an input


// Complex object

let alien = {
    name: 'Sheetal',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Apple'
    }
}

// you can delete a property by using the delete keyword
delete alien.tech; // it will delete tech property fron the object alien

console.log(alien);
// printing the property brand of laptop
console.log(alien.laptop.brand);

// printing the length of the property brand
console.log(alien.laptop.brand?.length);

// priting a property if it exists - use ? it will print only if it exists
console.log(alien.laptop?.brand?.length);

console.log("-------------------");

// functions or method inside the object

let laptop = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',
    greet: function () {
        console.log("Hello world !!");
    }
}

laptop.greet();


