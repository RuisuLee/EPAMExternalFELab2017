var Wallet = require('../lib/Wallet/wallet');

describe("Wallet tests", function(){
  it("should return wallet name", function(){
    var w = new Wallet("w1");
    expect(w.name).toBe("w1");
  });

  it("should be cold send for wallet", function(){
    var w = new Wallet("w1");
    spyOn(w, 'send');
    w.send();
    expect(w.send).toHaveBeenCalled();
  });

  it("should be cold createObs for wallet", function(){
    var wallet1 = new Wallet("wallet1");
    var wallet2 = new Wallet("wallet2");
    wallet1.createObs(wallet2);
    wallet2.createObs(wallet1);
    expect(wallet1.obs.name).toBe("wallet2");
  });
});
