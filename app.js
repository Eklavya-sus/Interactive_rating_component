const Container = document.querySelector(".container")
const Second = document.querySelector(".second")
const Thankyou = document.querySelector(".thankyou")
const Submit = document.querySelector(".submit")
const Star = document.getElementById("star")
const Rate = document.querySelectorAll(".btn")

Submit.addEventListener("click",()=>{
    Second.style.display = 'block';
    Container.style.display= "none"
})
Rate.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        Star.innerHTML = rate.innerHTML
    })
})