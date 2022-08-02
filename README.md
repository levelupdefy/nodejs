# nodejs

## 1. your first application
```
create a server 
```
```js
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
```

## 2. node package manager

2.1 version

```sh
npm --version
```

2.2 updating npm

```
sudo npm install npm -g
```
2.3 installing node modules

```
npm install <module name>
```
```
npm install express
```

2.4 local vs global installation

global installation
```
npm install <node module> -g 
```

2.5 unstalling module
```
npm uninstall <module name>
```
2.6 updating module
```
npm update <module name>
```
2.7 search a module
```
npm search <module name>
```
## 3. create your own module
```js
// my_mod
exports.date = () =>{
    return Date()
}
```

```js
const http = require('http');
const dt = require('./my_mod');

http.createServer((req, res)=>{
    res.writeHead(200, {
        'content-type':'text/html'
    });
    res.write(
        'the date and time' + dt.date()
    );
    res.end()
}).listen(8080)
console.log("server running at http://127.0.0.1:8080/")
```

## 4. nodejs http module
```
4.1 nodejs as a web server
```
```js
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
```
```
4.2 http headers
```
```js
const http = .....
....

// here status_code & response_headers both are http headers
const status_code = 200;  
const response_headers = {
  'content-type':'text/html'
};
http.createServer((req, res)=>{
    res.writeHead(status_code, response_headers);  
    res.write(
        'the date and time' + dt.date()
    );
    res.end()
}).listen(8080)
```


