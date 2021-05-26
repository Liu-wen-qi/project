let express = require ('express');
let router = express.Router();

var mysql =require('mysql');
var connection =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'project1'
  
})
connection.connect();



router.get('/', function (req, res) {
    res.render('course');
});

router.post('/', (req, res) => {

    var insertSql = 'insert into course(name,phone,email, course) values(?,?,?,?)';
    connection.query(insertSql, [req.body.name,req.body.phone,req.body.email,req.body.course], function (err, result, fields) {
    
        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/');
        }
    });
    });

module.exports = router;

    