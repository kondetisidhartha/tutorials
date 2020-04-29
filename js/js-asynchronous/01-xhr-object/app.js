document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
  // Create xhr object
  const xhr = new XMLHttpRequest();
  console.log('readyState below xhr: ', xhr.readyState)

  // OPEN - initialise request
  // 'GET' is used to read the file or read the URL
  xhr.open('GET', 'data.txt', true);
  console.log('readyState after xhr open: ', xhr.readyState)

  // Start request
  console.log('readyState before send: ', xhr.readyState)
  xhr.send();
  console.log('readyState after send: ', xhr.readyState)

  // USED for spinners/loaders, to display when loading...
  xhr.onprogress = function () {
    console.log('Processing request stage: ', xhr.readyState)
  }

  //xhr.onload takes into account, we are at readyState 4
  xhr.onload = function () {
    console.log('readyState just after onload: ', xhr.readyState)
    if (this.status === 200) {
      console.log('readyState after status check: ', xhr.readyState)
      document.getElementById('output').innerHTML =
        `<h1>${this.responseText}</h1>`;
    }
  }

  // OLD METHOD
  // xhr.onreadystatechange = function () {
  //   console.log('readyState just after readyState: ', xhr.readyState)
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log('readyState after status check: ', xhr.readyState)
  //     console.log(this.responseText)
  //   }
  // }

  //ERROR
  xhr.onerror = function () {
    console.log('ERROR')
  }

  // readyState value
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready


  // HTTP Statuses
  // 200 : "OK"
  // 403 : "Forbidden"
  // 404 : "Not Found"
}