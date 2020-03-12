var express = require('express');
var router = express.Router();
var connection = require('../lib/db');

router.post("/", (req, res) => {
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
  var date = new Date();
  var postedBy = req.body.postedBy;


  var values = [type, name, specification, quantity, unit, region, zone, woreda, city, location, priceMin, priceMax,
    date, postedBy
  ];


  var sql = "INSERT INTO `product`(`type`,`name`, `specification`, `quantity`, `unit`, `region`, `zone`, `woreda`," +
    " `city`, `location`, `priceMin`, `priceMax`, `date`, `postedBy`) VALUES (?)";

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  console.log("error");

});
// }


module.exports = router;