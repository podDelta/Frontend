import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk)
      // devToolsExtension()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer.js', () => {
      const nextRootReducer = require('../reducers/rootReducer.js').default
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
