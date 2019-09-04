export function Sudoku(){
  this.board = ("");
}


// Sudoku.prototype.inputNumber = function() {
//   this.board.push(2);
//   return this.board
// }

// Sudoku.prototype.checkRepeat = function() {
//   for (var i=0; i<this.board.length; i++) {
//     if (this.board.indexOf(this.board[i] !== this.board.lastIndexOf(this.board[i]))) {
//       return true;
//     }
//   }
//   return false;
// };

Sudoku.prototype.checkRepeat = function() {
  this.board = ("1","2")
  var patt = new RegExp ("1");
  var res = patt.test(this.board);
  return res
}

// The RegExp constructor creates a regular expression object for matching text with a pattern.

// "1", "2", "3", "4", "5", "6", "7", "8", "9"
