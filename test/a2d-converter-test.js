const a2dConverter = require('../a2d-converter');
const {expect} = require('chai');

describe('getMaxLimitInBit', () => {
  it('should convert bit tp max limit', () => {
    expect(a2dConverter.getMaxLimitInBit(12)).to.equal(4094);
  });
});

describe('check if in range', () => {
  const MAX_LIMIT_BIT = a2dConverter.getMaxLimitInBit(12);
  it('should exist', () => {
    expect(a2dConverter.checkIfInRange).to.exist;
  });
  it('should return true for value less than max limit', () => {
    expect(a2dConverter.checkIfInRange(0, MAX_LIMIT_BIT)).to.true;
  });
  it('should return true for value equals max limit', () => {
    expect(a2dConverter.checkIfInRange(4094, MAX_LIMIT_BIT)).to.true;
  });
  it('should return true for value greater than max limit', () => {
    expect(a2dConverter.checkIfInRange(4095, MAX_LIMIT_BIT)).to.false;
  });
});

describe('convert number A2D', () => {
  const MAX_LIMIT_AMP = 10;
  const MAX_LIMIT_BIT = a2dConverter.getMaxLimitInBit(12);
  it('should exist', () => {
    expect(a2dConverter.converNumbertA2D).to.exist;
  });

  it('should convert 12 bit integer 0 to 0 Amp', () => {
    expect(a2dConverter.converNumbertA2D(0, MAX_LIMIT_AMP, MAX_LIMIT_BIT)).to.equal(0);
  });

  it('should convert 12 bit integer 1146 to 3 Amp', () => {
    expect(a2dConverter.converNumbertA2D(1146, MAX_LIMIT_AMP, MAX_LIMIT_BIT)).to.equal(3);
  });

  it('should convert 12 bit integer 4094 to 10 Amp', () => {
    expect(a2dConverter.converNumbertA2D(4094, MAX_LIMIT_AMP, MAX_LIMIT_BIT)).to.equal(10);
  });

  it('should convert 12 bit integer to Amp by default', () => {
    expect(a2dConverter.converNumbertA2D(4094)).to.equal(10);
  });
});

describe('convert array A2D', () => {
  const MAX_LIMIT_AMP = 10;
  const MAX_LIMIT_BIT = a2dConverter.getMaxLimitInBit(12);
  it('should convert empty array to empty', () => {
    expect(a2dConverter.converArraytA2D([], MAX_LIMIT_AMP, MAX_LIMIT_BIT)).to.deep.equal([]);
  });
  it('should convert 12 bit integer array to Amps', () => {
    expect(
        a2dConverter.converArraytA2D(
            [0, 1146, 4094],
            MAX_LIMIT_AMP,
            MAX_LIMIT_BIT,
        ),
    ).to.deep.equal([0, 3, 10]);
  });
  it('should convert 12 bit integer array to Amps by default', () => {
    expect(
        a2dConverter.converArraytA2D(
            [0, 1146, 4094],
        ),
    ).to.deep.equal([0, 3, 10]);
  });
  it('should throw error for out of range values', () => {
    expect(() => {
      a2dConverter.converArraytA2D(
          [0, 4095, 4094],
          MAX_LIMIT_AMP,
          MAX_LIMIT_BIT,
      );
    },
    ).to.throw('invalid input');
  });
});

