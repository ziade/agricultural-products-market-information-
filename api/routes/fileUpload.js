var express = require('express');
var app = express();
var router = express.Router();
var multer = require('multer')
var cors = require('cors');

app.use(cors())

var storage = multer.diskStorage({

    destination: function (req, file, cb) { cb(null, '../client/src/profilePicture')},
    filename: function (req, file, cb) {cb(null, file.originalname ) }

    })

var upload = multer({ storage: storage }).single('file')

router.post('/',function(req, res) {
     
    upload(req, res, function (err) {
        console.log("Request ---", req.body);
      
      
      console.log("Request file ---", req.file)
      console.log("Request title ---", req.body.title)
      console.log("Request name ---", req.body.name)
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});
module.exports = router;