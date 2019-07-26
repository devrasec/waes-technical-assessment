import { areRangesEquals } from '../areRangesEquals';

type Range = import('../../types').Range;

const range1: Range = {
  start: 0,
  end: 10,
};

const range2: Range = {
  start: 5,
  end: 10,
};

describe('Asserting equality between two ranges', () => {
  test('should return "true" if the ranges are equals', () => {
    expect(areRangesEquals(range1, range1)).toBe(true);
  });

  test('should return "false" if the ranges are not equals', () => {
    expect(areRangesEquals(range1, range2)).toBe(false);
  });
});
