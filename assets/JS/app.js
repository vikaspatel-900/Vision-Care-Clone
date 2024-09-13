let hamburger__nav=document.getElementById("ham-burger-nav");
let hamburger=document.querySelector(".hamburger")
let navbar=document.querySelector(".navbar")
let ham_close_btn=document.querySelector(".ham-close-btn")


hamburger.addEventListener("click", function(){
      hamburger__nav.classList.toggle("toggle")
      hamburger__nav.classList.toggle("toggle2")
      
})


ham_close_btn.addEventListener("click", function(){
      hamburger__nav.classList.toggle("toggle")
      hamburger__nav.classList.toggle("toggle2")
})



