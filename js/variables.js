// output on console / terminal 
console.log("Joseph Mbugua");
console.log(6);
console.log(6.0);
// Javascript statements (instructions for execution.)
// Javascript Syntax : defination of two types of values 
// 1. Fixed value : literals , 2. Variable values (store data values) 

// JS variables
// this is a named container that stores data values. It is used to store, retrieve , manipulate
// the data during the execution of a program

// How to define to a variable in JS 
// 3 ways 1. var 2. let 3. const 
let age = 25;
let name = "Joseph";
const PI = 3.145;

console.log(age,name,PI);

// Differences with variable declarations (let, var, const)
// 1. Scope 2. Hoisting 3. Reassignment 4. Block Scoping
// Reassignment : mutablity and immutabilty 
//  mutable : able to undergo change (variables defined using var and let)
name = "Kate";
age = 30
console.log(name,age)
// immutablity : const 
// PI = 2.5
// console.log(PI)  //output will be a type error 
let x = 12 
let y = 30 
let sum = x + y
console.log(sum)

// variables that can be reassigned. 
// compilation concept

// Question 
// GIVEN TWO VARIABLES 
a = 5
b = 7
// 1. Using a third variable : swap the values for the two variables : a = 7 , b = 5
// 2. Without using a third variable : do the same thing 

// Values are normally associated with a data type 
// data types have in built methods (operations) / rules 
// 1. Number : all numeric values ( integers (int) (whole number)
//  : Floats : (decimal notations) )
// 2. Strings : sequence of characters enclosed in either ' ' or " "
// 3. Booleans : only two possible values i.e true(1) / false(0)
// 4. Null : only one value : null (nothing here)
// a = null;
// 5. Undefined : only one value undefined ... represents any uninitialized or 
// unassigned value
// console.log(y)
// 6. Symbols : represents a unique identifier 
// 7. Object : data type collection of key and value pairs 
// {
//     "key" : value
// }
let j = 5 + 5.3
console.log(typeof j)

let z = false

// conditionals 
if(z){
    console.log("Joseph Mbugua")
} else {
    console.log(2+2)
}

// Comparisons 
// === : strict operation
let value1 = 42
let value2 = "42"

console.log(value1 == value2)