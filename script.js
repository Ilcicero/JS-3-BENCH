
  const newProduct = {
    name: "Nome del prodotto",
    description: "Descrizione del prodotto",
    brand: "Marca del prodotto",
    imageUrl: "URL dell'immagine del prodotto",
    price: 0,
    
  };

fetch('https://striveschool-api.herokuapp.com/api/product/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE3ZmY5YzEyYjUwYzAwMTQ5ZTU1YzUiLCJpYXQiOjE2ODg3MzE1NDgsImV4cCI6MTY4OTk0MTE0OH0.-NjVR4zxIXXiTkHgl_yLoVHNEqwYic041y3hPz5_cRE"

  },
  body: JSON.stringify(newProduct)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));








function renderProducts(listOfproducts) {
  let total = document.getElementById("listaProdotti");
  console.log(total);

  listOfproducts.forEach((product, index) => {
   
    const productslist = document.createElement("div");
    productslist.classList.add("col-12");
    productslist.classList.add("col-md-6");

    productslist.innerHTML = 
`<div class="card row px-3 align-items-center">
<img src="${product.imageUrl}" class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title">${index + 1} - ${product.name}</h5>
<p class="card-text">Description of the product: ${product.description}</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Price: ${product.price}€</li>
<li class="list-group-item">Order: ${product._id}</li>

</ul>
<div class="card-body row justify-content-between">
<a class"col" href="details.html?productId=${product._id}">Dettagli</a>
</div>
</div>`;

    total.appendChild(productslist);
  });
}

