const clock = document.querySelector(".time")

// let newdate = new Date();

// clock.appendChild(document.createTextNode(newdate.toLocaleTimeString()))

setInterval(()=>{
    let newdate = new Date()
    clock.innerHTML = newdate.toLocaleTimeString()
},1000)