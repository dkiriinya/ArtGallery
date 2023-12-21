## Asynchronous and Synchronous Operations : 
### Synchronous Operations 
Operations are executed sequentially.
This is the default behaviour from JS. 

### Asynchronous Operations
Operations are allowed to perform tasks in the background , such as fetching data from a server without blocking the main thread. 
Program can run other code as we wait for the asynchronous task to complete 

## Examples 
console.log("Joseph") 1.
setTimeout(() => { 2.
    console.log("Mbugua")
}, 3000)
console.log("Bill") 3. 

// setTimeout(callback,timer)
// normal / custom function behave async.

### Promises 
A promise in JS is an object representing the eventual completion or failure of an asynchronous operation. Allows us to write async. code in a more manageable way. 

### key concepts 
1. Always occurs in 3 states , pending , fulfiled or rejected. 
2. `.then()` used to fulfill the promise , `.catch()` used for a rejected promise 
3. `Styling attributes` used for the pending state. 

## demo 
let promise = new Promise((resolve,reject) => {
    // async  logic 
    setTimeout(() => {
            resolve("Data fetched")
    }, 2000)
})


promise.then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})


### DOM 
Programming interface for web documents. Represents the page so that the programs can change the documents structure, style and content displayed.
DOM represents the document as a tree of nodes. 

### Tree Structure 
HTML documents is represented as a tree of nodes , including elements , attributes and also text. 


### NODES in the DOM 
1. Basics : A node in the DOM is the basic unit of a document. A doc. is composed of a hierachy of nodes. 
- Elements Nodes (these are HTML elements) , Text Nodes(This represents the text inside the elements) , Attributes Nodes(these are the attributes of the HTML elements), Comment Nodes .... 

### Navigation and Manipulation of the DOM 
1. Accessing Nodes : getElementById, getElementByClassName, getElementsByTagName, querySelector, querySelectorAll
2. Manipulating Nodes : For example, we can change textContent , attributes, styles , Create and remove nodes 
3. Creating Nodes : insertBefore() , appendChild()
4. Node Relationships : Nodes have relationships with each other : parent node, child node, sibling node : `parentNode` . `childNodes` . `nextSibling` . `previousSibling`

<div>
    <div>
        <p> </p>
    </div>
    <p> </p>
    <button> <button>
</div>


### Communication with the server 
1. FrontEnd(Client) -> request -> Server (Databases, Server scripting instructions)
                    <- response <-
2. Communication between client and server is typically carried out using HTTP
3. HTTP verbs are used to define the request nature (GET, POST , PUT , PATCH, DELETE***)
4. AJAX (Asynchronous Javascript and XML) : web dev. technique that allows JS to make asynchronous requests to the server 
5. Fetch API : Fetch API is the modern JS tool for making our HTTP requests. Its a flexible and Promise-based way to make the request and handle the response. It also allows sending and receiving data in various formats (JSON,text,HTML)
6. CORS : Cross-Origin Resource Sharing is a security feature implemented by browsers to control whether web pages from one domain can request resources from a different domain. 
(Control of Authentication and Authorization)
7. Promises : Handled By the fetch process (5)
8. Callback Functions : Functions passed as arguments to other functions and executed after a specific task 

### API ? Application Programming Interface
Set of rules and protocols that allows different software applications to communicate with each other. 

### Response Formats (JSON) -> Javascript Object Notation
This is a lightweight data interchange format that is used for data exchange btw a client and a server. Easy to read , write and parse(convert).
Most modern API's return JSON. 
Compatibility. : Integrate the JSON response on any environment(OS) : browser, mobile development , desktop.

### JSON-Server
1. Used for Test driven development when developing features that communicate with the server
2. Allows us to create restful api's with JSON data 

### Steps to set up the JSON server 
1. Install of the JSON-server globally : npm install -g json-server
2. Create a file with the index .json : this file will contain our dummy JSON records.
3. Start the JSON-server: json-server --watch filename.json
4. Finally on successful execution : we will receive a dummy url that runs on our localhost server. 