var Package = {
  packageCalc: function(){
    var packageRate = this.weight * 2;
    if(this.dimensions > 100){
      packageRate += 10;
    } 
    return packageRate;
  }
}
var Shipment = {
  getRate: function(){
   var rate = 0;
   var packageTotal = 0;

  if(this.distance > 100) {
    rate += 3;
  } else if(this.distance > 500) {
  rate += (this.distance * .2)/100;
  }
  if(this.pickUp){
    rate += 100;
  }
  if(this.signature){
    rate += 50;
  }
  this.packages.forEach(function(pack){
    console.log(pack);
    rate += pack.packageCalc();
  })
  return rate;
  }
};


/*var package1 =

var newShipment = Object.create(Shipment);
newShipment.distance = 5000;
newShipment.pickUp = false;
newShipment.signature = false;
newShipment.packages = [package1,package2];
*/





