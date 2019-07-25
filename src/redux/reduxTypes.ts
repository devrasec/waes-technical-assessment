export const ADD = 'text-highlighter/highlights/ADD';
export const REMOVE = 'text-highlighter/highlights/REMOVE';
export const CHANGE_HIGHLIGHT = 'text-highlighter/highlights/CHANGE';
export const SET_HIGHLIGHT_COLOR = 'text-highlighter/highlight-color/SET';
export const CHANGE_TEXT = 'text-highlighter/text/CHANGE';
export const TOGGLE_FILTER = 'text-highlighter/filters/TOGGLE';

type Colors = import('../types').Colors;

export type ChangeHighlightPayload = {
  indexOfFirstDiff: number;
  subLength: number;
};

export interface AddHighlightAction {
  type: typeof ADD;
  payload: import('../types').Highlight;
}

export interface RemoveHighlightAction {
  type: typeof REMOVE;
  payload: import('../types').HighlightId;
}

export interface ChangeHighlightAction {
  type: typeof CHANGE_HIGHLIGHT;
  payload: ChangeHighlightPayload;
}

export type HighlightActionTypes =
  | AddHighlightAction
  | RemoveHighlightAction
  | ChangeHighlightAction;

export interface ChangeTextAction {
  type: typeof CHANGE_TEXT;
  payload: string;
}

export type FilterState = import('../types').Filters;

export interface ToggleFilterAction {
  type: typeof TOGGLE_FILTER;
  payload: Colors;
}

export interface SetHighlightColorAction {
  type: typeof SET_HIGHLIGHT_COLOR;
  payload: Colors;
}
