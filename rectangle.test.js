const Rectangle = require('./rectangle');

function compileAndroidCode() {
  throw new Error('YYou are using the wrong JDK--');
}

describe('Rectangle', () => {
  test('should just run!', () => {
    expect(1).toBe(1);
  });
  describe('getArea()', () => {
    test('should return the area of rectangle of length 4 and breadth 4', () => {
      let rectangle = new Rectangle(4, 4);
      const result = rectangle.getArea();

      expect(result).toBe(16);
    });
  });

  describe('getPerimeter()', () => {
    test('should return the perimeter of rectangle of length 6 and breadth 4', () => {
      let rectangle = new Rectangle(6, 4);
      const result = rectangle.getPerimeter();

      expect(result).toBe(20);
    });
  });
});
