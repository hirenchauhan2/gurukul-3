const ParkingLot = require('./parkingLot');
const Vehicle = require('./vehicle');
const { VEHICLE_TYPES } = require('../constants');

describe('ParkingLot', () => {
  describe('parkVehicle', () => {
    test('should park a car successfully', () => {
      const parkingLot = new ParkingLot(3);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      expect(() => parkingLot.parkVehicle(firstCar)).not.toThrow();
    });

    test('should throw an error when capacity is full', () => {
      const parkingLot = new ParkingLot(0);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      expect(() => parkingLot.parkVehicle(firstCar)).toThrow();
    });
  });

  describe('unParkVehicle', () => {
    test('should un-park a vehicle', () => {
      const parkingLot = new ParkingLot(1);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      parkingLot.parkVehicle(firstCar);
      parkingLot.unParkVehicle(firstCar);

      expect(parkingLot.isVehicleParked(firstCar)).toBeFalsy();
    });
  });

  describe('isVehicleParked', () => {
    test('should return true if vehicle is parked in parking plot', () => {
      const parkingLot = new ParkingLot(3);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');
      parkingLot.parkVehicle(firstCar);

      expect(parkingLot.isVehicleParked(firstCar)).toBeTruthy();
    });
  });
});
