// This problem was asked by Google.
// Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid 
// (i.e. each open parenthesis is eventually closed).
// For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.

const strToTested = "((()"
// const strToTested = "(()))"
// const strToTested = "))(("

/** @param phrase {string} 
 * @returns removedParantheses {number}
*/
const minimumNumberOfParenthesesToBeRemoved = (phrase) => {
  let removedParantheses = 0
  const visited = []
  let found = false
    
  for(let i=0; i < phrase.length; i++){
    if(visited.includes(i)){
      continue
    } 
    if(phrase[i] === ")" && !visited.includes(i)){
      removedParantheses++
      continue
    }
    
    for(let j=i+1; j < phrase.length; j++){
  
      if(phrase[j] === ")" && !visited.includes(j)){
        visited.push(j)
        found = true
        break
      }
    }
    if(!found){
      removedParantheses++
    }
    found = false
  }

  return removedParantheses
}

// const minimumNumberOfParenthesesToBeRemoved = (phrase) => {
//   let removed = 0
//   let open = 0

//   for (const ch of phrase) {
//     if (ch === "(") {
//       open++
//     } else { // ch === ")"
//       if (open > 0) open--
//       else removed++
//     }
//   }

//   return removed + open
// }

console.log(minimumNumberOfParenthesesToBeRemoved(strToTested))



