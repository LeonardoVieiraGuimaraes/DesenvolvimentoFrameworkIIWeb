import mysql from "mysql";

class Database {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "bdcopa",
    });

    this.connection.connect();
  }

  /**
   * Executa uma consulta sql com ou sem valores
   * @param {string} sql instrução sql
   * @param {string=id | [selecao, id]} values valores a serem substituidos na instrução sql
   * @param {string} rejectMessage mensagem a exibir em caso de erro reject
   * @returns objeto da promisse
   */
  executeQuery(sql, values = [], rejectMessage) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, values, (err, result) => {
        if (err) {
          return reject(new Error(`${err.message} ${rejectMessage}`));
        } else {
          const rows = JSON.parse(JSON.stringify(result));
          return resolve(rows);
        }
      });
    });
  }
}

export default new Database();
