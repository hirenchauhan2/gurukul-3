class Rectangle {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  getArea() {
    return this.length * this.breadth;
  }
}

module.exports = Rectangle;
