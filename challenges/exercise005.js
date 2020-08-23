const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const i = nums.indexOf(n);
  return (i === -1 || i + 1 >= nums.length) ? null : nums[i + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  var dict = { 0: 0 };
  [...str].forEach(c => {
    c in dict ? dict[c] += 1 : dict[c] = 1;
  });
  return dict;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join("").replace(/^0+/, ''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.reduce((p, c) => p + eval(c.join("+")), 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
