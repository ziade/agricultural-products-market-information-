var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
 

/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM district ',function(err,result)     {
 
        if(err){
         req.flash('error', err);  
        }else{
            
            res.json(result);
        }
                            
         });
        
    });
 

 
module.exports = router;