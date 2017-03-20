(function() {
  'use strict';
  let expect = chai.expect;

  describe('dinosaur', function(){
    it('should recognize the name space', function(){
      expect(window.zoo).to.be.an('object');
    });
    describe('dinosaur class', function(){
      it('should create an animal', function(){
        let dino = new window.zoo.Dinosaur( 'dinoTheDinosaur', new Date ('01/01/900'));//creating animal so can give name and dob
        expect(dino).to.be.an('object'); //cus all classes create objs
        expect(dino.name).to.equal('dinoTheDinosaur');
      });
    });
  });
}());
