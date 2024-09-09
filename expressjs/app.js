
const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded())

app.get('/add-product',(req,res,next) => {
    res.send('<h1>Add products</h1> <form action = "/store-product" method ="POST"><input type = "text" name = "title"/><input type ="submit" value ="Submit"/></form>')
  
    
})
app.post ('/store-product',(req,res,next) => {
    console.log('Form data',req.body.title);
    res.send('<b>Product Submitted</b>');
  
    
})

app.use('/',(req,res,next)=> {
    res.send('<h1>First<h1/>');
    console.log("f irst middleware");
    // next();
})



app.listen(3000);
