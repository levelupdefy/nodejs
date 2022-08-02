const fs = require('fs');

fs.appendFile('file5.2.1.txt','it is node',(err)=>{
    if (err) throw err;
    console.log('saved!');
});
