import http from 'http';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:5173', // Specify the allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
};

// Apply CORS middleware to the entire server
const corsMiddleware = cors(corsOptions);

const server = http.createServer((request, response) => {
  // Enable CORS by calling the middleware at the top level
  corsMiddleware(request, response, () => {
    // Parse the URL to extract the pathname
    const { url } = request;
    const pathname = new URL(url, `http://${request.headers.host}`).pathname;

    // Define your routes and their associated handlers
    if (pathname === '/') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Hello, World!\n');
    } else if (pathname === '/about') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('About Page\n');
    } else if (pathname === '/contact') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Contact Page\n');
    } else {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('404 Not Found\n');
    }
  });
});

const port = 3000;
const hostname = 'localhost';

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
