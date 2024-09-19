const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create a server that listens on port 8080
const server = http.createServer((req, res) => {
  // Forward the request to localhost:8443
  proxy.web(req, res, { target: 'https://162.55.81.185:8443' });
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Proxy server is running on http://localhost:3000');
});
