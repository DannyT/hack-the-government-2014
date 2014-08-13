// TODO: abstract DB connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'htg', 
  user     : 'htg',
  password : 'htg2014'
});

var resultsTable = [];

connection.query('select case sex_of_driver when 1 then \'Male\' when 2 then \'Female\' else \'Unknown\' end as gender, count(*) as total from vehicle group by gender order by total desc;', 
	function(err, rows, fields) {
  		if (err) throw err;
  	resultsTable = rows;
});

connection.end();

exports.list = function(req, res){
  res.json(resultsTable);
};
