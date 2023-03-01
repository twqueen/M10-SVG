// generate a test file for shapes.js
// import shapes.js
const { Square, Circle, Triangle }  = require("./shapes.js")

// describe a test for each shape
describe('Shape', () => {
    describe('square', () => {
        it('should look like a square with red color', () => {
            // for expectations
            const color = "red";
            const square = new Square();
            // need to input color for shape class otherwise test will come as undefined
            square.color = "red"
            expect(square.render()).toEqual(`<rect x="50" y="20" width="160" height="160" fill="${color}"/>`)
        })
    })
});

describe('Shape', () => {
    describe('triangle', () => {
        it('should look like a triangle with red color', () => {
            const color = "red";
            const triangle = new Triangle();
            triangle.color = "red"
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`)
        })
    })
});

describe('Shape', () => {
    describe('circle', () => {
        it('should look like a circle with red color', () => {
            const color = "red";
            const circle = new Circle();
            circle.color = "red"
            expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`)
        })
    })
});