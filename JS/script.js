let productDiv = document.querySelector(".product-container");

let basket = JSON.parse(localStorage.getItem('data')) || []

let disPlayProduct = async () => {
  productDiv.innerHTML = "";

  let product = await fetch("https://fakestoreapi.com/products");
  let finalProduct = await product.json();

  productDiv.style.display = "flex";
  productDiv.style.flexWrap = "wrap";
  productDiv.style.justifyContent = "space-between";

  finalProduct.forEach((element) => {
    productDiv.innerHTML += `
    <div class="card-container my-2 px-2 col-lg-3 col-md-3 col-12 col-sm-6" ; ">
      <div class="card text-center">
        <img src="${element.image}" class="card-img-top p-4 img-fluid" alt="" style="height: 200px; object-fit: contain;">
        <div class="card-body d-flex flex-column">
        <p class="card-text my-2">Price: Rs. ${element.price} l  ${element.rating.rate}</p>
         <h5 class="card-title fs-6">${element.title}</h5>
         <a href="#" class="btn bg-success text-white mt-1" onclick=" add_to_card ('${element.image}' , '${element.title}' , '${element.price}'  , '${element.rating.rate}' ,'${element.title}')">Add To Cards</a>
        </div>
      </div>
    </div>
    `;
  });
};

let add_to_card = (image,price,rate,title) =>{
  console.log(title);
  
  
  basket.push({
    img:image,
    title:title,
    price:price,
    rate:rate,
   
  })
  localStorage.setItem('data',JSON.stringify(basket))

  calculate ()

}

let calculate =()=>{

  let cartIcon =document.getElementById('iconCart')
  let iconCart =basket.length

  cartIcon.innerHTML =iconCart



}
calculate ()
disPlayProduct();




let shopping = document.getElementById('cartItems');

let baskets = JSON.parse(localStorage.getItem('data')) || []


let calculates=()=>{

  let cartIcon = document.getElementById('iconCart')
   cartIcon.innerHTML=baskets.length


}

let generateItem =()=>{

  if (basket.length !== 0) {

    return(shopping.innerHTML=basket.map((x) =>{
      let { img,price,title,rate} =x;

      return`

    <div class="cartItems d-flex align-items-center">
    <img class="w-25 me-2" src="${img} ">
    <span class="me-2">${price} </span> l
    <span class="ms-2">${rate} </span>
    
    </div>
    <button class="btn bg-success text-white" onclick="remove_form_cart(${title})">Remove</button>    
      `
    }))
    
  }



}

generateItem()

calculates()



let remove_form_cart=(title)=>{
 basket=basket.filter((x) => x.title != title)
localStorage.setItem('data',JSON.stringify(basket))
calculates()
remove_form_cart()


}