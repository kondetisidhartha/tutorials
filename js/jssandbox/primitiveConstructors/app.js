// String
const name2 = 'Phone';
const name1 = new String('Phone');
name1.foo = 'bar'

console.log(name1)
console.log(typeof name1) // Object
console.log(typeof name2) // String

//Problem comes at down
if (name1 === 'Jeff') {
  console.log('YES')
} else {
  console.log('NO') // Answer is this
}

// Same for boolean and number types as well
// new Number, new Boolean