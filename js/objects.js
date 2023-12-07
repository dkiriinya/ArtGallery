let student = {
    "name":'Joseph',
    "age":'25',
    "course":'Software Development',
    "next_of_kins":['0712345678','0798654321'],
    "completed": false
}
console.log(student.name)
console.log(student["age"])

// modifying
student.name = "Mary"

for(let key in student){
    console.log(student[key])
}