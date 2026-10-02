const express = require('express');
const app = express();
const mysql = require('mysql2');
const dotenv = require('dotenv');

const env = dotenv.config();

const con = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_DATABASE,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.get('/', (req, res) => {
    res.json({
        uzenet: 'Kezdő Iskolai REST API fut',
        elerheto_vegpontok:[
            'GET /api/osztalyok',
            'GET /api/osztalyok/:id',
            'GET /api/osztalyok/:id/diakok',
            'GET /api/diakok',
            'GET /api/diakok/:id'
        ]
    });
  });
  app.get("/api/osztalyok",(req,res) =>{
    con.query("SELECT * FROM osztalyok", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        return res.json(result);
      });
});
app.get("/api/osztalyok/:id",(req,res) =>{
    con.query("SELECT id FROM osztalyok", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        return res.json(result);
      });
});
app.get("/api/osztalyok/:id/diakok",(req,res) =>{
    con.query("SELECT osztalyok.id, diakok.id FROM `osztalyok`INNER JOIN diakok ON osztalyok.id = diakok.osztaly_id ", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        return res.json(result);
      });
});
app.get("/api/diakok",(req,res) =>{
    con.query("SELECT * FROM diakok", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        return res.json(result);
      });
});
app.get("/api/diakok/:id",(req,res) =>{
    con.query("SELECT id FROM diakok", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        return res.json(result);
      });
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

