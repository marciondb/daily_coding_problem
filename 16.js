// Good morning! Here's your coding interview problem for today.

// This problem was asked by Microsoft.

// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.

// Your algorithm should run in O(n) complexity.

function longestSequence(list) {
  if (list.length === 0) return 0

  const set = new Set(list)
  let longest = 0

  for (const num of set) {
    if (!set.has(num - 1)) { //its is the smallest of the possible sequence, I mean, started at the smallest
      let current = num
      let length = 1

      while (set.has(current + 1)) {
        current++
        length++
      }

      longest = Math.max(longest, length)
    }
  }

  return longest
}
// const toTest = [100, 4, 200, 1, 3, 2] // output 4
const toTest = [1, 2, 3, 4, 5] // output 5
// const toTest = [5, 2, 99, 3, 4, 1, 100] // output 5
// const toTest = [-2, -3, -1, 10, 11] // output 3
// const toTest = [10, 5, 12, 3, 55, 30, 4, 11, 2] // output 4
// const toTest = [1, 2, 2, 3] // output 3
// const toTest = [7] // output 1
// const toTest = [] // output 0
// const toTest = [20, 1, 3, 2, 4, 100] // output 4
// const toTest = [10, 30, 50] // output 1
console.log(longestSequence(toTest))
