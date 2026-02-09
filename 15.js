// Good morning! Here's your coding interview problem for today.

// This problem was asked by Coursera.

// Given a 2D board of characters and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.
// The same letter cell may not be used more than once.

// For example, given the following board:

// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// exists(board, "ABCCED") returns true, exists(board, "SEE") returns true, exists(board, "ABCB") returns false.

//O(m * n * 4^L)
// L is the lenght of the word and 4 is the number of calling of bfs

function exists(board, word) {
  const m = board.length;
  const n = board[0].length;

  function dfs(i, j, index) {
    if (index === word.length) return true;

    if (
      i < 0 || i >= m ||
      j < 0 || j >= n ||
      board[i][j] !== word[index]
    ) {
      return false;
    }

    const temp = board[i][j];
    board[i][j] = '#'; // mark visited

    const found =
      dfs(i + 1, j, index + 1) ||
      dfs(i - 1, j, index + 1) ||
      dfs(i, j + 1, index + 1) ||
      dfs(i, j - 1, index + 1);

    board[i][j] = temp; // backtrack
    return found;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
}
