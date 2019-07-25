type Range = import('../types').Range;

export const areRangesEquals = (range1: Range, range2: Range): boolean => {
  return range1.start === range2.start && range1.end === range2.end;
};
