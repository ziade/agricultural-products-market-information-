var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');


router.post("/", (req, res) => {
    var id = req.body.id;
    var type = req.body.type;
    var name = req.body.name;
    var specification = req.body.specification;
    var quantity = req.body.quantity;
    var unit = req.body.unit;
    var region = req.body.region;
    var zone = req.body.zone;
    var woreda = req.body.woreda;
    var city = req.body.city;
    var location = req.body.location;
    var priceMin = req.body.priceMin;
    var priceMax = req.body.priceMax;
   

    
  let sql = `UPDATE product
           SET type = ? , name= ? , specification = ?, quantity = ?, unit = ?, region = ?, zone = ?, woreda = ?,
           city = ?, location = ?, priceMin = ?,  priceMax = ?
           WHERE id = ?`;
 
let data = [type, name, specification, quantity, unit, region, zone, woreda,
            city, location, priceMin,  priceMax, id];
 
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