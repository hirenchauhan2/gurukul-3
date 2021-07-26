const CapacityFullError = require('./capacityFullError');

class ParkingLot {
  constructor(capacity = 10, owner) {
    this.capacity = capacity;
    this.parkingSlots = [];
    this.owner = owner;
  }

  parkVehicle(vehicle) {
    // full capacity check
    if (this.isParkingLotFull()) {
      throw new CapacityFullError();
    }

    this.parkingSlots.push(vehicle);

    if (this.isParkingLotFull()) {
      this.owner?.notifyWhenCapacityFull();
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
      this.owner?.notifyWhenSpaceAvailable();
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
