class Vehical{
    constructor() {
        this.speed = 100;
    }

    move() {
        this.speed++;
        console.log(this.speed);
    }

    stop(){
        this.speed = 0;
        console.log(this.speed);
    }

    toString(){
        return "Hello";
    }

    valueOf(){
        return this.speed;
    }
}

class Bike extends Vehical{
    constructor(){
        super();
    }

    move() {
        this.speed++;
        console.log(this.speed + " Vrrr~um");
    }
}

class Car extends Vehical{
    static COUNT = 0;
    constructor(){
        super();
        this.wheelsCount = 4;
        this.doorsCount = 5;
        this._openDoorsCount = 0;
        this._closeDoorsCount = 0;
        this.COUNT++;
    }

    openDoor() {
        if (this._openDoorsCount >= this.doorsCount) {
            console.log("Все двери открыты!");
        }else {
            this._openDoorsCount++;
            console.log("Число открытытых дверей: "+ this._openDoorsCount);
        }
    }

    closeDoor() {
        if (this._closeDoorsCount >= this.doorsCount) {
            console.log("Все двери закрыты!");
        }else {
            this._closeDoorsCount++;
            console.log("Число закрытых дверей: "+ this._closeDoorsCount);
        }
    }
}

class MonsterTruck extends Car{
    constructor(){
        super();
        this.wheelsSize = 170;
        this.doorsCount = 4;
        this._openDoorsCount = 0;
        this._closeDoorsCount = 0;
    }

    openDoor() {
        setTimeout(Car.openDoor(), 1000);
    }
}