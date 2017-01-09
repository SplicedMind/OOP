(function(){
  'use strict';

  var jasmine = require('jasmine');

  var myApp = require('../app/OOP.js');

  describe("Human Class: Create a human, make it speak", function() {

    it("The human should be called 'John Doe' if no name is passed as a parameter", function() {
      var femi = new myApp.Human();
      expect(femi.name).toEqual('John Doe');
      expect(femi.sex).toBe('not stated');
    });

    it("The car name and model should be a property of the car", function() {
      var lady  = new myApp.Human('Seyi', 'female');
      expect(lady.name).toBe('Seyi');
      expect(lady.sex).toBe('female');
      expect(lady.voice).toBe('Lovely');
      expect(lady.apperance).toBe('Pretty');
    });

    it("The car shoud have four (4) doors except its a Porshe or Koenigsegg", function() {
      var opel  = new myApp.Human('Opel', 'male', 28, 'German');
      expect(opel.nationality).toBe('German');
      expect(opel.language).not.toBe('Yoruba');
    });

    it("The car shoud have four (4) wheels except its a type of trailer", function() {
      var man  = new myApp.Human('Akintunde', 'male', 33, 'Nigerian');
      expect(man.color).toBe('Black');
      expect(man.voice).not.toBe('Horrible');

      var koenigsegg = new myApp.Human('Koenigsegg');
      expect(koenigsegg.name).toBe('Koenigsegg');
      expect(koenigsegg.voice).not.toBe('Lovely');
    });

     it("The Trailer should have speed 0 km/h until you put `the pedal to the metal`", function() {
      var man  = new myApp.Human('MAN', 'male', 40, 'English');
      expect(man.speak()).toBe('Am proud of my heritage');            
    });

    it("The car drive function should return the instance of the Car class", function() {
      var person  = new myApp.Human('Ade', 'male', 22, 'Nigerian');
      var speaks = person.speak();
      expect(person instanceof myApp.Human).toBeTruthy();
      expect(typeof person.speak).toBe(typeof (function (){}));
      expect(person.apperance).toBe('Handsome');
      expect(person.speak()).toBe('Omo yoruba ni mi, oruko mi si ni Ade');
    });


  });
})();