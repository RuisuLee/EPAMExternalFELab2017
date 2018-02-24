class Car{
	constructor(seatsCount,tripComputer,gps,tyreSize){
        this.seatsCount = seatsCount;
        this.tripComputer = tripComputer;
        this.gps = gps;
        this.tyreSize = tyreSize;
    }

    getSeats(){
        return this.seatsCount;
    }

    getTripComputer(){
        return this.tripComputer;
    }

    getGps(){
        return this.gps;
    }

    getTyreSize(){
        return this.tyreSize;
    }
}

class CarBuilder{
    constructor(){
        this.seatsCount = 4;
        this.tripComputer = false;
        this.gps = false;
        this.tyreSize = 'medium';
    }

    reset(){
        this.seatsCount = 4;
        this.tripComputer = false;
        this.gps = false;
        this.tyreSize = 'medium';
        return this;
    }

    setSeats(seatsCount){
        this.seatsCount = seatsCount;
        return this;
    }

    setTripComputer(tripComputer){
        this.tripComputer = tripComputer;
        return this;
    }

    setGPS(gps){
        this.gps = gps;
        return this;
    }

    setTyreSize(tyreSize){
        this.tyreSize = tyreSize;
        return this;
    }

    getResult(){
        var car = new Car(this.seatsCount, this.tripComputer, this.gps, this.tyreSize)
        return car;
    }
}
module.exports = CarBuilder;
