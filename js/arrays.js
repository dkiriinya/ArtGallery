
let fruits = ["Apple","Banana","Orange"]
fruits[1] = "Pear"
fruits.push("grapes")
fruits.unshift("mango")

const yum = [...fruits]
for(let i = 1; i < yum.length; i++){
    console.log(yum[i])
}