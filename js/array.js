// Data Structure : formats of saving a collection of data 
// linear structures : elements are accessed sequencially
// non-linear structures : elements are accessed using keys
// phase 0: Arrays and Objects 
// Array : used to store multiple values in a single variable
let fruits = ["Apple","Banana","Orange"] 
// accessing items in array : use indice position
// the length : given by the number of elements in an array 
console.log(fruits.length)
// index position : 0 : length-1
console.log(fruits[0])
//modify items in an array : add pear to item at position 1
fruits[1] = "Pear"
console.log(fruits)
//add elements in my array 
fruits.push("grapes")
console.log(fruits)

// trasverse/loop/enumerate : arrays : for loop , forEach , for..of , for...in
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i])
}
