// 🟢 NÍVEL 1 — Fundamentos (iniciante)
// 1️⃣ map
// Dado:
// const numbers = [1, 2, 3, 4];
// 👉 Crie um novo array com todos os números multiplicados por 2.
const numbers = [1, 2, 3, 4];
const timesTwo = numbers.map( number => number * 2)
console.log(timesTwo)

// 2️⃣ filter
// Dado:
// const ages = [12, 18, 21, 15, 30];
// 👉 Retorne apenas as idades maiores ou iguais a 18.
const ages = [12, 18, 21, 15, 30];
console.log(ages.filter(age => age >= 18 ))

// 3️⃣ includes
// Dado:
const roles = ["USER", "ADMIN", "MODERATOR"];
// 👉 Verifique se o array contém "ADMIN".
console.log(roles.includes("ADMIN"))

// 4️⃣ find
// Dado:
const users = [
  { id: 1, name: "Ana" },
  { id: 23, name: "Carlos" },
  { id: 2, name: "Carlos" }
];
// 👉 Encontre o usuário com id === 2.
console.log(users.find( user => user.id === 2))
console.log(users.find(({id}) => id === 2))

// 5️⃣ Destructuring
// Dado:
const user = { name: "João", age: 25 };
// 👉 Extraia name e age em variáveis.
const {name, age} = user;
console.log(name, age)

// 🟡 NÍVEL 2 — Intermediário
// 6️⃣ reduce
// Dado:
const prices = [10, 20, 30];
// 👉 Calcule o total da soma.
console.log(prices.reduce( (acc, price) => acc + price, 0))
const [a,b] = prices
console.log(a)

// 7️⃣ map + filter
// Dado:
const products = [
  { name: "Notebook", price: 3000 },
  { name: "Mouse", price: 100 },
  { name: "Keyboard", price: 200 }
];
// 👉 Retorne um array apenas com os nomes dos produtos que custam mais de 150.
console.log(products.filter( product => product.price > 150).map( ({name}) => name))
console.log(products.filter( ({price}) => price > 150).map( ({name}) => name))

// 8️⃣ some
// Dado:
const orders = [
  { paid: false },
  { paid: true },
  { paid: false }
];
// 👉 Verifique se existe pelo menos um pedido pago.
console.log(orders.some(({paid}) => paid))

// 9️⃣ Spread
// Dado:
const userSpread = { name: "Maria", age: 30 };
// 👉 Crie um novo objeto adicionando active: true sem modificar o original.
console.log({...userSpread, "active": true})
console.log({...userSpread, ...{"active": true}})

// 🔟 Default parameters
// Crie uma função greet que:
// receba name
// tenha valor padrão "Visitante"
// retorne "Olá, <name>"

const greet = (name = "Visitante") => `Olá, ${name}`
console.log(greet())
console.log(greet("Marcio"))

// 🔵 NÍVEL 3 — Avançado
// 1️⃣1️⃣ optional chaining
// Dado:
const userChaining = {
  profile: {
    email: "test@test.com",
    // address: {
    //   street: "test@test.com"
    // }
  }
};
// 👉 Acesse user.profile.address.street sem causar erro.
console.log(userChaining?.profile?.address?.street)

// 1️⃣2️⃣ nullish coalescing
// Dado:
const config = {
  timeout: 0
};
// 👉 Retorne config.timeout, mas se for null ou undefined, use 3000.
console.log(config.timeout ?? 3000)
console.log(config.timeouts ?? 3000)

// 1️⃣5️⃣ Desafio final (combo)
// Dado:
const orders = [
  { id: 1, amount: 100, paid: true },
  { id: 2, amount: 50, paid: false },
  { id: 3, amount: 200, paid: true }
];
// 👉 Calcule o total (amount) apenas dos pedidos pagos.
console.log(orders.filter( ({paid}) => paid ).reduce((acc, {amount}) => acc + amount, 0))

// ==========================================================================================

const object = { a: 1, b: 2, c: 3, d:{w:6} };
console.log(object.a)
for (let key in object){
  console.log(key)
}

const array = ["a", "b", "c"];

for (const element of array) {
  console.log(element);
}

const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 100, 14, 15, 16, 17, 18, 19, 20]
// const arrayTest = Array.from({length: 20}, (_, i) => i +1)
console.log(arrayTest.reduce((acc, numb) => acc + numb, 0)
console.log(arrayTest.reduce((bigger, numb) => bigger > numb ? bigger: numb, arrayTest[0])) // arrayTest[0] is a edge case [-1,-2,-3] will be 0 if started if 0
// console.log(arrayTest.reverse()) // mute the original array!
const reverseArray = []
for(let i = arrayTest.length -1; i >= 0; i--){
  reverseArray.push(arrayTest[i])
}
console.log(reverseArray)
console.log([...arrayTest].reverse()) // use extra memo ...
