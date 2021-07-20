class Square {
  constructor(sideSize) {
    this.sideSize = sideSize;
  }
  getArea() {
    return Math.pow(this.sideSize, 2);
  }
}

module.exports = Square;
