class Child{
  constructor(next){
      this.next = next;
  }

  eat(appels){
    appels -= Math.round(Math.random()*2+1);
    if(appels <= 0){
        console.log("Я жадина " + appels);
    }else{
        console.log("Передали " + appels);
    }
    if(this.next){
        this.next.eat(appels);
    }
  }
}
module.exports = Child;
