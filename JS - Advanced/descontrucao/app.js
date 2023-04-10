console.clear();
// Para rodar basta dar um:  node app.js

let person = {
  name:"Alex",
  job: "Technical Owner",
  interprise: "IBM"
}
let { name:objFirstName, job, interprise } = person
console.log('Desconstrução de objetos')
console.log(`nome: ${objFirstName} | Trabalho: ${job} | Empresa: ${interprise}`)
console.log('--------------')

console.log(`Desconstrução de arrays...`)
let nomes = ["José", "Mané", "Carlinhos"]
let { 1:firstName, 0:secundName } = nomes;
// let [firstName, secundName] = nomes

console.log(`${firstName} | ${secundName}`)
console.log('--------------------------------')