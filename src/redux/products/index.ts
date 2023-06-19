/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Store products reducer, slice and actions.
 */

import { createSlice } from '@reduxjs/toolkit';
import { ALL_PRODUCTS_CATEGORY } from '../../api/ constants/products';
import { Product } from '../../api/types/product';
import { getProductCategoriesThunk, getProductsThunk } from './thunk';

interface ProductState {
    isLoading: boolean;
    products: Product[];
    categories: string[];
    lastProductId?: number;
    hasLoadingProductsError: boolean;
}

const initialState: ProductState = {
    products: [],
    categories: [],
    isLoading: false,
    hasLoadingProductsError: false,
};

// Create favorites slice and define the extra-reducers for handling product updates from the server.
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductsThunk.fulfilled, (draft, { payload }) => {
            if (payload != null) {
                draft.products = draft.products.concat(payload);
                draft.lastProductId = payload[payload.length - 1].id;
            }
            draft.isLoading = false;
        });
        builder.addCase(getProductsThunk.pending, (draft) => {
            draft.isLoading = true;
            draft.hasLoadingProductsError = false;
        });
        builder.addCase(getProductsThunk.rejected, (draft) => {
            draft.isLoading = false;
            draft.hasLoadingProductsError = true;
        });
        builder.addCase(getProductCategoriesThunk.fulfilled, (draft, { payload }) => {
            draft.categories = [ALL_PRODUCTS_CATEGORY, ...(payload ?? [])];
        });
    },
});

export const productReducer = productSlice.reducer;
