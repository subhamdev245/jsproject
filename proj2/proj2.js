const form = document.querySelector("form")
const result = document.querySelector(".result")
const obese = document.querySelector(".obese")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let height = document.getElementById("height")
    
    height = parseInt(height.value)
    let weight = document.getElementById("weight")
    weight = parseInt(weight.value)
    
    if (height === "" || height < 0 || isNaN(height)) {
        result.appendChild(document.createTextNode("Enter Valid Input "))
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.appendChild(document.createTextNode("Enter Valid Input "))
    }else{
        console.log(height);
        console.log(weight);
        var resultText = (weight / ((height * height)/10000)).toFixed(2)
        console.log(resultText);
        result.appendChild(document.createTextNode(resultText))
    }
    
    resultText = parseInt(resultText)
    if (resultText <=16) {
        obese.appendChild(document.createTextNode("Severe Thickness"))
    } else if (resultText > 16 && resultText <= 17) {
        obese.appendChild(document.createTextNode("Moderate  Thickness"))
    } else if (resultText > 17 && resultText <= 18.5) {
        obese.appendChild(document.createTextNode("Mild Thickness"))
    } else if (resultText > 18.5 && resultText <= 25) {
        obese.appendChild(document.createTextNode("Normal"))
    } else if (resultText > 25 && resultText <= 30) {
        obese.appendChild(document.createTextNode("Over weight"))
    } else {
        obese.appendChild(document.createTextNode("Obese"))
    }

//     Severe Thinness	< 16
// Moderate Thinness	16 - 17
// Mild Thinness	17 - 18.5
// Normal	18.5 - 25
// Overweight	25 - 30
// Obese Class I	30 - 35
// Obese Class II	35 - 40
// Obese Class III	> 40
})