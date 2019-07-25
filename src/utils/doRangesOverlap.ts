type Range = import('../types').Range;

// Check if two Ranges overlap.
export const doRangesOverlap = (range1: Range, range2: Range): boolean => {
  return (
    (range1.end > range2.start && range1.end <= range2.end) ||
    (range1.start >= range2.start && range1.start < range2.end) ||
    (range1.start <= range2.start && range1.end > range2.end)
  );
};
