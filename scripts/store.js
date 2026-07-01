import { redirectLogin, logOut } from "./redirect.js"
import { createProduct } from "./createProd.js"

redirectLogin()

const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', logOut)

const URL_API = 'https://665a7d70003609eda45e0a6a.mockapi.io/productos'

async function getProducts() {
  const response = await fetch(URL_API)
  const data = await response.json()
  console.log(data)
  return data
}

const render = async () => {
  const products = await getProducts()
  products.forEach((p) => {
    createProduct(p)
  });
}

render()