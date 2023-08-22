const input = document.querySelector("#date")

// console.log(input);

const button = document.querySelector(".search")

const result = document.querySelector(".result")

// console.log(button);

button.addEventListener("click",(e)=>{
       result.innerHTML = ""
       let dateOfBirth = new Date(input.value)
       let currentDate = new Date()
       let differece = currentDate - dateOfBirth
       let diffYear = Math.floor(differece / 31536000000)
       result.appendChild(document.createTextNode(`${diffYear} Years `))

})