const person = {
    firstname: 'Navin',
    lastname: 'Sharma',
    get fullname() {
        return (`${this.firstname} ${this.lastname}`)   // get keyword makes the fullname function a getter
    },
    set fullname(value) {
        const parts = value.split(" ");
        this.firstname = parts[0];
        this.lastname = parts[1];
    }
}

console.log(person.fullname);   // getting full name

person.fullname = 'Misha Arora';   // setting full name
console.log(person);
