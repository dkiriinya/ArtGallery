function sumofTwonums(a,b){
    let sum = a + b
    return sum;
}
console.log(sumofTwonums(45,87))

const printName = function(a,b){
    console.log(a,b)
}
printName("Don","Gitonga")

const greet = () => {

}

function myFunction(){
    // the this keyword will always point to the current object (OOP)
    console.log(this)
}
myFunction()

function add(a,b,callback){
    console.log(`${a + b }`)
    callback();
}
function display(){
    console.log("This callback function is running")
}

add(5,5,display)