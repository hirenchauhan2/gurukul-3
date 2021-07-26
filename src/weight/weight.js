const {
  UNITS: { KILOGRAM, GRAM },
} = require('../constants');

class Weight {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  isEqualTo(weightObject) {
    if (!(weightObject instanceof Weight)) {
      return false;
    }

    if (this.unit === weightObject.unit) {
      return this.value === weightObject.value;
    }

    if (weightObject.unit === KILOGRAM && this.unit === GRAM) {
      return this.value / 1000 === weightObject.value;
    }

    if (weightObject.unit === GRAM && this.unit === KILOGRAM) {
      return this.value * 1000 === weightObject.value;
    }

    return false;
  }
}

module.exports = Weight;
