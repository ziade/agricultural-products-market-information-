var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
 

/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT users.*, district.* FROM users JOIN district ON district.district_id = users.address ',function(err,result)     {
 
        if(err){
         req.flash('error', err);  
        }else{
            
            res.json(result);
        }
                            
         });
        
    });
 

 
module.exports = router;