let store = {drivers:[], passengers:[], trips:[]};

let driverCount = 0;

class Driver {
  constructor(name){
    this.name = name;
    this.id = ++ driverCount;
    store.drivers.push(this)
  }

  trip(){
    return store.trips.filter(function(trip) {return trip.driverId === this.id}).bind(this).length;
  }

  passengers(){
    let passengers = [];
    return store.passengers.filter(function(trip){
      if (trip.driverId == this.id) {
        passenger = store.passenger.find(function(passenger){passenger.id == trip.passengerId});
        passengers.push(passenger);
      }
    })
    return passengers;
  }
}


let passengerCount = 0;

class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++ passengerCount;
    store.passengers.push(this)
  }

  trip(){
    return store.trips.filter(function(trip) {return trip.passengerId === this.id}).bind(this).length;
  }

  drivers(){
    let drivers = [];
    return store.drivers.filter(function(trip){
      passenger = this;
      if (trip.passengerId == this.id) {
        driver = store.drivers.find(function(driver){driver.id === trip.driverId});
        drivers.push(driver);
      }
    })
    return drivers;
  }
}

let tripCount = 0;

class Trip {
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripCount;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(function(driver) {return driver.id === this.driverId}.bind(this))
  };

  passenger() {
    return store.passengers.find(function(passenger) {return passenger.id === this.passengerId}.bind(this))
  }

}
