const ParkingLot = require('./parkingLot');
const Vehicle = require('./vehicle');
const { VEHICLE_TYPES } = require('../constants');

describe('ParkingPlot', () => {
  describe('parkVehicle', () => {
    test('should park a car successfully', () => {
      const parkingPlot = new ParkingLot(3);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      expect(() => parkingPlot.parkVehicle(firstCar)).not.toThrow();
    });

    test('should throw an error when capacity is full', () => {
      const parkingPlot = new ParkingLot(0);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      expect(() => parkingPlot.parkVehicle(firstCar)).toThrow();
    });
  });

  describe('isVehicleParked', () => {
    test('should return true if vehicle is parked in parking plot', () => {
      const parkingPlot = new ParkingLot(3);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');
      parkingPlot.parkVehicle(firstCar);

      expect(parkingPlot.isVehicleParked(firstCar)).toBeTruthy();
    });
  });
});
