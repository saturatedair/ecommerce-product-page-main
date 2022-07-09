//quantity counter
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const quantity = document.querySelector(".quantity");
function counter(){
  plus.addEventListener("click", function () {
    quantityNumber = parseFloat(quantity.innerHTML);
    quantityNumber++;
    quantity.innerHTML = quantityNumber;
    
  });
  
  minus.addEventListener("click", function () {
    quantityNumber = parseFloat(quantity.innerHTML);
    if (quantityNumber > 0) {
      quantityNumber--;
      quantity.innerHTML = quantityNumber;
    }
  });
}
 counter();
//checkout section
const imgChart = document.querySelector(".img-cart");
const checkout = document.querySelector(".checkout-section");

imgChart.addEventListener("click", function () {
  checkout.classList.toggle("active");
});


//tab image

const imgShown = document.querySelector(".img-big");
const thumbImgs=document.querySelectorAll(".img-small")

 thumbImgs.forEach(function(img){
  img.addEventListener("click",function(e){
   let imgSrc=e.target.src.replace("-thumbnail", "");;
imgShown.src=imgSrc
  })
})


//add to cart

const addToCart=document.querySelector(".add")
const cartEmpty=document.querySelector(".cart-empty")

addToCart.addEventListener("click",function(){

const checkoutSection=document.querySelector(".checkout-section")
const price=document.querySelector(".price").innerHTML
let priceSlice=parseFloat( price.slice(1,4));
let quantityNumber = parseFloat(quantity.innerHTML);
let finalPrice=(priceSlice *quantityNumber);

if(quantityNumber<1){
  alert("Please make sure quantity of item is higher than zero!")
}
if(cartEmpty.style.display="block" && quantityNumber>=1){
  cartEmpty.style.display="none";
  let cartItem=document.createElement("div")
  cartItem.innerHTML=`<div class="checkout-content">
  <img
    src="./images/image-product-1-thumbnail.jpg"
    class="checkout-img"
    alt=""
  />
  <div class="item-content">
    <div class="cart-exp">Fall Limited Edition Sneakers</div>
    <div class="cart-price">
      <div class="cart-item-price">$${priceSlice}</div>
      <div class="multiply">x</div>
      <div class="cart-item-quantity">${quantityNumber}</div>
      <div class="cart-final-price">$${finalPrice}.00</div>
    </div>
    <img class="icon-delete" src="./images/icon-delete.svg" alt="" />
  </div>
  </div>
  <button class="cart-btn" type="submit">Checkout</button>`;  
  checkoutSection.appendChild(cartItem);
  quantity.innerHTML=0;
  const deleteBtn=document.querySelector(".icon-delete");
  deleteBtn.addEventListener("click",function(){
  cartItem.remove();
  cartEmpty.style.display="block";

})
}
})


