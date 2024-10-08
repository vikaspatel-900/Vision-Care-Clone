
let form=document.getElementById("service-form");


form.addEventListener("submit", function(){

    
    let fName=document.getElementById("fname").value 
    let lName=document.getElementById("lname").value 
    let email=document.getElementById("email").value 
    let city=document.getElementById("city").value 
    let state=document.getElementById("state").value 
    let reason=document.getElementById("reason").value 
    let message=document.getElementById("message").value
    
    

    let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];

    userData.push({
        'First Name':fName,
        'Last Name':lName,
        'Email':email,
        'City':city,
        'State':state,
        'Reason':reason,
        'Message':message
    })


    localStorage.setItem("userDetails", JSON.stringify(userData))

})





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay:{
       delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });