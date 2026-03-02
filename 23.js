// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given a sorted list of integers, square the elements and give the output in sorted order.

// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

function sortedSquares(nums) {
  const n = nums.length
  const result = new Array(n)

  let left = 0
  let right = n - 1

  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = nums[left] * nums[left]
      left++
    } else {
      result[i] = nums[right] * nums[right]
      right--
    }
  }
  console.log(result)
  return result

}

sortedSquares([-9, -2, 0, 2, 3])