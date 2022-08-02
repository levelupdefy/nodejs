const fs = require('fs');

fs.open('file5.2.2.txt', 'w', (err,file)=>{
    if (err) throw err;
    console.log('saved!');
});
