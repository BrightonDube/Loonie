var http = require('http');
http.createServer(function (request, response) {
    // Send the HTTP OK Header
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Send the response body
    response.end('Hello World\n');
}).listen(8081);
console.log("Server running at http://localhost:8081");
