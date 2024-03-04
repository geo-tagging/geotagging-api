const dbPool = require("../config/database.js");

const createNewTag = (body) => {
  const SQLQuery = `INSERT INTO tb_tanaman (
                      plant_id, 
                      id_jenis, 
                      id_kegiatan, 
                      id_lokasi, 
                      id_sk, tanggal, 
                      latitude, 
                      longitude, 
                      elevasi
                      )
                    VALUES ('',
                      '${body.id_jenis}',
                      '${body.id_kegiatan}',
                      '${body.id_lokasi}',
                      '${body.id_sk}',
                      '${body.tanggal}',
                      '${body.latitude}',
                      '${body.longitude}',
                      '${body.elevasi}'
                    )`;

  return dbPool.execute(SQLQuery);
};

const getAllTag = () => {
  const SQLQuery = `SELECT 
                      tb_tanaman.plant_id,
                      tb_tanaman.id_jenis,
                      tb_jenis.nama,
                      tb_tanaman.id_kegiatan,
                      tb_kegiatan.kegiatan,
                      tb_tanaman.id_lokasi,
                      tb_lokasi.lokasi,
                      tb_tanaman.id_sk,
                      tb_sk.skppkh,
                      tb_tanaman.tanggal,
                      tb_tanaman.latitude,
                      tb_tanaman.longitude,
                      tb_tanaman.elevasi
                    FROM 
                      tb_tanaman
                    JOIN 
                      tb_jenis ON tb_tanaman.id_jenis = tb_jenis.id_jenis
                    JOIN 
                      tb_kegiatan ON tb_tanaman.id_kegiatan = tb_kegiatan.id_kegiatan
                    JOIN 
                      tb_lokasi ON tb_tanaman.id_lokasi = tb_lokasi.id_lokasi
                    JOIN 
                      tb_sk ON tb_tanaman.id_sk = tb_sk.id_sk`;

  return dbPool.execute(SQLQuery);
};

const getTagById = (plant_id) => {
  const SQLQuery = `SELECT * FROM tb_tanaman WHERE plant_id = '${plant_id}'`;
  return dbPool.execute(SQLQuery);
};

const updateTag = (plant_id, body) => {
  const SQLQuery = `UPDATE tb_tanaman 
                    SET 
                      id_jenis='${body.id_jenis}', 
                      id_kegiatan='${body.id_kegiatan}', 
                      id_lokasi='${body.id_lokasi}', 
                      id_sk='${body.id_sk}', 
                      tanggal='${body.tanggal}', 
                      latitude='${body.latitude}', 
                      longitude='${body.longitude}', 
                      elevasi='${body.elevasi}' 
                    WHERE plant_id='${plant_id}'`;
  return dbPool.execute(SQLQuery);
};

const deleteTag = (plant_id) => {
  const SQLQuery = `DELETE FROM tb_tanaman WHERE plant_id=${plant_id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  createNewTag,
  getAllTag,
  getTagById,
  updateTag,
  deleteTag,
};
