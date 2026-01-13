// Good morning! Here's your coding interview problem for today.
// This problem was asked by Google.
// You are given an N by M 2D matrix of lowercase letters. 
// Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. 
// That is, the letter at each column is lexicographically later as you go down each row. 
// It does not matter whether each row itself is ordered lexicographically.
// For example, given the following table:
// cba
// daf
// ghi
// This is not ordered because of the a in the center. We can remove the second column to make it ordered:
// ca
// df
// gi
// So your function should return 1, since we only needed to remove 1 column.
// As another example, given the following table:
// abcdef
// Your function should return 0, since the rows are already ordered (there's only one row).
// As another example, given the following table:
// zyx
// wvu
// tsr
// Your function should return 3, since we would need to remove all the columns to order it.

//A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
const table = [
  ["c", "b", "a"],
  ["d", "a", "f"],
  ["g", "h", "i"]
]

// const table = [
//   ["z", "y", "x"],
//   ["w", "v", "u"],
//   ["t", "s", "r"]
// ]

// const table = [
//   ["a", "b", "c", "d", "e", "f"]
// ]

// table[0][0] > table[1, 0] c > d
// table[1][0] > table[2, 0] d > g

// table[0][1] > table[1, 1] b > a
// table[1][1] > table[2, 1] a > h

// table[0][2] > table[2, 2] a > f
// table[1][2] > table[2, 2] f > i

const M = table[0].length // columns
const N = table.length    // rows

let removedColumns = 0

for (let col = 0; col < M; col++) {
  for (let row = 0; row < N - 1; row++) {
    console.log(`${row, col}:`,table[row][col], ">" ,`${row+1, col}:`,table[row+1][col])
    if (table[row][col] > table[row + 1][col]) {
      removedColumns++
      break
    }
  }
  console.log("~------------------------")
}
console.log(removedColumns)