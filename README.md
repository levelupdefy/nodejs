# nodejs
-----------------------------------------------------------------
# nodejs guide

> ## nodejs
>> 1. [your first application](#1)

>> 2. [node package manager](#2)

>> 3. [create your own module](#3)

>> 4. [nodejs as a http server](#4)

>>>  4.1 http

>>>  4.2 http headers

>> 5. [nodejs as a file server](#5)

>>> 5.1. read files

>>> 5.2. create files

>>>> 5.2.1. appendFile()

>>>> 5.2.2. open()

>>>> 5.2.3. writeFile()

>>> 5.3. update files

>>>> 5.3.1. appendFile()

>>>> 5.3.2. writeFile()

>>> 5.4. delete files

>>> 5.5. rename files



-------------------------------------------------------------------
# 1
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
[code](./node/node0.js)

------------------------------------------------------------------------------
# 2

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

------------------------------------------------------------------------
# 3
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
------------------------------------------------------------------------------
# 4
## 4. nodejs as a http server
```
4.1 http
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
[code](./node/node04.1.js)


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

-------------------------------------------------------------------------
# 5
## 5 nodejs as a file server

```
5.1 read files
```
```js
const http = require('http');
const fs = require('fs');      //require fs module
const stat = 200;
const type = {
    'content':'text/html'
};
const server = http.createServer((req, res)=>{
    fs.readFile('./node5.html', (err, data)=>{
        res.writeHead(stat, type);
        res.write(data);
        const ret =  res.end();
        return ret
    });
});
server.listen(8080);
console.log("fs server starting at http://127.0.0.1:8080");
```
[code](./node/node5.1.js)

```
5.2. create files 
```
```js
5.2.1. create files using appendFile() method
```
```js
const fs = require('fs');

fs.appendFile('file5.2.1.txt','it is node',(err)=>{
    if (err) throw err;
    console.log('saved!');
});
```
[code](./node/node5.2.1.js)


```js
5.2.2 create files using open() method
```
```js
const fs = require('fs');

fs.open('file5.2.2.txt', 'w', (err,file)=>{
    if (err) throw err;
    console.log('saved!');
});
```
[code](./node/node5.2.2.js)

```js
5.2.3 create files using writeFile() method
```
```js
const fs = require('fs');

const file_name = 'file5.2.3.txt'
const file_cont = "hello file5.2.3.txt";
const msg = "saved!";

fs.writeFile(file_name, file_cont, (err)=>{
    if (err) throw err;
    console.log(msg);
});
```
[code](./node/node5.2.3.js)

```
5.3 update files
```
```js
5.3.1. fs.appendFile() method
```

```js
const fs = require('fs');

const file_name = 'file5.2.1.txt'
const file_update_cont = "update using node5.3.1.js";
const msg = "update!";

fs.appendFile(file_name, file_update_cont, (err)=>{
    if (err) throw err;
    console.log(msg);
});
```
[code](./node/node5.3.1.js)

```js
5.3.2. writeFile() method
```
```js
const fs = require('fs');

const file_name = 'file5.2.1.txt'
const file_update_cont = "update using node5.3.2.js";
const msg = "text replaced!";

fs.appendFile(file_name, file_update_cont, (err)=>{
    if (err) throw err;
    console.log(msg);
});
```
[code](./node/node5.3.2.js)

```
5.4 delete files
```
```js
const fs = require('fs');

const delete_f = 'file5.2.1.txt';
const msg = 'deleted file5.2.1.txt! '
fs.unlink(delete_f,(err)=>{
    if (err) throw err;
    console.log(msg)
});
```
[code](./node/node5.4.js)

```
5.5 rename files
```
```js
const fs = require('fs');

const name = 'file5.2.1.txt';
const rename = 'file_renamed.txt'
const msg = 'renamed!'
fs.rename(name, rename, (err)=>{
    if (err) throw err;
    console.log(msg)
});
```
[code](./node/node5.5.js)