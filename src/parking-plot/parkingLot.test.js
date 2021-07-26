const ParkingLot = require('./parkingLot');
const Vehicle = require('./vehicle');
const { VEHICLE_TYPES } = require('../constants');

const Owner = require('./owner');

jest.mock('./owner.js');

beforeAll(() => {
  Owner.mockImplementation(() => {
    return {
      notifyWhenCapacityFull: jest.fn(),
      notifyWhenSpaceAvailable: jest.fn(),
    };
  });
});

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

  describe('notifications', () => {
    test('should notify owner when capacity is full', () => {
      const owner = new Owner();
      const parkingLot = new ParkingLot(1, owner);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      parkingLot.parkVehicle(firstCar);

      expect(owner.notifyWhenCapacityFull.mock.calls.length).toBe(1);
    });

    test('should notify owner when space becomes available', () => {
      const owner = new Owner();
      const parkingLot = new ParkingLot(1, owner);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      parkingLot.parkVehicle(firstCar);
      parkingLot.unParkVehicle(firstCar);

      expect(owner.notifyWhenSpaceAvailable.mock.calls.length).toBe(1);
    });
  });
});
