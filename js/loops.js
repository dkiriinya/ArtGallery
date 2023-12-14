// a fundamental concept in programming that will alllow developers to execute a block 
// of code repeatedly
// for , while , do...while loop 

// For Loop : executes a block of code a specified number of times
// print the numbers 1 - 5 
console.log(1,2,3,4,5)
// for(intiliazer, condition to stop the loop, incrementor/decrementor){ // code to be repeated }
for(let i = 1; i < 6; i++){
    // code 
    console.log(i)
}

let array = ['apple','banana','orange','mango']
console.log(array[0])
for(let i = array.length - 1; i >= 0; i-- ){
      //  break terminates a loop on a given condition 
    if(i === 1){
        continue;
    }
     console.log(array[i])
   }
// while loop : this loop continues to execute a block of code as long as a specified 
// condition is true
// variable , variable used for comparison , variable undergoes some change within the loop
// body
// let i = 1
// while(i < 6){
//     console.log(i)
//     i++
// }

// assignment operators 
// 1. = 
// let a = 5
// let b = a
// // 2. += : 
// let c = 5 
// let d = 6
// d += c

//do..while loop : executes a block of code once and then repeats the loops as long as a 
//specified condition is true 
// do {
   //do this once
// } while (condition);
// let e = 1
// do {
//     console.log(e);
//     e++;
// } while(e < 6); 


/* 
(decompisition)
Human Statements: 
1. Know our vowels(a,e,i,o,u) and our consonants 
2. Know our statement 
3. count the number of vowels / consonants within the statement 

character 'a'
string 'ab'
['a','b','c']
Pseudocode: loose interpretation code format for the human statements 
1. Variable : statement : ref to the statement 
2. Variables to store number of vowels and number of consonants  
3. A trasversal methods (collections)(use a loop) / String (1.use a for loop that goes the entire length of the string)
.length(number of iterations needed)
*/
let statement = "WELCOME TO MORINGA"
console.log(statement)
let numberVowels = 0
let numberCons = 0
let numberofSpaces = 0
for(let i=0; i < statement.length; i++){
    console.log(statement[i])
    //add to the count for vowels and consonants 
    //checking if the character at i is a vowel or a consonants 
    if(statement[i] === 'A' || statement[i] === 'E' || statement[i] === 'I' || statement[i] === 'O'  ||  statement[i] === 'U' ){
            // we need to increase the count for the variable 
            numberVowels += 1
    } else if(statement[i] === ' '){
            numberVowels += 0
            numberCons += 0
            numberofSpaces += 1
    } else {
           numberCons += 1
    }
}

console.log("Number of vowels ", numberVowels)
console.log("Number of consonants", numberCons)
console.log("Number of spaces", numberofSpaces)