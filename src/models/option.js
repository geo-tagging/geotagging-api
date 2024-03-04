// models/option.js
const dbPool = require("../config/database.js");

const getAllOption = async () => {
  try {
    const query1 = "SELECT * FROM tb_jenis;";
    const query2 = "SELECT * FROM tb_kegiatan;";
    const query3 = "SELECT * FROM tb_lokasi;";
    const query4 = "SELECT * FROM tb_sk;";

    // Membuat array promise untuk masing-masing query
    const promises = [
      dbPool.execute(query1),
      dbPool.execute(query2),
      dbPool.execute(query3),
      dbPool.execute(query4),
    ];

    // Menunggu semua promise diselesaikan
    const [result1, result2, result3, result4] = await Promise.all(promises);

    return {
      tb_jenis: result1[0],
      tb_kegiatan: result2[0],
      tb_lokasi: result3[0],
      tb_sk: result4[0],
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllOption };
