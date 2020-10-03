const express = require("express");
const app = express();
const port = 1985;

app.get("/", (req, res) => {
  res.send({});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
