var express = require('express');
const db = require('./db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query("select * from tab_explore",(err,result)=>{
        res.render('admin', {data: result });
      });
});
router.post('/',(req,res)=>{
    db.queryParam("select * from tab_explore where title=? or position=? or number=? or nmessagge=? ",[req.body.search,req.body.location,req.body.number,req.body.nmessage],(err,result)=>{
        res.render('admin', {data: result });
      });

})
router.get('/add',(req,res) =>{
    res.render('add');
});
router.post('/add',(req,res) =>{
    db.queryParam("insert into tab_explore(title,location,number,nmessage,create_time,update_time) value (?,?,?,?,?,?)",[req.body.title,req.body.location,req.body.number,req.body.nmessage,new Date()],(err,result)=>{
        res.redirect('/admin');

    })
})
router.get('/update/:id',(req,res) =>{
    db.queryParam("select * from tab_explore where id = ?",[req.params.id],(err,result) =>{
        res.renderr('update',{obj:result[0]});
    })
  
});
router.post('/update',(req,res) =>{
   db.queryParam("update tab_explore set title=?,location=?,number=?,nmessage=? where id = ? ",[req.body.title,req.body.location,req.body.number,req.body.nmessage,req.body.id],(err,result) =>{
    res.render('/admin');
   }) 
})

module.exports = router;
