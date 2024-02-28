const express = require("express");
const mysql2 = require("mysql2");
const middlewareLogRequest = require("./middleware/logs.js");
const routesTag = require("./routes/tanaman.js");

require("dotenv").config();
const PORT = process.env.PORT || 9000;

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/tanaman", routesTag);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
