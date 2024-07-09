import { Router } from "express";
import { criandoCarro, buscarTodosCarros } from "../controllers/carro.controller.js";

const carroRouter = Router();

carroRouter.post("/carro", (req,res) => {
    const { nome, cor, marca, ano,combustivel } = req.body;
    const jorge = criandoCarro(nome, cor, marca, ano,combustivel);
    // resposta/ retorno da nossa requisicao
    res.json({jorge});
});

carroRouter.get("/carro", (req,res) => {
    const listaCarros = buscarTodosCarros();
    // resposta/ retorno da nossa requisicao
    res.json({listaCarros});
});

export { carroRouter }