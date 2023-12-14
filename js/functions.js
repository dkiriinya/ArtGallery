// writing a function
// 1. A named function 
function nameofthefunction() {
    // logic of function
}
// 2. function with parameters 
function sumOfTwoNumbers(a,b){
    let sum = a + b
    return sum;
}

// invoke 
sumOfTwoNumbers(30,50)
console.log(sumOfTwoNumbers(10,20))
console.log(sumOfTwoNumbers(100,200))

// 3. Using a variable to reference a function 
const printName = function(a,b){
      console.log(a,b)
}
printName("Joseph", "Mbugua")

// 4. Arrow Syntax
const greet = () => {
    // logic for the code

}
greet()

// function myFunction() {
//     // the this keyword will always point to the current object (OOP)
//      console.log(this)

// }

// myFunction()

// callback functions
// this is when a function is passed to another function in the form of arguements 

function add(a,b,callback){
    console.log(`${a + b }`)
    callback();
    // maybe u have another logic for the output of the callback
}

function display(){
    console.log("This is the callback function running")
}

add(5,5,display)

{
    var x = 5
}
console.log(x)
/*
{

}

function name(){

}

*/