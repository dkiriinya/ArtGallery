// get initial posts from the API. 
document.addEventListener('DOMContentLoaded',getPosts)
const postDiv = document.getElementById("item5");
const formSubmit = document.getElementById("post-form");
// GET request
function getPosts(){
    const URL = "http://localhost:3000/artpieces"
    fetch(URL)
    .then((response) => 
          // ensuring format is in json
          response.json()
    )
    .then((data) => {
        // data here references my return from the API> 
       console.log(JSON.stringify(data))
       data.forEach((post) => {
           createdisplay(post)
       })

    })
    .catch((error) => {
        console.log(error)
    })
}

function createdisplay(post){
    //   graphical representation 
    // creating elements (title, description)
    const postItem = document.createElement('div');
    const title = document.createElement('h4');
    title.textContent = post.title
    const description = document.createElement('p');
    description.textContent = post.description
    const postImage = document.createElement('img');
    postImage.className = 'post-image'
    const editButton = document.createElement('button')
    editButton.className = 'btn btn-warning'
    editButton.textContent = 'Edit Post'
    postImage.src = post.img
    postItem.appendChild(postImage)
    postItem.appendChild(title)
    postItem.appendChild(description)
    postItem.appendChild(editButton)
    // displaying the items in an inline 
    postItem.style.display = 'inline-block'
    postItem.style.marginRight = '10px'
    // appending the individual post div to the main div.
    postDiv.appendChild(postItem)
    
}


//post 
//capturing the form inputs 
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    // 
    const title = document.getElementById('title').value;
    const image = document.getElementById('displayimg').value;
    const description = document.getElementById('description').value;
    console.log(title,image,description)
    createPost(title,image,description)
    formSubmit.reset();
})

function createPost(title,image,description){
    let postObject = {
        "id" : Date.now(), //using timestamp as unique identifier.
        "title" : title,
        "img" : image,
        "description" : description
    }
    const URL = "http://localhost:3000/artpieces"
    fetch(URL, {
         method: 'PUT',
         headers: {
            'Content-Type' : 'application/json'
         },
         body: JSON.stringify(postObject)
    })
    .then(() => {
        alert("Successfully posted")
        getPosts();
    })
    .catch((error) => {
        alert(error)
        console.log(error)
    })
}