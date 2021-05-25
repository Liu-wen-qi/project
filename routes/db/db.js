const mysql = require('mysql');

var mysqlConnect = {};

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'project2'
});
 
mysqlConnect.sql= function(query, callback){
 
	if (!query) {
		callback();
		return;
	}
	pool.query(query, function(err, rows, fields) {
	  if (err) {
	
	    callback(err, null);
	    return;
	  };
 
	  callback(null, rows);
	});
}
module.exports = db;