export type Colors = 'RED' | 'YELLOW' | 'GREEN';

export type HighlightId = string;
export type Range = { start: number; end: number };
export type HighlightText = {
  id: HighlightId;
  text: string;
  color: Colors;
};
export type HighlightTextArray = Array<HighlightText>;

export interface Highlight {
  id: HighlightId;
  selectionRange: Range;
  color: Colors;
}
