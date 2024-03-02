const dbPool = require("../config/database.js");

const createNewUser = (body) => {
  const SQLQuery = "";
  return dbPool.execute(SQLQuery);
};

const getUser = () => {
  const SQLQuery = "";
  return dbPool.execute(SQLQuery);
};

const updateUser = (user_id, body) => {
  const SQLQuery = "";
  return dbPool.execute(SQLQuery);
};

const deleteUser = (user_id) => {
  const SQLQuery = "";
  return dbPool.execute(SQLQuery);
};

module.exports = {
  createNewUser,
  getUser,
  updateUser,
  deleteUser,
};
