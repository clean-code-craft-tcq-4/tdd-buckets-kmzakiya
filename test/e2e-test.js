const a2dConverter = require('../a2d-converter');
const rangeCounter = require('../range-counter');
const {expect} = require('chai');

describe('integration test', () => {
  it('should convert 12 bit values to ranges', () => {
    const inputs = [0, 1024, 256, 3500, 2000, 1500, 4094];
    expect(
        rangeCounter.getRangeCounter(
            a2dConverter.converArraytA2D(inputs, 10, 4094),
        ),
    ).to.deep.equal({'0-1': 2, '3-5': 3, '9-10': 2});
  });
  it('should throw error for invalid input', () => {
    const inputs = [0, 1024, 256, 3500, 2000, 1500, 4096];
    expect(() => {
      rangeCounter.getRangeCounter(
          a2dConverter.converArraytA2D(inputs, 10, 4094),
      );
    }).to.throw('invalid input');
  });
});
