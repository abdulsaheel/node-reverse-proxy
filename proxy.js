const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Create a server that listens on port 8080
const server = http.createServer((req, res) => {
  // Forward the request to localhost:8443
  proxy.web(req, res, { target: 'http://localhost:8443' });
});

// Listen on port 8080
server.listen(8080, () => {
  console.log('Proxy server is running on http://localhost:8080');
});
