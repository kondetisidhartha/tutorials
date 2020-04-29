document.querySelector('#button-1').addEventListener('click', fetchText);

// Textfile
function fetchText() {
  fetch('sample.txt')
    .then((res) => res.text())
    .then(data => {
      document.querySelector('#output').innerHTML = `<h3>${data}</h3>`
    })
    .catch(err => console.log(err));
}

// JSON
document.querySelector('#button-2').addEventListener('click', fetchJSON);

function fetchJSON() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      // console.log(typeof data) -> Array, so no need to parse
      let output = "";
      data.forEach(function (post) {
        output += `<ul>
          <li>${post.name}</li>
          <li>${post.age}</li>
          <li>${post.post}</li>
        </ul>`;
      })
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log("Error"))
}

// External API
document.querySelector('#button-3').addEventListener('click', fetchExternal);

function fetchExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(function (user) {
        output += `<li>${user.login}</li>`;
      })
      document.querySelector('#output').innerHTML = output
    })
    .catch(err => console.log('Error'))

}
