// create a server using node js

// importing module
const http = require('http');     

// create server
http.createServer((request, responce) =>{
    responce.writeHead(200, {
        'content-type':'text/plain'
    });
    responce.write('i am rsadhukhan');
    responce.end();

}).listen(8080)
console.log("server running at http://127.0.0.1:8080/")
