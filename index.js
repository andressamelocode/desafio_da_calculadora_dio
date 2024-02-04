const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
console.log("Seja bem-vindo(a) " + nome);

let nivel = prompt("Digite sua quantidade de experência XP: ");

if(nivel <1000){
    console.log("O Herói de nome " + nome + " está no nível de ferro")   
}else if(1001 >= nivel || nivel <= 2000){
    console.log("O Herói de nome " + nome + " está no nível de bronze")
}else if(2001 >= nivel || nivel <= 5000){
    console.log("O Herói de nome " + nome + " está no nível de prata")
}else if(5001 >= nivel || nivel <= 7000){
    console.log("O Herói de nome " + nome + " está no nível de ouro")
}else if(7001 >= nivel || nivel <= 8000){
    console.log("O Herói de nome " + nome + " está no nível de platina")
}else if(8001 >= nivel || nivel <= 9000){
    console.log("O Herói de nome " + nome + " está no nível de ascendente")
}else if(9001 >= nivel || nivel <= 10000){
    console.log("O Herói de nome " + nome + " está no nível de imortal")
}else if (nivel >= 10001){
    console.log("O Herói de nome " + nome + " está no nível de radiante")
}else{
    console.log("Erro! Digite apenas números.")
}



