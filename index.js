const express = require("express");
const app = express();
const mysql = require("mysql");
const port = process.env.PORT || "3000";

app.use(express.json());

const connection = mysql.createConnection({
  host: "eu-cdbr-west-03.cleardb.net",
  user: "b7a1307ab38000",
  password: "d3dd4481",
  database: "heroku_57b2e57148eede0",
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
