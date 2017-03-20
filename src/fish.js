(function() {
  'use strict';
  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

  window.zoo.Fish = class Fish extends Animal{
    constructor(name, dateOfBirth) {
      super(name, dateOfBirth);
    }
    static getScientificName() {
      return 'Cephalspidmomorphi';
    }
    layEggs(){
      let numbOfEggs = Math.ceil(Math.random() * 10);
      for(let i=1; i<=numbOfEggs; i++){
        let name = `fishBaby${i}`;
        new Fish(name, new Date());
      }
      return numbOfEggs;
    }
    splash(noise){
      return `${this.name} just splashed ${noise}!!!!!!`;
    }
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
