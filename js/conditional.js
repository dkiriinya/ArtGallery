// conditional statements : used to perform different 
// actions based off different conditions
// if. else. else if // switch //ternary operator
// if : if covers the action if a condition evaluates to true(1) 
// else : else cover the action if a condition evaluates to false(0)
// else if : sets multiple conditions 
// if (condition){ write the action if true } else {write the action if false}
// simple program to greet my user : if the hour is less than or equal to 18 : good day // good evening
// if its hr 20 , "time for dinner"
let x = 20
if(x <= 18){
   console.log("Good day")
} else if(x == 20) {
   console.log("Time for dinner")
} else {
    console.log("Good evening")
}

// switch ... case statement
// 
// switch(expression){
//     case x:
//         //code to run 
//         break;
//     case y:
//         //code to run 
//         break;
//     default:
//         // code to run if expression is not matched 
// }
console.log(new Date().getDay())
let dayNumber = new Date().getDay()
switch(dayNumber){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3: 
        console.log("Wednesday")
        break;
    default:
        console.log("The cases did not match")
}

// Ternary operator
// this operator takes in three operands 
// 1. A condition followed by a question mark 
// 2. An expression to execute if the condition is true followed by a colon
// 3. Finally we have the expression to execute if the condition is false 
// condition ? expression if true : expression if false
let result;
function getFee(isMember){
    //return ensures our function returns a value
   return isMember ? 'Member should pay KES 500' : 'Member should pay KES 1000'
}
result = getFee(true)
console.log(result)

// if else 
function getFeeUsingIfElse(isMember){
    if(isMember === true){
       return 'Member should pay KES 500'
    } else if(isMember === 18 ) {
       return 'Member should pay KES 200'
    } else {
       return 'Member should pay KES 1000'
    }
}
result = getFeeUsingIfElse(true)
console.log(result)

function getFeeusingSwitch(isMember){
    switch(isMember){
        case true:
            return "500 KES"
        case 18:
            return "200 KES"
        case false:
            return "100 KES"
        default: 
            return "We cannot admit the user"
    }
}
result = getFeeusingSwitch(18)
console.log(result)