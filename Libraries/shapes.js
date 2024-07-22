class Shapes {
    constructor (text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
}

class Square extends Shapes {
    render(){
        return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}" />`;
    }
}

class Circle extends Shapes {
    render(){
        return `<circle cx="100" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shapes {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Square, Circle, Triangle };

// let exmapleOne = new Square("AAA","Blue","gold")
// console.log(exmapleOne)

// let exampleTwo = new Triangle("BBB", "Purple", "red")
// console.log(exampleTwo)
// console.log(exampleTwo.render())

// const triangle = new Triangle('blue');
// const circle = new Circle('red');
// const square = new Square('green');

// console.log(triangle.render()); // Output: <polygon points="150,18 244,182 56,182" fill="blue" />
// console.log(circle.render());   // Output: <circle cx="100" cy="100" r="80" fill="red" />
// console.log(square.render());   // Output: <rect x="50" y="50" width="100" height="100" fill="green" />

