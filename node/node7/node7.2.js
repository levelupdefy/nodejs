const http = require('http');
const fs = require('fs');
const events = require('events');

const server_start = 'start_http';
const stat = 200
const type = {
    'type':'text/html'
}
const host_file = './node7.2.html';
const msg = 'event has been fired, starting http server at http://127.0.0.1:8080/'

const server = http.createServer((req,res)=>{
    fs.readFile(host_file,(err,data)=>{
        if (err) throw err;
        res.writeHead(stat,type);
        res.write(data);
        const end = res.end()
        return end;
    });
});


const handler = () =>{
    server.listen(8080);
    console.log(msg)
}

const emitter = new events.EventEmitter()
emitter.on(server_start,handler);
emitter.emit(server_start);

