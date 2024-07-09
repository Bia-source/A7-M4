import express from "express";
import { pessoaRouter } from "./routes/pessoa.routes.js";
import { carroRouter } from "./routes/carro.routes.js";

const app = express()
const port = 3000

// permite nosso js entender json
app.use(express.json());

// dando acesso as nossas rotas
app.use(pessoaRouter);
app.use(carroRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})