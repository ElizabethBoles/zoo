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
    });
  });
}());
