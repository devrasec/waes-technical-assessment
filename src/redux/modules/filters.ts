import { FilterState, ToggleFilterAction, TOGGLE_FILTER } from '../reduxTypes';

const initialState: FilterState = {
  RED: true,
  YELLOW: true,
  GREEN: true,
};

export const toggleFilter = (
  color: import('../../types').Colors
): ToggleFilterAction => {
  return {
    type: TOGGLE_FILTER,
    payload: color,
  };
};

export default function reducer(
  state = initialState,
  action: ToggleFilterAction
): FilterState {
  switch (action.type) {
    case TOGGLE_FILTER:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };
    default:
      return state;
  }
}
