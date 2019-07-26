import { doRangesOverlap } from '../doRangesOverlap';

type Range = import('../../types').Range;

const range1: Range = {
  start: 0,
  end: 10,
};

const range2: Range = {
  start: 5,
  end: 10,
};

const range3: Range = {
  start: 11,
  end: 20,
};

describe('Asserting if two ranges overlap each other', () => {
  test('should return "true" if the ranges overlap', () => {
    expect(doRangesOverlap(range1, range2)).toBe(true);
  });

  test('should return "false" if the ranges do not overlap', () => {
    expect(doRangesOverlap(range1, range3)).toBe(false);
  });
});
