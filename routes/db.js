var mysql = require('mysql');
var db = {};
db.query = function(sql,callback){
    var con = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"project1",


    });
con.query(sql,(err,results) => {

    callback(err,results);
});


con.end();
}

db.queryParam = function(sql,param,callback){
    var con = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"project1",

    
 
    });
    con.query(sql,param,(err,results) =>{

        callback(err,results);
       
    });

    con.end();
    }

module.exports =db;