function Car(seatsCount,tripComputer,gps,tyreSize){
    this.getSeats = function() {
        this.seatsCount = seatsCount;
        return this.seatsCount;
    }
    this.getTripComputer = function() {
        this.tripComputer = tripComputer;
        return this.tripComputer;
    }
    this.getGps = function() {
        this.gps = gps;
        return this.gps;
    }
    this.getTyreSize = function() {
        this.tyreSize = tyreSize;
        return this.tyreSize;
    }
}

function CarBuilder(){
	this.seatsCount = 4;
	this.tripComputer = false;
	this.gps = false;
	this.tyreSize = 'medium';
}

CarBuilder.prototype.reset = function(){
	this.seatsCount = 4;
	this.tripComputer = false;
	this.gps = false;
	this.tyreSize = 'medium';
  return this;
}
CarBuilder.prototype.setSeats = function(seatsCount){
	this.seatsCount = seatsCount;
	return this;
}
CarBuilder.prototype.setTripComputer = function(tripComputer){
	this.tripComputer = tripComputer;
	return this;
}
CarBuilder.prototype.setGPS = function(gps){
	this.gps = gps;
	return this;
}
CarBuilder.prototype.setTyreSize = function(tyreSize){
	this.tyreSize = tyreSize;
	return this;
}
CarBuilder.prototype.getResult = function(){
	var car = new Car(this.seatsCount, this.tripComputer, this.gps, this.tyreSize)
	return car;
}

// var carBuilder = new CarBuilder();
//
// carBuilder
//   .reset()
//   .setSeats(2)
//   .setTripComputer(true)
//   .setGPS(true)
//   .setTyreSize('big');
//
// var car = carBuilder.getResult();
//
// console.log(car.getSeats);
// console.log(car.getTripComputer);
// console.log(car.getGps);
// console.log(car.getTyreSize);

module.exports = CarBuilder;
