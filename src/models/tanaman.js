const dbPool = require("../config/database.js");

const getAllTag = () => {
  const SQLQuery = "SELECT * FROM `tb_tanaman`";
  return dbPool.execute(SQLQuery);
};

const createNewTag = (body) => {
  const SQLQuery = `INSERT INTO tb_tanaman (plant_id, id_jenis, id_kegiatan, id_lokasi, id_sk, tanggal, latitude, longitude, elevasi)
                    VALUES ('','${body.id_jenis}','${body.id_kegiatan}','${body.id_lokasi}','${body.id_sk}','${body.tanggal}','${body.latitude}','${body.longitude}','${body.elevasi}')`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllTag,
  createNewTag,
};
