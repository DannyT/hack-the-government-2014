// TODO: abstract DB connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'htg', 
  user     : 'htg',
  password : 'htg2014'
});

var totalAccidents = 0;

connection.query('select count(*) as total from accident;', 
	function(err, rows, fields) {
  		if (err) throw err;
  	totalAccidents = rows[0].total;
});

connection.end();

exports.list = function(req, res){
  res.json(totalAccidents);
};