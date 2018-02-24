class RedBallDecorator{
  constructor(ball){
      this.ball = ball;
  }

  getDescription(){
      var res = "red "+this.ball.getDescription();
      return res;
  }
}

module.exports = RedBallDecorator;
