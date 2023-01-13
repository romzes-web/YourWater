// TODO: make this a environment variables
const API_BASE_URL = 'api.iwatercrm.ru'
const API_AUTH_TOKEN = '3OSkO8gl.puTQf56Hi8BuTRFTpEDZyNjkkOFkvlPX'


export function getCategories() {
  return fetch(`https://${API_BASE_URL}/iwater/categoryProducts_list/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': API_AUTH_TOKEN,
    },
  })
}

export function getProducts() {
  return fetch(`https://${API_BASE_URL}/iwater/products/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': API_AUTH_TOKEN,
    },
  })
}

export function getProductById(id) {
  return fetch(`https://${API_BASE_URL}/iwater/product-detail/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': API_AUTH_TOKEN,
    },
  })
}
