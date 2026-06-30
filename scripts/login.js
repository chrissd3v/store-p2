const user = document.getElementById('user')
const pass = document.querySelector('#password')
const login = document.getElementById('login')

login.addEventListener('click', () => {
  fetch('https://dummyjson.com/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: user.value,
      password: pass.value,
      expiresInMins: 30
    })
  })
  .then(res => res.json())
  .then(console.log);
})