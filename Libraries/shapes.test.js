// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const { Square, Circle, Triangle } = require('./shapes');

describe('Square', () => {
    it('should return SVG for square', () => {
        const square = new Square('Square', 'blue', 'white');
        expect(square.render()).toBe('<rect x="50" y="50" width="100" height="100" fill="blue" />');
    });
});

describe('Circle', () => {
    it('should return SVG for circle', () => {
        const circle = new Circle('Circle', 'red', 'black');
        expect(circle.render()).toBe('<circle cx="100" cy="100" r="80" fill="red" />');
    });
});

describe('Triangle', () => {
    it('should return SVG for triangle', () => {
        const triangle = new Triangle('Triangle', 'green', 'black');
        expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });
});

