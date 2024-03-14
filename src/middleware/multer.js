const multer = require("multer");
const path = require("path");
let filename = ""; // Menggunakan let agar nilainya bisa diubah

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const originalname = file.originalname;
    filename = `${timestamp}-${originalname}`; // Mengubah nilai filename
    cb(null, filename);
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

// Export the function to get uploaded file name
module.exports.getUploadedFileName = () => {
  if (filename == "") {
    filename = "empty";
  }
  return filename;
};
