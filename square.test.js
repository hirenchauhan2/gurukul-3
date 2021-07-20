const Square = require('./square');

describe('Square', () => {
  describe('getArea()', () => {
    it('should return 16 for square of side size of 4', () => {
      let square = new Square(4);
      const result = square.getArea();
      expect(result).toBe(16);
    });
  });
});
