const fs = require('fs');
const path = require('path');

let way=path.join(__dirname, 'text.txt');
let ReadStream=fs.createReadStream(way,'utf8');

ReadStream.on('data', (chunk)=>{
    console.log(chunk);
})