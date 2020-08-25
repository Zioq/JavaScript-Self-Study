 /** [Module.exports 2]
  *  We can also wrap any collection of data and funcitons in an object, and export the object using `module.exeports`.
  */
 // `module.exports` exposes the currnt module as an object.  
 module.exports = {
     // Properties of the object.
     brand: "BMW",
     price: "C$40000",
     getInfo: function () {
         console.log(`This Car brand is ${this.brand} and the price is ${this.price}`);
     }
};
