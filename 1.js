// #2
// Good morning! Here's your coding interview problem for today.

// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the new array is the product 
// of all the numbers in the original array except the one at i.

// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input 
// was [3, 2, 1], the expected output would be [2, 3, 6].

// Follow-up: what if you can't use division?

function productExceptSelf(nums) {
    let n = nums.length;
    const result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}


console.log(productExceptSelf([1, 2, 3, 4, 5]));
console.log(productExceptSelf([3, 2, 1]));

function productExceptSelf_es6(nums) {
    return nums.map((_, i) =>
        nums.filter((_, j) => j !== i)
            .reduce((acc, cur) => acc * cur, 1)
    );
}


console.log(productExceptSelf_es6([1, 2, 3, 4, 5]));
console.log(productExceptSelf_es6([3, 2, 1]));
