require("dotenv").config();

const express = require("express");
const app = express();
const mysql = require("mysql");
const port = process.env.PORT || "3000";

app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.get("/", (req, res) => {
  connection.query("select * from users where id = 1", (error, rows) => {
    if (error) throw error;
    if (!error) {
      res.send(rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
