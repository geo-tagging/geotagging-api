const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2 * 1000 * 1000, // 2 MB
  },
});

// Export the upload middleware
module.exports = upload;
