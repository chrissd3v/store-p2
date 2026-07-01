import { redirectLogin } from "./redirect.js"

redirectLogin()

const params = new URLSearchParams(location.search)
const id = params.get('id')

const datosAll = (id, content) => {
  document.getElementById(id).textContent = content
}

fetch('https://665a7d70003609eda45e0a6a.mockapi.io/productos/' + id)
  .then(res => res.json())
  .then(data => {
    document.getElementById('imgproduct').src = data.foto
    datosAll('prodName', data.nombre)
    datosAll('details', data.descripcion)
    datosAll('category', data.categoria)
    datosAll('price', "S/." + data.precio)
    
  })

