(function() {
  'use strict';
  let expect = chai.expect;

  describe('fish', function(){
    it('should recognize the name space', function(){
      expect(window.zoo).to.be.an('object');
    });
    describe('fish class', function(){
      it('should create an fish', function(){
        let fishy = new window.zoo.Fish( 'fishyTheFish', new Date ('01/01/1967'));//creating animal so can give name and dob
        expect(fishy).to.be.an('object'); //cus all classes create objs
        expect(fishy.name).to.equal('fishyTheFish');
      });
      it('throw an error when I don\'t pass a string as my noise method', function(){
        try {
          let newfish = new window.zoo.Fish('missfishyTheFish', new Date('03/03/2000'));//new class instantiation
          newfish.splash([111]);//passing it something thats not a string to catch error in right time and place
        } catch(err){
          if(err instanceof TypeError) {//typerError is a class and testing if error is of that class
            expect(err.message).to.equal('Need it to be a string for this to work');
          } else {
            throw err;
          }
        }
      });
    });
  });
}());
