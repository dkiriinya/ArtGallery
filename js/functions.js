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
this 
}

function name(){
    let x = 5
    this.x
}

Lexical Scoping 
Closures : a function that remembers its outer scope, forming a new chain 

Execution Context : components include : variable environment , scope chain , this binding 
How does a function work ? 
1. Creation phase : declaration and initialization 
2. Execution phase : 1. Code is executed line by line 2. Variables are assigned values as code runs 3. Function creates new execution context
*/

// recap on array and objects 
// Bisection search : finding an element within a list by repeatedly dividing the search interval in half 
// concepts : divide and conquer [1,2,3,.....10] -> [1...5]
// More algorithms. 

/*
1. Build a computer guessing game 
2. This is how it works 
a. The user will think of a number within a range [1....10]
b. The program should output an initial number e.g 3
c. The user should give a response to the number indicating whether program's guess is high(h) , low(l) , or correct(c)
concepts (arrays, loops , variables, bisection search)
*/
