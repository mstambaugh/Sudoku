import { Sudoku } from '../src/sudoku.js';

describe('Sudoku', function() {

  // it('should input numbers', function() {
  //   var testInput = new Sudoku()
  //   expect(testInput.inputNumber()).toEqual([2]);
  // });



  it('numbers do repeat', function() {
    var testPlayer = new Sudoku();
    expect(testPlayer.checkRepeat()).toEqual(true);
  });
});
