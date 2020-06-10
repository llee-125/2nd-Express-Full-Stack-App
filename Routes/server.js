const express = require("express");
const app = express();
const PORT = 7000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

app.listen(PORT, () => {
  console.log(
    `I created a second server app, using Express at http://localhost:${PORT}`
  );
});
