var tvRemote = function (word) {
  const map = [
    ["a", "b", "c", "d", "e", "1", "2", "3"],
    ["f", "g", "h", "i", "j", "4", "5", "6"],
    ["k", "l", "m", "n", "o", "7", "8", "9"],
    ["p", "q", "r", "s", "t", ".", "@", "0"],
    ["u", "v", "w", "x", "y", "z", "-", "/"],
  ];

  let firstLetter = "a";
  const findLocationOfLetter = (letter) => {
    return map.reduce(
      (pCoordA, r, i) =>
        pCoordA === null
          ? r.reduce(
              (pCoordB, c, j) =>
                pCoordB === null
                  ? (pCoordB =
                      pCoordB === null ? (c === letter ? [i, j] : null) : null)
                  : pCoordB,
              null
            )
          : pCoordA,
      null
    );
  };

  let firstCoords = findLocationOfLetter(firstLetter);

  return word.split("").reduce((totalClicks, c) => {
    let secondCoords = findLocationOfLetter(c);

    totalClicks +=
      Math.abs(secondCoords[0] - firstCoords[0]) +
      Math.abs(secondCoords[1] - firstCoords[1]) +
      1;

    firstCoords = secondCoords;

    return totalClicks;
  }, 0);
};

module.exports = {
  tvRemote,
};
