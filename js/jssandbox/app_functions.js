// // FUNCTION DECLARATIONS
// function greet() {
//   //console.log("Hello");
//   return "Hello";
// }

// // console.log(greet());

// function greet(firstName, lastName) {
//   //console.log("Hello");
//   return "Hello " + firstName + " " + lastName;
// }

// console.log(greet("John", "Doe"));

// Back in ES5
// function greet(firstName, lastName) {
//   // Default values
//   if (typeof firstName === "undefined") {
//     firstName = "John";
//   }
//   if (typeof lastName === "undefined") {
//     lastName = "Doe";
//   }
//   //console.log("Hello");
//   return "Hello " + firstName + " " + lastName;
// }

// console.log(greet());

// In ES6 defaults are given to arguments itself
function greet(firstName = "John", lastName = "Doe") {
  //console.log("Hello");
  return "Hello " + firstName + " " + lastName;
}

// console.log(greet());

// Function Expression
const square = function(num) {
  return num * num;
};

// console.log(square(8));

// Immediately Invokable Function expression IIFEs
// (function() {
//   console.log("IIFE Ran.....");
// })();

(function(name) {
  console.log("Hello " + name);
})("Sid");

// Property methods
// Function inside object is called method
const todo = {
  add: function() {
    console.log("Add todo..");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}..`);
  }
};

todo.delete = function(id) {
  console.log(`${id} deleted`);
};

todo.add();
todo.edit(22);
todo.delete(22);
