class Length {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }

  static getCentimeters(value) {
    return new Length(value, 'Centimeter');
  }

  static getMeters(value) {
    return new Length(value, 'Meter');
  }

  isDistanceEquals(distanceObj) {
    return false;
  }
}

module.exports = Length;
