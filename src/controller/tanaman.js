const TagModel = require("../models/tanaman.js");

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

const getTagById = async (req, res, next) => {
  const { plant_id } = req.params;

  try {
    const [data] = await TagModel.getTagById(plant_id);

    if (!data) {
      return res.status(404).json({
        message: "Tag not found",
      });
    }

    res.json({
      message: "GET tag by id success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const searchTag = async (req, res, next) => {
  const { keyword } = req.params;
  const { orderBy, sort } = req.query;

  try {
    const [data] = await TagModel.searchTag(keyword, orderBy, sort);

    res.json({
      message: "Search tanaman success",
      data: data,
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
      data: {
        id: plant_id,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteTag = async (req, res, next) => {
  const { plant_id } = req.params;

  try {
    await TagModel.deleteTag(plant_id);

    res.json({
      message: "DELETE tag success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  createNewTag,
  getAllTag,
  getTagById,
  searchTag,
  updateTag,
  deleteTag,
};
