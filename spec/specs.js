describe('Triangle', function(){
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
  });
  describe('triType', function(){
    it('will return eqilateral if triangle passed is equilateral', function(){
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 8;
      testTriangle.sideB = 8;
      testTriangle.sideC = 8;
      testTriangle.triType().should.equal('equilateral');
    })
    it('will return "isosceles" if a triangle passed is an isoceles', function (){ 
      var testTriangle = Object.create(Triangle);
      testTriangle.sideA = 7;
      testTriangle.sideB = 7;
      testTriangle.sideC = 13; 
      testTriangle.triType().should.equal('isosceles');
    })
   it('will return "scalene" if a triangle passed is a scalene triangle', function() {
    var testTriangle = Object.create(Triangle);
    testTriangle.sideA = 7;
    testTriangle.sideB = 8;
    testTriangle.sideC = 9;
    testTriangle.triType().should.equal('scalene');
   })
  })
});
