const WEIGHT = 'WEIGHT';
const LENGTH = 'LENGTH';

const Unit = require('./measurement/unit');

const UNITS = Object.freeze({
  CENTIMETER: new Unit('CENTIMETER', LENGTH, 1),
  METER: new Unit('METER', LENGTH, 0.01),
  GRAM: new Unit('GRAM', WEIGHT, 1),
  KILOGRAM: new Unit('KILOGRAM', WEIGHT, 0.001),
});

const VEHICLE_TYPES = {
  CAR: 'car',
};

module.exports = { UNITS, VEHICLE_TYPES };
