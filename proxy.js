const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({
  secure: false, // Ignore certificate errors
});

// Create an HTTP server that listens on port 3000
const server = http.createServer((req, res) => {
  // Forward the request to the target server with HTTPS
  proxy.web(req, res, { target: 'https://162.55.81.185:8443' }, (err) => {
    if (err) {
      console.error('Proxy error:', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Proxy error');
    }
  });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});
