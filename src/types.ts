export type Colors = 'RED' | 'YELLOW' | 'GREEN';

export type HighlightId = string;
export type Range = { start: number; end: number };
export interface Highlight {
  id: HighlightId;
  selectionRange: Range;
  color: Colors;
}
