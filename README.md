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




