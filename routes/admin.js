const { Router } = require('express');
var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET home page. */
router.get('/',(req, res)=> {
    db.query("select * from tab_explore",(err,result)=>{
        res.render('admin',{data:result});
    });
})
router.post('/admin',(req,res)=>{
    db.queryParam("select * from tab_explore where id=?,title=?,location=?,number=?,nmessage=?",[req.body.search,req.body.search,req.body.search,req.body.search,req.body.search],(err,result)=>{
        res.render('/admin', {data: result });
    });
});



//新增
router.get('/add',(req,res) =>{
    res.render('add');
});
router.post('/add',(req,res) =>{
    db.queryParam('insert into tab_explore(title,location,number,nmessage) values(?,?,?,?)',[req.body.title,req.body.location,req.body.number,req.body.nmessage],(err,result)=>{
        if(err) {
            throw err
            return
        }
        res.redirect('/admin');
    
})
});
//删除
router.get('/del/:id',(req,res) => {
    db.queryParam("delete from tab_explore where id= ?",[req.params.id],(err,result) =>{
        res.redirect('/admin')
    })
    });
//修改
router.get('/update/:id',(req,res) =>{
    db.queryParam("select * from tab_explore where id = ?",[req.params.id],(err,result) =>{
        res.render('update',{obj:result[0]});
    })
});
router.post('/update',(req,res)=>{
    db.queryParam("update tab_explore set title=? ,location=? , number=? , nmessage=? where id=?",[req.body.title,req.body.location,req.body.number,req.body.nmessage,req.body.id],(err,result)=>{
        res.redirect('/admin');
    })
})


module.exports = router;
