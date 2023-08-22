const text = document.querySelector(".text")

 const value = setTimeout(()=>{
   
    text.innerText = "Async Javascript"
},3000)

const sto = document.querySelector(".clear")

sto.addEventListener("click",()=>{
    clearTimeout(value)
    console.log("Stoppped");
})

const kept =  setInterval(()=>{console.log("hello");},2000);

const secondbutton = document.querySelector(".clearinter")

secondbutton.addEventListener("click",()=>{
    clearInterval(kept)
    console.log("stopped interval");
})
