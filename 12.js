// This question was asked by Google.

// Given an integer n and a list of integers l, write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).

const n = 5
const list = [2,4,5]

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const randomNumber = (n, list) => {
  const banned = new Set(list)

  if (banned.size >= n) return null 

  while (true) {
    const r = getRandomInt(0, n) // 0..n-1
    if (!banned.has(r)) return r
  }
}
console.log(randomNumber(n, list))