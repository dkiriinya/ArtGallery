let result = getFee(false)
// function getFee(isMember){
//     return isMember ? 'Member should pay kes 500' : 'Member should pay kes 1000'
// }
// console.log(result)

// let result;
function getFee(isMember){
    //return ensures our function returns a value
   return isMember ? 'Member should pay KES 500' : 'Member should pay KES 1000'
}

console.log(result)

// Write for me two functions : if,else , switch case

function getFeeifelse(isMember){
    if (isMember){
        return "Member should pay kes500"
    }
    else{
        return "Member should pay kes 1000"
    }
}

function getFeeCaseDefault(isMember){
    switch(isMember){
        case true:
            return "Member should pay kes500";
            break;

        default:
            return"member should pay kes1000"
    }

}
 
console.log(result)