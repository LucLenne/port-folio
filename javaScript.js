const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2");
const body = document.querySelector("body")
const h1 = document.querySelectorAll("h1")
const h2 = document.querySelectorAll("h2")
let indice = 0
let is_nuit = false


button1.addEventListener("click",function(){
    
    for (let step = 0; step < 3; step++) {
    if (is_nuit){
        h2[step].classList.remove("nuit")
        h2[step].classList.add("jour")
        is_nuit = false
    }else{
        h2[step].classList.remove("jour")
        h2[step].classList.add("nuit")
        is_nuit = true
    }}
})
button2.addEventListener("click",function(){
    indice++
    if (Number.isInteger(indice/2)){
        h1.style.color="black"
    }else{
        h1.style.color="white"
    }
})
window.addEventListener("load",function(){
    h1.classList.remove("transp")
    h1.classList.add("apparition")

})
