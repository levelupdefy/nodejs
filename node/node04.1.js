const http = require('http');
const stat = 200;
const type = {
  'content-type':'text/html'
};
const cont = `<h1 style="font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"><span style="color:red;">hello! </span><span
style="color:yellow;">hack this server!</span></h1>`
const server = http.createServer((req, res)=>{
  res.writeHead(stat, type);
  res.write(cont);
  res.end()
})
server.listen(8080);
console.log("server starting at http://127.0.0.1:8080");
