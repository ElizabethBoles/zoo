(function() {
  'use strict';

  window.zoo = window.zoo || {};
  window.zoo.Animal = class Animals {
    constructor(name, dateOfBirth){
      this.name = name;
      console.log('creating a new Animal!');
      //if (!(Object.getPrototypeOf(dateOfBirth) === Date.prototype))
      if (! (dateOfBirth instanceof Date) ) {//if it's not instance of date throw this error
      let theError = new TypeError('Is not a date of birth, needs to be an instance of Date');
      theError.errorCode = 418;
      throw theError;
    }
    this.dob = dateOfBirth; //pertains to dob and will assign dob to this anim
    //property on an object
  }
  changeName(newName){
    this.name = newName;//method that allows the name of the animal to change
    if (Array.isArray(newName)) {//if it's not instance of date throw this error
    let theError = new TypeError('New name can not be an Array');
    theError.errorCode = 418;
    throw theError;
  }
}
getAge(){
  this.age = new Date().getUTCFullYear() - this.dob.getUTCFullYear();
  //is a method that calculates the age of the animal
  return this.age;
}
toString() {//method that returns a string underneath
  return `This animals name is ${this.name} and it's ${this.getAge()} years old`;
  //return this.name + ' is a member of ' + this.organization;
  //lets a user know basic info about the animal
  //returning a string that uses es6intsyntax
}
} //end of the class animal

let animal = new window.zoo.Animal('TIY', new Date('01/01/2000'));
console.log(animal);//returned the animal constructor obj dob + age
console.log(animal.getAge());//return just the age
console.log(animal.toString());//name age years old

}());
