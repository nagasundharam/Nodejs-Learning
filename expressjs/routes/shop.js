
const express  = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../utilis/path')



router.use('/',(req,res,next)=> {
    res.sendFile(path.join(rootDir,'views','shop.html'));
    console.log("f irst middleware");
    // next();
})

module.exports = router;