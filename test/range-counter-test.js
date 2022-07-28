const rangeCounter = require("../range-counter");
const { expect } = require("chai");

describe("range counter", () => {
  it("should exist", () => {
    expect(rangeCounter.getRangeCounter).to.exist;
  });
  it("should return range pairs", () => {
    let mockData = [4, 5];
    expect(rangeCounter.getRangeCounter(mockData)).to.include({'4-5':2});
    mockData = [3, 3, 5, 4, 10, 11, 12];
    expect(rangeCounter.getRangeCounter(mockData)).to.include({'3-5':4,'10-12':3});
  });
});
describe("sort", () => {
  it("should exists", () => {
    expect(rangeCounter.sort).to.exist;
  });
  it("should return sorted array for the given input", () => {
    const mockData = [2, 5, 4, 9, 8];
    expect(rangeCounter.sort(mockData)).to.deep.equals([2, 4, 5, 8, 9]);
  });
});
describe("formatData",()=>{
    it("should exist",()=>{
        expect(rangeCounter.formatData).to.exist;
    })
    it("should format data",()=>{
        expect(rangeCounter.formatData('2-3',3)).to.equal('2-3, 3');
    })
})
