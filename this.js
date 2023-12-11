// this refers to the current object

let laptop2 = {
    cpu: 'i7',
    ram: 12,
    brand: 'Dell',
    getConfig: function () {
        console.log(this.cpu);
    }
}

let laptop1 = {
    cpu: 'i9',
    ram: 16,
    brand: 'HP',
    compare: function (other) {
        if (this.cpu > other.cpu)
            console.log(this);
        else
            console.log(other);
    },
    getConfig: function () {
        console.log(this.cpu);
    }
}

laptop1.getConfig();
laptop2.getConfig();

// function getFastLaptop(laptop1, laptop2) {
//     if (laptop1.cpu > laptop2.cpu)
//         console.log(laptop1);
//     else
//         console.log(laptop2);
// }

// getFastLaptop(laptop1, laptop2);

laptop1.compare(laptop2);