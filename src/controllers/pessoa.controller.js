
// A RESPONSABILIDADE DO CONTROLLER É
// GERENCIAR O OBJETO
// - Criar um objeto
// - Ler uma lista de objetos
// - Editar um objeto
// - Deletar um objeto
// CRUD

// quando preciso de {}
// quando nao colocamos default ou quando tem varios recursos
// dentro de um arquivo

// quando nao preciso de {} quando queremos o recurso
// default/padrao
import Pessoa from "../models/Pessoa.model.js";

// representando nosso banco de dados
// banco de dados simulado
let listaPessoas = [];

export const criandoPessoa = (nome, idade, cpf) => {
    let pessoa = new Pessoa(nome, idade, cpf);
    listaPessoas.push(pessoa);
}

export const buscarTodos = () => {
    return listaPessoas;
}

export const buscarPorNome = (nome) => {
    // return listaPessoas.find(pessoa => pessoa.nome === nome);
    return listaCarro.filter(({ nome })=> nome == nome);
}
