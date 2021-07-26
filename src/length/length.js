const {
  UNITS: { CENTIMETER, METER },
} = require('../constants');

class Length {
  constructor(value, type) {
    this.value = value;
    this.type = type;
  }

  /* eslint complexity: ["error", 2] */
  isDistanceEquals(distanceObj = null) {
    // null safety
    if (!distanceObj) {
      return false;
    }

    if (this.type === distanceObj.type) {
      return this.value === distanceObj.value;
    }

    if (distanceObj.type === METER && this.type === CENTIMETER) {
      return this.value / 100 === distanceObj.value;
    }

    if (distanceObj.type === CENTIMETER && this.type === METER) {
      return this.value * 100 === distanceObj.value;
    }

    return false;
  }
}

module.exports = Length;
