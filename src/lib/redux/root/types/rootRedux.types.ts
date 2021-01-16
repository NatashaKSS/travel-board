import { Store, CombinedState, AnyAction } from 'redux';
import { rootStore } from '../rootStore';
import { rootReducer } from '../rootReducer';

// ==============================
// This file contains commonly used types for Redux state, action creators, thunks, etc.
//
// You can reuse the types here for convenience & consistency.
// Override the types in your own files if these are insufficient.
// ==============================

/**
 * The derived root state from the top-level, root reducer.
 *
 * The root reducer is defined in advance and extracted here so that
 * you do not need to manually update the root state type definition
 * when you change each slice reducer's interface.
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * The Redux store type
 */
export type RootStore = Store<CombinedState<RootState>, AnyAction>;

/**
 * The derived dispatch function type from the store.
 *
 * The dispatch type is defined in advance and extracted here so that
 * you do not need to manually update the type definition when using
 * in container components.
 */
export type RootDispatch = typeof rootStore.dispatch;
