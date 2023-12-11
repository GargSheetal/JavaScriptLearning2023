let alien = {
    name: 'Sheetal',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Apple'
    }
}

// printing all the properties of the object one by one
for (let key in alien) {
    console.log(key, alien[key]);
}

// printing all the key : value pairs in laptop
for (let key in alien.laptop) {
    console.log(key, alien.laptop[key]);
}