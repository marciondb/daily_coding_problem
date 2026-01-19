// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.
// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// const gridTobeCounted = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]

const gridTobeCounted = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

/**
 * @param grid {[character]}
 * @returns number
 */
const numOfIslands = (grid) => {
  let numOfIslandsCounter = 0;
  const m = grid.length
  const n = grid[0].length

  const dfs = (i, j) => {

    if( i < 0 || i >= m || j < 0  || j >= n || grid[i][j] === "0") {
      return;
    } else {
      grid[i][j] = "0"
      dfs(i, j + 1)
      dfs(i + 1, j)
      dfs(i - 1, j)
      dfs(i, j - 1)
    }
  }

  for(let i=0; i < grid.length; i++){
    for(let j=0; j < grid[i].length; j++){
      if(grid[i][j] === "1"){
        numOfIslandsCounter++        
        dfs(i, j)

      }
    }
  }

  return numOfIslandsCounter
}

console.log(numOfIslands(gridTobeCounted))


// /**
//  * @param {string[][]} grid
//  * @return {number}
//  */
// const numIslands = (grid) => {
//   if (!grid || grid.length === 0) return 0;

//   const m = grid.length;
//   const n = grid[0].length;

//   const visited = Array.from({ length: m }, () => Array(n).fill(false));
//   let count = 0;

//   const directions = [
//     [0, 1],   // right
//     [1, 0],   // down
//     [-1, 0],  // up
//     [0, -1],  // left
//   ];

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === "1" && !visited[i][j]) {
//         count++;

//         // começa DFS iterativo
//         const stack = [[i, j]];
//         visited[i][j] = true;

//         while (stack.length > 0) {
//           const [x, y] = stack.pop();

//           for (const [dx, dy] of directions) {
//             const nx = x + dx;
//             const ny = y + dy;

//             if (
//               nx >= 0 && nx < m &&
//               ny >= 0 && ny < n &&
//               grid[nx][ny] === "1" &&
//               !visited[nx][ny]
//             ) {
//               visited[nx][ny] = true;
//               stack.push([nx, ny]);
//             }
//           }
//         }
//       }
//     }
//   }

//   return count;
// };
