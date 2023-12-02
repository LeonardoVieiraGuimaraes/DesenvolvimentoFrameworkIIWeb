import Database from "../database/Database.js";

class SelectionRepository {
  findAll() {
    const sql = "SELECT * FROM selecoes";
    return Database.executeQuery(sql, [], "Erro ao buscar cadastros");
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?";
    return Database.executeQuery(sql, id, "Erro ao buscar cadastro");
  }

  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?";
    return Database.executeQuery(sql, selecao, "Erro ao inserir cadastro");
  }

  update(selecao, id) {
    const sql = `UPDATE selecoes SET ? WHERE id=?`;
    return Database.executeQuery(
      sql,
      [selecao, id],
      "Erro ao atualizar cadastro"
    );
  }
}

export default new SelectionRepository();
