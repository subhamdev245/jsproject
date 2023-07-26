const box = document.querySelectorAll(".box")
const body = document.querySelector("body")
const reset = document.querySelector(".reset")
box.forEach(b => {
    b.addEventListener("click", (e) => {
        body.style.backgroundColor = e.target.id
    })
})

reset.addEventListener("click",()=>{
    body.style.backgroundColor = "white"
})