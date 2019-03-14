const mysql = require("mysql");
let connection;

if(process.env.JAWSDBD_URL){
  connection = mysql.createConnection(process.env.JAWSDBD_URL);
} else{
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jaina2019",
    database: "burgers_db"
  });
}



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;