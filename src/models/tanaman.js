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
                      ?,
                      ?,
                      ?,
                      ?,
                      ?,
                      ?,
                      ?,
                      ?
                    )`;
  const values = [
    body.id_jenis,
    body.id_kegiatan,
    body.id_lokasi,
    body.id_sk,
    body.tanggal,
    body.latitude,
    body.longitude,
    body.elevasi,
  ];

  return dbPool.execute(SQLQuery, values);
};

const getAllTag = (orderBy, sort) => {
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
                      tb_sk ON tb_tanaman.id_sk = tb_sk.id_sk
                    ORDER BY ? ${sort}`;

  return dbPool.execute(SQLQuery, [orderBy]);
};

const getTagById = (plant_id) => {
  const SQLQuery = `SELECT * FROM tb_tanaman WHERE plant_id = '${plant_id}'`;
  return dbPool.execute(SQLQuery);
};

const searchTag = (keyword, orderBy, sort) => {
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
                      tb_sk ON tb_tanaman.id_sk = tb_sk.id_sk
                    WHERE 
                      tb_jenis.nama LIKE ? 
                      OR tb_tanaman.tanggal LIKE ?
                      OR tb_kegiatan.kegiatan LIKE ?
                      OR tb_lokasi.lokasi LIKE ?
                      OR tb_sk.skppkh LIKE ?
                    ORDER BY 
                      ${orderBy} ${sort}`;

  const values = [
    `%${keyword}%`,
    `%${keyword}%`,
    `%${keyword}%`,
    `%${keyword}%`,
    `%${keyword}%`,
  ];

  return dbPool.execute(SQLQuery, values);
};

const updateTag = (plant_id, body) => {
  const SQLQuery = `UPDATE tb_tanaman 
                    SET 
                      id_jenis=?, 
                      id_kegiatan=?, 
                      id_lokasi=?, 
                      id_sk=?, 
                      tanggal=?, 
                      latitude=?, 
                      longitude=?, 
                      elevasi=? 
                    WHERE 
                      plant_id=?`;
  const values = [
    body.id_jenis,
    body.id_kegiatan,
    body.id_lokasi,
    body.id_sk,
    body.tanggal,
    body.latitude,
    body.longitude,
    body.elevasi,
    plant_id,
  ];
  return dbPool.execute(SQLQuery, values);
};

const deleteTag = (plant_id) => {
  const SQLQuery = `DELETE FROM tb_tanaman WHERE plant_id=?`;

  return dbPool.execute(SQLQuery, [plant_id]);
};

module.exports = {
  createNewTag,
  getAllTag,
  getTagById,
  searchTag,
  updateTag,
  deleteTag,
};
