/* 
Interview question from Slalom Consulting, LLC
Given a 3x3 Two Dimensional array representing a tic tac toe board,
return whether or not there is a winner.
A winner is when there is 3 "x" values or 3 "o" values in a row,
column, or diagonal.
*/

const grid1 = [
    ["x", "x", ""],
    ["x", "x", "o"],
    ["", "o", ""],
];
const expected1 = false;

const grid2 = [
    ["", "o", "x"],
    ["o", "x", ""],
    ["x", "", ""],
];
const expected2 = true;

const grid3 = [
    ["x", "", "o"],
    ["x", "x", "o"],
    ["", "", "o"],
];
const expected3 = true;

const grid4 = [
    ["", "", ""],
    ["o", "o", ""],
    ["x", "x", "x"],
];
const expected4 = true;

/**
 * Determines if there is a tic tac toe winner based on three in a row for "x"
 * or "o".
 * Time: O(?).
 * Space: O(?).
 * @param {Array<Array<string>>} grid
 * @returns {boolean} Whether there is a winner or not.
 */

function checkTicTacToeWinner(grid) {
    if (grid[0][0] == grid[0][1] && grid[0][1] == grid[0][2]) {
        return true
    }
    else if (grid[0][0] == grid[1][0] && grid[1][0] == grid[2][0]) {
        return true
    }
    else if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) {
        return true
    }
    else if (grid[1][0] == grid[1][1] && grid[1][1] == grid[1][2]) {
        return true
    }
    else if (grid[2][0] == grid[1][1] && grid[1][1] == grid[0][2]) {
        return true
    }
    else if (grid[2][0] == grid[2][1] && grid[2][1] == grid[2][2]) {
        return true
    }
    else if (grid[0][1] == grid[1][1] && grid[1][1] == grid[2][1]) {
        return true
    }
    else if (grid[0][2] == grid[1][2] && grid[1][2] == grid[2][2]) {
        return true
    }
    else {
        return false
    }
}

console.log(checkTicTacToeWinner(grid4));
/*****************************************************************************/