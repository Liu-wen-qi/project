var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/', function (req, res, next) {
  console.log(1);
  db.query("select * from tab_explore",(err,result) => {
    if(err != null){
      console.log(err)
    }else{
      res.render('index',{ data:result});
    }
  });
 });
module.exports = router;



