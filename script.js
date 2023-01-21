class Shape {
  constructor(color) {
    this.color = color;
  }

  drawShape() {
    console.log("Drawing a shape");
  }

  calculateArea() {
    console.log("Calculating area of shape");
  }
}

module.exports = Shape;

const Shape = require('./shape');

class Circle extends Shape {
  constructor(color) {
    super(color);
  }

  calculateArea() {
    console.log("Calculating area of circle");
  }
}

module.exports = Circle;

