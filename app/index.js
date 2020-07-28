const express = require("express");
const Blockchain = require("../blockchain");
const bodyParser = require("body-parser");

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
const bc = new Blockchain();

app.use(bodyParser.json());

//ENDPOINTS
app.get("/blocks", (req, res) => {
  res.json(bc.chain);
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));
