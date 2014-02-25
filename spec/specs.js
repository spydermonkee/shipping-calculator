
describe('Shipment', function() {
  describe('getRate', function () {
    it('returns a rate from the weight of the package', function(){
    
    var currentPackage = Object.create(Package);
      currentPackage.weight = 5;
      currentPackage.dimensions = 10;
     var testShipment = Object.create(Shipment);
      testShipment.distance = 2050;
      testShipment.pickUp = true;
      testShipment.signature = true;
      testShipment.packages = [currentPackage];
      testShipment.getRate().should.equal(163);
    });
  });
});

describe('Package', function(){
  describe('packageCalc', function(){
    it('returns a price for the package', function(){
      var newPackage = Object.create(Package);
      newPackage.weight = 5;
      newPackage.dimensions = 10;
      newPackage.packageCalc().should.equal(10)
    })
  })
})


/*describe('Triangle', function(){
  describe('valid', function() {
    it('returns true if three lengths can create a triangle', function(){
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 2;
      testTriangle.sideB = 3;
      testTriangle.sideC = 4;
      testTriangle.valid().should.equal(true);
    });
    it('returns false if three lengths cannot create a triangle', function(){
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 3;
      testTriangle.sideB = 8;
      testTriangle.sideC = 4;
      testTriangle.valid().should.equal(false);
    });
  });*/
 
