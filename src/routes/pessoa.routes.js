import { Router } from "express";
import { buscarTodos, criandoPessoa } from "../controllers/pessoa.controller.js";

// Router é uma funcao interna do express
// que gerencia/cria rotas 
const pessoaRouter = Router();

pessoaRouter.get("/", (req,res)=> { 
    let result = buscarTodos();
    res.json({result})
});

// * SEMPRE CHAMAR O RES.
// PORQUE SE NAO DARÁ ERRO
pessoaRouter.post("/pessoa", (req,res)=> {
    // req.body -> pegando o corpo da requisicao | pegando os valores inseridos pelo usuario
    const { nome, idade, cpf } = req.body;
    criandoPessoa(nome, idade, cpf);
    res.json({message:" sucesso"})
});

export { pessoaRouter }