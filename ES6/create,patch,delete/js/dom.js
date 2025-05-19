function loaddata() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => display(json))
}
function display(data) {
  const ul = document.getElementById('user-list');
  for (const user of data) {
    console.log(user);

    const ull = document.createElement('li');
    ull.innerHTML = ` 
      <h3>user name : ${user.name}</h3>
      <h3>user email : ${user.email}</h3>
    `;
    ul.appendChild(ull);
  }
}
function dataload() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(json => dis(json))
}
function dis(data1) {
  const store = document.getElementById('user-sequence');

  for (const user1 of data1) {
    console.log(user1);

    const ull1 = document.createElement('li1');
    ull1.classList.add('post')
    ull1.innerHTML = ` 
      <h3>user id : ${user1.id}</h3>
      <h3>post title : ${user1.title}</h3> 
      <p>post description : ${user1.body}</p>
    `
    store.appendChild(ull1);
  }
}
function createAPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function deletePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
}

function PatchAPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
