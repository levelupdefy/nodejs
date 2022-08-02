const fs = require('fs');

const file_name = 'file5.2.3.txt'
const file_cont = "hello file5.2.3.txt";
const msg = "saved!";

fs.writeFile(file_name, file_cont, (err)=>{
    if (err) throw err;
    console.log(msg);
});
