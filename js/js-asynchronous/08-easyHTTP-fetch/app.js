const http = new EasyHTTPFetch;

// // Call using sync method
// http.getFetchSync('https://jsonplaceholder.typicode.com/users');

// // Call using Async method
// http.getFetchAsync('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const data = {
  name: "Sid",
  username: "sid@scalable.net",
  email: "Gwenborough"
}

// // Call with POST Method
// http.postFetch('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// // Call with PUT Metod
// http.putFetch('https://jsonplaceholder.typicode.com/users/5', data)
//   .then(resData => console.log(resData))
//   .catch(err => console.log(err))

// Delete call method
http.deleteFetch('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log(data))
  .catch(err => console.log(err))