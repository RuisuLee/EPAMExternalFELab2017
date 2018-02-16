function RedBallDecorator(ball){
  this.ball = ball;
};
RedBallDecorator.prototype.getDescription = function(){
  var res = "red "+this.ball.getDescription();
  return res;
};


module.exports = RedBallDecorator;
