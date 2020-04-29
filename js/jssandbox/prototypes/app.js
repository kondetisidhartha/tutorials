// Objects -> Prototypes
// each prototype itself an object
// Objects inherit from prototypes

// Object.prototype
// Person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Since calculateAge is same for all objects, move it to object prototype
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
// Create full name prototype
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
}


const personOne = new Person('John', 'Doe', '06-04-1989');
const personTwo = new Person('Jane', 'Doner', '09-21-1975');

console.log(personTwo.getFullName())
personTwo.getsMarried('Smith')
console.log(personTwo.getFullName())
console.log(personTwo.hasOwnProperty('phoneNumber'))