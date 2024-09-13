

let form=document.getElementById("about-form")

form.addEventListener("submit", function(){

    let fName=document.getElementById("fname").value 
    let lName=document.getElementById("lname").value 
    let email=document.getElementById("email").value 
    let city=document.getElementById("city").value 
    let state=document.getElementById("state").value 
    let reason=document.getElementById("reason").value 
    let message=document.getElementById("message").value 



    let userData=JSON.parse(sessionStorage.getItem("userDetails")) ?? []

    userData.push({
        'First Name':fName,
        'Last Name':lName,
        'Email':email,
        'City':city,
        'State':state,
        'Reason':reason,
        'Message':message
    })


    sessionStorage.setItem("userDetails", JSON.stringify(userData))
})










/***************************************************************number-counting-animation**************************************************** */




const numberCount=document.querySelectorAll(".number-counter");


// numberCount.forEach((num)=>{
    
//     const updateNum=()=>{
//         const targetNum=parseInt(num.dataset.number)
//         // console.log(targetNum)

//         
//         // console.log(initialNum)

//         const incrementNum=Math.trunc(targetNum/16)
//         console.log(incrementNum)


//         if(initialNum < targetNum){
//             num.innerText=initialNum + incrementNum
//         }

//         setTimeout(updateNum,400)
//     }


//     updateNum()
// })

setInterval(function(){
    const initialNum=parseInt(numberCount[3].innerText)

    if(initialNum < 16){
          numberCount[3].innerText=initialNum+1 + "+"
    }

},200)




setInterval(function(){
    const initialNum=parseInt(numberCount[1].innerText)

    if(initialNum < 20){
          numberCount[1].innerText=initialNum+1 + "+"
    }

},150)



setInterval(function(){
    const initialNum=parseInt(numberCount[2].innerText)

    if(initialNum <900){
          numberCount[2].innerText=initialNum + 3 + "+"
    }

},7)


setInterval(function(){
    const initialNum=parseInt(numberCount[0].innerText)

    if(initialNum < 1260){
          numberCount[0].innerText=initialNum + 4 + "+"
    }

},6)