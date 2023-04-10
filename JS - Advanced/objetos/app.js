console.clear();
// Para rodar basta dar um:  node app.js

var pessoa = {
  'name':"Alex",
  'years':12,
}

var pessoas = 
[
{
  'name':"Alex",
  'years':12,
},
{
  'name':"Jão",
  'years':17,
},
{
  'name':"Carlosa",
  'years':32,
}
]



console.log(pessoa)
console.log('--------------')
// Multiplas pessoas, dá para selecionar apenas uma com [<index>]
console.log(pessoas)


console.log()
console.log("HEY HEY, a pessoa do index 2 é: "+ pessoas[2].name + " com: " + pessoas[2].years + " anos")
console.log('--------------------------------')