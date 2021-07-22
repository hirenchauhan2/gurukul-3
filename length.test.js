const Length = require('./length');

describe('Length', () => {
  test('should return true if 100 centimeter equals to 1 meter', () => {
    const centimeter = Length.getCentimeters(100);
    const meter = Length.getMeters(1);

    expect(centimeter.isDistanceEquals(meter)).toBeTruthy();
  });
});
