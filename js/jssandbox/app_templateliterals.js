const name = "John";
const age = 30;
const job = "Web developer";
const city = "Miami";
let html, html2;

// without template strings (es5)
html =
  "<ul><li>Name : " +
  name +
  "</li><li>Age : " +
  age +
  "</li><li>Job : " +
  job +
  "</li><li>City : " +
  city +
  "</li></ul>";

// document.body.innerHTML = html;

function hello() {
  return "hello";
}

// with template strings/literals
html2 = `<ul>
<li>Name : ${name} </li>
<li>Age : ${age} </li>
<li>Job : ${job} </li>
<li>City : ${city} </li>
<li>${30 * 23}</li>
<li>${hello()}</li>
<li>${name + " " + job}</li>
<li>${age > 30 ? "over 30" : "below 30"}</li>
</ul>`;

document.body.innerHTML = html2;
