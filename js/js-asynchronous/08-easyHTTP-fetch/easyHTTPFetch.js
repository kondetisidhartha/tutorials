/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 *
 * @version 2.0.0
 * @author Sidhartha Kondeti
 * @license MIT
 *
 * **/

class EasyHTTPFetch {

  // Make HTTP Get Request - Synchronous way
  getFetchSync(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  // Make HTTP Get Request - Asynchronous way
  getFetchAsync(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  // Make a HTTP POST Request 
  postFetch(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(resData => resolve(resData))
        .catch(err => reject(err))
    });
  }

  // Make a HTTP PUT Request
  putFetch(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(resData => resolve(resData))
        .catch(err => reject(err))
    });
  }

  // Make a HTTP DELETE Request
  deleteFetch(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(resData => resolve("Post Deleted. Good Work!"))
        .catch(err => reject(err))
    });
  }

}