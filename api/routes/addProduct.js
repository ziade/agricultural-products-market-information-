var express = require('express');
var router = express.Router();
var connection = require('../lib/db');

router.post("/", (req, res) => {
  var commodity = req.body.commodity;
  var market = req.body.market;
  var quantity = req.body.quantity;
  var priceMin = req.body.priceMin;
  var priceMax = req.body.priceMax;
  var date = new Date();
  var postedBy = req.body.postedBy;
  var approvedBy = req.body.approvedBy;


  var values = [commodity, market,quantity, priceMin, priceMax, date, postedBy, approvedBy];


  var sql = "INSERT INTO `product`(`commodity`,`market`, `quantity`, `priceMin`, `priceMax`, `date`,`postedBy`, `approvedBy`) VALUES (?)";

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  console.log("error");

});
// }


module.exports = router;