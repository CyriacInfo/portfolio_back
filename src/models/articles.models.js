const { connection } = require("../../db-connection");
require("dotenv").config();

class Articles {
  static async allArticles() {
    const sql = "SELECT * FROM articles";
    const results = await connection.promise().query(sql);
    return results[0];
  }

  static async createOneArticle(article) {
    const sql = "INSERT INTO articles SET ?;";
    const results = await connection.promise().query(sql, [article]);
    return results;
  }

  static async verifId(id) {
    const sql = "SELECT * FROM articles WHERE id = ?";
    const results = await connection.promise().query(sql, [id]);
    return results;
  }

  static async getMyArticles(id) {
    const sql = "SELECT * FROM articles WHERE id = ?";
    const results = await connection.promise().query(sql, [id]);
    return results[0][0];
  }

  static async modifyArticles(id, article) {
    const sql =
      "UPDATE articles SET title = ?, description = ?, imgName = ?, technologies = ? WHERE polygonId = ?";
    const results = await connection.promise().query(sql, [id, article]);
    return results;
  }

  static async deleteArticles(id) {
    const sql = "DELETE FROM articles WHERE id = ?";
    const results = await connection.promise().query(sql, [id]);
    return results;
  }
}

module.exports = Articles;
