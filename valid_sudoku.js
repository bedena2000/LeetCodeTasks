// Link to task - https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function (board) {
  const isSudokuValid = generateHashTable(board);
};

function generateHashTable(board) {
  const hashTableOfNumbers = {};
  for (let i = 0; i < board.length; i++) {
    for (let m = 0; m < board[i].length; m++) {
      const num = board[i][m];
      if (num === ".") continue;

      const rowKey = `row-${i}-${num}`;
      const colKey = `col-${m}-${num}`;
      const boxKey = `box-${Math.floor(i / 3)}-${Math.floor(m / 3)}-${num}`;

      if (
        hashTableOfNumbers[rowKey] ||
        hashTableOfNumbers[colKey] ||
        hashTableOfNumbers[boxKey]
      ) {
        return false;
      }

      hashTableOfNumbers[rowKey] = true;
      hashTableOfNumbers[colKey] = true;
      hashTableOfNumbers[boxKey] = true;
    }
  }

  return true;
}
