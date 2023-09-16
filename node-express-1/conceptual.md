### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

ANSWER: Callbacks, Promises, Async/await, Event listeners and  Web workers.


- What is a Promise?

ANSWER: A promise is a powerful object that represents or manages the eventual result of an asynchronous operation and can be in a pending, fulfilled, or rejected state.
Promises are used to handle asynchronous operations in JavaScript and provide a way to track the progress of an operation and to respond to its eventual outcome.


- What are the differences between an async function and a regular function?

ANSWER: Asynchronous functions in JavaScript allows you to write asynchronous code in a more synchronous style, which immediately returns a promise and can be paused and resumed later. while regular functions are synchronous and execute code in the order in which it is written and do not return a promise, as such cannot be paused or resumed later.


- What is the difference between Node.js and Express.js?

ANSWER: Node.js is a popular JavaScript framework which is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser and can be used to build a variety of applications, including web servers, command-line tools, and mobile applications. while Express.js is also a popular JavaScript web framework,that is built on top of Node.js and provides a set of features that make it easy to build web applications, such as routing, middleware, and templating.


- What is the error-first callback pattern?

ANSWER: The error-first callback pattern is a simple and effective way to handle errors in asynchronous code and supported by many Node.js modules and frameworks. The error-first callback pattern is a common way to handle errors in asynchronous code in Node.js and the pattern involves passing a callback function to an asynchronous function, and the callback function is called with two arguments: an error object and the result of the asynchronous operation.
If the asynchronous operation is successful, the error object will be null and the result will be the value returned by the asynchronous function and if the asynchronous operation fails, the error object will contain information about the error and the result will be undefined.



- What is middleware?

ANSWER: Middleware is a software layer that acts as a translator between an application and its operating system or other software components and can be used to perform a variety of tasks, such as logging, authentication, and caching.
Middleware is a powerful tool often used to improve the performance, security, and reliability of an application and can be implemented as a library or as a proxy server.


- What does the `next` function do?

ANSWER: The `next()` function is a built-in function in Python that is used to iterate over a sequence of elements. It is a simple and efficient way to access the next element in a sequence as it returns the next element in the sequence, or `None` if there are no more elements.
The `next()` function can be used with any sequence type, such as lists, tuples, and strings. It can also be used with iterators, which are objects that can be iterated over to produce a sequence of values.


- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
ANSWER: The issues with the above code are:

1.  Performance: The code makes three separate API calls to retrieve the data for each user, which is inefficient and can lead to performance problems, especially if the API calls are slow or if there are a large number of users.
2. Structure: The code lacks structure which makes it difficult to read and understand and the use of nested callbacks makes the code flow difficult to follow.
3. Naming: The variable names in the code are not descriptive and fail to provide any information about the data they contain, which makes the code difficult to debug and maintain.
