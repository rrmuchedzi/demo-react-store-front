/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Store favorites reducer, slice and actions
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartState {
    productIds: number[];
}

const initialState: ICartState = {
    productIds: [],
};

// Create favorites slice and define the reducers for adding/deleting favorites entries.
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addProductToFavorites(draft, { payload }: PayloadAction<number>) {
            if (!draft.productIds.includes(payload)) {
                draft.productIds.push(payload);
            }
        },
        deleteProductFromFavorites(draft, { payload }: PayloadAction<number>) {
            const productIdIndex = draft.productIds.findIndex((favorite) => favorite === payload);
            if (productIdIndex !== -1) {
                draft.productIds.splice(productIdIndex, 1);
            }
        },
    },
});

export const favoritesReducer = favoritesSlice.reducer;

export const { addProductToFavorites, deleteProductFromFavorites } = favoritesSlice.actions;
