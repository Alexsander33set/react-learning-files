console.clear();
console.log(`----- Operadores em lista -----`);
let lista = ["Matheus", "José", "Maria"];

lista.map((item, index) => {
  console.log(`${index} - ${item}`);
});


console.log();
console.log(`----- Reduce em lista -----`);
console.log();

let numeros = [5, 3, 2];
let total = numeros.reduce((acumulador, numero, index, original) => {
  console.log(`${acumulador} - total até o momento`);
  console.log(`${numero} - valor atual`);
  console.log(`${index} - indice atual`);
  console.log(`${original} - array original`);
  console.log();
  console.log(`----------------------------`);
  return (acumulador += numero);
});
console.log();
console.log("Depois de tudo o reduce, o total é: " + total);

console.log();
console.log(`----- Find em lista -----`);
console.log();

let listagem = [5, 3, "José", 2, "Matheus"]

let busca = listagem.find((item) => {
  return item === "José"
})

console.log(`Resultado da busca é: ${busca}`)

console.log();
console.log(`----- Filter em lista -----`);
console.log();

let palavras = ["Ana", "José","Matheus", "Ricardo Silva","Carlinhos" ]

let resultado = palavras.filter((item) => {
  return item.length <= 4
})

console.log(resultado)
console.log(`Resultado pelo Filter é: ${resultado}`)




// FIM
console.log();
