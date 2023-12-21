document.getElementById('addItemButton').addEventListener('click',displayList)
let listItems = document.getElementsByTagName('li');
listItems[0].style.color = "green"
function displayList(){
    // get the input from the shopping list //accessing a node 
    let newItem = document.getElementById('newItem').value;
    //create nodes 
    let list = document.createElement('li')
    // create text node with the input from the user 
    let textNode = document.createTextNode(newItem) 
    // attach the text node to the list 
    list.appendChild(textNode)
    // append my list to the UL element 
    document.getElementById('shoppingList').appendChild(list)
    //clear nodes 
    document.getElementById('newItem').value = '';

    let listItems = document.getElementsByTagName('li');
    for(let i=0; i < listItems.length; i++){
        listItems[i].style.color = "red"
    }

}