const express = require("express");
const app = express();
const PORT = 7000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

const clientRoutes = require("./routes/client-routes.js");
app.use(clientRoutes);

const apiRoutes = require("./routes/api-routes.js");
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`listening on port: http://localhost:${PORT}`);
});
