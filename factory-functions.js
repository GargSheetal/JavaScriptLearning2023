// creating a template functions to create different objects from it

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
};

const circle1 = createCircle(2);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(1);
console.log(circle2);
