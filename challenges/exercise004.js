function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  var smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  var foundNames = [];
  let upperChar = char.toUpperCase();

  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0).toUpperCase() === upperChar) {
      foundNames.push(names[i]);
    }
  }
  return foundNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  var foundVerbs = [];
  var qualifier = "to ";

  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(0, 3) === qualifier) {
      foundVerbs.push(words[i]);
    }
  }
  return foundVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  var foundInts = [];

  for (let i = 0; i < nums.length; i++) {
    if (typeof (nums[i]) === "number" && nums[i] % 1 === 0) {
      foundInts.push(nums[i]);
    }
  }
  return foundInts;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  var foundCities = [];

  for (let i = 0; i < users.length; i++) {
    foundCities.push(users[i].data.city.displayName);
  }
  return foundCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  var sqrtNums = [];

  for (let i = 0; i < nums.length; i++) {
    let sqrt = Math.sqrt(nums[i]);
    sqrtNums.push(sqrt % 1 === 0 ? sqrt : parseFloat(sqrt.toFixed(2)));
  }
  return sqrtNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  var foundSentences = [];
  var re = new RegExp(str, 'gi')

  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].match(re)) {
      foundSentences.push(sentences[i]);
    }
  }
  return foundSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  var foundLongestSides = [];

  console.log(triangles.length);
  for (let i = 0; i < triangles.length; i++) {
    foundLongestSides.push(Math.max(...triangles[i]));
  }
  return foundLongestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
