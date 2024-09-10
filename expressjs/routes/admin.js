
const express  = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
  
    
})
router.post ('/add-product',(req,res,next) => {
    console.log('Form data',req.body.title);
    res.send('<b>Product Submitted</b>');
  
    
})



module.exports = router;