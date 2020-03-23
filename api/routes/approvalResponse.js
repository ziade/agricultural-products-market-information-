var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');


router.post("/", (req, res) => {
    var id = req.body.item_id;
    var appr_id = req.body.appr_id;
   
  let sql = `UPDATE product
           SET status = ? 
           WHERE id = ?`;
 
let data = [appr_id, id];
 
// execute the UPDATE statement
connection.query(sql, data, (error, results, fields) => {
  if (error){
    return console.error(error.message);
  }
      console.log("request Approved !!!")
    
      });
      });
    // }
      

  module.exports = router;