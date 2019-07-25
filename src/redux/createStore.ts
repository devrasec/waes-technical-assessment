import { createStore as createReduxStore, Store } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './modules';

export default function createStore() {
  const store: Store = createReduxStore(rootReducer, devToolsEnhancer({}));

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./modules', () => store.replaceReducer(rootReducer));
  }
  return store;
}
