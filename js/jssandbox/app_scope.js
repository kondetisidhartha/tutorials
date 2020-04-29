// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Local Scope: ", a, b, c);
// }

// test();

//  Block scope
if (true) {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("If Scope: ", a, b, c);
}
//  'var' are functional scope not block level, that is why 'var a' inside if block changed global 'var' value to 4
console.log("Global Scope: ", a, b, c);

// let and const have block level and fuctional scope
// var have only functional scope
