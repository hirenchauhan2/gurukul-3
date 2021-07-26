const Subscriber = require('./subscriber');

class Attendant extends Subscriber {
  constructor(name, parkingLot) {
    super();
    this.name = name;
    this.parkingLot = parkingLot;
  }

  parkVehicle(vehicle) {
    this.parkingLot.parkVehicle(vehicle);
  }

  unParkVehicle(vehicle) {
    this.parkingLot.unParkVehicle(vehicle);
  }

  isVehicleParked(vehicle) {
    return this.parkingLot.isVehicleParked(vehicle);
  }
}

module.exports = Attendant;
