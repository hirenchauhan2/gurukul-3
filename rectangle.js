class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  static createSquare(side) {
    return new Rectangle(side, side);
  }

  getArea() {
    return this.length * this.breadth;
  }

  getPerimeter() {
    return 2 * (this.length + this.breadth);
  }
}

module.exports = Rectangle;
