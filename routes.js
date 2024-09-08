const fs = require('fs');
function Handler(req,res){
    const url = req.url
    const method = req.method
    console.log(url)

    if (url == '/'){
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head><title>enter form details</title></head>')
        res.write("<body><form action ='/message' method ='POST'><input type ='text' name ='message'><input type ='submit' value ='send'> </form></body>")
        res.write('</html>')
        return res.end();


    }
    
    if (url === '/message' && method === 'POST'){
        const body = []
        req.on('data',(chunk) => {
            
            body.push(chunk);
            console.log(chunk);


        })
        return req.on('end',()=> {
            console.log("ENd event started");
            const parsedBody = Buffer.concat(body).toString();

            const message = parsedBody.split('=')
            console.log(message)
            fs.writeFile('hello.txt',message[1],(err) => {
              
              
              
  console.log("file writted successfully")

                res.setHeader('Location','/')
                res.statusCode = 302;  
            });
           
            
        })
        
        
     }
        
    res.setHeader('Content-type','text/html');
        res.write(
            '<html>')
        res.write('<head><title>JVL  code tutorial</title></head>')
        res.write("<body><h1>Hello from nagasundharam! </h1></body>")
        res.write('</html>')
        res.end();
    

        }

module.exports = Handler;
   
   