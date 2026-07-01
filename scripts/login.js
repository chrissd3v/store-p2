import { redirectStore } from "./redirect.js"

redirectStore()

const user = document.getElementById('user')
const pass = document.querySelector('#password')
const login = document.getElementById('login')

login.addEventListener('click', async (e) => {
  e.preventDefault()
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user.value,
        password: pass.value,
        expiresInMins: 30
      })
    })
    const data = await response.json()
    if (!response.ok) {
      alert(data.message)
      console.log(data.message)
      return
    }
    localStorage.setItem("token", data.accessToken)
    alert('Credencias correctas')
    redirectStore()
    
  } catch (error) {
    alert("Ocurrio un error al conectar")
  }
})