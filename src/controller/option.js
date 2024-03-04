// controller/option.js
const optionModel = require("../models/option.js");

const getAllOption = async (req, res, next) => {
  try {
    const data = await optionModel.getAllOption();

    res.json({
      message: "GET all option success",
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
