var CarBuilder = require('../lib/CarBuilder/carbuilder');

describe("running jasmine in jsfiddle", function(){
    it("should test car builder", function(){
			// Given
     var carBuilder = new CarBuilder();
      // When
			carBuilder
	      .reset()
	      .setSeats(2)
	      .setTripComputer(true)
	      .setGPS(true)
	      .setTyreSize('big');

    	var car = carBuilder.getResult();

    	// Then
			expect(car.getSeats).toEqual(2);
      expect(car.getTripComputer).toEqual(true);
      expect(car.getGps).toEqual(true);
      expect(car.getTyreSize).toMatch('big');
    });
});
