// TODO: abstract DB connection
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  database : 'htg', 
  user     : 'htg',
  password : 'htg2014'
});

var resultsTable = [];

connection.query('select la.name as localAuthority, results.total from (select a.`local_authority_(District)` as authority, count(a.accident_index) total from accident a group by a.`local_authority_(District)`) results join localAuthority la on results.authority = la.id order by total desc;', 
	function(err, rows, fields) {
  		if (err) throw err;
  	resultsTable = rows;
});

connection.end();

exports.list = function(req, res){
  res.json(resultsTable);
};
