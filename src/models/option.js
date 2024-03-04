const dbPool = require("../config/database.js");

const getAllOption = () => {
  const query1 = "SELECT * FROM tb_jenis;";
  const query2 = "SELECT * FROM tb_kegiatan;";
  const query3 = "SELECT * FROM tb_lokasi;";
  const query4 = "SELECT * FROM tb_sk";

  return dbPool.execute(query1, query2, query3, query4);
};

module.exports = { getAllOption };
