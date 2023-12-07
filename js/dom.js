let demoDiv = document.getElementById("demoDiv")
let demoClass = document.getElementsByClassName("demoClass")
let demoTag = document.getElementsByTagName("p")

demoDiv.innerHTML = "Changed with JS"
demoDiv.style.background = "red"

// query selectors
// 1. querySelector : selects the first element that mathces a specified css selector

let demoDiv2 = document.querySelector("#demoDiv")
let demoClass2 = document.querySelector(".demoClass")


let button = document.getElementById("btnClick")
function onButtonClick(){
    alert("Button Clicked")
}
button.addEventListener('click',onButtonClick())