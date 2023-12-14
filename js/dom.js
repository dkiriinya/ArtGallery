let demoDiv = document.getElementById("demoDiv")
let demoClass1 = document.getElementsByClassName("demoClass");
let demoTag = document.getElementsByTagName("div")
// properties
demoDiv.innerHTML = "Content changed with JS DOM"
// for(let i = 0; i < demoClass1.length; i++){
//     demoClass1[i].innerHTML = "Content changed by getELements By class name"
// }
demoDiv.style.background = "red"

// query selectors 
//1. querySelector : selects the first element that matches a specified css selector 
let demoDiv2 = document.querySelector("#demoDiv")
let demoClass2 = document.querySelector(".demoClass")
demoClass2.innerHTML = "Content changed by querySelector"


//
let button = document.getElementById("btnClick")

// button.addEventListener(event,callback function)
button.addEventListener('click',onButtonClick)
function onButtonClick() {
    alert("Button Clicked")
}