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
    let driver = this;
    store.trips.forEach(function(trip){
      if (trip.driverId === driver.id) {
        let passenger = store.passengers.find(function(passenger){ return passenger.id === trip.passengerId});
        passengers.push(passenger);
      }
    });
    return passengers;
  }

  trips(){
    return store.trips.filter(function(trip){
      return trip.driverId === this.id
    }.bind(this));
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
    let passenger = this;
    store.drivers.forEach(function(trip){
      if (trip.passengerId == passenger.id) {
        let driver = store.drivers.find(function(driver){return driver.id === trip.driverId});
        drivers.push(driver);
      }
    }.bind(this))
    return drivers;
  }

  trips(){
    return store.trips.filter(function(trip){
      return trip.passengerId === this.id
    }.bind(this));
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
