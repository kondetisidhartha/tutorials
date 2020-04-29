// function namesInterator(names) {

//   let nameIndex = 0;

//   return {
//     nextItem: () => {
//       return nameIndex < names.length ?
//         { value: names[nameIndex++], done: false } :
//         { done: true }
//     }
//   }
// }

// const namesArr = [10, 20, 30, 40, 50]
// const result = namesInterator(namesArr)

// console.log(result.nextItem())
// console.log(result.nextItem())
// console.log(result.nextItem())
// console.log(result.nextItem())
// console.log(result.nextItem())
// console.log(result.nextItem())

// Generators
function* createIDs() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const num = createIDs();
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())