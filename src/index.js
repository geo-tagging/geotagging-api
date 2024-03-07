const express = require("express");
const mysql2 = require("mysql2");

const middlewareLogRequest = require("./middleware/logs.js");
const upload = require("./middleware/multer.js");

const routesUser = require("./routes/user.js");
const routesTag = require("./routes/tanaman.js");
const routesOption = require("./routes/option.js");

const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 9000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/tanaman", routesTag);
app.use("/option", routesOption);

app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "upload berhasil",
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
