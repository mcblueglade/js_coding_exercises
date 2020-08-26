/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof (n) !== "number" || (typeof (n) === "number" && n % 1 !== 0)) throw new Error("a number must be passed");

  return n.toString().split("").reduce((p, c) => p + parseInt(c), 0);
};

/** 
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 
 * the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
*/
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (typeof (start) !== "number" || (typeof (start) === "number" && start % 1 !== 0)) throw new Error("start number must be passed");
  if (typeof (end) !== "number" || (typeof (end) === "number" && end % 1 !== 0)) throw new Error("end number must be passed");

  const stepped = (step === undefined) ? 1 : step === 0 ? 1 : step;

  if (start > end && stepped > 0) throw new Error("start cannot be greater than end value");
  if (start < end && stepped < 0) throw new Error("start cannot be less than end value");

  if (stepped > 0) {
    return Array(Math.floor((end - start) / stepped) + 1).fill().map((_, idx) => start + (idx * stepped));
  }
  else {
    return Array(Math.abs(Math.floor((end - start) / stepped)) + 1).fill().map((_, idx) => start + (idx * stepped));
  }
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. 
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime 
 * for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as 
 * she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  const screenTimeToAlert = 100;

  return users.reduce((pUser, cUser) => {
    if (cUser.screenTime.filter(st => st.date === date)
      .reduce((a, b) => Object.values(b.usage).reduce((sum, n) => sum + n, 0), 0) > screenTimeToAlert) {
      pUser.push(cUser.username);
    }
    return pUser;
  }, [])
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a 
 * number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) 
 * represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  //Check hexStr only contains letters [A-F] and numbers and first character must be "#"
  if (hexStr.match(/^#[0-9A-F]{6}$/i) === null) throw new Error("A valid hexStr is required");

  return hexStr.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    , (m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
    .reduce((p, c, i, arr) =>
      p = i === arr.length - 1 ? p + c + ")" : p + c + ","
      , "rgb(");
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently 
 * no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (typeof (board) !== "object") throw new Error("board must be an object");
  if (board.length !== 3) throw new Error("board not of correct size");

  // Check if we have a board with 3 rows and each that row must have 3 elements
  if (!board.reduce((p, c) => p && c.length !== 3 ? false : p, true)) throw new Error("board row length is not correct size");

  const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const cellCoordinates = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]];

  const getArrayCoordinates = num => {
    return cellCoordinates[num];
  }

  return winningLines.reduce((p, c) =>
    p === null ?
      c.reduce((pValue, currCell, i) => {

        // Having already checked the value first value in the line, 
        // any subsequent values with a "null" renders this line from being a winner, 
        // so just return
        if (pValue == null && i > 0) { return pValue; }

        let coordinates = getArrayCoordinates(currCell);
        let cellValue = board[coordinates[0]][coordinates[1]];

        // If the previous value does not match the current value 
        // and this is not the first element in the line return null, 
        // otherwise return the cell value.
        return pValue = (cellValue !== pValue && i !== 0) ? null : cellValue;
      }, null)
      : p
    , null);
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
