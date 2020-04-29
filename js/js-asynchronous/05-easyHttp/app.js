const html = new easyHTTP();

// html.getRequest('https://jsonplaceholder.typicode.com/posts', callback);
// html.getRequest('https://jsonplaceholder.typicode.com/posts/1', callback);

// Multiple posts
// function callback(err, returnPosts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(returnPosts);
//   }
// }

// Single post
// function callback(err, returnPost) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(returnPost);
//   }
// }

const data = {
  title: "Title here",
  body: 'Body here'
}
// html.postRequest('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log('Error')
//   } else {
//     console.log(post)
//   }
// }
// )

// Update post
// html.putRequest('https://jsonplaceholder.typicode.com/posts/76', data, function (err, post) {
//   if (err) {
//     console.log('Error')
//   } else {
//     console.log(post)
//   }
// })


// Delete request
html.deleteRequest('https://jsonplaceholder.typicode.com/posts/14',
  function (err, returnPosts) {
    if (err) {
      console.log(err);
    } else {
      console.log(returnPosts);
    }
  });