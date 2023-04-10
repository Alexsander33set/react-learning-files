console.clear();

let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 10]
// Desta forma, irá colocar os primeiros juntos ao array, e não o array inteiro + os numeros do array numeros






console.log('Add outros dentro do array -> ...')
console.log(numeros)
console.log('--------------')

let pessoa = {
  nome:"Matheus",
  idade:45,
  cargo: "BA",
}

let novaPessoa = {
  ...pessoa,
  status:"ativo",
  vidade: "Campinas/SP"
}

console.log(`Em objetos -> ...`)
console.log(novaPessoa)

console.log('--------------')
console.log('Tornando Útil (Função)')


let user = {
  nome:"Matheus",
  idade:45,
  cargo: "BA",
}

function newUser(userData){
  turnOn = {
    status:"ativo",
    cidade: "Campinas/SP",
  }
  return activeUser = {...userData, ...turnOn}
}
newUser(user)
console.log(activeUser)
console.log('--------------------------------')