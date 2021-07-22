const Length = require('./length');
const { CENTIMETER, METER } = require('../constants');

describe('Length', () => {
  test('should return true if 100 centimeter equals to 1 meter', () => {
    const centimeter = new Length(100, CENTIMETER);
    const meter = new Length(1, METER);

    expect(centimeter.isDistanceEquals(meter)).toBeTruthy();
  });

  test('should return true if 1 meter equals to 100 centimeter', () => {
    const centimeter = new Length(100, CENTIMETER);
    const meter = new Length(1, METER);

    expect(meter.isDistanceEquals(centimeter)).toBeTruthy();
  });

  test('should return true if given 1.5 meter equals to 150 centimeter', () => {
    const centimeter = new Length(150, CENTIMETER);
    const meter = new Length(1.5, METER);

    expect(meter.isDistanceEquals(centimeter)).toBeTruthy();
  });

  test('should return false if given 100 centimeters and 1 centimeter', () => {
    const centimeter100 = new Length(100, CENTIMETER);
    const centimeter1 = new Length(1, CENTIMETER);

    expect(centimeter100.isDistanceEquals(centimeter1)).toBeFalsy();
  });

  test('should return false if given 100 centimeters and null as meter', () => {
    const centimeter100 = new Length(100, CENTIMETER);

    expect(centimeter100.isDistanceEquals(null)).toBeFalsy();
  });
});
