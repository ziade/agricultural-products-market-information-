var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');


router.post("/", (req, res) => {
    
  var firstName= req.body.firstName;
  var lastName= req.body.lastName;
  var email= req.body.email;
  var phoneNo= req.body.phoneNo;
  var sex= req.body.sex;
  var region= req.body.region;
  var zone= req.body.zone;
  var woreda= req.body.woreda;
  var city= req.body.city;
  var location= req.body.location;
  var profilePic= req.body.profilePic;
  var role= req.body.role;
  var registrationDate= new Date();
  var userName= req.body.userName;
  var password= req.body.password;

  
  var values = [firstName, lastName, email, phoneNo, sex, region, zone, woreda,city, location, profilePic, role, 
              registrationDate, userName, password];


  var sql = "INSERT INTO `users`(`firstName`, `lastName`, `email`, `phoneNo`, `sex`, `region`, `zone`, `woreda`,"+
            " `city`, `location`, `profilePic`, `role`, `registrationDate`, `userName`, `password`) VALUES (?)";
  
    connection.query(sql, [values], function (err, result)  {
      if (err) throw err;
      console.log("1 record inserted");
    });
      res.redirect("/");
    
      });
    // }
  

  module.exports = router;