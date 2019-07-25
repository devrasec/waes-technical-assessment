import {
  HighlightActionTypes,
  ADD,
  REMOVE,
  CHANGE_HIGHLIGHT,
  ChangeHighlightPayload,
} from '../reduxTypes';

type Highlight = import('../../types').Highlight;
type State = Array<Highlight>;

const initialState: State = [];

export const addHighlight = (newHighlight: Highlight): HighlightActionTypes => {
  return {
    type: ADD,
    payload: newHighlight,
  };
};

export const removeHighlight = (
  id: import('../../types').HighlightId
): HighlightActionTypes => {
  return {
    type: REMOVE,
    payload: id,
  };
};

export const changeHighlight = (
  indexOfFirstDiff: ChangeHighlightPayload['indexOfFirstDiff'],
  subLength: ChangeHighlightPayload['subLength']
): HighlightActionTypes => {
  return {
    type: CHANGE_HIGHLIGHT,
    payload: {
      indexOfFirstDiff,
      subLength,
    },
  };
};

export default function reducer(
  state = initialState,
  action: HighlightActionTypes
): State {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter(highlight => highlight.id !== action.payload);
    case CHANGE_HIGHLIGHT: {
      const { indexOfFirstDiff, subLength } = action.payload;
      const absoluteSubLength = Math.abs(subLength);

      return state
        .filter(highlight => {
          const {
            selectionRange: { start, end },
          } = highlight;

          return !(
            start >= indexOfFirstDiff &&
            end < indexOfFirstDiff + absoluteSubLength
          );
        })
        .map(highlight => {
          const start = highlight.selectionRange.start;
          const end = highlight.selectionRange.end;

          if (
            start === indexOfFirstDiff &&
            end > indexOfFirstDiff + absoluteSubLength
          ) {
            highlight.selectionRange.start = indexOfFirstDiff;
          }

          if (start > indexOfFirstDiff) {
            highlight.selectionRange.start += subLength;
          }

          if (end >= indexOfFirstDiff) {
            highlight.selectionRange.end += subLength;
          }

          return highlight;
        });
    }
    default:
      return state;
  }
}
