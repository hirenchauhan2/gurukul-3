const Weight = require('./weight');
const Length = require('../length/length');

const {
  UNITS: { GRAM, KILOGRAM, CENTIMETER },
} = require('../constants');

describe('Weight', () => {
  const weight1Kg = new Weight(1, KILOGRAM);
  const weight1000Gram = new Weight(1000, GRAM);
  describe('isEqualTo()', () => {
    it('should return true when given 1000 grams and 1Kilogram ', () => {
      const isSameWeight = weight1Kg.isEqualTo(weight1000Gram);

      expect(isSameWeight).toBeTruthy();
    });

    it('should return true when given 2Kilogram and 2000 grams', () => {
      const weight2Kg = new Weight(2, KILOGRAM);
      const weight2000Gram = new Weight(2000, GRAM);

      const isSameWeight = weight2Kg.isEqualTo(weight2000Gram);

      expect(isSameWeight).toBeTruthy();
    });

    it('should return false when given 2Kilogram and 1000 grams', () => {
      const weight2Kg = new Weight(2, KILOGRAM);

      const isSameWeight = weight2Kg.isEqualTo(weight1000Gram);

      expect(isSameWeight).toBeFalsy();
    });

    it('should return false when given 1000 grams null Kilogram', () => {
      const isSameWeight = weight1000Gram.isEqualTo();

      expect(isSameWeight).toBeFalsy();
    });

    it('should return false when given 1 gram and 1 centimeter', () => {
      const weight1gram = new Weight(1, GRAM);
      const length1Centimeter = new Length(1, CENTIMETER);
      const isSameWeight = weight1gram.isEqualTo(length1Centimeter);

      expect(isSameWeight).toBeFalsy();
    });
  });
});
