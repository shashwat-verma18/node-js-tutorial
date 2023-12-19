const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('Hi, My name is Shashwat ! ');
});

server.listen(4000);