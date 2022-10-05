const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;// important to declare

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/contact-me.html', function(req, res) {

    res.sendFile(path.join(__dirname, '/public/contact-me.html'));
  });
  
app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
  });
    

app.listen(port);
console.log('Server started at http://localhost:' + port);