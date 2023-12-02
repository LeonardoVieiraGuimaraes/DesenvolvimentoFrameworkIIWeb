import app from "./app.js";
const PORT = process.env.PORT | 3000;

// escuta a porta 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
});

// import app from "./src/app.js";
// import conexao from "./infra/conexao.js";
// const PORT = 3000;
// // fazer a conexao
// conexao.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Conexão realizada com sucesso!");
//     // escuta a porta 3000
//     app.listen(PORT, () => {
//       console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
//     });
//   }
// });
