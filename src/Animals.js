(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Animals = class Animals {
    constructor(name, dateOfBirth){
      this.name = name;
      console.log('creating a new Animal!');
      if (! (dateOfBirth instanceof Date) ) {
        dateOfBirth = new Date();//creates date stamp here if needed
      }
      this.dob = dateOfBirth; //pertains to dob and will assign dob to this anim
    }
    changeName(newName){
      this.name = newName;
    }
    getAge(){
      this.age = new Date().getUTCFullYear() - this.dob.getUTCFullYear();

    }
    toString() {
      return `This animals name is ${this.name} and it's ${this.age} years old`;
    }
  };

}());
