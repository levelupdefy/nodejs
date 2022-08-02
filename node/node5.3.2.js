const fs = require('fs');

const file_name = 'file5.2.1.txt'
const file_update_cont = "update using node5.3.2.js";
const msg = "text replaced!";

fs.appendFile(file_name, file_update_cont, (err)=>{
    if (err) throw err;
    console.log(msg);
});