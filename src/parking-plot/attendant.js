class Attendant {
  constructor(name, parkingLot) {
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
