var express = require('express');
var router = express.Router();
var connection = require('../lib/db');

router.post("/", (req, res) => {
  var title = req.body.title;
  var content = req.body.content;
  var file = req.body.file;
  var postedBy = req.body.postedBy;
  var date = new Date();

  var values = [title, content, file, postedBy, date];


  var sql = "INSERT INTO `news`(`title`,`content`, `file`, `postedBy`, `date`) VALUES (?)";

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  console.log("error");

});



module.exports = router;