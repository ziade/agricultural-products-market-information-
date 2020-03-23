var express = require('express');
var app = express();
var router = express.Router();
var connection  = require('../lib/db');
var multer = require('multer')
var cors = require('cors');

var filename = '';
app.use(cors())

var storage = multer.diskStorage({

    destination: function (req, file, cb) { cb(null, '../client/src/profilePicture')},
    filename: function (req, file, cb) {cb(null, file.originalname ) }

    })

var upload = multer({ storage: storage }).single('file')    
router.post("/", function(req, res){
  
  upload(req, res, function (err) {
    
  var firstName= req.body.firstName;
  var lastName= req.body.lastName;
  var email= req.body.email;
  var phoneNo= req.body.phoneNo;
  var sex= req.body.sex;
  var address= req.body.address;
  var profilePic= "req.file.name";
  var role= req.body.role;
  var marketManager= req.body.marketManager;
  var registrationDate= new Date();
  var userName= req.body.userName;
  var password= req.body.password;

 


  var values = [firstName, lastName, email, phoneNo, sex, address, profilePic, role, 
                marketManager, registrationDate, userName, password];


  var sql = "INSERT INTO `users`(`firstName`, `lastName`, `email`, `phoneNo`, `sex`, `address`,"+
            "`profilePic`, `role`,`marketManager`, `registrationDate`, `userName`, `password`) VALUES (?)";
  
    connection.query(sql, [values], function (err, result)  {
      if (err) throw err;
      console.log("1 record inserted");
    });
      

    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
return res.status(200).send(req.file)

})   
      });
    // }
  

  module.exports = router;