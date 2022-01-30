const mysql = require('mysql');

const connectDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kshop"
});

connectDB.connect((error) => {
 if (error) throw error;
  console.log("Connected database!");
});

module.exports = connectDB;