// Create web server
// This is a sample code to create a web server with Node.js

var http = require('http');
var fs = require('fs');
var url = require('url');

// Create a server
http.createServer(function (req, res) {
    // Parse the URL
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    // Read the requested file
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080); // Server listens on port 8080

console.log("Server running at http://localhost:8080/");