let productCart = document.querySelector('.added-cart-wrapper')
let cartProductBtn = document.querySelector('.cart')
let cartClose = document.querySelector('.close-cart')
console.log(productCart)
console.log(cartProductBtn)

window.addEventListener("load", ()=>{
  alert("Please!!! note that this Ecommerce website is not yet functional and all the prices on the site is just for test purposes, Thank you")
})

cartProductBtn.onclick = () =>{
    productCart.classList.add('drop')
}
cartClose.onclick = () =>{
  productCart.classList.remove('drop')
}

//making cart work with JS

if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}
else{
  ready()
}


//adding product to cart
var addCart = document.getElementsByClassName('add-product')
for (var i =0; i < addCart.length; i++){
  var button = addCart[i]
  button.addEventListener('click', addCartProduct)
}

//Making function to remove item from cart

function ready(){
  var removeCartProduct = document.getElementsByClassName('trash')
  console.log(removeCartProduct)
  for (var i = 0; i < removeCartProduct.length ; i++){
      var button = removeCartProduct[i]
      button.addEventListener('click', removeCartItem)
  }
  //Quantity Changes

  var quantityInput = document.getElementsByClassName('cart-quatity-value')
  for (var i =0; i < quantityInput.length; i++){
    var input = quantityInput[i]
    input.addEventListener('change', quantityChanged)
  }
}
//Removing cart
function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove()
  updateTotal()
}
//Quantity changes function

function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <=0){
    input.value = 1
  }
  updateTotal()
}

//adding product to cart function

function addCartProduct(event){
  var button = event.target
  var shopProduct = button.parentElement
  var title = shopProduct.getElementsByClassName('product-title')[0].innerText
  var price = shopProduct.getElementsByClassName('product-price')[0].innerText
  var productImg = shopProduct.getElementsByClassName('product-img')[0].src
  addProductToCart(title, price, productImg)
  console.log(title, price, productImg)
  
}
function addProductToCart(title, price, productImg){
  var cartShopBox = document.createElement('div')
  cartShopBox.classList.add('my-cart')
  var cartItem = document.getElementsByClassName('cart-all')[0]
  var cartItemNames = cartItem.getElementsByClassName('cart-product-title')
  for ( var i = 0 ; i < cartItemNames.length ; i++){
    alert("You have already added this item to cart")
    return
  }
}
 var cartBoxContent = `
                           <img src="./Chivita-Active-Citrus-Mixed-Fruit-Juice-Power-of-6-1000ml.jpg" alt="" class="cart-product-img">
                           <div class="cart-details">                   
                             <h4 class="cart-product-title">CHI ACTIVE 1 LTR</h4></h3>
                             <p class="cart-product-price">25.04 Naira</p>
                             <input type="number" value="1" class="cart-quatity-value">
                           </div>

                           <!--Trash button-->
                           <i class="bx bxs-trash-alt trash"></i> `
 cartShopBox.innerText = cartBoxContent
 cartItem.append(cartShopBox)
 cartShopBox.getElementsByClassName('trash')[0].addEventListener('click',removeCartItem )
 cartShopBox.getElementsByClassName('cart-quatity-value')[0].addEventListener('change', quantityChanged)

//Updating Total

function updateTotal(){
  var cartContent = document.getElementsByClassName('cart-all')[0]
  var cartBoxes = document.getElementsByClassName('my-cart')
  var total = 0
  for (var i = 0; i < cartBoxes.length ; i++){
    var cartBox = cartBoxes[i]
    var priceElement = document.getElementsByClassName('cart-product-price')[0]
    var quantityElement = document.getElementsByClassName('cart-quatity-value')[0]
    var price = parseFloat(priceElement.innerText.replace("#", ""))
    var quatity = quantityElement.value
    total = total + (quatity * price)
    //if price contain kobo

    total = Math.round(total * 100)/100
    document.getElementsByClassName('total-price')[0].textContent = total + ' Naira'
  }
}
