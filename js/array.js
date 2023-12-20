// Data Structure : formats of saving a collection of data 
// linear structures : elements are accessed sequencially/sorted
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
console.log("pushed new fruit",fruits)
//pop 
const removedFruit = fruits.shift()
console.log("shifted fruit ", removedFruit)
console.log("value of array before splice ", fruits)
fruits.splice(3,3,'cherry')
console.log("value of array after splice ", fruits)

let fruit = ["mango","pineapple"]
let combinedFruits = fruits.concat(fruit)
console.log(combinedFruits)

let slicedFruits = combinedFruits.slice(1,3)
console.log("sliced fruits ", slicedFruits)

// trasverse/loop/enumerate : arrays : for loop , forEach , for..of , for...in
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i])
}

// Define 
/*
Arrays are ordered collections of values. Each value is assigned an index which allows access to the value. 0....length of the array-1
Homogeneous : typically used to store homogeneous data types , meaning all elements in the array are usually of the same data type 
["Joseph", {} , true, 6] : [6,7,7,4,5,3,5]
Array Methods : arrays have a variety of in built methods (manipulation)
- push : adds elements () end of the array , return a new length arrays. 
- pop : removes the last element of the array, return a new length of the array , 
return that element
- shift : removes the first element of the array, returns that element 
- unshift : adds elements to the beginning of the array, returns a new lenght of the array
- splice : changes the content of an array by removing , adding or replacing elements at 
a specified index 
- concat : combines two or more array and returns a new array without modifying the original 
arrays 
- slice : returns a shallow copy of a portion of an array into a new array object , 
specification is done from start to end (end not included)
................................
*/
