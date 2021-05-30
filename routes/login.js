
let express = require ('express');
let router = express.Router();

var mysql =require('mysql');
var connection =mysql.createConnection({
  host:'localhost',
  port:'3306',
  user:'root',
  password:'root',
  database:'project1'
  
})
connection.connect();

// router.get('/',(req,res)=>{
//     res.render('login');
// });
// router.post('/login',(req,res)=>{
//     let name=req.body.name;
//     let pass= req.body.pass;

//     if( req.session.user != undefined 
//         && 
//         name ==req.session.user.name
//         && 
//         pass == req.session.user.pass){
//             // res.send("login success");
//             res.redirect("/index");
//         }else{
//             res.send("login fail", );
//         }
         
// });



 router.get('/',function(req,res){
   res.render('login');
 });

 
 router.post('/login', (req, res) => {
   var selectSQL="select name,pass from login where name = ? and pass = ?"

  let a= [req.body.name,req.body.pass]

    

    connection.query(selectSQL,a, function (err, result, fields) {

 if (err) {
            console.log('err', err);
            return;
        } else {
          if (result == '') {
                          res.send('登录失败');
                      }
                      else {
                        if(req.body.name=="liuliu"&&req.body.pass ==0710){
                          res.redirect('/background');
            }else{
          
            res.redirect('/index');  
                      }
        }
      }
    });
    });

    
// router.get('/', function (req, res) {
//   res.render('login');
// });
// router.post('/login', (req, res) => {


//   var selectSQL = "select name,pass from register where name = '" + req.body.name + "' and pass =' " + req.body.pass + "'";
//   connection.query(selectSQL, function (err, result, fields) {
//       if (err) {
//           console.log('err', err);
//           return;
//       } else {
       
//           if (result == '') {
//               res.send('登录失败');
//           }
//           else {

//             if(req.body.name=="liuliu"&&req.body.pass ==0710){
//               res.redirect('/index1');
//             }else{
//               res.redirect('/index');

//             }
           
//           }
//       }
//   });
// });

module.exports = router;
