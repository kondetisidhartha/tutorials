const http = new EasyHTTPAsync;

// Call using Async method
// http.getFetchAsync('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const data = {
  name: "Sid",
  username: "sid@scalable.net",
  email: "Gwenborough"
}

// // Call with POST Method
// http.postFetchAsync('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// // Call with PUT Metod
// http.putFetchAsync('https://jsonplaceholder.typicode.com/users/5', data)
//   .then(resData => console.log(resData))
//   .catch(err => console.log(err))

// Delete call method
http.deleteFetchAsync('https://jsonplaceholder.typicode.com/users/1')
  .then(data => console.log(data))
  .catch(err => console.log(err))