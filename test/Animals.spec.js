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
      it('should throw an error when i try to create an animal with out a date object', function(){
        try {
          new window.zoo.Animal('annyTheAnimal', '01/01/1990');
        } catch(err) {
          if (err instanceof TypeError) {//if error is instance of type error i want to do some stuff
            console.info(err.message);//catching that error
            expect(err.message).to.equal('Is not a date of birth, needs to be an instance of Date');
            //got this from animals where i wrote error message
            //this line tests that it's exactly the error i want it to throw or its a faulty pass
          } else {
            throw err;
          }
        }
      });
      it('should throw an error when i try to create a new name for an animal with an array', function(){
        try {
         let newAnimal = new window.zoo.Animal('annyTheAnimal', new Date ('01/01/1990'));
         newAnimal.changeName([1,2,3,4,5]); //purposly put a bad arg and know its gunna throw an err
       } catch(err) {//so when the errors thrown need to catch it here
          if(err instanceof TypeError) {
            console.info(err.message);
            expect(err.message).to.equal('New name can not be an Array');
          } else {
            throw err;
          }
        }
      });

    });
  });
}());
