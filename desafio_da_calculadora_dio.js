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

let monstro = prompt("Quantos dos 5 monstros você derrotou? ")

switch (monstro) {
  case "5":
  console.log("Você ganhou 50 estrelas")
  break

  case "4":
  console.log("Você ganhou 40 estrelas")
  break 

  case "3":
  console.log("Você ganhou 30 estrelas")
  break 

  case "2": 
  console.log("Você ganhou 20 estrelas")
  break 

  case "1": 
  console.log("Você ganhou 10 estrelas")
  break

  default:
  console.log("Você não ganhou estrelas")

}

let estrelas = 0;

for(let i = 0; i <= 11; i++){
    estrelas += 1
    console.log("Você pegou " + i + " estrelas")
}

console.log("Você tem " + estrelas + " vidas totais")
