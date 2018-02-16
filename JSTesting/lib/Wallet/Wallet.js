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

module.exports = Wallet;
