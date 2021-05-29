let express = require ('express');
let router = express.Router();


// let User=require('./bean/user');

// router.get('/',(req,res)=>{
//     res.render('register');
// })

// router.post('/',(req,res)=>{
    
//    let user= new User(req.body.name,req.body.pass,req.body.cpass,req.body.sname,req.body.phone,req.body.mail);
//    console.log(user);
//    req.session.user = user;
//    res.send("register success");    

// })


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:'3306',
    password: "root",
    database: "project1",
    // dialectOptions: {
    //     socketPath: '/tmp/mysql.sock' // 指定套接字文件路径
    // }

});
connection.connect();

router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', (req, res) => {

    var insertSql = 'insert into register(name,pass,cpass, sname, phone, mail) values(?,?,?,?,?,?)';
    connection.query(insertSql, [req.body.name,req.body.pass,req.body.cpass,req.body.sname,req.body.phone,req.body.mail], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/');
        }
    });
    });

module.exports = router;