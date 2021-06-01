var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
  res.render("update",{obj:""})
})
router.post('/update:id',(req,res) =>{
  db.queryParam("update tab_explore set title=?,location=?,number=?,nmessage=? where id = ? ",[req.body.title,req.body.location,req.body.number,req.body.nmessage,req.body.id],(err,result) =>{
  }) 
})
module.exports = router;
