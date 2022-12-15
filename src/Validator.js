const validateReadThreeNums = (threeNums) => {
  if (isNaN(threeNums)) return false;
  if (threeNums.length !== 3) return false;
  if (threeNums.includes("0")) return false;
  if ([...new Set(threeNums)].join("").length !== 3) return false;
  return true;
};

module.exports = { validateReadThreeNums };
