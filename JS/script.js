// Api

// let API_url = "https://fakestoreapi.com/products";
// 
// function Product() {
//   let fetchProduct = fetch(API_url)
    // .then((res) => {
    //   return res.json();
    // })
    // .then((products) => {
    //   let postProduct = document.getElementById("postProduct");
    //   products.map((post) => {
        // let newProduct = document.createElement("div");
// 
        // (newProduct.innerHTML = post.id), postProduct.appendChild(newProduct);
// 
        // (newProduct.innerHTML = post.price), postProduct.appendChild(newProduct);
    //   });
    // });
// }
// 
// Product();
// 

// 
let API_url = "https://fakestoreapi.com/products";

function Product() {
  let fetchProduct = fetch(API_url)
    .then((res) => {
      return res.json();
    })
    .then((products) => {
      let postProduct =products;

      let newType =document.createElement("div");
      newType.innerHTML=`
      <h3>${postProduct.title}</h3>
      <img src="${postProduct.image}" alt="${postProduct.title}>
      <p>Price: $${postProduct.price}</p>
      <p>${postProduct.description}</p>
      
      `
      document.body.appendChild(newType)
    });
}

Product();

