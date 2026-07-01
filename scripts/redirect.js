export const redirectStore = () => {
  if(localStorage.getItem('token')) {
    location.href = './store_view.html'
  }
}

export const redirectLogin = () => {
  if(!localStorage.getItem('token')) {
    location.href = './login_view.html'
  }
}

export const logOut = () => {
  localStorage.removeItem('token')
  location.href = '../index.html'
}