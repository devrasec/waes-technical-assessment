import { indexOfFirstDiff } from '../indexOfFirstDiff';

const str1 = 'Netherlands is a wonderful country';
const str2 = 'Netherlands is a beautiful country';

describe.each([[str1, str2, 17], [str1, str1, -1]])(
  "indexOfFirstDiff('%s', '%s')",
  (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(indexOfFirstDiff(a as string, b as string)).toBe(expected);
    });
  }
);
