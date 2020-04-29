// var - from beginning of JS,
// let, const - introduced in ES6 or ES2015

// var name = "John Doe";
// console.log(name);
// name = "Steve Smith";
// console.log(name);

var greeting;
// console.log(greeting);
greeting = "Hello";
// console.log(greeting);
greeting = 20;
greeting = true;
greeting = null;
greeting = undefined;

// console.log(greeting);

// letters, numbers, _(underscore), $
//var names should not start with number
// var 1name = 'test' -> error

// var $name -> variable for jQuery globally
// var _name -> variable for private variables

var firstName = "Helly"; // camelCase -> variables
var FirstName = "Helly"; // PascalCase -> functions and constructors
var first_name = "Helly"; // mostly php -> variables
var firstname = "Helly"; // not recommended -> variables

let name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

let wish;
console.log(wish);

// const
const myName = "Sid";
console.log(myName);
// myName = "Mad"; -> error (const cannot be reassigned)

// have to assign during init only for const
// const myGreeting; -> gives error

const person = {
  name: "John",
  age: 30
};

// Here object can be modified that is declared by const but cannot reassign
person.age = 25;

console.table(person);

const arr = [1, 2, 3, 4, 5];
arr.push("Hello");
console.table(arr);
