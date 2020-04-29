function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Create HTTP GET Request prototype
easyHTTP.prototype.getRequest = function (url, callback) {

  // open - server connection establish
  this.http.open('GET', url, true);

  // send - request
  this.http.send();

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    }
    else {
      callback('Error ' + self.http.status);
    }
  }
}

// Create HTTP Post Request
easyHTTP.prototype.postRequest = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  this.http.send(JSON.stringify(data));

  let self = this;
  this.http.onload = function () {
    return callback(null, self.http.responseText);
  }
}

// Create HTTP PUT Request
// Same as Post but change in url pass
easyHTTP.prototype.putRequest = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  this.http.send(JSON.stringify(data));

  let self = this;
  this.http.onload = function () {
    return callback(null, self.http.responseText);
  }
}

// Create HTTP DELETE Request
easyHTTP.prototype.deleteRequest = function (url, callback) {

  // open - server connection establish
  this.http.open('GET', url, true);

  // send - request
  this.http.send();

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post Deleted....');
    }
    else {
      callback('Error ' + self.http.status);
    }
  }
}