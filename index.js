const motorista = {
  idade: 18,
  temcnh: true,
  temcarro: false,
};

console.log(motorista);

motorista.idade += 1;
motorista.temcnh = false;
motorista.temcarro = true;

console.log(motorista);

const produto = {
  nome: "jordan",
  marca: "nike",
  preço: 259,
  produto: true,
};

console.log(produto.nome);
console.log(produto.preço);

//laço de repetição
for (let contador = 0; contador <= 1; contador++) {
  console.log(contador);
}

for (let contador1 = 1; contador1 <= 10; contador1++) {
  console.log(`${5} x ${contador1} = ${5 * contador1}`);
}

let contador = 1;
let numerowhile = 12;

//while (contador <= 10) {console.log(contador * numerowhile);   contador++;}
let number = 20;

while (number >= 0) {
  console.log(number);
  number -= 2;
}

let number2 = 20;

do {
  console.log(number2);
  number2 -= 2;
} while (number2++);

let number3 = 10;

while (number3 >= 1) {
  console.log(number3);
  number3 -= 1;
}
do {
  console.log("fim da contagem  ");
} while (number3);

let number31 = 10;

do {
  console.log(number31);
  number31--;
} while (number31 >= 1);

console.log("fim da contagem");

// listas
const frutas = ["maça", "uva", "banana", "laranja"];

frutas[0] = "pera";

console.log(frutas);

console.log(frutas[0]);
console.log(frutas[1]);

console.log(frutas.length);

frutas.push("manga"); //add fruta

console.log(frutas);

frutas.pop(); //remove

console.log(frutas);

frutas.sort(); //ordem alfabetica

console.log(frutas);

//FUNÇÕES

function somar(numero1, numero2) {
  return numero1 + numero2
}

const soma = somar(1, 1);
console.log(soma)

console.log(somar (6,7))
//somar(6, 7);

function dividir(numero1, numero2) {
  console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`);
}

dividir(100, 2);
//exercicio

const jogos  = ["sonic", "crash", "mario"]

console.log(jogos)

jogos.push("dk", "RE")

console.log(jogos)

const materiais = ["lapis", "caderno", "caneta", "bolsa", "regua"]

console.log(materiais)

materiais.pop()

console.log(materiais)


console.log(materiais.length);

function saudar ("Enzo"){
  return Enzo
}
