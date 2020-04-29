// FOR LOOP
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("Number is 2");
//     continue;
//   }

//   if (i === 5) {
//     console.log("Stop the loop");
//     break;
//   }
//   console.log(i);
// }

// While loop
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 20;
// do {
//   console.log("Number " + i);
//   i++;
// } while (i < 10);

// // Loop through array
const cars = ["Audi", "Ford", "Seat", "BMW", "Chevy"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// for each
cars.forEach(function(car, index) {
  console.log(`${index} : ${car}`);
});

// map
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Mike" }
];
const ids = users.map(function(user) {
  return user.name;
});

console.log(ids);

// Key Value pair
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
