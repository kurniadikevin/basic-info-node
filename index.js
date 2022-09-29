// Import the HTTP module
const http = require("http");
// Import the URL module
const url = require("url");
// fs module
const fs= require('fs');

// Make our HTTP server
const server = http.createServer((req, res) => {
    // Parse the request url
    const reqUrl = url.parse(req.url).pathname
    if(reqUrl == "/") {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }
    else if(reqUrl == "/contact-me") {
        fs.readFile('contact-me.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }
    else if(reqUrl == "/about") {
        fs.readFile('about.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }
    //error handling
    else{
        fs.readFile('404.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
          });
    }
})

// Have the server listen on port 9000
server.listen(8080)
