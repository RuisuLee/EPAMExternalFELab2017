var Ball = require('../lib/Ball/ball');
var LineBallDecorator = require('../lib/Ball/lineballdecorator');
var RedBallDecorator = require('../lib/Ball/redballdecorator');

describe("Ball tests", function(){

    it("should return new object", function(){
var newObject = new Ball();
        expect(newObject).toBeDefined();
    });

    it("should return 'ball' description", function(){
var newObject = new Ball();
        expect(newObject.getDescription()).toBe("ball");
    });

    it("should be cold getDescriptions for Ball", function(){
var newObject = new Ball();
    spyOn(newObject, 'getDescription');
    new LineBallDecorator(newObject).getDescription();
        expect(newObject.getDescription).toHaveBeenCalled();
    });

    it("should return LineBallDecorator description with 'lines'", function(){
var newObject = new Ball();
        expect(new LineBallDecorator(newObject).getDescription()).toBe("lines ball");
    });
});
