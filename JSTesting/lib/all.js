//задание 1
function Ball(){};

Ball.prototype.getDescription = function(){
  return "ball";
};

function LineBallDecorator(ball){
  this.ball = ball;
};
LineBallDecorator.prototype.getDescription = function(){
  var res = "lines "+this.ball.getDescription();
  return res;
};

function RedBallDecorator(ball){
  this.ball = ball;
};
RedBallDecorator.prototype.getDescription = function(){
  var res = "red "+this.ball.getDescription();
  return res;
};

var b = new Ball();
console.log(new Ball().getDescription());
console.log(new RedBallDecorator(new LineBallDecorator(b)).getDescription());

//задание 2
function Wallet(name){
  this.name = name;
  this.amount = Math.round(Math.random() * 1000);
}
Wallet.prototype.createObs = function(obs){
  this.obs = obs;
}
Wallet.prototype.send = function(){
  console.log("Сейчас в кошельке "+this.name+" денег : "+this.amount);
  const minus = Math.round(Math.random() * 100);
  this.amount -= minus;
  console.log("Потратили из кошелька "+this.name+" : "+minus);
  if(this.amount > 0){
    setTimeout(this.send.bind(this),Math.random() * 500);
  }else{
    console.log(this.name+" пустой!");
  }
  console.log("Счёт кошелька "+this.obs.name+" до добавления : "+this.obs.amount);
  this.obs.eventFromWallet(minus);
  console.log("Добавили в кошелек "+this.obs.name+" : "+minus);
  console.log("Счёт кошелька "+this.obs.name+" после добавления : "+this.obs.amount);
}
Wallet.prototype.eventFromWallet = function(plus){
  this.amount += plus;
}

var wallet1 = new Wallet("wallet1");
var wallet2 = new Wallet("wallet2");

wallet1.createObs(wallet2);
wallet2.createObs(wallet1);

wallet1.send();
// wallet2.send(); //если запустить оба, то будет очень долго выполняться

//задание 3
function Child(next){
  this.next = next;
}
Child.prototype.eat = function(appels){
  appels -= Math.round(Math.random()*2+1);
  if(appels <= 0){
    console.log("Я жадина "+appels);
  }else{
    console.log("Передали "+appels);
  }
  if(this.next){
    this.next.eat(appels);
  }
}

const boy1 = new Child();
const girl1 = new Child(boy1);
const boy2 = new Child(girl1);
const girl2 = new Child(boy2);
const boy3 = new Child(girl2);

boy3.eat(10);
