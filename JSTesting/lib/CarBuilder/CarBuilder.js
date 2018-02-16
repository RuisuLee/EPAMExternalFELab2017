//http://opensas.wordpress.com/2013/06/23/sharing-you-javascript-ninja-secrets-run-your-jasmine-tests-on-jsfiddle/
function CarBuilder(){
	this.seatsCount = 0;
	this.tripComputer = false;
	this.gps = false;
	this.tyreSize = 'small';
}

CarBuilder.prototype.reset = function(){
	this.seatsCount = 0;
	this.tripComputer = false;
	this.gps = false;
	this.tyreSize = 'small';
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
  return {
    getSeats : this.seatsCount,
    getTripComputer : this.tripComputer,
    getGps : this.gps,
    getTyreSize : this.tyreSize
  }
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
