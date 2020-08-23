const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const i = nums.indexOf(n);
  return (i === -1 || i + 1 >= nums.length) ? null : nums[i + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  return [...str].reduce((p, c) => { p.hasOwnProperty(c) ? p[c] += 1 : p[c] = 1; return p; }, { 0: 0 });
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join("").replace(/^0+/, ''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.reduce((p, c) => p + c.reduce((a, b) => a + b, 0), 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.map((x, i) => i == 0 ? arr.splice(-1, 1, x)[0] : x);
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack).reduce((p, c) => p || (typeof (c) === "string" && c.toLowerCase().includes(searchTerm.toLowerCase())), false);
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  return str.replace(/[^\w\s]/g, "").toLowerCase().split(" ").reduce((count, word) => { count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1; return count; }, {});
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
