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
