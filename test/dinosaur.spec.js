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
      it('throw an error when I don\'t pass a string as my noise method', function(){
        try {
          let newDinosaur = new window.zoo.Dinosaur('alleyTheDinosaur', new Date('02/02/1000'));//new class instantiation
          newDinosaur.roar([999]);//passing it something thats not a string to catch error in right time and place
        } catch(err){
          if(err instanceof TypeError) {//typerError is a class and testing if error is of that class
            expect(err.message).to.equal('Arguement provided was not a string, need a string');
          } else {
            throw err;
          }
        }

      });
    });
  });
}());
