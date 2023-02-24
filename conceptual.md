### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  You can use promise.then().catch() method where we wait for the promise to get resolved before moving onto the next function call. 
  You can also use the async await keyword to wait for the promise to get resolved before continuing.

- What is a Promise?
  A promise represents an asynchronous operation which can either be resolved (returns a value) or rejected (returns an error). Asynchronous operation enables the program to wait for one task while letting other tasks continue. This task that is awaiting completion is represented as a promise. The task can either be successful (promise resolved) or unsuccessful (promise rejected). Meanwhile while the promise is waiting for its resolution, other functions that don't necessairily depend on the promise can continue. The rest of the program does not have to be held up for that one task (promise) to finish.

- What are the differences between an async function and a regular function?
  An async function always returns a promise. Other values in the async function are wrapped in the promise if it's resolved

- What is the difference between Node.js and Express.js?
  Node.js is a runtime environment for executing JS code outside the browser where JS code is almost always found. Node.js lets developers write and create apps using JS beyond the browser.
  Express.js is an example of such an app or more specifically a framework based on Node.js
  Express is a lightweight framewhere that sits on top of Node.js and is used for building the backend side of a web application

- What is the error-first callback pattern?
  An error-first callback pattern executes a function (typically asynchronous) and takes the error from any operation (typically asynchronous) as the first argument. So the first argument of the callback is reserved for any error that may have occured and the other arguments represent a successful data resolution.  


- What is middleware?
  In terms of Express.js, a middleware is a function that sits between the applications request and response cycle and has access to the request object, the response object, and the next middleware function. 
  The request object represents any HTTP request made to the server and contains items like the query object, HTTP headers, form data, etc.
  The response object is an HTTP response that is sent out by the app
  The next middleware function execults the next middleware in the stack. It moves on to the next function call. 
  Express.js lets the developer put different types of middlewares between the HTTP request and response cycle. The requested data can be manipulated via the middleware functions and passed on to the next middlware and so on until an appropriate response can be sent out. 

- What does the `next` function do?
  The next function moves on to the next middleware.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}

const foo = await getUsers();
```

```js
async function getUsersBetter(usernames=['elie', 'joelburton', 'mmmaaatttttt']) {
  
  const URL = `https://api.github.com/users`
  
  const data = await Promise.all(usernames.map( async u => {
    const val = await $.getJSON(`${URL}/${u}`);
    return val
  }))
  return data;
}

const foo = await getUsersBetter()
```
