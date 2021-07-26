const CapacityFullError = require('./capacityFullError');

class ParkingLot {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.parkingSlots = [];
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber);
  }

  notifyCapacityFull() {
    this.subscribers.forEach((subscriber) => subscriber.notifyWhenCapacityFull());
  }

  notifySpaceAvailable() {
    this.subscribers.forEach((subscriber) => subscriber.notifyWhenSpaceAvailable());
  }

  parkVehicle(vehicle) {
    // full capacity check
    if (this.isParkingLotFull()) {
      throw new CapacityFullError();
    }

    this.parkingSlots.push(vehicle);

    if (this.isParkingLotFull()) {
      this.notifyCapacityFull();
    }
  }

  unParkVehicle(vehicleToUnPark) {
    // empty check
    if (this.parkingSlots.length === 0) {
      return;
    }

    const shouldNotifyForAvailableSpace = this.isParkingLotFull();

    this.parkingSlots = this.parkingSlots.filter(
      (vehicle) => vehicle.licencePlate !== vehicleToUnPark.licencePlate
    );

    if (shouldNotifyForAvailableSpace) {
      this.notifySpaceAvailable();
    }
  }

  isVehicleParked(vehicleToFind) {
    return (
      this.parkingSlots.find((vehicle) => vehicle.licencePlate === vehicleToFind.licencePlate) !==
      undefined
    );
  }

  isParkingLotFull() {
    return this.parkingSlots.length === this.capacity;
  }
}

module.exports = ParkingLot;
