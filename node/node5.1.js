const http = require('http');
const fs = require('fs');
const stat = 200;
const type = {
    'content':'text/html'
};
const server = http.createServer((req, res)=>{
    fs.readFile('./node5.1.html', (err, data)=>{
        res.writeHead(stat, type);
        res.write(data);
        const ret =  res.end();
        return ret
    });
});
server.listen(8080);
console.log("fs server starting at http://127.0.0.1:8080");
