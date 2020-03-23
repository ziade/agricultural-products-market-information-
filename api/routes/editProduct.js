var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');


router.post("/", (req, res) => {
    var id = req.body.id;
    var commodity = req.body.commodity;
    var market = req.body.market;
    var quantity = req.body.quantity;
    var priceMin = req.body.priceMin;
    var priceMax = req.body.priceMax;
   

    
  let sql = `UPDATE product
           SET commodity = ? , market= ? ,  quantity = ?, priceMin = ?,  priceMax = ? ,  status = ? 
           WHERE id = ?`;
 
let data = [commodity, market,quantity, priceMin,  priceMax, 0, id];
 
// execute the UPDATE statement
connection.query(sql, data, (error, results, fields) => {
  if (error){
    return console.error(error.message);
  }
      console.log("1 row updated")
    
      });
      });
    // }
  

  module.exports = router;