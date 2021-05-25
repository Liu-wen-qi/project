var express = require('express');
var router = express.Router();
var db  =require('./db/db'); 

/* GET home page. */
router.get('/', function(req, res, next) {
    // db.sql("select * from ")
  res.render('index', { title: 'Express' });
});


module.exports = router;
