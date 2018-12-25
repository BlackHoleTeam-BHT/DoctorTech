const mysql = require('mysql');

//Note: to setup the database credential
var dbConnection = mysql.createConnection({
  host: "db4free.net",
  user: "doctortech",
  password: '123456789',
  insecureAuth: true,
  database: 'doctortech'
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