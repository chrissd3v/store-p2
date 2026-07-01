export function createProduct(product) {
  const card = document.createElement('div')
  card.className = 'grid max-w-sm bg-zinc-700 px-4 py-4 gap-4 rounded-xl font-semibold'

  const img = document.createElement('img')
  img.src = product.foto
  img.className = 'w-full h-72 object-cover rounded-xl'
  
  const productName = document.createElement('a')
  productName.textContent = product.nombre
  productName.href = "/views/product_view.html?id=" + product.id
  productName.className = 'text-3xl text-white'
  
  // const productDetail = document.createElement('a')
  // productDetail.textContent = product.descripcion
  // productDetail.href = "/views/product_view.htmlid=" + product.id
  // productDetail.className = 'text-sm text-gray-300'

  const category = document.createElement('div')
  category.textContent = product.categoria
  category.className = 'text-sm text-zinc-400'

  const precioProd = document.createElement('p')
  precioProd.textContent = 'S/.' + product.precio
  precioProd.className = 'text-4xl text-amber-300'
  
  
  card.appendChild(img)
  card.appendChild(productName)
  // card.appendChild(productDetail)
  card.appendChild(category)
  card.appendChild(precioProd)


  document.querySelector('#productsContainer').appendChild(card)
}