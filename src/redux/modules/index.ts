import { combineReducers } from 'redux';
import highlights from './highlights';
import highlightColor from './highlightColor';
import text from './text';
import filters from './filters';

const rootReducer = combineReducers({
  highlightColor,
  highlights,
  text,
  filters,
});

// Shape type of the state object.
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
