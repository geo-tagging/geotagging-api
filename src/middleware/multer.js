const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const timestamp = new Date().getTime();
    const filename = file.filename;
    const extension = path.extname(file.originalname);
    cb(null, `${timestamp}-${filename}${extension}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
