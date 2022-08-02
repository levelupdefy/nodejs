const fs = require('fs');
const msg = 'file is open';
const rs = fs.createReadStream('./de.txt');
rs.on('open',()=>{
    console.log(msg);
});