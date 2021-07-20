class Square {
  constructor(sideSize) {
    this.sideSize = sideSize;
  }

  getArea() {
    return Math.pow(this.sideSize, 2);
  }

  getPerimeter() {
    return this.sideSize * 4;
  }
}

module.exports = Square;
