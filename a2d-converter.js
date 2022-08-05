function getMaxLimitInBit(bit) {
  return Math.pow(2, bit) - 2;
}

function checkIfInRange(input, maxBitValue = 4094) {
  return input <= maxBitValue;
}

function converNumbertA2D(value, maxAmpValue = 10, maxBitValue = 4094) {
  return Math.round(maxAmpValue * value / maxBitValue);
}

function converArraytA2D(input, maxAmpValue = 10, maxBitValue = 4094) {
  if (input.some((value) => !checkIfInRange(value))) {
    throw new Error('invalid input');
  }
  return input.map((value) => {
    return converNumbertA2D(value, maxAmpValue, maxBitValue);
  });
}

module.exports = {getMaxLimitInBit, checkIfInRange, converNumbertA2D, converArraytA2D};
