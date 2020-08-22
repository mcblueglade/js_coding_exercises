function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  var smallNums = [];

  nums.forEach(element => {
    if (element < 1) {
      smallNums.push(element);
    }
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  var foundNames = [];
  let upperChar = char.toUpperCase();

  names.forEach(element => {
    if (element.charAt(0).toUpperCase() === upperChar) {
      foundNames.push(element);
    }
  });
  return foundNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  var foundVerbs = [];
  var qualifier = "to ";

  words.forEach(element => {
    if (element.slice(0, 3) === qualifier) {
      foundVerbs.push(element);
    }
  });
  return foundVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  var foundInts = [];

  nums.forEach(element => {
    if (typeof (element) === "number" && element % 1 === 0) {
      foundInts.push(element);
    }
  });
  return foundInts;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  var foundCities = [];

  users.forEach(element => {
    foundCities.push(element.data.city.displayName);
  });
  return foundCities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  var sqrtNums = [];

  nums.forEach(element => {
    let sqrt = Math.sqrt(element);
    sqrtNums.push(sqrt % 1 === 0 ? sqrt : parseFloat(sqrt.toFixed(2)));
  });
  return sqrtNums;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  var foundSentences = [];
  var re = new RegExp(str, 'gi')

  sentences.forEach(element => {
    if (element.match(re)) {
      foundSentences.push(element);
    }
  });
  return foundSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  var foundLongestSides = [];

  triangles.forEach(element => {
    foundLongestSides.push(Math.max(...element));
  });
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
