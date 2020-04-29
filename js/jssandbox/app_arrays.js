// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ["Apples", "Banana", "Pear"];
const mixed = [22, "Hello", null, true, undefined, { a: 1, b: 2 }, new Date()];
let val;

// Get array length
val = numbers.length;

// Check if array
val = Array.isArray(numbers);

// To get single number in array
val = numbers[3];

// To insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36);

// Mutating arrays
// add at end
// numbers.push(99);

// // add at begin
// numbers.unshift(120);

// //take from end
// numbers.pop();

// // take of from begin
// numbers.shift();

// // splice values
// numbers.splice(1, 3); // removes at index 1,2,3

// // reverse
// numbers.reverse();

// concate arrays
val = numbers.concat(numbers2);

// sort array
val = fruits.sort();

val = numbers.sort(); // this sorts by only first digit for numbers

// So to sort use
val = numbers.sort(function(x, y) {
  return x - y;
});

// Descending order
val = numbers.sort(function(x, y) {
  return y - x;
});

// find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
