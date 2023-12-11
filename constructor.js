// constructor function - to differentiate with other functions, start the constructor name with capital letter

function Alien(name, tech) {
    this.name = name;
    this.tech = tech;
    this.work = function () {
        console.log("Learning JavaScript");
    }
}

let alien1 = new Alien('Sheetal', 'JS');
let alien2 = new Alien('Kiran', 'Java')
alien1.tech = 'Python';

// console.log(alien1);
alien1.work();