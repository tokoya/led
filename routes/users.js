var express = require('express');
var router = express.Router();

var GPIO = require('onoff').Gpio;
var led = new GPIO(17, 'out');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var onoff = req.query.onoff;
  if (onoff == 'on') {
    led.writeSync(1);
  }
  if (onoff == 'off') {
    led.writeSync(0);
  }
  res.render('users', {message: onoff});
});

module.exports = router;
