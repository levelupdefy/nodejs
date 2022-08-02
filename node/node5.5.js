const fs = require('fs');

const name = 'file5.2.1.txt';
const rename = 'file_renamed.txt'
const msg = 'renamed!'
fs.rename(name, rename, (err)=>{
    if (err) throw err;
    console.log(msg)
});