export const indexOfFirstDiff = (str1: string, str2: string): number => {
  const maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    if (str1[i] !== str2[i]) return i;
  }

  return -1;
};
