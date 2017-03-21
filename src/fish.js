(function() {
  'use strict';
  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

/**
 * [Blue print/construction of fish class that has to have name and dob]
 * @type {fish}
 */
  window.zoo.Fish = class Fish extends Animal{
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
    }
    static getScientificName() {
      return 'Cephalspidmomorphi';
    }
    /**
     * [this method is prototypical to the fish class and creates new fish based
     * off of a random number generated spontaneously]
     * @return {number} [number of eggs]
     */
    layEggs(){
      let numbOfEggs = Math.ceil(Math.random() * 10);
      for(let i=1; i<=numbOfEggs; i++){
        let name = `fishBaby${i}`;
        new Fish(name, new Date());
      }
      return numbOfEggs;
    }
    /**
     * [this method describes the noise that the fish makes]
     * @param  {string} noise [example: splash]
     * @return {string}       [actual description about the noise instance]
     */
     splash(noise){
      if(typeof noise !== 'string'){
        let theError = new TypeError('Need it to be a string for this to work');
        theError.errorCode = 418;
        throw theError;
      }
      return `${this.name} just splashed ${noise}!!!!!!`;
    }
    /**
     * [creates scientific information about the fish]
     * @return {string} [a sentence describing the scientific name]
     */
    toString() {
      return`This animal is a ${window.zoo.Fish.getScientificName()}`;
    }
  };
  let fish = new window.zoo.Fish('Fishy', new Date('01,01,1950'));
  console.log(fish);
  console.log(fish.layEggs());
  console.log(window.zoo.Fish.getScientificName());//dinosauria
  console.log(fish.splash('Splash...'));
  console.log(fish.toString());

}());
