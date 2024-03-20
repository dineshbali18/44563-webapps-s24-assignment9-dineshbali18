var express = require('express');
var router = express.Router();

/* GET my data. */
router.get('/', function(req, res, next) {
  res.render('mydata', { fullName: 'Dinesh Bali' });
});

module.exports = router;
