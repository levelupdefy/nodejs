const fs = require('fs');

const delete_f = 'file5.2.1.txt';
const msg = 'deleted file5.2.1.txt! '
fs.unlink(delete_f,(err)=>{
    if (err) throw err;
    console.log(msg)
});

