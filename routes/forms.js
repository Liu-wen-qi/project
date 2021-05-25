var express = require('express');
var router = express.Router();

/* GET forms page. */
router.get('/', function(req, res, next) {
  res.render('forms', { title: 'Express' });
});

module.exports = router;