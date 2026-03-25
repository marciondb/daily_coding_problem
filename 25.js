// This problem was asked by Google.

// Find the minimum number of coins required to make n cents.

// You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.

// For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.

function minCoins(n) {
  const coins = [25, 10, 5, 1]
  let count = 0

  for (const coin of coins) {
    const used = Math.floor(n / coin)
    count += used
    n -= used * coin
  }

  return count
}

console.log(minCoins(16))