(function() {
  'use strict';
  window.zoo = window.zoo || {};
  let Animal = window.zoo.Animal;

  window.zoo.Dinosaur = class Dinosaur extends Animal{//creating a dinosaur class which is
    constructor(name, dateOfBirth) {//extend is sub class of parent class
      //letting the dinosaur class know that we want to also construct its
      //parent class animal with these args
      super(name, dateOfBirth);//this Dinosaur is an animal as well so
      //when you create its name and dob it's also creating the
      //animal classes name dob //all dinosaurs are animals here
      //when we hit this line it goes to animal constructor and adds
      //all that stuff to dinosaur
    }
    static getScientificName() {
      return 'Dinosauria';
    }
    layEggs(){
      //construct new dinos return the # of new dinos i created
      //Math.random()
      let numbOfEggs = Math.ceil(Math.random() * 10);//rando # generated 1-10 here
      //can only do for each on array so have to do a forloop
      for(let i=1; i<=numbOfEggs; i++){//for each egg i want something to happen
          let name = 'dinoBaby${i}'; //i want my dino babys name to be 1-10
          // 'dinoBaby' + i;
          new Dinosaur(name, new Date());
      }
      return numbOfEggs;
    }
    roar(noise){
      return `${this.name} just roared ${noise}!!!!!!`;
    }
    toString() {//method that returns a string underneath
      return`This animal is a ${window.zoo.Dinosaur.getScientificName()}`;
      //calling the fn to figure out the species
    }
  };
  let dino = new window.zoo.Dinosaur('T-rex', new Date('01,01,2010'));
  console.log(dino);//new dino above
  console.log(dino.layEggs());//created a baby here
  console.log(window.zoo.Dinosaur.getScientificName());//dinosauria
  console.log(dino.roar('RAWR!!!'));
  console.log(dino.toString());


}());