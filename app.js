const http = require('http')

const Handler = require('./routes');





const server = http.createServer(Handler)

console.log("testing");
server.listen(3000,'localhost',()=>{
    console.log("listen");
})


