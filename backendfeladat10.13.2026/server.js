const express = require('express');
const cors = require('cors');
const env = require('dotenv');
const app = express();
const mysql = require('mysql2')
env.config();
app.use = express.json();

 
const con = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
});

 app.get("/api/zenekar", (reg,res) => {
    con.query("SELECT * FROM zenekarok", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        return res.json(result);
      });
 });

 app.get("/api/stilusok", (reg,res) => {
    con.query("SELECT * FROM stilusok", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        return res.json(result);
      });
 });

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000/");
  });


