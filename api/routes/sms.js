const Nexmo = require('nexmo');

var express = require('express');
var router = express.Router();
var connection = require('../lib/db');

router.post("/", (req, res) => {

const nexmo = new Nexmo({
  apiKey: '0742b528',
  apiSecret: 'jPNtXiY7u6knTa3Z',
});

const from = 'Nexmo';
const to = '251916475637';
const text = 'Hi siso dama';

nexmo.message.sendSms(from, to, text);



});



module.exports = router;