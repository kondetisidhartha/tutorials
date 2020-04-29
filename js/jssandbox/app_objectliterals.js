const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 30,
  email: "abcd@lol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Sydney"
  },
  getBirthYear: function() {
    return 1987;
  },
  getYear: function() {
    return 2020 - this.age;
  }
};
let val;

val = person;
// specific value
val = person.firstName;
val = person.address.state;
val = person.getYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Sara", age: 32 },
  { name: "Mike", age: 31 }
];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]["name"]);
}
