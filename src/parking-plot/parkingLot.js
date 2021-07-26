const CapacityFullError = require('./capacityFullError');

class ParkingLot {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.parkingSlots = [];
  }

  parkVehicle(vehicle) {
    // full capacity check
    if (this.isParkingLotFull()) {
      throw new CapacityFullError();
    }

    this.parkingSlots.push(vehicle);
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
