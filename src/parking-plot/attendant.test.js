const ParkingLot = require('./parkingLot');
const Vehicle = require('./vehicle');
const { VEHICLE_TYPES } = require('../constants');
const Attendant = require('./attendant');

describe('Attendant', () => {
  describe('parkVehicle', () => {
    test('should park a car successfully', () => {
      const parkingLot = new ParkingLot(3);
      const attendant = new Attendant('Dom', parkingLot);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      expect(() => attendant.parkVehicle(firstCar)).not.toThrow();
    });

    test('should throw an error when capacity is full', () => {
      const parkingLot = new ParkingLot(0);
      const attendant = new Attendant('Dom', parkingLot);

      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      expect(() => attendant.parkVehicle(firstCar)).toThrow();
    });
  });

  describe('unParkVehicle', () => {
    test('should un-park a vehicle', () => {
      const parkingLot = new ParkingLot(1);
      const attendant = new Attendant('Dom', parkingLot);

      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      attendant.parkVehicle(firstCar);
      attendant.unParkVehicle(firstCar);

      expect(attendant.isVehicleParked(firstCar)).toBeFalsy();
    });
  });

  describe('isVehicleParked', () => {
    test('should return true if vehicle is parked in parking plot', () => {
      const parkingLot = new ParkingLot(3);
      const attendant = new Attendant('Dom', parkingLot);

      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');
      attendant.parkVehicle(firstCar);

      expect(attendant.isVehicleParked(firstCar)).toBeTruthy();
    });
  });
});
