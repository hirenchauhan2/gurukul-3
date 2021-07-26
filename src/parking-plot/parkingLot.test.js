const ParkingLot = require('./parkingLot');
const Vehicle = require('./vehicle');
const { VEHICLE_TYPES } = require('../constants');
const Subscriber = require('./subscriber');
const Attendant = require('./attendant');

jest.mock('./subscriber');

beforeAll(() => {
  Subscriber.mockImplementation(() => {
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
    test('should return true if vehicle is parked in parking lot', () => {
      const parkingLot = new ParkingLot(3);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');
      parkingLot.parkVehicle(firstCar);

      expect(parkingLot.isVehicleParked(firstCar)).toBeTruthy();
    });
  });

  describe('notifications', () => {
    test('should notify owner when capacity is full', () => {
      const owner = new Subscriber();
      const parkingLot = new ParkingLot(1);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      parkingLot.addSubscriber(owner);

      parkingLot.parkVehicle(firstCar);

      expect(owner.notifyWhenCapacityFull.mock.calls.length).toBe(1);
    });

    test('should notify attendant when space becomes available', () => {
      const attendant = new Attendant();
      const parkingLot = new ParkingLot(1);
      const firstCar = new Vehicle(VEHICLE_TYPES.car, 'ABC');

      parkingLot.addSubscriber(attendant);
      parkingLot.parkVehicle(firstCar);
      parkingLot.unParkVehicle(firstCar);

      expect(attendant.notifyWhenSpaceAvailable.mock.calls.length).toBe(1);
    });
  });
});
