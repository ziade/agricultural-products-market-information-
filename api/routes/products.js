var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');
 

/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT product.*, district.*, productdata.* FROM product JOIN district ON district.district_id = product.market JOIN productdata ON productdata.product_id = product.commodity ',function(err,result)     {
 
        if(err){
         req.flash('error', err);  
        }else{
            
            res.json(result);
        }
                            
         });
        
    });
    router.get('/data', function(req, res, next) {
      
        connection.query('SELECT * FROM productdata ',function(err,result)     {
        
               if(err){
                req.flash('error', err);  
               }else{
                   
                   res.json(result);
               }
                                   
                });
               
           });
 

 
module.exports = router;