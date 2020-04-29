/**
 * EasyHTTP Library
 * Library for making HTTP Requests
 *
 * @version 2.0.0
 * @author Sidhartha Kondeti
 * @license MIT
 *
 * **/

class EasyHTTPAsync {


  // Make HTTP Get Request - Asynchronous way
  async getFetchAsync(url) {

    const response = await fetch(url)

    const data = await response.json()

    return data;
  }

  // Make a HTTP POST Request 
  async postFetchAsync(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const resData = await response.json();

    return resData
  }

  // Make a HTTP PUT Request
  async putFetchAsync(url, data) {

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    const resData = await response.json();

    return resData
  }

  // Make a HTTP DELETE Request
  async deleteFetchAsync(url) {

    const response = await fetch(url, {
      method: 'DELETE'
    })
    const resData = await 'Post Deleted..';
    return resData
  }

}