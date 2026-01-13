// Good morning! Here's your coding interview problem for today.
// This problem was asked by Snapchat.
// Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.
// The input list is not necessarily ordered in any way.
// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
const list = [[1, 3], [5, 8], [6, 10], [20, 25]]

list.sort((a, b) => a[0] - b[0])
console.log(list)
const merged = []
let current = list[0]

for (let i = 1; i < list.length; i++) {
  const [start, end] = list[i]

  if (start <= current[1]) {
    current[1] = Math.max(current[1], end)
  } else {
    merged.push(current)
    current = list[i]
  }
}

merged.push(current)

console.log(merged)