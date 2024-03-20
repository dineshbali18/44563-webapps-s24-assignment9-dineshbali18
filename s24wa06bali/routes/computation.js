var express = require('express');
var router = express.Router();

/* Computation end point */
router.get('/', function(req, res, next) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;
  res.send(`Math.hypot() applied to ${x} is ${Math.hypot(x)}<br> Math.ceil() applied to ${x} is ${Math.ceil(x)}<br> Math.clz32() applied to ${x} is ${Math.clz32(x)}`);
});

module.exports = router;