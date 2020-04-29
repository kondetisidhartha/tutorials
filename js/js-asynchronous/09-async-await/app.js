// function f() {
//   return Promise.resolve('1');
// }

// f().then(data => console.log(data));

//The word “async” before a function means one simple thing: a function always 
// returns a promise.

// await works only inside async functions, The keyword await makes JavaScript 
// wait until that promise settles and returns its result.

async function getUsers(url) {
  // await response of the fetch call
  const response = await fetch(url);

  // only proceed once its resolved
  const data = await response.json();

  return data;
}

getUsers('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err))