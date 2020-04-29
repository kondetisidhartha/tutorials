const posts = [
  {
    title: "Post One",
    body: "This is body one"
  },
  {
    title: "Post Two",
    body: "This is body two"
  },
  {
    title: "Post Three",
    body: "This is body three"
  }
];

// Synchronous : post will be created only after 3000ms and by that time 
// getPosts retrieved
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post)
//   }, 3000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     })
//     document.body.innerHTML = output;
//   }, 2000)
// }

// createPost({
//   title: "Post Four",
//   body: "This is body four"
// });

// getPosts();

// Asynchronous using callback()
function createPost(post, cb) {
  setTimeout(function () {
    posts.push(post)
    cb();
  }, 3000);
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 5000)
}

createPost({
  title: "Post Four",
  body: "This is body four"
}, getPosts);
// above createpost will wait for 3000ms but in mean time it executes below
// console log statements.. which makes setTimeout asynchronous 
console.log('After create post log 1')
console.log('After create post log 2')
console.log('After create post log 3')
console.log('After create post log 4')
console.log('After create post log 5')
console.log('After create post log 6')
console.log('After create post log 7')