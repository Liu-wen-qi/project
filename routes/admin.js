var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query("select * from tab_explore",(err,result)=>{
        console.log(err);
        console.log(result);
        res.render('admin', {data: result });
      });
});
router.post('/',(req,res)=>{
    db.queryParam("select * from tab_explore where title=? or position=? or number=? or nmessagge=? ",[req.body.title,req.body.location,req.body.number,req.body.nmessage],(err,result)=>{
        res.render('/admin', {data: result });
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
        res.render('update',{obj:result[0]});
    })
});
router.post('/update',(req,res)=>{
    db.queryParam("update tab_explore set title=? or location=? or number=? ornmessage=? where id=?",[req.body.title,req.body.location,req.body.number,req.body.nmessage,req.body.id],(err,result)=>{
        res.redirect('/admin');
    })
})

module.exports = router;
