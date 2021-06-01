let express = require ('express');
let router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "project1"
});
connection.connect();

// router.get('/', function (req, res) {
//     res.render('add');
// });

router.get('/', function (req, res) {
    var selectSQL = "select * from register " 
      connection.query(selectSQL, function (err, results, fields){
        console.log(err);
        console.log(results);
        console.log(fields);
        res.render('add',{detail:results} );
      
        });
  });
router.post('/', (req, res) => {
    console.log(req.body.title);
    var insertSql = 'insert into register(name,pass,cpass,sname,phone,email) values(?,?,?,?,?,?)';
    connection.query(insertSql, [req.body.name,req.body.pass,req.body.cpass,req.body.sname,req.body.phone,req.body.email], function (err, result, fields) {

        if (err) {
            console.log('err', err);
            return;
        } else {
           
            res.redirect('/manager');
        }
    });
    });

module.exports = router;
