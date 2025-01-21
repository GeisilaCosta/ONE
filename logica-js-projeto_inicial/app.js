alert("Boas vindas ao jogo do número secreto");
// let numeroSecreto = parseInt(Math.random() * 21);
let numeroSecreto = 21;
console.log("O número secreto é " + numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 30");
if (numeroSecreto == chute) {
alert(`Isso aí!! Você descobrui o número secreto  ${numeroSecreto}`);
} else {
   alert("Que pena, vocé errou!");
}


