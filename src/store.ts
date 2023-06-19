/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { AnyAction, combineReducers, configureStore, isRejected, Middleware, ThunkDispatch } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { persistReducer, persistStore } from 'redux-persist';
import { createBrowserHistory } from 'history';
import { setAutoFreeze } from 'immer';
import storage from 'redux-persist/lib/storage';
import { productReducer } from './redux/products';
import { cartReducer } from './redux/cart';

// Fix for type verification on dispatched thunks using useDispatch from react-redux.
import type {} from 'redux-thunk/extend-redux';
import { favoritesReducer } from './redux/favourites';
import { messageReducer } from './redux/message';

const customMiddleware: Middleware = () => (next) => (action: AnyAction) => {
    // Handle rejected thunks
    if (isRejected(action)) {
        if (action.type.endsWith('/executeQuery/rejected') && action.meta.rejectedWithValue === false) {
            // Redux-Query rejects an action when there is a race condition with another action with the exact same payload
            // This prevents duplicate requests but yields a rejectedWithValue -> false which we can just ignore
        } else {
            throw new Error(`Error in async thunk: ${action.error.message}`);
        }
    }

    return next(action);
};

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
});

const cartPersistConfig = {
    key: 'cart',
    storage,
};

const favoritesPersistConfig = {
    key: 'favorites',
    storage,
};

/**
 * Combine all sub-reducers into one major reducer for the redux store.
 * It has to be defined here in this store file to avoid circular dependencies
 * as it will have to be imported.
 */
const rootReducer = combineReducers({
    // Router
    router: routerReducer,
    product: productReducer,
    message: messageReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Triggers on all kinds of Map & Set store operations.
            immutableCheck: false, // Avoid crushing the app with complex selectors use.
        }).concat([routerMiddleware, customMiddleware]),
    devTools: true, // use this to disable in production; process.env.NODE_ENV !== 'production'
});

export const history = createReduxHistory(store);

// Create the store persister which stores it in local storage by default
export const persistor = persistStore(store);

// Type of the store state.
export type RootState = ReturnType<typeof store.getState>;

// Disable auto freeze
setAutoFreeze(false);
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
