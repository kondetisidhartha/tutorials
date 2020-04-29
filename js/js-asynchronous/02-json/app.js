document.getElementById('button-1').addEventListener('click', loadCustomer);

document.getElementById('button-2').addEventListener('click', loadCustomers);


// Single Customer
function loadCustomer() {

  // CREATE
  const xhr = new XMLHttpRequest();

  // OPEN - request initialisation and server connection
  xhr.open('GET', 'customer.json', true);

  // SEND request
  xhr.send();

  // on load response
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(`${this.responseText}`);
      // responseText is JSON file which we cannot access key and value
      // so have to convert it to Object
      const customer = JSON.parse(this.responseText);
      document.getElementById('customer').innerHTML =
        `<ul>
      <li>ID : ${customer.id}</li>
      <li>Name : ${customer.name}</li>
      <li>Company : ${customer.company}</li>
      </ul>`;
    }
  }
}

// Multiple Customers
function loadCustomers() {

  // CREATE 
  const xhr = new XMLHttpRequest();

  // OPEN - establish server connection and request initialisation
  xhr.open('GET', 'customers.json', true);

  // SEND - start request process
  xhr.send();

  // Response onLoad
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText)
      const customers = JSON.parse(this.responseText);
      // console.log(customers)
      let output = '';
      customers.forEach(function (customer) {
        output +=
          `<ul>
          <li>ID : ${customer.id}</li>
          <li>Name : ${customer.name}</li>
          <li>Company : ${customer.company}</li>
        </ul>`;
      });

      // 'output' variable is string with html ul and li elements
      // but beow innerHTML converts it to unordered list
      document.getElementById('customers').innerHTML = output;
      console.log(output)
      console.log(typeof output)
    }
  }
}