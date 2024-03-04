const optionModel = require("../models/tanaman.js");

const getAllOption = async (req, res, next) => {
  try {
    const [data] = await optionModelModel.getAllTag();

    res.json({
      message: "GET all tag success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllOption };
