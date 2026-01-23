// This question was asked by ContextLogic.
// Implement division of two positive integers without using the division, 
// multiplication, or modulus operators. Return the quotient as an integer, ignoring the remainder.
const division = (num, divisor) => {
  let quotient = 0;

  while (num >= divisor) {
    num -= divisor;
    quotient++;
  }

  return quotient;
};

console.log(division(10, 2)); // 3
// console.log(division(2, 3));  // 0
// console.log(division(9, 3));  // 3

// O tempDivisor << 1 serve pra testar:

// “Se eu dobrar o divisor (multiplicar por 2), ainda cabe dentro do número restante?”

// Se sim, a gente dobra e continua até não caber mais, pra tirar o máximo possível de uma vez.
// const division = (num, divisor) => {
//   if (divisor === 0) throw new Error("division by zero");

//   let quotient = 0;
//   let remaining = num;

//   while (remaining >= divisor) {
//     let tempDivisor = divisor;
//     let multiple = 1;

//     // acha o maior divisor * 2^k que ainda cabe no remaining
//     while ((tempDivisor << 1) > 0 && (tempDivisor << 1) <= remaining) {
//       tempDivisor <<= 1;
//       multiple <<= 1;
//     }

//     remaining -= tempDivisor;
//     quotient += multiple;
//   }

//   return quotient;
// };
// console.log(division(10, 2)); // 3