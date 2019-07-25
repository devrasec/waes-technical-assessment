import { CHANGE_TEXT, ChangeTextAction } from '../reduxTypes';

const initialState =
  "If you don't fail at least 90 percent of the time, you're not aiming high enough. Alan Kay.";

export const changeText = (text: string): ChangeTextAction => {
  return {
    type: CHANGE_TEXT,
    payload: text,
  };
};

export default function reducer(
  state = initialState,
  action: ChangeTextAction
): string {
  switch (action.type) {
    case CHANGE_TEXT:
      return action.payload;
    default:
      return state;
  }
}
