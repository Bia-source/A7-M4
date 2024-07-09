import { Carro } from "../models/Carro.model.js";

// representacao do nosso banco de dados
let listaCarro = [];

// INSERT INTO 
export const criandoCarro = (nome, cor, marca, ano,combustivel) => {
    // armazenando o OBJETO carro criado em uma variavel
    let carro = new Carro(nome, cor, marca, ano,combustivel);
    // adicionando o carro criado dentro da lista de carros
    listaCarro.push(carro);
    return carro;
}

// SELECT * FROM carros
export const buscarTodosCarros = () => {
    return listaCarro
}

export const buscarFlex = (flex) => {
    //return listaCarro.filter(carro => carro.combustivel == flex);
    return listaCarro.filter(({ combustivel })=> combustivel == "flex");
}

export const buscarPorCombustivel = (nomeCombustive) => {
    //return listaCarro.filter(carro => carro.combustivel == flex);
    return listaCarro.filter(({ combustivel })=> combustivel == nomeCombustive);
}