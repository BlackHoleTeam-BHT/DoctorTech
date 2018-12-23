const mysql = require('mysql');

//Note: to setup the database credential
var dbConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '19919901',
  insecureAuth: true,
  database: 'doctortechdb'
});

//Note:create the connection with database
dbConnection.connect(function(err) {
  if (err) {
    console.log('access dinay to the database', err)
  } else {
    console.log('database has been connected')
  }
});

module.exports.db = dbConnection;