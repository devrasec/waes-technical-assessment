import { createSelector } from 'reselect';

type AppState = import('./modules').AppState;
type HighlightsArray = import('../types').HighlightTextArray;

export const getHighlights = (state: AppState) => state.highlights;
export const getFilters = (state: AppState) => state.filters;
export const getText = (state: AppState) => state.text;
export const getSortedHighlights = createSelector(
  getHighlights,
  highlights => {
    return highlights.sort(
      (a, b) => a.selectionRange.start - b.selectionRange.start
    );
  }
);

const extractHighlightText = (
  highlight: import('../types').Highlight,
  text: ReturnType<typeof getText>
): import('../types').HighlightText => {
  return {
    id: highlight.id,
    text: text.slice(
      highlight.selectionRange.start,
      highlight.selectionRange.end
    ),
    color: highlight.color,
  };
};

export const getFilteredHighlights = createSelector(
  getSortedHighlights,
  getFilters,
  getText,
  (highlights, filters, text): HighlightsArray => {
    return highlights.reduce((acc: HighlightsArray, highlight) => {
      if (filters.RED && highlight.color === 'RED') {
        acc.push(extractHighlightText(highlight, text));
      } else if (filters.YELLOW && highlight.color === 'YELLOW') {
        acc.push(extractHighlightText(highlight, text));
      } else if (filters.GREEN && highlight.color === 'GREEN') {
        acc.push(extractHighlightText(highlight, text));
      }

      return acc;
    }, []);
  }
);
