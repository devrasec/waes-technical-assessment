import { SetHighlightColorAction, SET_HIGHLIGHT_COLOR } from '../reduxTypes';

type Colors = import('../../types').Colors;

const initialState: Colors = 'RED';

export function setHighlightColor(color: Colors): SetHighlightColorAction {
  return {
    type: SET_HIGHLIGHT_COLOR,
    payload: color,
  };
}

export default function reducer(
  state = initialState,
  action: SetHighlightColorAction
): typeof initialState {
  switch (action.type) {
    case SET_HIGHLIGHT_COLOR:
      return action.payload;
    default:
      return state;
  }
}
