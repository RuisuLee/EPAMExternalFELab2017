function LineBallDecorator(ball){
  this.ball = ball;
};
LineBallDecorator.prototype.getDescription = function(){
  var res = "lines "+this.ball.getDescription();
  return res;
};

module.exports = LineBallDecorator;
