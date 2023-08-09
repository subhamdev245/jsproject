
const form = document.querySelector("form")

const course = []

form.addEventListener("submit",(e) => {
    e.preventDefault()
    let text = document.querySelector("#task").value
    course.unshift(text)
    GenerateItem()
})

function GenerateItem  () {
    const ul = document.querySelector(".display")
    ul.innerHTML = "" 
    course.forEach((e) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(e))
        ul.appendChild(li)
    }) 
}                










