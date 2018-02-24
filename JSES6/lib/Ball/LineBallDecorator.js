class LineBallDecorator{
  constructor(ball){
      this.ball = ball;
  }

  getDescription(){
      var res = "lines "+this.ball.getDescription();
      return res;
  }
}
module.exports = LineBallDecorator;
