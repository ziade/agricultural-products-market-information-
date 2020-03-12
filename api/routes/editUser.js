var express = require('express');
var router = express.Router();
var connection  = require('../lib/db');


router.post("/", (req, res) => {
    var id = req.body.id;
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
    var userName= req.body.userName;
    var password= req.body.password;
   

    
  let sql = `UPDATE users
           SET firstName = ?, lastName = ?, email = ?, phoneNo = ?, sex = ?, region = ?, zone = ?,
           woreda = ?, city = ?, location = ?, profilePic = ?, userName = ?, password = ?
           WHERE id = ?`;
 
let data = [ firstName, lastName, email, phoneNo, sex, region, zone,
  woreda, city, location, profilePic, userName, password, id];
 
// execute the UPDATE statement
connection.query(sql, data, (error, results, fields) => {
  if (error){
    return console.error(error.message);
  }
      console.log(data)
    
      });
      });
    // }
  

  module.exports = router;