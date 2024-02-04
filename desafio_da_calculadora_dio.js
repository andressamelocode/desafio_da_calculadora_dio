const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
console.log("Seja bem-vindo(a) " + nome);

let vitorias = prompt("Digite sua quantidade de experência XP: ");
let derrotas = prompt("Digite sua quantidade derrotas: ");

let saldo = subtracao(vitorias, derrotas)
function subtracao(vitorias, derrotas){
    let subtracao = vitorias - derrotas
    return subtracao
}

switch (saldo){
    case (saldo <10):
    console.log("O Herói de nome " + nome + " tem de saldo " + saldo + " está no nível de ferro")   
    break

    case (11 >= saldo || saldo <= 20):
    console.log("O Herói de nome " + nome + " tem de saldo " + saldo + " está no nível de bronze")
    break

    case (21 >= saldo || saldo <= 50):
    console.log("O Herói de nome " + nome + " tem de saldo " + saldo + " está no nível de prata")
    break

    case (51 >= saldo || saldo <= 80):
    console.log("O Herói de nome " + nome + " tem de saldo " + saldo + " está no nível de ouro")
    break

    case (81 >= saldo || saldo <= 90):
    console.log("O Herói de nome " + nome + " tem de saldo " + saldo + " está no nível de diamante")
    break

    case (91 >= saldo || saldo <= 100):
    console.log("O Herói de nome " + nome + " tem de saldo " + saldo + " está no nível de lendário")
    break

    case (saldo >=101):
    console.log("O Herói de nome " + nome + " tem de saldo " + saldo + " está no nível de imortal")
    break

    default:
    console.log("Erro! Digite apenas números.")
}