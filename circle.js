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
