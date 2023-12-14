// object in oop : X
// object the data structure : allows us to store key and value pairs and have a reference
// of the pairs from a single variable 
// {
//   key(string): value(any data type)
// }
let student = {
    "name" : 'Joseph',
    "age" : 25,
    "course" : 'Software Development',
    "next_of_kins": ['074e75637657','08437483748'],
    "completed" : false,
    'calcFee' : function (){ }
}

// accessing 
console.log(student.name)  //dot notation
console.log(student["age"]) //square brackets

// modifying 
student.name = "Mary"

//transverse/ loop/enumerate 
// for ...in ,forEach, for ...of 
for(let key in student){
    console.log(student[key])
}
for(let [key,value] of Object.entries(student)){
    console.log(value)
}
