// DEFINIR UM MODELO DE OBJETO
// default palavra reservada para definir um 
// padrao caso nao seja especificado o que o usuario deseja
export default class Pessoa{
    constructor(nome, idade, cpf){
     // atributos
      this.nome = nome;
      this.idade = idade;
      this.cpf = cpf;
    }
}

