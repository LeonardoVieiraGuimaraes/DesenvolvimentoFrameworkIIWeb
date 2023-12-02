import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use(router);

// Indica para o Express ler o corpo da requisição como JSON
app.use(express.json());

export default app;

// import express from "express";

// const app = express();

// // indicar praa o express ler body com json
// app.use(express.json());

// //mock

// const selecoes = [
//   { id: 1, selecao: "Brasil", grupo: "G" },
//   { id: 2, selecao: "Suiça", grupo: "G" },
//   { id: 3, selecao: "Servia", grupo: "G" },
//   { id: 4, selecao: "Camarões", grupo: "G" },
// ];

// function buscarSelecaoId(id) {
//   return selecoes.filter((selecao) => selecao.id == id);
// }

// //pegar a posição ou index do elemento no array po id
// function buscarIndexSelecao(id) {
//   return selecoes.findIndex((selecao) => selecao.id == id);
// }

// // criar rota padrão ou raiz

// app.get("/", (req, res) => {
//   res.send("Hello World, meu primeiro servidor express!");
// });

// app.get("/selecoes", (req, res) => {
//   res.status(200).send(selecoes);
// });

// app.get("/selecoes/:id", (req, res) => {
//   // let index = ;
//   // console.log(req.params.idndex);
//   res.json(buscarSelecaoId(req.params.id));
// });

// app.post("/selecoes", (req, res) => {
//   selecoes.push(req.body);
//   res.status(201).send("Seleção adicionada com sucesso!");
// });

// app.delete("/selecoes/:id", (req, res) => {
//   let index = buscarIndexSelecao(req.params.id);
//   // console.log(index);
//   selecoes.splice(index, 1);
//   res.send(`Seleção com o id ${req.params.id} removida com sucesso!`);
// });

// app.put("/selecoes/:id", (req, res) => {
//   let index = buscarIndexSelecao(req.params.id);
//   selecoes[index].selecao = req.body.selecao;
//   selecoes[index].grupo = req.body.grupo;
//   res.json(selecoes);
// });

// export default app;
