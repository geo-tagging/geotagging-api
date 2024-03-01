const express = require("express");
const mysql2 = require("mysql2");
const middlewareLogRequest = require("./middleware/logs.js");
const routesTag = require("./routes/tanaman.js");
const routesUser = require("./routes/user.js");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 9000;

const app = express();

app.use(
  cors({
    origin: "*", // Izinkan permintaan dari semua sumber
  })
);

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/tanaman", routesTag);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
