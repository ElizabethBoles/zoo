(function() {
  'use strict';
  let expect = chai.expect;

  describe('Animal', function(){
    it('should recognize the name space', function(){
      expect(window.zoo).to.be.an('object');
    });
    describe('Animal class', function(){
      it('should create an animal', function(){
        let Animal = new window.zoo.Animal( 'annyTheAnimal', new Date ('01/01/1990'));//creating animal so can give name and dob
        expect(Animal).to.be.an('object'); //cus all classes create objs
        expect(Animal.name).to.equal('annyTheAnimal');
      });
  });
}());
