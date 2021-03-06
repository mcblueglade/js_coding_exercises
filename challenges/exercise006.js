/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("an Array must be passed");

  return arr.reduce((prevValue, currValue) =>
    currValue % 3 === 0 || currValue % 5 === 0 ? prevValue += currValue : prevValue
    , 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether 
 * it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof (str) !== "string") throw new Error("a String must be passed");

  if (str.length === 0) return false;

  return [...str].reduce((p, c) =>
    p === true ? p && ['C', 'G', 'T', 'A'].includes(c.toUpperCase()) : p
    , true);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. 
 * In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA 
 * string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof (str) !== "string") throw new Error("a String must be passed");

  if (str.length === 0) return "";

  const dnaMappings = [["T", "A"], ["A", "T"], ["C", "G"], ["G", "C"]];

  // Mapping => T <-> A, C <-> G
  return [...str].map(c => {
    return dnaMappings.reduce((pLetter, cLetter) =>
      pLetter === "" && cLetter[0] === c.toUpperCase() ? cLetter[1] : pLetter
      , "");
  }).reduce((p, c) => p + c, "");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. 
 * A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof (n) !== "number" || (typeof (n) === "number" && n % 1 !== 0)) throw new Error("a number must be passed");

  return ![...Array(n).keys()].slice(2).map(k => !(n % k)).includes(true) && ![0, 1].includes(n);
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" 
 * the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (typeof (n) !== "number" || (typeof (n) === "number" && n % 1 !== 0)) throw new Error("a number must be passed");
  if (fill === undefined) throw new Error("fill is required");

  return [...Array(n)].map(() => [...Array(n)].map(() => fill));
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. 
 * The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  if (staff.length === 0) { return false; }

  const staffRequiredtoBeCovered = 3;

  return staff.reduce((pUser, cUser) =>
    pUser +
    cUser.rota
      .reduce((dayCount, currDay) => dayCount < 1 ? currDay.toLowerCase() === day.toLowerCase() ? 1 : 0 : dayCount, 0)
    , 0) >= staffRequiredtoBeCovered;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
