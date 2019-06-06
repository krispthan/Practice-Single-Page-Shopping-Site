const shopNowBtn = document.querySelectorAll(".shop-btn");
const subscribeBtn= document.querySelector(".subscribe-btn");
const shoppingCart = document.querySelector("#shopping-cart");
const newsletterConfirmationModal= document.querySelector("#newsletter-confirmation");
const confirmBtn= document.querySelector(".btn-primary");
const newsletterClose = document.querySelector(".newsletter-close");

for(let b of shopNowBtn){
   b.addEventListener('click', () => {
        shoppingCart.classList.toggle("active");
    });  
}

 subscribeBtn.addEventListener('click',(e) => {
    let userEmail = document.querySelector("#user-email").value;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)){
        e.preventDefault();
        newsletterConfirmationModal.classList.toggle("active");
    }
 });
           
confirmBtn.addEventListener('click',() => {
    newsletterConfirmationModal.classList.toggle("active");
})


newsletterClose.addEventListener('click', () => {
    newsletterConfirmationModal.classList.toggle("active");
});