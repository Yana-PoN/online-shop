const PRODUCTS_URL = "https://myonlinestore-71c7.restdb.io/rest/products";
const API_KEY = "6b030c59cb1c246232625fcd";

window.addEventListener("load", async () => {
  await getProducts();
  renderProdcuts()
});

const productsList = document.getElementById("products");

let products = [];

function renderProdcuts() {
  products.forEach(({name}) => {
    const el = document.createElement("li");
    el.innerText = name;
    productsList.appendChild(el);
  })
}

async function getProducts() {
  try {
    const res = await fetch(PRODUCTS_URL, {
      headers: {
        "content-type": "application/json",
        "x-apikey": API_KEY,
        "cache-control": "no-cache",
      },
    });

    const data = await res.json();
    
    console.log(data);

    products = data;
  } catch (error) {
    console.log(error);
  }
}