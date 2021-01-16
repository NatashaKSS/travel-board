import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { RootStore } from './types/rootRedux.types';
import { rootReducer } from './rootReducer';

/**
 * This module creates the store singleton with any configured enhancers, middlewares and the root reducer.
 */

let store: RootStore | null = null;

export const createRootStore = (): RootStore => {
  if (store === null) {
    const composeEnhancers =
      (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  }
  return store;
};

export const rootStore = createRootStore();
