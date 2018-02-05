//1.	Создать цепочку прототипов
var Vehical = { speed : 100 };
var Bike = { wheelsCount : 2 };
var Car = { wheelsCount : 4, doorsCount : 5 };
var MonsterTruck = { wheelsSize : 170 };

Bike.__proto__ = Vehical;
Car.__proto__ = Vehical;
MonsterTruck.__proto__ = Car;

console.log(Bike.speed);
console.log(Car.speed);
console.log(MonsterTruck.speed);
console.log(MonsterTruck.wheelsCount);
console.log(MonsterTruck.doorsCount);


//2.	Используя прототипное наследование создать иерархию классов для объектов из задания 1 с дополнениями
function Vehical() {
  this.speed = 100;
};
Vehical.prototype.move = function() {
  this.speed++;
  console.log(this.speed);
}
Vehical.prototype.stop = function() {
  this.speed = 0;
  console.log(this.speed);
}
Vehical.prototype.toString = function() {
  console.log("Метод 'toString' переопределен!");
}
Vehical.prototype.valueOf = function() {
  console.log("Метод 'valueOf' переопределен!");
}

function Bike() {
  Vehical.apply(this, arguments);
  this.wheelsCount = 2;
};
Bike.prototype = Object.create(Vehical.prototype);
Bike.prototype.constructor = Bike;
Bike.prototype.move = function() {
  this.speed++;
  console.log(this.speed + " Vrrr~um");
}
var b = new Bike();
b.move();
b.move();
b.move();
b.stop();

function Car() {
  Vehical.apply(this, arguments);
  this.wheelsCount = 4;
  this.doorsCount = 5;
  this._openDoorsCount = 0;
  this._closeDoorsCount = 0;
  Car.count++;
}
Car.count = 0;
Car.prototype = Object.create(Vehical.prototype);
Car.prototype.constructor = Car;
Car.prototype.openDoor = function() {
  if (this._openDoorsCount >= this.doorsCount) {
    console.log("Все двери открыты!");
  }else {
    this._openDoorsCount++;
    console.log("Число открытытых дверей: "+ this._openDoorsCount);
  }
}
Car.prototype.closeDoor = function() {
  if (this._closeDoorsCount >= this.doorsCount) {
    console.log("Все двери закрыты!");
  }else {
    this._closeDoorsCount++;
    console.log("Число закрытых дверей: "+ this._closeDoorsCount);
  }
}
var c1 = new Car();
var c2 = new Car();
var c3 = new Car();
console.log("Создано машин: "+ Car.count);
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.closeDoor();

function MonsterTruck() {
  Car.apply(this, arguments);
  this.wheelsSize = 170;
  this.doorsCount = 4;
  this._openDoorsCount = 0;
  this._closeDoorsCount = 0;
}
MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;
MonsterTruck.prototype.openDoor = function(){
  setTimeout(Car.prototype.openDoor.bind(this), 1000);
}
var m = new MonsterTruck();
var m1 = new MonsterTruck();
var m2 = new MonsterTruck();
var m3 = new MonsterTruck();
var m4 = new MonsterTruck();
m.openDoor();
m1.openDoor();
m2.openDoor();
m1.openDoor();
m1.openDoor();
m1.openDoor();
m3.openDoor();
m1.openDoor();
console.log("Создано машин: "+ Car.count);

//3.	Используя функциональное наследование повторить задачу из п2
function Vehical() {
  this.speed = 100;

  this.move = function() {
    this.speed++;
  };

  this.stop = function() {
  this.speed = 0;
  };

  this.toString = function() {
    console.log("Метод 'toString' переопределен!");
  };

  this.valueOf = function() {
    console.log("Метод 'valueOf' переопределен!");
  }
};

function Bike() {
  Vehical.apply(this, arguments);

  this.wheelsCount = 2;

  this.move = function() {
    this.speed++;
    console.log(this.speed + " Vrrr~um");
  };
};
var b = new Bike();
b.move();
b.move();
b.move();
b.stop();

function Car() {
  Vehical.apply(this, arguments);

  this.wheelsCount = 4;
  var doorsCount = 5;
  var openDoorsCount = 0;
  var closeDoorsCount = 0;
  Car.count++;

  this.openDoor = function() {
    if (openDoorsCount >= doorsCount) {
      console.log("Все двери открыты!");
    }else {
      openDoorsCount++;
      console.log("Число открытытых дверей: "+ openDoorsCount);
    }
  };

  this.closeDoor = function() {
    if (closeDoorsCount >= doorsCount) {
      console.log("Все двери закрыты!");
    }else {
      closeDoorsCount++;
      console.log("Число закрытых дверей: "+ closeDoorsCount);
    }
  };
}
Car.count = 0;
var c1 = new Car();
var c2 = new Car();
var c3 = new Car();
console.log("Создано машин: "+ Car.count);
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.openDoor();
c1.closeDoor();

function MonsterTruck() {
  Car.apply(this, arguments);
  this.wheelsSize = 170;

  var od = this.openDoor;

  this.openDoor = function(){
    setTimeout(od, 1000);
  }
}
var m = new MonsterTruck();
var m1 = new MonsterTruck();
var m2 = new MonsterTruck();
var m3 = new MonsterTruck();
var m4 = new MonsterTruck();
m.openDoor();
m1.openDoor();
m2.openDoor();
m1.openDoor();
m1.openDoor();
m1.openDoor();
m3.openDoor();
m1.openDoor();
console.log("Создано машин: "+ Car.count);

//4.	Исправтьте ошибки в коде
//1
function Animal(name) {
  this.name = name;
}

Animal.prototype.printName = function() {
  console.log(this.name);
}

function Rabbit(name) {
  Animal.apply(this, arguments);//добавила arguments
}
Rabbit.prototype = Object.create(Animal.prototype);//добавила вот эти
Rabbit.prototype.constructor = Rabbit;//строчки
var r = new Rabbit('Lucky');
r.printName(); // Should run without any errors and write 'Lucky'
console.log(Rabbit.prototype.hasOwnProperty('printName')); // Should be false
//2
var animal = {
  speed: 0
};

var mammal = {
  age: 3
};

mammal.__proto__ = animal;

var rabbit = {
  name: 'Lucky'
};

rabbit.__proto__ = mammal;//было: rabbit.__proto__ = animal;

console.log(rabbit.age); // Should be '3'
console.log(rabbit.hasOwnProperty(age)); // Should be 'false' (also fix error)
