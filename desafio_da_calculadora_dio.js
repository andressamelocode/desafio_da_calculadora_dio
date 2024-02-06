const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
console.log("Seja bem-vindo(a) " + nome);


let vitorias = prompt("Digite sua quantidade de vitórias: ");
let derrotas = prompt("Digite sua quantidade derrotas: ");

let saldo = vitorias - derrotas;

if(saldo <= 10){
    console.log("O herói de nome " + nome + " tem saldo " + saldo + " e está no nível de ferro")   
}else if(11 >= saldo || saldo <= 20){
    console.log("O herói de nome " + nome + " tem saldo " + saldo + " e está no nível de bronze")
}else if(21 >= saldo || saldo <= 50){
    console.log("O herói de nome " + nome + " tem saldo " + saldo + " e está no nível de prata")
}else if(51 >= saldo || saldo <= 80){
    console.log("O herói de nome " + nome + " tem saldo " + saldo + " e está no nível de ouro")
}else if(81 >= saldo || saldo <= 90){
    console.log("O herói de nome " + nome + " tem saldo " + saldo + " e está no nível de diamante")
}else if(91 >= saldo || saldo <= 100){
    console.log("O herói de nome " + nome + " tem saldo " + saldo + " e está no nível de lendário")
}else{ (saldo >= 101)
    console.log("O herói de nome " + nome + " tem saldo " + saldo + " e está no nível de imortal")
}