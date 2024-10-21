const input = document.querySelector("input")
const h1 = document.querySelector("h1")
const img = document.getElementById("image")

img.addEventListener("click",()=>{
  img.style.transition = "1s"
  img.style.scale = "0.5"
})

function clickfun(){
  h1.innerHTML = input.value
  console.log("fdhb");
  
}