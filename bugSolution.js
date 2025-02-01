const http = require('http');

const server = http.createServer((req, res) => {
  // Use async/await for better error handling
  (async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          if (req.url === '/error') {
            throw new Error('Something went wrong!');
          }
          resolve();
        }, 100);
      });
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    } catch (error) {
      console.error('Error:', error.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  })();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});