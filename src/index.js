// Import dependencie
const express = require("express");
const mysql2 = require("mysql2");
require("dotenv").config();
const cors = require("cors");

// Setup the express server
const app = express();
const PORT = process.env.PORT || 9000;

// Import middlewares into express
const middlewareLogRequest = require("./middleware/logs.js");
const upload = require("./middleware/multer.js");

// Import routes
const routesTag = require("./routes/tanaman.js");
const routesOption = require("./routes/option.js");
app.use(middlewareLogRequest);
app.use(express.json());

// Import cors
app.use(
  cors({
    origin: "*",
  })
);

// Setup all the routes
app.use("/tanaman", routesTag);
app.use("/option", routesOption);

app.use("/assets", express.static("public/images"));
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "upload berhasil",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
