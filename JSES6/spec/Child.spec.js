var Child = require('../lib/Child and appels/child');

describe("Child tests", function(){
  it("should return next child", function(){
    var girl1 = new Child();
    var boy2 = new Child(girl1);
    expect(boy2.next).toBe(girl1);
  });

  it("should be called 'eat' for next child", function(){
    const boy1 = new Child();
    const girl1 = new Child(boy1);

    spyOn(boy1, 'eat');
    girl1.eat(10);
    expect(boy1.eat).toHaveBeenCalled();
  });

  it("count of apples should decrease in the next child", function(){
    const boy1 = new Child();
    const girl1 = new Child(boy1);

    spyOn(boy1, 'eat');
    girl1.eat(10);
    expect(boy1.eat.calls.argsFor(0)).toBeLessThan(10);
  });
});
