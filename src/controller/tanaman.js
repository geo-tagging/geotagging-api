const TagModel = require("../models/tanaman.js");

const getAllTag = async (req, res, next) => {
  try {
    const [data] = await TagModel.getAllTag();

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

const createNewTag = async (req, res, next) => {
  const { body } = req;

  try {
    await TagModel.createNewTag(body);
    res.json({
      message: "Create Tag Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateTag = async (req, res, next) => {
  const { plant_id } = req.params;
  const { body } = req;

  try {
    await TagModel.updateTag(plant_id, body);
    res.json({
      message: "Update Tag Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllTag,
  createNewTag,
  updateTag,
};
