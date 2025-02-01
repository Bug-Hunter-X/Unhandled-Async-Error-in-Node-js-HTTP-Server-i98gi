# Unhandled Async Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js: unhandled exceptions within asynchronous callbacks.  Unhandled exceptions can lead to application crashes, data loss, and unexpected behavior.

The `bug.js` file shows an example of an HTTP server with an asynchronous operation that can throw an error.  The `bugSolution.js` file provides a solution using proper error handling techniques.

## How to reproduce the bug:

1. Clone this repository.
2. Run `node bug.js`.
3. Access the server in your browser: `http://localhost:3000/error`.
4. Observe the server crashing without a graceful handling of the error.

## Solution:

The solution involves wrapping asynchronous operations within `try...catch` blocks or using Promises and async/await for robust error management, as shown in `bugSolution.js`.