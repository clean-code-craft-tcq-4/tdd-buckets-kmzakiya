const rangeCounter = require('../range-counter');
const {expect} = require('chai');

describe('range counter', () => {
  it('should exist', () => {
    expect(rangeCounter.getRangeCounter).to.exist;
  });
  it('should return range pairs', () => {
    let mockData = [4, 5];
    expect(rangeCounter.getRangeCounter(mockData)).to.include({'4-5': 2});
    mockData = [3, 3, 5, 4, 10, 11, 12];
    expect(rangeCounter.getRangeCounter(mockData)).to.include({
      '3-5': 4,
      '10-12': 3,
    });
  });
  it('should return range pairs for single input', () => {
    const mockData = [4];
    expect(rangeCounter.getRangeCounter(mockData)).to.include({'4-4': 1});
  });
  it('should return range pairs for 2 value input', () => {
    const mockData = [4, 4];
    expect(rangeCounter.getRangeCounter(mockData)).to.include({'4-4': 2});
  });
});

describe('sort', () => {
  it('should exists', () => {
    expect(rangeCounter.sort).to.exist;
  });
  it('should return sorted array for the given input', () => {
    const mockData = [2, 5, 4, 9, 8];
    expect(rangeCounter.sort(mockData)).to.deep.equals([2, 4, 5, 8, 9]);
  });
});
describe('formatData', () => {
  it('should exist', () => {
    expect(rangeCounter.formatData).to.exist;
  });
  it('should format data', () => {
    expect(rangeCounter.formatData('2-3', 3)).to.equal('2-3, 3');
  });
});

describe('checkIfCountinous', () => {
  it('should return true for continous numbers', () => {
    expect(rangeCounter.checkIfCountinous(11, 10)).to.be.true;
  });
  it('should return true for same numbers', () => {
    expect(rangeCounter.checkIfCountinous(10, 10)).to.be.true;
  });
  it('should return false for non-continous numbers', () => {
    expect(rangeCounter.checkIfCountinous(12, 10)).to.be.false;
  });
});
