function sort(data) {
  return data.sort((a, b) => a - b);
}
function checkIfCountinous(current, previous) {
  return [0, 1].includes(current - previous);
}
function getRangeCounter(data) {
  data = sort(data);
  let firstElement = data[0];
  let previous = data[0];
  let counter = 1;
  const output = {};
  for (let i = 1; i < data.length; i++) {
    if (checkIfCountinous(data[i], previous)) {
      previous = data[i];
      counter++;
    } else {
      output[`${firstElement}-${previous}`] = counter;
      firstElement = data[i];
      previous = data[i];
      counter = 1;
    }
  }
  output[`${firstElement}-${previous}`] = counter;
  return output;
}

function formatData(key, value) {
  return `${key}, ${value}`;
}

function printRangeCounter() {
  const data = getRangeCounter([2, 2, 4, 3, 6, 8, 7, 9, 10]);
  for (const [key, value] of Object.entries(data)) {
    console.log(formatData(key, value));
  }
}

printRangeCounter();

module.exports = {
  sort,
  getRangeCounter,
  formatData,
  checkIfCountinous,
};
