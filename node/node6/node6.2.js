const http = require('http');
const fs = require('fs');
const url = require('url');

const type = {
    'type':'text/html'
}

const error_msg = '404 NOT FOUND'
const msg = 'server starting at http://127.0.0.1:8080/page1.html'
const date = () =>{
    return Date()
};

const server = http.createServer((req, res)=>{
    const search_url = url.parse(req.url, true);
    const page = "." + search_url.pathname;
    console.log(date(),page);
    fs.readFile(page, (err, data)=>{
        if (err) {
            res.writeHead(404, type);
            res.write(error_msg);
            res.end()
        }
        res.writeHead(200, type);
        res.write(data);
        const end = res.end();
        return end
    })
})
server.listen(8080);
console.log(msg);
