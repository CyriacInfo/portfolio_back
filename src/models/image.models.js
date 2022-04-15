const { connection } = require("../../db-connection");
require("dotenv").config();

class Images {
  static async postOne(imageName) {
    const sql = "INSERT INTO images (imageName) VALUE (?)";
    return await connection.promise().query(sql, [imageName]);
  }

  static async getOne() {
    const sql = "SELECT * FROM images";
    return connection.promise().query(sql);
  }
}
module.exports = Images;
