const Rectangle = require('./rectangle');

describe('Rectangle', () => {
  test('should just run!', () => {
    expect(1).toBe(1);
  });
  describe('getArea()', () => {
    test('should return the area of rectangle of length 4 and breadth 4', () => {
      const rectangle = new Rectangle(4, 4);
      const result = rectangle.getArea();

      expect(result).toBe(16);
    });
  });

  describe('getPerimeter()', () => {
    test('should return the perimeter of rectangle of length 6 and breadth 4', () => {
      const rectangle = new Rectangle(6, 4);
      const result = rectangle.getPerimeter();

      expect(result).toBe(20);
    });
  });
});

describe('Square', () => {
  describe('getArea()', () => {
    it('should return 16 for square of side size of 4', () => {
      const square = Rectangle.createSquare(4);
      const result = square.getArea();
      expect(result).toBe(16);
    });
  });

  describe('getPerimeter()', () => {
    it('should return 20 for square of side size of 5', () => {
      const square = Rectangle.createSquare(5);

      const result = square.getPerimeter();
      expect(result).toBe(20);
    });
  });
});
