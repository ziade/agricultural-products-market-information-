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
    var address= req.body.address;
    var profilePic= "pic";
    var userName= req.body.userName;
    var password= req.body.password;
   

    
  let sql = `UPDATE users
           SET firstName = ?, lastName = ?, email = ?, phoneNo = ?, sex = ?, address = ?, profilePic = ?, userName = ?, password = ?
           WHERE id = ?`;
 
let data = [ firstName, lastName, email, phoneNo, sex, address, profilePic, userName, password, id];
 
// execute the UPDATE statement
connection.query(sql, data, (error, results, fields) => {
  if (error){
    return console.error(error.message);
  }
      console.log(data)
    
      });
      });

      router.post("/employee", (req, res) => {
        var id = req.body.id;
        var email= req.body.email;
        var phoneNo= req.body.phoneNo;
        var profilePic= "pic";
        var userName= req.body.userName;
        var password= req.body.password;
       
    
        
      let sql = `UPDATE users
               SET  email = ?, phoneNo = ?, profilePic = ?, userName = ?, password = ?
               WHERE id = ?`;
     
    let data = [ email, phoneNo, profilePic, userName, password, id];
     
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